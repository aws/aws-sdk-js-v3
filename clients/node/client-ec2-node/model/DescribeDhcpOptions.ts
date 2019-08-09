import { DescribeDhcpOptionsInput } from "./DescribeDhcpOptionsInput";
import { DescribeDhcpOptionsOutput } from "./DescribeDhcpOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDhcpOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDhcpOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDhcpOptionsInput
  },
  output: {
    shape: DescribeDhcpOptionsOutput
  },
  errors: []
};
