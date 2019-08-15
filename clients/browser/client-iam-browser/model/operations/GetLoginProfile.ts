import { GetLoginProfileInput } from "../shapes/GetLoginProfileInput";
import { GetLoginProfileOutput } from "../shapes/GetLoginProfileOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
