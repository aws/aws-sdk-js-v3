import { PutPartnerEventsInput } from "../shapes/PutPartnerEventsInput";
import { PutPartnerEventsOutput } from "../shapes/PutPartnerEventsOutput";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutPartnerEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPartnerEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutPartnerEventsInput
  },
  output: {
    shape: PutPartnerEventsOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
