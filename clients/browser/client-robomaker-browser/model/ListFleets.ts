import { ListFleetsInput } from "./ListFleetsInput";
import { ListFleetsOutput } from "./ListFleetsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
