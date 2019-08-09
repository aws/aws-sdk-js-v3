import { DeleteApplicationInput } from "./DeleteApplicationInput";
import { DeleteApplicationOutput } from "./DeleteApplicationOutput";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationInput
  },
  output: {
    shape: DeleteApplicationOutput
  },
  errors: [
    {
      shape: OperationInProgressException
    }
  ]
};
