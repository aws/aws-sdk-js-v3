import { GetEbsEncryptionByDefaultInput } from "../shapes/GetEbsEncryptionByDefaultInput";
import { GetEbsEncryptionByDefaultOutput } from "../shapes/GetEbsEncryptionByDefaultOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEbsEncryptionByDefault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEbsEncryptionByDefault",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEbsEncryptionByDefaultInput
  },
  output: {
    shape: GetEbsEncryptionByDefaultOutput
  },
  errors: []
};
