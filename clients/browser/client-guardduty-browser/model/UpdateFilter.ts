import { UpdateFilterInput } from "./UpdateFilterInput";
import { UpdateFilterOutput } from "./UpdateFilterOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
