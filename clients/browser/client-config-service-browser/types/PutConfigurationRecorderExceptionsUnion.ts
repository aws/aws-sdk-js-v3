import { MaxNumberOfConfigurationRecordersExceededException } from "./MaxNumberOfConfigurationRecordersExceededException";
import { InvalidConfigurationRecorderNameException } from "./InvalidConfigurationRecorderNameException";
import { InvalidRoleException } from "./InvalidRoleException";
import { InvalidRecordingGroupException } from "./InvalidRecordingGroupException";
export type PutConfigurationRecorderExceptionsUnion =
  | MaxNumberOfConfigurationRecordersExceededException
  | InvalidConfigurationRecorderNameException
  | InvalidRoleException
  | InvalidRecordingGroupException;
