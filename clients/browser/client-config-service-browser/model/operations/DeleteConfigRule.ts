import { DeleteConfigRuleInput } from "../shapes/DeleteConfigRuleInput";
import { DeleteConfigRuleOutput } from "../shapes/DeleteConfigRuleOutput";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigRuleInput
  },
  output: {
    shape: DeleteConfigRuleOutput
  },
  errors: [
    {
      shape: NoSuchConfigRuleException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
