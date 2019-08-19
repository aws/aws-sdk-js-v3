import { ListV2LoggingLevelsInput } from "../shapes/ListV2LoggingLevelsInput";
import { ListV2LoggingLevelsOutput } from "../shapes/ListV2LoggingLevelsOutput";
import { InternalException } from "../shapes/InternalException";
import { NotConfiguredException } from "../shapes/NotConfiguredException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListV2LoggingLevels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListV2LoggingLevels",
  http: {
    method: "GET",
    requestUri: "/v2LoggingLevel"
  },
  input: {
    shape: ListV2LoggingLevelsInput
  },
  output: {
    shape: ListV2LoggingLevelsOutput
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
