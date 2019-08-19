import { ListReviewableHITsInput } from "../shapes/ListReviewableHITsInput";
import { ListReviewableHITsOutput } from "../shapes/ListReviewableHITsOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListReviewableHITs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListReviewableHITs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListReviewableHITsInput
  },
  output: {
    shape: ListReviewableHITsOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};
