import { DeleteTagOptionInput } from "./DeleteTagOptionInput";
import { DeleteTagOptionOutput } from "./DeleteTagOptionOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
