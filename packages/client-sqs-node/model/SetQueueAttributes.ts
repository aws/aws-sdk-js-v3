import { SetQueueAttributesInput } from "./SetQueueAttributesInput";
import { SetQueueAttributesOutput } from "./SetQueueAttributesOutput";
import { InvalidAttributeName } from "./InvalidAttributeName";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetQueueAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetQueueAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetQueueAttributesInput
  },
  output: {
    shape: SetQueueAttributesOutput
  },
  errors: [
    {
      shape: InvalidAttributeName
    }
  ]
};
