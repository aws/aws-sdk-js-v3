import { UpdateDetectorInput } from "../shapes/UpdateDetectorInput";
import { UpdateDetectorOutput } from "../shapes/UpdateDetectorOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDetector",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}"
  },
  input: {
    shape: UpdateDetectorInput
  },
  output: {
    shape: UpdateDetectorOutput
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
