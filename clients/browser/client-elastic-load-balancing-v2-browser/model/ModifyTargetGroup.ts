import { ModifyTargetGroupInput } from "./ModifyTargetGroupInput";
import { ModifyTargetGroupOutput } from "./ModifyTargetGroupOutput";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
