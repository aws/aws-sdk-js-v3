import { ListTagsInput } from "../shapes/ListTagsInput";
import { ListTagsOutput } from "../shapes/ListTagsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTags",
  http: {
    method: "GET",
    requestUri: "/v1/tags/{resource-arn}"
  },
  input: {
    shape: ListTagsInput
  },
  output: {
    shape: ListTagsOutput
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
