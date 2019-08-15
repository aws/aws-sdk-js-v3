import { GetDetectorInput } from "../shapes/GetDetectorInput";
import { GetDetectorOutput } from "../shapes/GetDetectorOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDetector",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}"
  },
  input: {
    shape: GetDetectorInput
  },
  output: {
    shape: GetDetectorOutput
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
