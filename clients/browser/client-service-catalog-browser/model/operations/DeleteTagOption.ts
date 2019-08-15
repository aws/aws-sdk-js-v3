import { DeleteTagOptionInput } from "../shapes/DeleteTagOptionInput";
import { DeleteTagOptionOutput } from "../shapes/DeleteTagOptionOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTagOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTagOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTagOptionInput
  },
  output: {
    shape: DeleteTagOptionOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
