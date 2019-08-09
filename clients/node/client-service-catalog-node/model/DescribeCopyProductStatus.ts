import { DescribeCopyProductStatusInput } from "./DescribeCopyProductStatusInput";
import { DescribeCopyProductStatusOutput } from "./DescribeCopyProductStatusOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCopyProductStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCopyProductStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCopyProductStatusInput
  },
  output: {
    shape: DescribeCopyProductStatusOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
