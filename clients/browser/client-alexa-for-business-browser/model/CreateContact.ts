import { CreateContactInput } from "./CreateContactInput";
import { CreateContactOutput } from "./CreateContactOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateContact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateContactInput
  },
  output: {
    shape: CreateContactOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
