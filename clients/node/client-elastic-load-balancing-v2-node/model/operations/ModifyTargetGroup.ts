import { ModifyTargetGroupInput } from "../shapes/ModifyTargetGroupInput";
import { ModifyTargetGroupOutput } from "../shapes/ModifyTargetGroupOutput";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyTargetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyTargetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyTargetGroupInput
  },
  output: {
    shape: ModifyTargetGroupOutput,
    resultWrapper: "ModifyTargetGroupResult"
  },
  errors: [
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
