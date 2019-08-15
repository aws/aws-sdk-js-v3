import { DeleteDetectorInput } from "../shapes/DeleteDetectorInput";
import { DeleteDetectorOutput } from "../shapes/DeleteDetectorOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDetector",
  http: {
    method: "DELETE",
    requestUri: "/detector/{detectorId}"
  },
  input: {
    shape: DeleteDetectorInput
  },
  output: {
    shape: DeleteDetectorOutput
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
