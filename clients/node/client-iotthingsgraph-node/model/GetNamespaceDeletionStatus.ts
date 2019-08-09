import { GetNamespaceDeletionStatusInput } from "./GetNamespaceDeletionStatusInput";
import { GetNamespaceDeletionStatusOutput } from "./GetNamespaceDeletionStatusOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNamespaceDeletionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNamespaceDeletionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetNamespaceDeletionStatusInput
  },
  output: {
    shape: GetNamespaceDeletionStatusOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
