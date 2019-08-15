import { ListOTAUpdatesInput } from "../shapes/ListOTAUpdatesInput";
import { ListOTAUpdatesOutput } from "../shapes/ListOTAUpdatesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOTAUpdates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOTAUpdates",
  http: {
    method: "GET",
    requestUri: "/otaUpdates"
  },
  input: {
    shape: ListOTAUpdatesInput
  },
  output: {
    shape: ListOTAUpdatesOutput
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
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
