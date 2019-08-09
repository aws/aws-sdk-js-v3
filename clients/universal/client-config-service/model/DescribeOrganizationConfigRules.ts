import { DescribeOrganizationConfigRulesInput } from "./DescribeOrganizationConfigRulesInput";
import { DescribeOrganizationConfigRulesOutput } from "./DescribeOrganizationConfigRulesOutput";
import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
