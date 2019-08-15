import { GetNamespaceDeletionStatusInput } from "../shapes/GetNamespaceDeletionStatusInput";
import { GetNamespaceDeletionStatusOutput } from "../shapes/GetNamespaceDeletionStatusOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
