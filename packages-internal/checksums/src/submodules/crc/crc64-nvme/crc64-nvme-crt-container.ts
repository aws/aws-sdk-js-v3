import type { ChecksumConstructor } from "@smithy/types";

/**
 * \@aws-sdk/crc64-nvme-crt will install the constructor in this
 * container if it is installed.
 *
 * This avoids a runtime-require being interpreted statically by bundlers.
 * @internal
 */
export const crc64NvmeCrtContainer: {
  CrtCrc64Nvme: null | ChecksumConstructor;
} = {
  CrtCrc64Nvme: null,
};
