import { ListIPSetsInput } from "./ListIPSetsInput";
import { ListIPSetsOutput } from "./ListIPSetsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListIPSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIPSets",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/ipset"
  },
  input: {
    shape: ListIPSetsInput
  },
  output: {
    shape: ListIPSetsOutput
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
