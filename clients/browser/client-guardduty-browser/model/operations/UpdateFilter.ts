import { UpdateFilterInput } from "../shapes/UpdateFilterInput";
import { UpdateFilterOutput } from "../shapes/UpdateFilterOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFilter",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/filter/{filterName}"
  },
  input: {
    shape: UpdateFilterInput
  },
  output: {
    shape: UpdateFilterOutput
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
