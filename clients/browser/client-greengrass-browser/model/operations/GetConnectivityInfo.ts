import { GetConnectivityInfoInput } from "../shapes/GetConnectivityInfoInput";
import { GetConnectivityInfoOutput } from "../shapes/GetConnectivityInfoOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConnectivityInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnectivityInfo",
  http: {
    method: "GET",
    requestUri: "/greengrass/things/{ThingName}/connectivityInfo"
  },
  input: {
    shape: GetConnectivityInfoInput
  },
  output: {
    shape: GetConnectivityInfoOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
