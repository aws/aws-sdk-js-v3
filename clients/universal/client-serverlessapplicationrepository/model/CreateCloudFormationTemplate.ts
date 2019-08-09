import { CreateCloudFormationTemplateInput } from "./CreateCloudFormationTemplateInput";
import { CreateCloudFormationTemplateOutput } from "./CreateCloudFormationTemplateOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCloudFormationTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCloudFormationTemplate",
  http: {
    method: "POST",
    requestUri: "/applications/{applicationId}/templates"
  },
  input: {
    shape: CreateCloudFormationTemplateInput
  },
  output: {
    shape: CreateCloudFormationTemplateOutput
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
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
