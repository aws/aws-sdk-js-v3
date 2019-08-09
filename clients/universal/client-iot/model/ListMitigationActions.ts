import { ListMitigationActionsInput } from "./ListMitigationActionsInput";
import { ListMitigationActionsOutput } from "./ListMitigationActionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListMitigationActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMitigationActions",
  http: {
    method: "GET",
    requestUri: "/mitigationactions/actions"
  },
  input: {
    shape: ListMitigationActionsInput
  },
  output: {
    shape: ListMitigationActionsOutput
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
