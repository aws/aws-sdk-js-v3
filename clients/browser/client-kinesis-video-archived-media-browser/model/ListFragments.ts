import { ListFragmentsInput } from "./ListFragmentsInput";
import { ListFragmentsOutput } from "./ListFragmentsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
