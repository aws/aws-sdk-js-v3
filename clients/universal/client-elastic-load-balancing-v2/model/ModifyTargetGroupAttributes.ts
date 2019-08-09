import { ModifyTargetGroupAttributesInput } from "./ModifyTargetGroupAttributesInput";
import { ModifyTargetGroupAttributesOutput } from "./ModifyTargetGroupAttributesOutput";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyTargetGroupAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyTargetGroupAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyTargetGroupAttributesInput
  },
  output: {
    shape: ModifyTargetGroupAttributesOutput,
    resultWrapper: "ModifyTargetGroupAttributesResult"
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
