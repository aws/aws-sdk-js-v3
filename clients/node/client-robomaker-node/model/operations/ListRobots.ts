import { ListRobotsInput } from "../shapes/ListRobotsInput";
import { ListRobotsOutput } from "../shapes/ListRobotsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRobots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRobots",
  http: {
    method: "POST",
    requestUri: "/listRobots"
  },
  input: {
    shape: ListRobotsInput
  },
  output: {
    shape: ListRobotsOutput
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
