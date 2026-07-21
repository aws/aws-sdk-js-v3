/**
 * No-op — the latest AWS SDK already uses native zlib.crc32 on supported Node versions.
 */
export async function installNativeCrc32(): Promise<{
  patched: boolean;
  alreadyNative?: boolean;
  reason?: string;
}> {
  return { patched: false, alreadyNative: true, reason: "no-op: latest SDK uses native zlib.crc32" };
}
