import { GetEbsDefaultKmsKeyIdInput } from "./GetEbsDefaultKmsKeyIdInput";
import { GetEbsDefaultKmsKeyIdOutput } from "./GetEbsDefaultKmsKeyIdOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEbsDefaultKmsKeyId: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEbsDefaultKmsKeyId",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEbsDefaultKmsKeyIdInput
  },
  output: {
    shape: GetEbsDefaultKmsKeyIdOutput
  },
  errors: []
};
