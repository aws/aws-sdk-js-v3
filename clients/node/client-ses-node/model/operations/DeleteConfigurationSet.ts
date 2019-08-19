import { DeleteConfigurationSetInput } from "../shapes/DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "../shapes/DeleteConfigurationSetOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigurationSetInput
  },
  output: {
    shape: DeleteConfigurationSetOutput,
    resultWrapper: "DeleteConfigurationSetResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    }
  ]
};
