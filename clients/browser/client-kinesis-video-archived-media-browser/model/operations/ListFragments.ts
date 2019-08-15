import { ListFragmentsInput } from "../shapes/ListFragmentsInput";
import { ListFragmentsOutput } from "../shapes/ListFragmentsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFragments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFragments",
  http: {
    method: "POST",
    requestUri: "/listFragments"
  },
  input: {
    shape: ListFragmentsInput
  },
  output: {
    shape: ListFragmentsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
