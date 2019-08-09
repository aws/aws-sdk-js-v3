import { DisableEbsEncryptionByDefaultInput } from "./DisableEbsEncryptionByDefaultInput";
import { DisableEbsEncryptionByDefaultOutput } from "./DisableEbsEncryptionByDefaultOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableEbsEncryptionByDefault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableEbsEncryptionByDefault",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableEbsEncryptionByDefaultInput
  },
  output: {
    shape: DisableEbsEncryptionByDefaultOutput
  },
  errors: []
};
