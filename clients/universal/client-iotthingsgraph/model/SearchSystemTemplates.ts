import { SearchSystemTemplatesInput } from "./SearchSystemTemplatesInput";
import { SearchSystemTemplatesOutput } from "./SearchSystemTemplatesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SearchSystemTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchSystemTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchSystemTemplatesInput
  },
  output: {
    shape: SearchSystemTemplatesOutput
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
