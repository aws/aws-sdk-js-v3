import { GetCloudFormationTemplateInput } from "../shapes/GetCloudFormationTemplateInput";
import { GetCloudFormationTemplateOutput } from "../shapes/GetCloudFormationTemplateOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
