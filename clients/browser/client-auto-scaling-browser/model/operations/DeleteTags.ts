import { DeleteTagsInput } from "../shapes/DeleteTagsInput";
import { DeleteTagsOutput } from "../shapes/DeleteTagsOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ResourceInUseFault } from "../shapes/ResourceInUseFault";
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
      shape: ResourceContentionFault
    },
    {
      shape: ResourceInUseFault
    }
  ]
};
