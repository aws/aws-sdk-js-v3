import { CreateLocationNfsInput } from "./CreateLocationNfsInput";
import { CreateLocationNfsOutput } from "./CreateLocationNfsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
