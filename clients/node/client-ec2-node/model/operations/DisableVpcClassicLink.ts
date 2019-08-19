import { DisableVpcClassicLinkInput } from "../shapes/DisableVpcClassicLinkInput";
import { DisableVpcClassicLinkOutput } from "../shapes/DisableVpcClassicLinkOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableVpcClassicLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableVpcClassicLink",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableVpcClassicLinkInput
  },
  output: {
    shape: DisableVpcClassicLinkOutput
  },
  errors: []
};
