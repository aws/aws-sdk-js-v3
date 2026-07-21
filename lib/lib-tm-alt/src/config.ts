// @ts-nocheck
/**
 * Configuration helpers: part computation and size parsing.
 */

const MIB = 1024 * 1024;
const GIB = 1024 * MIB;

/**
 * Parse a human size like "8MiB", "1GB", "512kb", or a raw byte count.
 * Uses binary units (KiB/MiB/GiB) and treats KB/MB/GB as binary too.
 */
export function parseSize(v: number | string): number {
  if (typeof v === "number") {
    return v;
  }
  const m = String(v)
    .trim()
    .match(/^(\d+(?:\.\d+)?)\s*([kmgt]?i?b?)?$/i);
  if (!m) {
    throw new Error(`Invalid size: ${v}`);
  }
  const n = parseFloat(m[1]);
  const unit = (m[2] || "").toLowerCase();
  const mult: Record<string, number> = {
    "": 1,
    b: 1,
    k: 1024,
    kb: 1024,
    kib: 1024,
    m: MIB,
    mb: MIB,
    mib: MIB,
    g: GIB,
    gb: GIB,
    gib: GIB,
    t: 1024 * GIB,
    tb: 1024 * GIB,
    tib: 1024 * GIB,
  };
  if (mult[unit] == null) {
    throw new Error(`Invalid size unit in: ${v}`);
  }
  return Math.round(n * mult[unit]);
}

export interface PartDescriptor {
  partNumber: number;
  start: number;
  end: number;
  size: number;
}

/**
 * Build the part list for an upload of `totalSize` bytes using `partSize`.
 */
export function computeParts(totalSize: number, partSize: number): PartDescriptor[] {
  const parts: PartDescriptor[] = [];
  let start = 0;
  let partNumber = 1;
  while (start < totalSize) {
    const end = Math.min(start + partSize, totalSize);
    parts.push({ partNumber, start, end, size: end - start });
    start = end;
    ++partNumber;
  }
  // A zero-byte object still needs one (empty) part.
  if (parts.length === 0) {
    parts.push({ partNumber: 1, start: 0, end: 0, size: 0 });
  }
  return parts;
}

/**
 * Resolve a friendly cipher name to an OpenSSL cipher string.
 */
export function resolveCiphers(name: string | null | undefined): string | null {
  if (!name || String(name).toLowerCase() === "default") {
    return null;
  }
  switch (String(name).toLowerCase()) {
    case "aes128":
      return "TLS_AES_128_GCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256";
    case "aes256":
      return "TLS_AES_256_GCM_SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384";
    case "chacha20":
      return "TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305";
    default:
      return String(name); // raw OpenSSL cipher string
  }
}

/** Format bytes as a human-readable string. */
export function formatBytes(n: number): string {
  if (n >= GIB) {
    return `${(n / GIB).toFixed(2)} GiB`;
  }
  if (n >= MIB) {
    return `${(n / MIB).toFixed(2)} MiB`;
  }
  if (n >= 1024) {
    return `${(n / 1024).toFixed(2)} KiB`;
  }
  return `${n} B`;
}

/** Compute throughput in Gbps given bytes and milliseconds. */
export function throughput(bytes: number, ms: number): number {
  return ms > 0 ? (bytes * 8) / (ms * 1e6) : 0;
}
