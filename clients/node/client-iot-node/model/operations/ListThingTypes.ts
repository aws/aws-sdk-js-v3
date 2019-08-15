import { ListThingTypesInput } from "../shapes/ListThingTypesInput";
import { ListThingTypesOutput } from "../shapes/ListThingTypesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThingTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingTypes",
  http: {
    method: "GET",
    requestUri: "/thing-types"
  },
  input: {
    shape: ListThingTypesInput
  },
  output: {
    shape: ListThingTypesOutput
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
