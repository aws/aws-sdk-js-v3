import { DeleteFilterInput } from "./DeleteFilterInput";
import { DeleteFilterOutput } from "./DeleteFilterOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFilter",
  http: {
    method: "DELETE",
    requestUri: "/detector/{detectorId}/filter/{filterName}"
  },
  input: {
    shape: DeleteFilterInput
  },
  output: {
    shape: DeleteFilterOutput
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
