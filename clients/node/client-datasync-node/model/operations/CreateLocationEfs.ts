import { CreateLocationEfsInput } from "../shapes/CreateLocationEfsInput";
import { CreateLocationEfsOutput } from "../shapes/CreateLocationEfsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
