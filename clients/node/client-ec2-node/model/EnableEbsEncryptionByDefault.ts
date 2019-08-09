import { EnableEbsEncryptionByDefaultInput } from "./EnableEbsEncryptionByDefaultInput";
import { EnableEbsEncryptionByDefaultOutput } from "./EnableEbsEncryptionByDefaultOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableEbsEncryptionByDefault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableEbsEncryptionByDefault",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableEbsEncryptionByDefaultInput
  },
  output: {
    shape: EnableEbsEncryptionByDefaultOutput
  },
  errors: []
};
