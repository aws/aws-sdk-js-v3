import { DeleteTagsInput } from "./DeleteTagsInput";
import { DeleteTagsOutput } from "./DeleteTagsOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTags",
  http: {
    method: "DELETE",
    requestUri: "/prod/tags/{resource-arn}"
  },
  input: {
    shape: DeleteTagsInput
  },
  output: {
    shape: DeleteTagsOutput
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
