import { ListDocumentClassifiersInput } from "../shapes/ListDocumentClassifiersInput";
import { ListDocumentClassifiersOutput } from "../shapes/ListDocumentClassifiersOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
