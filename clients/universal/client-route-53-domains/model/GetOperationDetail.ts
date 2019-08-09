import { GetOperationDetailInput } from "./GetOperationDetailInput";
import { GetOperationDetailOutput } from "./GetOperationDetailOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetOperationDetail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOperationDetail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOperationDetailInput
  },
  output: {
    shape: GetOperationDetailOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
