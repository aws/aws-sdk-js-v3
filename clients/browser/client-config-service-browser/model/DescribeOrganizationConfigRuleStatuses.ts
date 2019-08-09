import { DescribeOrganizationConfigRuleStatusesInput } from "./DescribeOrganizationConfigRuleStatusesInput";
import { DescribeOrganizationConfigRuleStatusesOutput } from "./DescribeOrganizationConfigRuleStatusesOutput";
import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOrganizationConfigRuleStatuses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrganizationConfigRuleStatuses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrganizationConfigRuleStatusesInput
  },
  output: {
    shape: DescribeOrganizationConfigRuleStatusesOutput
  },
  errors: [
    {
      shape: NoSuchOrganizationConfigRuleException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: OrganizationAccessDeniedException
    }
  ]
};
