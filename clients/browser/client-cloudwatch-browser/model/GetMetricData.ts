import { GetMetricDataInput } from "./GetMetricDataInput";
import { GetMetricDataOutput } from "./GetMetricDataOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMetricData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMetricData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMetricDataInput
  },
  output: {
    shape: GetMetricDataOutput,
    resultWrapper: "GetMetricDataResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    }
  ]
};
