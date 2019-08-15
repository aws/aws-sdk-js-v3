import { GetSendStatisticsInput } from "../shapes/GetSendStatisticsInput";
import { GetSendStatisticsOutput } from "../shapes/GetSendStatisticsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSendStatistics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSendStatistics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSendStatisticsInput
  },
  output: {
    shape: GetSendStatisticsOutput,
    resultWrapper: "GetSendStatisticsResult"
  },
  errors: []
};
