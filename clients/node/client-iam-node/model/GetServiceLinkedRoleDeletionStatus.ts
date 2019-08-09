import { GetServiceLinkedRoleDeletionStatusInput } from "./GetServiceLinkedRoleDeletionStatusInput";
import { GetServiceLinkedRoleDeletionStatusOutput } from "./GetServiceLinkedRoleDeletionStatusOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceLinkedRoleDeletionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceLinkedRoleDeletionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceLinkedRoleDeletionStatusInput
  },
  output: {
    shape: GetServiceLinkedRoleDeletionStatusOutput,
    resultWrapper: "GetServiceLinkedRoleDeletionStatusResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
