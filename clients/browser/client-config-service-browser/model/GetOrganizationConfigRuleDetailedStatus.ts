import { GetOrganizationConfigRuleDetailedStatusInput } from "./GetOrganizationConfigRuleDetailedStatusInput";
import { GetOrganizationConfigRuleDetailedStatusOutput } from "./GetOrganizationConfigRuleDetailedStatusOutput";
import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
