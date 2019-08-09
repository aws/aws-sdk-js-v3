import { CreateTargetGroupInput } from "./CreateTargetGroupInput";
import { CreateTargetGroupOutput } from "./CreateTargetGroupOutput";
import { DuplicateTargetGroupNameException } from "./DuplicateTargetGroupNameException";
import { TooManyTargetGroupsException } from "./TooManyTargetGroupsException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTargetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTargetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTargetGroupInput
  },
  output: {
    shape: CreateTargetGroupOutput,
    resultWrapper: "CreateTargetGroupResult"
  },
  errors: [
    {
      shape: DuplicateTargetGroupNameException
    },
    {
      shape: TooManyTargetGroupsException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
