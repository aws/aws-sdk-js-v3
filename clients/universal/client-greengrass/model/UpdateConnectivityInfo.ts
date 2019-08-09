import { UpdateConnectivityInfoInput } from "./UpdateConnectivityInfoInput";
import { UpdateConnectivityInfoOutput } from "./UpdateConnectivityInfoOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
