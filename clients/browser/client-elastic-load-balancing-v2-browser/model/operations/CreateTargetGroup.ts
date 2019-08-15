import { CreateTargetGroupInput } from "../shapes/CreateTargetGroupInput";
import { CreateTargetGroupOutput } from "../shapes/CreateTargetGroupOutput";
import { DuplicateTargetGroupNameException } from "../shapes/DuplicateTargetGroupNameException";
import { TooManyTargetGroupsException } from "../shapes/TooManyTargetGroupsException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
