import { GetEntitiesInput } from "./GetEntitiesInput";
import { GetEntitiesOutput } from "./GetEntitiesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEntities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEntities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEntitiesInput
  },
  output: {
    shape: GetEntitiesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
