import { DeletePartnerEventSourceInput } from "./DeletePartnerEventSourceInput";
import { DeletePartnerEventSourceOutput } from "./DeletePartnerEventSourceOutput";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePartnerEventSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePartnerEventSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePartnerEventSourceInput
  },
  output: {
    shape: DeletePartnerEventSourceOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
