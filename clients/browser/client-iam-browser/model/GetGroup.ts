import { GetGroupInput } from "./GetGroupInput";
import { GetGroupOutput } from "./GetGroupOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetGroupInput
  },
  output: {
    shape: GetGroupOutput,
    resultWrapper: "GetGroupResult"
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
