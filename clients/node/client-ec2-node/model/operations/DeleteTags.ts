import { DeleteTagsInput } from "../shapes/DeleteTagsInput";
import { DeleteTagsOutput } from "../shapes/DeleteTagsOutput";
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
  errors: []
};
