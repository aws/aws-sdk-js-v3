import { DescribePatchBaselinesInput } from "../shapes/DescribePatchBaselinesInput";
import { DescribePatchBaselinesOutput } from "../shapes/DescribePatchBaselinesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePatchBaselines: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePatchBaselines",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePatchBaselinesInput
  },
  output: {
    shape: DescribePatchBaselinesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
