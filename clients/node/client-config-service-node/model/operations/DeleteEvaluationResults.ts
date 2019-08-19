import { DeleteEvaluationResultsInput } from "../shapes/DeleteEvaluationResultsInput";
import { DeleteEvaluationResultsOutput } from "../shapes/DeleteEvaluationResultsOutput";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
