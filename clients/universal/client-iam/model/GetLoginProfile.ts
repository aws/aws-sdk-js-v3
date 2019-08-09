import { GetLoginProfileInput } from "./GetLoginProfileInput";
import { GetLoginProfileOutput } from "./GetLoginProfileOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetLoginProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLoginProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLoginProfileInput
  },
  output: {
    shape: GetLoginProfileOutput,
    resultWrapper: "GetLoginProfileResult"
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
