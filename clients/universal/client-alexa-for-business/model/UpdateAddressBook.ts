import { UpdateAddressBookInput } from "./UpdateAddressBookInput";
import { UpdateAddressBookOutput } from "./UpdateAddressBookOutput";
import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAddressBookInput
  },
  output: {
    shape: UpdateAddressBookOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: NameInUseException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
