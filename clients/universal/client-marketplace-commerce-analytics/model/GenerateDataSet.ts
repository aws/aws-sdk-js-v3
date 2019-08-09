import { GenerateDataSetInput } from "./GenerateDataSetInput";
import { GenerateDataSetOutput } from "./GenerateDataSetOutput";
import { MarketplaceCommerceAnalyticsException } from "./MarketplaceCommerceAnalyticsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GenerateDataSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateDataSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateDataSetInput
  },
  output: {
    shape: GenerateDataSetOutput
  },
  errors: [
    {
      shape: MarketplaceCommerceAnalyticsException
    }
  ]
};
