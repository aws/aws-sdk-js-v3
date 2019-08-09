import { CreateReceiptFilterInput } from "./CreateReceiptFilterInput";
import { CreateReceiptFilterOutput } from "./CreateReceiptFilterOutput";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateReceiptFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReceiptFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReceiptFilterInput
  },
  output: {
    shape: CreateReceiptFilterOutput,
    resultWrapper: "CreateReceiptFilterResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: AlreadyExistsException
    }
  ]
};
