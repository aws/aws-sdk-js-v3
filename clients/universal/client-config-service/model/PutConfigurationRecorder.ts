import { PutConfigurationRecorderInput } from "./PutConfigurationRecorderInput";
import { PutConfigurationRecorderOutput } from "./PutConfigurationRecorderOutput";
import { MaxNumberOfConfigurationRecordersExceededException } from "./MaxNumberOfConfigurationRecordersExceededException";
import { InvalidConfigurationRecorderNameException } from "./InvalidConfigurationRecorderNameException";
import { InvalidRoleException } from "./InvalidRoleException";
import { InvalidRecordingGroupException } from "./InvalidRecordingGroupException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutConfigurationRecorder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationRecorder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutConfigurationRecorderInput
  },
  output: {
    shape: PutConfigurationRecorderOutput
  },
  errors: [
    {
      shape: MaxNumberOfConfigurationRecordersExceededException
    },
    {
      shape: InvalidConfigurationRecorderNameException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: InvalidRecordingGroupException
    }
  ]
};
