import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
