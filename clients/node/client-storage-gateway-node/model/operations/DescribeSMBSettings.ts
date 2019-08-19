import { DescribeSMBSettingsInput } from "../shapes/DescribeSMBSettingsInput";
import { DescribeSMBSettingsOutput } from "../shapes/DescribeSMBSettingsOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSMBSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSMBSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSMBSettingsInput
  },
  output: {
    shape: DescribeSMBSettingsOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
