import { ListConfigurationSetsInput } from "./ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "./ListConfigurationSetsOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListConfigurationSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurationSets",
  http: {
    method: "GET",
    requestUri: "/v1/email/configuration-sets"
  },
  input: {
    shape: ListConfigurationSetsInput
  },
  output: {
    shape: ListConfigurationSetsOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
