import { DescribePatchGroupStateInput } from "../shapes/DescribePatchGroupStateInput";
import { DescribePatchGroupStateOutput } from "../shapes/DescribePatchGroupStateOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePatchGroupState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePatchGroupState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePatchGroupStateInput
  },
  output: {
    shape: DescribePatchGroupStateOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    }
  ]
};
