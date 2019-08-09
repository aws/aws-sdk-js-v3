import { IndexDocumentsInput } from "./IndexDocumentsInput";
import { IndexDocumentsOutput } from "./IndexDocumentsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const IndexDocuments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "IndexDocuments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: IndexDocumentsInput
  },
  output: {
    shape: IndexDocumentsOutput,
    resultWrapper: "IndexDocumentsResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
