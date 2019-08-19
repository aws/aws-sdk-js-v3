import { DescribeCommunicationsInput } from "../shapes/DescribeCommunicationsInput";
import { DescribeCommunicationsOutput } from "../shapes/DescribeCommunicationsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { CaseIdNotFound } from "../shapes/CaseIdNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCommunications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCommunications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCommunicationsInput
  },
  output: {
    shape: DescribeCommunicationsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: CaseIdNotFound
    }
  ]
};
