import { UpdateHITReviewStatusInput } from "./UpdateHITReviewStatusInput";
import { UpdateHITReviewStatusOutput } from "./UpdateHITReviewStatusOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
