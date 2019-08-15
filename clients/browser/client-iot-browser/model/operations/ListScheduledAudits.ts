import { ListScheduledAuditsInput } from "../shapes/ListScheduledAuditsInput";
import { ListScheduledAuditsOutput } from "../shapes/ListScheduledAuditsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListScheduledAudits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListScheduledAudits",
  http: {
    method: "GET",
    requestUri: "/audit/scheduledaudits"
  },
  input: {
    shape: ListScheduledAuditsInput
  },
  output: {
    shape: ListScheduledAuditsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
