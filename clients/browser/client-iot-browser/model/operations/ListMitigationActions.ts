import { ListMitigationActionsInput } from "../shapes/ListMitigationActionsInput";
import { ListMitigationActionsOutput } from "../shapes/ListMitigationActionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
