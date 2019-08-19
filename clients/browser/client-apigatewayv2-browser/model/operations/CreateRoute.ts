import { CreateRouteInput } from "../shapes/CreateRouteInput";
import { CreateRouteOutput } from "../shapes/CreateRouteOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRoute",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/routes"
  },
  input: {
    shape: CreateRouteInput
  },
  output: {
    shape: CreateRouteOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
