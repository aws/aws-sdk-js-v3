import { DeleteChangeSetInput } from "../shapes/DeleteChangeSetInput";
import { DeleteChangeSetOutput } from "../shapes/DeleteChangeSetOutput";
import { InvalidChangeSetStatusException } from "../shapes/InvalidChangeSetStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteChangeSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteChangeSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteChangeSetInput
  },
  output: {
    shape: DeleteChangeSetOutput,
    resultWrapper: "DeleteChangeSetResult"
  },
  errors: [
    {
      shape: InvalidChangeSetStatusException
    }
  ]
};
