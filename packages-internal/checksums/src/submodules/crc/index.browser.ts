const no = Symbol.for("node-only");

export { Crc32cJs, Crc32cJs as Crc32c } from "./crc32c/Crc32cJs";
export const Crc32cNode = no;

export { Crc64NvmeJs, Crc64NvmeJs as Crc64Nvme } from "./crc64-nvme/Crc64NvmeJs";
export { crc64NvmeCrtContainer } from "./crc64-nvme/crc64-nvme-crt-container";

export { Crc32, Crc32Js, Crc32Node } from "@smithy/core/checksum";
