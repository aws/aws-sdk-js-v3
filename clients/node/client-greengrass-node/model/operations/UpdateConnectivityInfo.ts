import { UpdateConnectivityInfoInput } from "../shapes/UpdateConnectivityInfoInput";
import { UpdateConnectivityInfoOutput } from "../shapes/UpdateConnectivityInfoOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConnectivityInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConnectivityInfo",
  http: {
    method: "PUT",
    requestUri: "/greengrass/things/{ThingName}/connectivityInfo"
  },
  input: {
    shape: UpdateConnectivityInfoInput
  },
  output: {
    shape: UpdateConnectivityInfoOutput
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
