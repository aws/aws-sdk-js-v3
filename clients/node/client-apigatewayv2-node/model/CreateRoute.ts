import { CreateRouteInput } from "./CreateRouteInput";
import { CreateRouteOutput } from "./CreateRouteOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
