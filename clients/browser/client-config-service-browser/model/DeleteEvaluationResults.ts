import { DeleteEvaluationResultsInput } from "./DeleteEvaluationResultsInput";
import { DeleteEvaluationResultsOutput } from "./DeleteEvaluationResultsOutput";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteEvaluationResults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEvaluationResults",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEvaluationResultsInput
  },
  output: {
    shape: DeleteEvaluationResultsOutput
  },
  errors: [
    {
      shape: NoSuchConfigRuleException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
