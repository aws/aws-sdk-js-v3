import { CreateAddressBookInput } from "../shapes/CreateAddressBookInput";
import { CreateAddressBookOutput } from "../shapes/CreateAddressBookOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
