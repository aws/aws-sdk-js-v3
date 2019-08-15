import { SetV2LoggingLevelInput } from "../shapes/SetV2LoggingLevelInput";
import { SetV2LoggingLevelOutput } from "../shapes/SetV2LoggingLevelOutput";
import { InternalException } from "../shapes/InternalException";
import { NotConfiguredException } from "../shapes/NotConfiguredException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetV2LoggingLevel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetV2LoggingLevel",
  http: {
    method: "POST",
    requestUri: "/v2LoggingLevel"
  },
  input: {
    shape: SetV2LoggingLevelInput
  },
  output: {
    shape: SetV2LoggingLevelOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: NotConfiguredException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
