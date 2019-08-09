import { GetMetricWidgetImageInput } from "./GetMetricWidgetImageInput";
import { GetMetricWidgetImageOutput } from "./GetMetricWidgetImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMetricWidgetImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMetricWidgetImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMetricWidgetImageInput
  },
  output: {
    shape: GetMetricWidgetImageOutput,
    resultWrapper: "GetMetricWidgetImageResult"
  },
  errors: []
};
