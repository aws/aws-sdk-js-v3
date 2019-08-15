import { DeletePartnerEventSourceInput } from "../shapes/DeletePartnerEventSourceInput";
import { DeletePartnerEventSourceOutput } from "../shapes/DeletePartnerEventSourceOutput";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
