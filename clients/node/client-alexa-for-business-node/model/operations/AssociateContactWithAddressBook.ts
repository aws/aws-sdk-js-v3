import { AssociateContactWithAddressBookInput } from "../shapes/AssociateContactWithAddressBookInput";
import { AssociateContactWithAddressBookOutput } from "../shapes/AssociateContactWithAddressBookOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateContactWithAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateContactWithAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateContactWithAddressBookInput
  },
  output: {
    shape: AssociateContactWithAddressBookOutput
  },
  errors: [
    {
      shape: LimitExceededException
    }
  ]
};
