import { GetServiceLastAccessedDetailsWithEntitiesInput } from "./GetServiceLastAccessedDetailsWithEntitiesInput";
import { GetServiceLastAccessedDetailsWithEntitiesOutput } from "./GetServiceLastAccessedDetailsWithEntitiesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceLastAccessedDetailsWithEntities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceLastAccessedDetailsWithEntities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceLastAccessedDetailsWithEntitiesInput
  },
  output: {
    shape: GetServiceLastAccessedDetailsWithEntitiesOutput,
    resultWrapper: "GetServiceLastAccessedDetailsWithEntitiesResult"
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
