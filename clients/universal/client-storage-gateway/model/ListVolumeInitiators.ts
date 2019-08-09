import { ListVolumeInitiatorsInput } from "./ListVolumeInitiatorsInput";
import { ListVolumeInitiatorsOutput } from "./ListVolumeInitiatorsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVolumeInitiators: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVolumeInitiators",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVolumeInitiatorsInput
  },
  output: {
    shape: ListVolumeInitiatorsOutput
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
