import { GetComplianceSummaryByResourceTypeInput } from "./GetComplianceSummaryByResourceTypeInput";
import { GetComplianceSummaryByResourceTypeOutput } from "./GetComplianceSummaryByResourceTypeOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetComplianceSummaryByResourceType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetComplianceSummaryByResourceType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetComplianceSummaryByResourceTypeInput
  },
  output: {
    shape: GetComplianceSummaryByResourceTypeOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    }
  ]
};
