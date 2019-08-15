import { GetObjectLegalHoldInput } from "../shapes/GetObjectLegalHoldInput";
import { GetObjectLegalHoldOutput } from "../shapes/GetObjectLegalHoldOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetObjectLegalHold: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObjectLegalHold",
  http: {
    method: "GET",
    requestUri: "/{Bucket}/{Key+}?legal-hold"
  },
  input: {
    shape: GetObjectLegalHoldInput
  },
  output: {
    shape: GetObjectLegalHoldOutput
  },
  errors: []
};
