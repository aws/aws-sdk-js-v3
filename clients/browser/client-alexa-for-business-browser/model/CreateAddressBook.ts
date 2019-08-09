import { CreateAddressBookInput } from "./CreateAddressBookInput";
import { CreateAddressBookOutput } from "./CreateAddressBookOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAddressBookInput
  },
  output: {
    shape: CreateAddressBookOutput
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
