import { IndexDocumentsInput } from "../shapes/IndexDocumentsInput";
import { IndexDocumentsOutput } from "../shapes/IndexDocumentsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
