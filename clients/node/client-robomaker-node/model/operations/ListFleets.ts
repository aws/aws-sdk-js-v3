import { ListFleetsInput } from "../shapes/ListFleetsInput";
import { ListFleetsOutput } from "../shapes/ListFleetsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFleets",
  http: {
    method: "POST",
    requestUri: "/listFleets"
  },
  input: {
    shape: ListFleetsInput
  },
  output: {
    shape: ListFleetsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};
