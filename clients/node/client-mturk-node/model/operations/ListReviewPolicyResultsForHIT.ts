import { ListReviewPolicyResultsForHITInput } from "../shapes/ListReviewPolicyResultsForHITInput";
import { ListReviewPolicyResultsForHITOutput } from "../shapes/ListReviewPolicyResultsForHITOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListReviewPolicyResultsForHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListReviewPolicyResultsForHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListReviewPolicyResultsForHITInput
  },
  output: {
    shape: ListReviewPolicyResultsForHITOutput
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
