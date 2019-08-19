import { DeleteOrganizationConfigRuleInput } from "../shapes/DeleteOrganizationConfigRuleInput";
import { DeleteOrganizationConfigRuleOutput } from "../shapes/DeleteOrganizationConfigRuleOutput";
import { NoSuchOrganizationConfigRuleException } from "../shapes/NoSuchOrganizationConfigRuleException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OrganizationAccessDeniedException } from "../shapes/OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
