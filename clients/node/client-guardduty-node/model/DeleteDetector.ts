import { DeleteDetectorInput } from "./DeleteDetectorInput";
import { DeleteDetectorOutput } from "./DeleteDetectorOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
