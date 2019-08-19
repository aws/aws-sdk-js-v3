import { DeleteTagsInput } from "../shapes/DeleteTagsInput";
import { DeleteTagsOutput } from "../shapes/DeleteTagsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTagsInput
  },
  output: {
    shape: DeleteTagsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
