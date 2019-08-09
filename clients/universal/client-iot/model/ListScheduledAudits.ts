import { ListScheduledAuditsInput } from "./ListScheduledAuditsInput";
import { ListScheduledAuditsOutput } from "./ListScheduledAuditsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
