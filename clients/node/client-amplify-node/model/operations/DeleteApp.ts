import { DeleteAppInput } from "../shapes/DeleteAppInput";
import { DeleteAppOutput } from "../shapes/DeleteAppOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApp",
  http: {
    method: "DELETE",
    requestUri: "/apps/{appId}"
  },
  input: {
    shape: DeleteAppInput
  },
  output: {
    shape: DeleteAppOutput
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
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
