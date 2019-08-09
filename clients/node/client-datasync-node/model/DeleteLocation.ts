import { DeleteLocationInput } from "./DeleteLocationInput";
import { DeleteLocationOutput } from "./DeleteLocationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
