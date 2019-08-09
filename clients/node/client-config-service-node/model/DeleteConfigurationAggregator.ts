import { DeleteConfigurationAggregatorInput } from "./DeleteConfigurationAggregatorInput";
import { DeleteConfigurationAggregatorOutput } from "./DeleteConfigurationAggregatorOutput";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteConfigurationAggregator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationAggregator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigurationAggregatorInput
  },
  output: {
    shape: DeleteConfigurationAggregatorOutput
  },
  errors: [
    {
      shape: NoSuchConfigurationAggregatorException
    }
  ]
};
