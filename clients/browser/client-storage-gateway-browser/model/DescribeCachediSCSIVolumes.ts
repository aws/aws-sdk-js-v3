import { DescribeCachediSCSIVolumesInput } from "./DescribeCachediSCSIVolumesInput";
import { DescribeCachediSCSIVolumesOutput } from "./DescribeCachediSCSIVolumesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCachediSCSIVolumes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCachediSCSIVolumes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCachediSCSIVolumesInput
  },
  output: {
    shape: DescribeCachediSCSIVolumesOutput
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
