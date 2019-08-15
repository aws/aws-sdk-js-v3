import { ModifyTargetGroupAttributesInput } from "../shapes/ModifyTargetGroupAttributesInput";
import { ModifyTargetGroupAttributesOutput } from "../shapes/ModifyTargetGroupAttributesOutput";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
