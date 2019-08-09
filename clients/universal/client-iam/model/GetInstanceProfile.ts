import { GetInstanceProfileInput } from "./GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "./GetInstanceProfileOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInstanceProfileInput
  },
  output: {
    shape: GetInstanceProfileOutput,
    resultWrapper: "GetInstanceProfileResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
