import { GetQueueAttributesInput } from "./GetQueueAttributesInput";
import { GetQueueAttributesOutput } from "./GetQueueAttributesOutput";
import { InvalidAttributeName } from "./InvalidAttributeName";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetQueueAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQueueAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetQueueAttributesInput
  },
  output: {
    shape: GetQueueAttributesOutput,
    resultWrapper: "GetQueueAttributesResult"
  },
  errors: [
    {
      shape: InvalidAttributeName
    }
  ]
};
