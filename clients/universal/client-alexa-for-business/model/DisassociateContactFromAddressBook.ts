import { DisassociateContactFromAddressBookInput } from "./DisassociateContactFromAddressBookInput";
import { DisassociateContactFromAddressBookOutput } from "./DisassociateContactFromAddressBookOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateContactFromAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateContactFromAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateContactFromAddressBookInput
  },
  output: {
    shape: DisassociateContactFromAddressBookOutput
  },
  errors: []
};
