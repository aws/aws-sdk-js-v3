import { GetServiceLastAccessedDetailsInput } from "./GetServiceLastAccessedDetailsInput";
import { GetServiceLastAccessedDetailsOutput } from "./GetServiceLastAccessedDetailsOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceLastAccessedDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceLastAccessedDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceLastAccessedDetailsInput
  },
  output: {
    shape: GetServiceLastAccessedDetailsOutput,
    resultWrapper: "GetServiceLastAccessedDetailsResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    }
  ]
};
