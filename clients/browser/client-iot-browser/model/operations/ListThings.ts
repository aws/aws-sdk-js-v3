import { ListThingsInput } from "../shapes/ListThingsInput";
import { ListThingsOutput } from "../shapes/ListThingsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThings",
  http: {
    method: "GET",
    requestUri: "/things"
  },
  input: {
    shape: ListThingsInput
  },
  output: {
    shape: ListThingsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
