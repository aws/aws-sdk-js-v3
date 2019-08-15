import { GenerateDataSetInput } from "../shapes/GenerateDataSetInput";
import { GenerateDataSetOutput } from "../shapes/GenerateDataSetOutput";
import { MarketplaceCommerceAnalyticsException } from "../shapes/MarketplaceCommerceAnalyticsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
