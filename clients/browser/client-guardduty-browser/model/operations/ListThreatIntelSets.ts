import { ListThreatIntelSetsInput } from "../shapes/ListThreatIntelSetsInput";
import { ListThreatIntelSetsOutput } from "../shapes/ListThreatIntelSetsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThreatIntelSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThreatIntelSets",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/threatintelset"
  },
  input: {
    shape: ListThreatIntelSetsInput
  },
  output: {
    shape: ListThreatIntelSetsOutput
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
