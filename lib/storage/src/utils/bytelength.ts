const toBuffer = (data: any) => {
  return typeof Buffer.from === "function" && Buffer.from !== Uint8Array.from ? Buffer.from(data) : new Buffer(data);
};

export const byteLength = (input: any) => {
  if (input === null || input === undefined) return 0;
  if (typeof input === "string") input = toBuffer(input);

  if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.length === "number") {
    return input.length;
  } else if (typeof input.size === "number") {
    return input.size;
  } else if (typeof input.path === "string") {
    return require("fs").lstatSync(input.path).size;
  }
  return undefined;
};
