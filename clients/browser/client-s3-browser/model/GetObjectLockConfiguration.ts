import { GetObjectLockConfigurationInput } from "./GetObjectLockConfigurationInput";
import { GetObjectLockConfigurationOutput } from "./GetObjectLockConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetObjectLockConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObjectLockConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?object-lock"
  },
  input: {
    shape: GetObjectLockConfigurationInput
  },
  output: {
    shape: GetObjectLockConfigurationOutput
  },
  errors: []
};
