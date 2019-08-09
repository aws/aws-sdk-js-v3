import { ListOTAUpdatesInput } from "./ListOTAUpdatesInput";
import { ListOTAUpdatesOutput } from "./ListOTAUpdatesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
