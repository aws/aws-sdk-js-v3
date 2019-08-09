import { GetConnectivityInfoInput } from "./GetConnectivityInfoInput";
import { GetConnectivityInfoOutput } from "./GetConnectivityInfoOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
