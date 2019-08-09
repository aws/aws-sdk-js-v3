import { DescribeSMBSettingsInput } from "./DescribeSMBSettingsInput";
import { DescribeSMBSettingsOutput } from "./DescribeSMBSettingsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
