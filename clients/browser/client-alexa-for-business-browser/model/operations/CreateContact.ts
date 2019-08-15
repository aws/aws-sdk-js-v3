import { CreateContactInput } from "../shapes/CreateContactInput";
import { CreateContactOutput } from "../shapes/CreateContactOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
