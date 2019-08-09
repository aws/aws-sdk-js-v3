import { ListFiltersInput } from "./ListFiltersInput";
import { ListFiltersOutput } from "./ListFiltersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListFilters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFilters",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/filter"
  },
  input: {
    shape: ListFiltersInput
  },
  output: {
    shape: ListFiltersOutput
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
