import { ListThreatIntelSetsInput } from "./ListThreatIntelSetsInput";
import { ListThreatIntelSetsOutput } from "./ListThreatIntelSetsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
