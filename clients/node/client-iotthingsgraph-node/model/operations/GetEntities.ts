import { GetEntitiesInput } from "../shapes/GetEntitiesInput";
import { GetEntitiesOutput } from "../shapes/GetEntitiesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
