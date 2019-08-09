import { ModifyEbsDefaultKmsKeyIdInput } from "./ModifyEbsDefaultKmsKeyIdInput";
import { ModifyEbsDefaultKmsKeyIdOutput } from "./ModifyEbsDefaultKmsKeyIdOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyEbsDefaultKmsKeyId: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyEbsDefaultKmsKeyId",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyEbsDefaultKmsKeyIdInput
  },
  output: {
    shape: ModifyEbsDefaultKmsKeyIdOutput
  },
  errors: []
};
