import { CreateDetectorInput } from "../shapes/CreateDetectorInput";
import { CreateDetectorOutput } from "../shapes/CreateDetectorOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDetector",
  http: {
    method: "POST",
    requestUri: "/detector"
  },
  input: {
    shape: CreateDetectorInput
  },
  output: {
    shape: CreateDetectorOutput
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
