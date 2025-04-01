import { crc64NvmeCrtContainer } from "@aws-sdk/middleware-flexible-checksums";

import { CrtCrc64Nvme } from "./CrtCrc64Nvme";

crc64NvmeCrtContainer.CrtCrc64Nvme = CrtCrc64Nvme;

export * from "./CrtCrc64Nvme";
