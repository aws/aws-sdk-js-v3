import { SearchSystemTemplatesInput } from "../shapes/SearchSystemTemplatesInput";
import { SearchSystemTemplatesOutput } from "../shapes/SearchSystemTemplatesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
