import { DeleteV2LoggingLevelInput } from "./DeleteV2LoggingLevelInput";
import { DeleteV2LoggingLevelOutput } from "./DeleteV2LoggingLevelOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteV2LoggingLevel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteV2LoggingLevel",
  http: {
    method: "DELETE",
    requestUri: "/v2LoggingLevel"
  },
  input: {
    shape: DeleteV2LoggingLevelInput
  },
  output: {
    shape: DeleteV2LoggingLevelOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
