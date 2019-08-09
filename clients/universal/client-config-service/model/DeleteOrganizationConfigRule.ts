import { DeleteOrganizationConfigRuleInput } from "./DeleteOrganizationConfigRuleInput";
import { DeleteOrganizationConfigRuleOutput } from "./DeleteOrganizationConfigRuleOutput";
import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteOrganizationConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOrganizationConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteOrganizationConfigRuleInput
  },
  output: {
    shape: DeleteOrganizationConfigRuleOutput
  },
  errors: [
    {
      shape: NoSuchOrganizationConfigRuleException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: OrganizationAccessDeniedException
    }
  ]
};
