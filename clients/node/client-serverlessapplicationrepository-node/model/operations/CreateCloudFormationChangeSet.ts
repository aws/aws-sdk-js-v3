import { CreateCloudFormationChangeSetInput } from "../shapes/CreateCloudFormationChangeSetInput";
import { CreateCloudFormationChangeSetOutput } from "../shapes/CreateCloudFormationChangeSetOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCloudFormationChangeSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCloudFormationChangeSet",
  http: {
    method: "POST",
    requestUri: "/applications/{applicationId}/changesets"
  },
  input: {
    shape: CreateCloudFormationChangeSetInput
  },
  output: {
    shape: CreateCloudFormationChangeSetOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
