import { CreateLocationNfsInput } from "../shapes/CreateLocationNfsInput";
import { CreateLocationNfsOutput } from "../shapes/CreateLocationNfsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLocationNfs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLocationNfs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLocationNfsInput
  },
  output: {
    shape: CreateLocationNfsOutput
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
