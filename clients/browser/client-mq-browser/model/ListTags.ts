import { ListTagsInput } from "./ListTagsInput";
import { ListTagsOutput } from "./ListTagsOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
