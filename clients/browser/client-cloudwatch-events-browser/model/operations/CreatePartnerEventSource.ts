import { CreatePartnerEventSourceInput } from "../shapes/CreatePartnerEventSourceInput";
import { CreatePartnerEventSourceOutput } from "../shapes/CreatePartnerEventSourceOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InternalException } from "../shapes/InternalException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
