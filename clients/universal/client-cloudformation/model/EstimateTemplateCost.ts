import { EstimateTemplateCostInput } from "./EstimateTemplateCostInput";
import { EstimateTemplateCostOutput } from "./EstimateTemplateCostOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EstimateTemplateCost: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EstimateTemplateCost",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EstimateTemplateCostInput
  },
  output: {
    shape: EstimateTemplateCostOutput,
    resultWrapper: "EstimateTemplateCostResult"
  },
  errors: []
};
