import { DeleteLocationInput } from "../shapes/DeleteLocationInput";
import { DeleteLocationOutput } from "../shapes/DeleteLocationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLocation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLocation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLocationInput
  },
  output: {
    shape: DeleteLocationOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
