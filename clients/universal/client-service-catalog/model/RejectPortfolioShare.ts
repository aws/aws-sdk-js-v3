import { RejectPortfolioShareInput } from "./RejectPortfolioShareInput";
import { RejectPortfolioShareOutput } from "./RejectPortfolioShareOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectPortfolioShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectPortfolioShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectPortfolioShareInput
  },
  output: {
    shape: RejectPortfolioShareOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
