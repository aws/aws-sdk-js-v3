import { DeleteConfigurationRecorderInput } from "../shapes/DeleteConfigurationRecorderInput";
import { DeleteConfigurationRecorderOutput } from "../shapes/DeleteConfigurationRecorderOutput";
import { NoSuchConfigurationRecorderException } from "../shapes/NoSuchConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigurationRecorder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationRecorder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigurationRecorderInput
  },
  output: {
    shape: DeleteConfigurationRecorderOutput
  },
  errors: [
    {
      shape: NoSuchConfigurationRecorderException
    }
  ]
};
