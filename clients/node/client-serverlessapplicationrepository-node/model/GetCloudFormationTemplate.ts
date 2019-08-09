import { GetCloudFormationTemplateInput } from "./GetCloudFormationTemplateInput";
import { GetCloudFormationTemplateOutput } from "./GetCloudFormationTemplateOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCloudFormationTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCloudFormationTemplate",
  http: {
    method: "GET",
    requestUri: "/applications/{applicationId}/templates/{templateId}"
  },
  input: {
    shape: GetCloudFormationTemplateInput
  },
  output: {
    shape: GetCloudFormationTemplateOutput
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
