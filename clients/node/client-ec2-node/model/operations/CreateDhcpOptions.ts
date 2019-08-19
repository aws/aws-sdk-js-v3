import { CreateDhcpOptionsInput } from "../shapes/CreateDhcpOptionsInput";
import { CreateDhcpOptionsOutput } from "../shapes/CreateDhcpOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDhcpOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDhcpOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDhcpOptionsInput
  },
  output: {
    shape: CreateDhcpOptionsOutput
  },
  errors: []
};
