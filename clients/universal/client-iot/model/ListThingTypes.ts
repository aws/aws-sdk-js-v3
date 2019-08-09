import { ListThingTypesInput } from "./ListThingTypesInput";
import { ListThingTypesOutput } from "./ListThingTypesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
