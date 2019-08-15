import { PutConfigurationRecorderInput } from "../shapes/PutConfigurationRecorderInput";
import { PutConfigurationRecorderOutput } from "../shapes/PutConfigurationRecorderOutput";
import { MaxNumberOfConfigurationRecordersExceededException } from "../shapes/MaxNumberOfConfigurationRecordersExceededException";
import { InvalidConfigurationRecorderNameException } from "../shapes/InvalidConfigurationRecorderNameException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { InvalidRecordingGroupException } from "../shapes/InvalidRecordingGroupException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
