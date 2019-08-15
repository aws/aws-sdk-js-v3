import { SearchFlowTemplatesInput } from "../shapes/SearchFlowTemplatesInput";
import { SearchFlowTemplatesOutput } from "../shapes/SearchFlowTemplatesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
