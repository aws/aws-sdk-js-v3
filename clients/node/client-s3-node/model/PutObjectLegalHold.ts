import { PutObjectLegalHoldInput } from "./PutObjectLegalHoldInput";
import { PutObjectLegalHoldOutput } from "./PutObjectLegalHoldOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutObjectLegalHold: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutObjectLegalHold",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}?legal-hold"
  },
  input: {
    shape: PutObjectLegalHoldInput
  },
  output: {
    shape: PutObjectLegalHoldOutput
  },
  errors: []
};
