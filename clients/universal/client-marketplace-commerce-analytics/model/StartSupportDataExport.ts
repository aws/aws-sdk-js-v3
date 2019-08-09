import { StartSupportDataExportInput } from "./StartSupportDataExportInput";
import { StartSupportDataExportOutput } from "./StartSupportDataExportOutput";
import { MarketplaceCommerceAnalyticsException } from "./MarketplaceCommerceAnalyticsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartSupportDataExport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSupportDataExport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartSupportDataExportInput
  },
  output: {
    shape: StartSupportDataExportOutput
  },
  errors: [
    {
      shape: MarketplaceCommerceAnalyticsException
    }
  ]
};
