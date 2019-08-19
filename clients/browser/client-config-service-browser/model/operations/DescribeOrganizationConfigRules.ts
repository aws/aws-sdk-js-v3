import { DescribeOrganizationConfigRulesInput } from "../shapes/DescribeOrganizationConfigRulesInput";
import { DescribeOrganizationConfigRulesOutput } from "../shapes/DescribeOrganizationConfigRulesOutput";
import { NoSuchOrganizationConfigRuleException } from "../shapes/NoSuchOrganizationConfigRuleException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { OrganizationAccessDeniedException } from "../shapes/OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOrganizationConfigRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrganizationConfigRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrganizationConfigRulesInput
  },
  output: {
    shape: DescribeOrganizationConfigRulesOutput
  },
  errors: [
    {
      shape: NoSuchOrganizationConfigRuleException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: OrganizationAccessDeniedException
    }
  ]
};
