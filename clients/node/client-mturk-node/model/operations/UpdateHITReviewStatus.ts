import { UpdateHITReviewStatusInput } from "../shapes/UpdateHITReviewStatusInput";
import { UpdateHITReviewStatusOutput } from "../shapes/UpdateHITReviewStatusOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateHITReviewStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateHITReviewStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateHITReviewStatusInput
  },
  output: {
    shape: UpdateHITReviewStatusOutput
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
