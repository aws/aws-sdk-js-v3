import { ListDocumentClassifiersInput } from "./ListDocumentClassifiersInput";
import { ListDocumentClassifiersOutput } from "./ListDocumentClassifiersOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDocumentClassifiers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDocumentClassifiers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDocumentClassifiersInput
  },
  output: {
    shape: ListDocumentClassifiersOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidFilterException
    },
    {
      shape: InternalServerException
    }
  ]
};
