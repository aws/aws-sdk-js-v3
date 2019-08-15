import { GetMetricWidgetImageInput } from "../shapes/GetMetricWidgetImageInput";
import { GetMetricWidgetImageOutput } from "../shapes/GetMetricWidgetImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
