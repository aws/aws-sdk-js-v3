import { DeleteAddressBookInput } from "./DeleteAddressBookInput";
import { DeleteAddressBookOutput } from "./DeleteAddressBookOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAddressBookInput
  },
  output: {
    shape: DeleteAddressBookOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
