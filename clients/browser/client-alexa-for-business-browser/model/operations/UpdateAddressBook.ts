import { UpdateAddressBookInput } from "../shapes/UpdateAddressBookInput";
import { UpdateAddressBookOutput } from "../shapes/UpdateAddressBookOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { NameInUseException } from "../shapes/NameInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
