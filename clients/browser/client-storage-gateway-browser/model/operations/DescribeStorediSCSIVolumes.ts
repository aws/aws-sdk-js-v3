import { DescribeStorediSCSIVolumesInput } from "../shapes/DescribeStorediSCSIVolumesInput";
import { DescribeStorediSCSIVolumesOutput } from "../shapes/DescribeStorediSCSIVolumesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
