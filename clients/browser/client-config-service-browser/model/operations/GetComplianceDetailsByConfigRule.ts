import { GetComplianceDetailsByConfigRuleInput } from "../shapes/GetComplianceDetailsByConfigRuleInput";
import { GetComplianceDetailsByConfigRuleOutput } from "../shapes/GetComplianceDetailsByConfigRuleOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetComplianceDetailsByConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetComplianceDetailsByConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetComplianceDetailsByConfigRuleInput
  },
  output: {
    shape: GetComplianceDetailsByConfigRuleOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: NoSuchConfigRuleException
    }
  ]
};
