import { DisableEbsEncryptionByDefaultInput } from "../shapes/DisableEbsEncryptionByDefaultInput";
import { DisableEbsEncryptionByDefaultOutput } from "../shapes/DisableEbsEncryptionByDefaultOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
