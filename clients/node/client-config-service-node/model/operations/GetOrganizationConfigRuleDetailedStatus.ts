import { GetOrganizationConfigRuleDetailedStatusInput } from "../shapes/GetOrganizationConfigRuleDetailedStatusInput";
import { GetOrganizationConfigRuleDetailedStatusOutput } from "../shapes/GetOrganizationConfigRuleDetailedStatusOutput";
import { NoSuchOrganizationConfigRuleException } from "../shapes/NoSuchOrganizationConfigRuleException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OrganizationAccessDeniedException } from "../shapes/OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOrganizationConfigRuleDetailedStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOrganizationConfigRuleDetailedStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOrganizationConfigRuleDetailedStatusInput
  },
  output: {
    shape: GetOrganizationConfigRuleDetailedStatusOutput
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
