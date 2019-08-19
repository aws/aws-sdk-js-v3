import { GetInstanceProfileInput } from "../shapes/GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "../shapes/GetInstanceProfileOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
