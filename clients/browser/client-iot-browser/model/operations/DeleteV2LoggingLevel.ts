import { DeleteV2LoggingLevelInput } from "../shapes/DeleteV2LoggingLevelInput";
import { DeleteV2LoggingLevelOutput } from "../shapes/DeleteV2LoggingLevelOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
