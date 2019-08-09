import { DeleteTagsInput } from "./DeleteTagsInput";
import { DeleteTagsOutput } from "./DeleteTagsOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTags",
  http: {
    method: "POST",
    requestUri: "/2015-02-01/delete-tags/{FileSystemId}"
  },
  input: {
    shape: DeleteTagsInput
  },
  output: {
    shape: DeleteTagsOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    }
  ]
};
