import { CreateFilterInput } from "./CreateFilterInput";
import { CreateFilterOutput } from "./CreateFilterOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFilter",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/filter"
  },
  input: {
    shape: CreateFilterInput
  },
  output: {
    shape: CreateFilterOutput
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
