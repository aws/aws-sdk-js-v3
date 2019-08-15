import { GetServiceLinkedRoleDeletionStatusInput } from "../shapes/GetServiceLinkedRoleDeletionStatusInput";
import { GetServiceLinkedRoleDeletionStatusOutput } from "../shapes/GetServiceLinkedRoleDeletionStatusOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
