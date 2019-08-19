import { CreateCloudFormationTemplateInput } from "../shapes/CreateCloudFormationTemplateInput";
import { CreateCloudFormationTemplateOutput } from "../shapes/CreateCloudFormationTemplateOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
