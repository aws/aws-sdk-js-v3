import { DescribePatchPropertiesInput } from "../shapes/DescribePatchPropertiesInput";
import { DescribePatchPropertiesOutput } from "../shapes/DescribePatchPropertiesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePatchProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePatchProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePatchPropertiesInput
  },
  output: {
    shape: DescribePatchPropertiesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
