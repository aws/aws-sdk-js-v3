import { EnableVpcClassicLinkInput } from "./EnableVpcClassicLinkInput";
import { EnableVpcClassicLinkOutput } from "./EnableVpcClassicLinkOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableVpcClassicLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableVpcClassicLink",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableVpcClassicLinkInput
  },
  output: {
    shape: EnableVpcClassicLinkOutput
  },
  errors: []
};
