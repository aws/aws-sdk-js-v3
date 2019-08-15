import { DeleteObjectTaggingInput } from "../shapes/DeleteObjectTaggingInput";
import { DeleteObjectTaggingOutput } from "../shapes/DeleteObjectTaggingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteObjectTagging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteObjectTagging",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}/{Key+}?tagging"
  },
  input: {
    shape: DeleteObjectTaggingInput
  },
  output: {
    shape: DeleteObjectTaggingOutput
  },
  errors: []
};
