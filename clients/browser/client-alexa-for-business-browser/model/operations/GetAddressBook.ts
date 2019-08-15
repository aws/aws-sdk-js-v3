import { GetAddressBookInput } from "../shapes/GetAddressBookInput";
import { GetAddressBookOutput } from "../shapes/GetAddressBookOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAddressBookInput
  },
  output: {
    shape: GetAddressBookOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
