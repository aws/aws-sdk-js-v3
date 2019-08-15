import { ListContactsInput } from "../shapes/ListContactsInput";
import { ListContactsOutput } from "../shapes/ListContactsOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
