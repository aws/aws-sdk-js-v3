import { UpdateAppInput } from "./UpdateAppInput";
import { UpdateAppOutput } from "./UpdateAppOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
