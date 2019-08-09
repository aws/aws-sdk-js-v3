import { ListRobotsInput } from "./ListRobotsInput";
import { ListRobotsOutput } from "./ListRobotsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
