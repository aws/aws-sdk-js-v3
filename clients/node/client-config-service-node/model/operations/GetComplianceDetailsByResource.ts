import { GetComplianceDetailsByResourceInput } from "../shapes/GetComplianceDetailsByResourceInput";
import { GetComplianceDetailsByResourceOutput } from "../shapes/GetComplianceDetailsByResourceOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetComplianceDetailsByResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetComplianceDetailsByResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetComplianceDetailsByResourceInput
  },
  output: {
    shape: GetComplianceDetailsByResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    }
  ]
};
