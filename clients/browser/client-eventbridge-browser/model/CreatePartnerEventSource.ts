import { CreatePartnerEventSourceInput } from "./CreatePartnerEventSourceInput";
import { CreatePartnerEventSourceOutput } from "./CreatePartnerEventSourceOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePartnerEventSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePartnerEventSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePartnerEventSourceInput
  },
  output: {
    shape: CreatePartnerEventSourceOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InternalException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: LimitExceededException
    }
  ]
};
