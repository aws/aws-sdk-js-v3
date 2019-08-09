import { DeleteConfigRuleInput } from "./DeleteConfigRuleInput";
import { DeleteConfigRuleOutput } from "./DeleteConfigRuleOutput";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
