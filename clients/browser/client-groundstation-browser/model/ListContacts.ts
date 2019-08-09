import { ListContactsInput } from "./ListContactsInput";
import { ListContactsOutput } from "./ListContactsOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListContacts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListContacts",
  http: {
    method: "POST",
    requestUri: "/contacts"
  },
  input: {
    shape: ListContactsInput
  },
  output: {
    shape: ListContactsOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
