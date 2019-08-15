import { GetQueueAttributesInput } from "../shapes/GetQueueAttributesInput";
import { GetQueueAttributesOutput } from "../shapes/GetQueueAttributesOutput";
import { InvalidAttributeName } from "../shapes/InvalidAttributeName";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
