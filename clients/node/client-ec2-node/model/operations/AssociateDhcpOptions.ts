import { AssociateDhcpOptionsInput } from "../shapes/AssociateDhcpOptionsInput";
import { AssociateDhcpOptionsOutput } from "../shapes/AssociateDhcpOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDhcpOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDhcpOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDhcpOptionsInput
  },
  output: {
    shape: AssociateDhcpOptionsOutput
  },
  errors: []
};
