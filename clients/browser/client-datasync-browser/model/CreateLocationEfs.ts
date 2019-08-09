import { CreateLocationEfsInput } from "./CreateLocationEfsInput";
import { CreateLocationEfsOutput } from "./CreateLocationEfsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLocationEfs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLocationEfs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLocationEfsInput
  },
  output: {
    shape: CreateLocationEfsOutput
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
