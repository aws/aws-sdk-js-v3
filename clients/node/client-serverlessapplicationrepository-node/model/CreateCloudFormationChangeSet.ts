import { CreateCloudFormationChangeSetInput } from "./CreateCloudFormationChangeSetInput";
import { CreateCloudFormationChangeSetOutput } from "./CreateCloudFormationChangeSetOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
