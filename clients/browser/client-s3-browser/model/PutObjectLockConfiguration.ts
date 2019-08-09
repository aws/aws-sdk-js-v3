import { PutObjectLockConfigurationInput } from "./PutObjectLockConfigurationInput";
import { PutObjectLockConfigurationOutput } from "./PutObjectLockConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutObjectLockConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutObjectLockConfiguration",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?object-lock"
  },
  input: {
    shape: PutObjectLockConfigurationInput
  },
  output: {
    shape: PutObjectLockConfigurationOutput
  },
  errors: []
};
