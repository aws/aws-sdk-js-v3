import { DescribeCopyProductStatusInput } from "../shapes/DescribeCopyProductStatusInput";
import { DescribeCopyProductStatusOutput } from "../shapes/DescribeCopyProductStatusOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
