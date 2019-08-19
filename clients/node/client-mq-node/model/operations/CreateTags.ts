import { CreateTagsInput } from "../shapes/CreateTagsInput";
import { CreateTagsOutput } from "../shapes/CreateTagsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTags",
  http: {
    method: "POST",
    requestUri: "/v1/tags/{resource-arn}"
  },
  input: {
    shape: CreateTagsInput
  },
  output: {
    shape: CreateTagsOutput
  },
  errors: [
    {
      shape: NotFoundException
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
