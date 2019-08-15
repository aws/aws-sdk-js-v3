import { UpdateAppInput } from "../shapes/UpdateAppInput";
import { UpdateAppOutput } from "../shapes/UpdateAppOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApp",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}"
  },
  input: {
    shape: UpdateAppInput
  },
  output: {
    shape: UpdateAppOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
