import { GetComplianceDetailsByConfigRuleInput } from "./GetComplianceDetailsByConfigRuleInput";
import { GetComplianceDetailsByConfigRuleOutput } from "./GetComplianceDetailsByConfigRuleOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
