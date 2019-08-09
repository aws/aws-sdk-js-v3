import { ViewBillingInput } from "./ViewBillingInput";
import { ViewBillingOutput } from "./ViewBillingOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ViewBilling: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ViewBilling",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ViewBillingInput
  },
  output: {
    shape: ViewBillingOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
