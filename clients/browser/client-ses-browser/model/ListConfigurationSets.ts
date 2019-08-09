import { ListConfigurationSetsInput } from "./ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "./ListConfigurationSetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListConfigurationSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurationSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListConfigurationSetsInput
  },
  output: {
    shape: ListConfigurationSetsOutput,
    resultWrapper: "ListConfigurationSetsResult"
  },
  errors: []
};
