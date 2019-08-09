import { DeleteConfigurationRecorderInput } from "./DeleteConfigurationRecorderInput";
import { DeleteConfigurationRecorderOutput } from "./DeleteConfigurationRecorderOutput";
import { NoSuchConfigurationRecorderException } from "./NoSuchConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
