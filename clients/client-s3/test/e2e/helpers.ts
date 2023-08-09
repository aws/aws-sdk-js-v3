export const createBuffer = (size: string) => {
  const KB_REGEX = /(\d+)KB/;
  const MB_REGEX = /(\d+)MB/;
  if (KB_REGEX.test(size)) {
    return new Uint8Array(parseInt(size.match(KB_REGEX)![1]) * 1024).fill(0x78);
  } else if (MB_REGEX.test(size)) {
    return new Uint8Array(parseInt(size.match(MB_REGEX)![1]) * 1024 * 1024).fill(0x78);
  } else {
    return new Uint8Array(1024 * 1024).fill(0x78);
  }
};
