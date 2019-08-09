import { SearchFlowTemplatesInput } from "./SearchFlowTemplatesInput";
import { SearchFlowTemplatesOutput } from "./SearchFlowTemplatesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SearchFlowTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchFlowTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchFlowTemplatesInput
  },
  output: {
    shape: SearchFlowTemplatesOutput
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
