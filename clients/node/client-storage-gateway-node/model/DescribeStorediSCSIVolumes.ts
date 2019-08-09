import { DescribeStorediSCSIVolumesInput } from "./DescribeStorediSCSIVolumesInput";
import { DescribeStorediSCSIVolumesOutput } from "./DescribeStorediSCSIVolumesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStorediSCSIVolumes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStorediSCSIVolumes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStorediSCSIVolumesInput
  },
  output: {
    shape: DescribeStorediSCSIVolumesOutput
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
