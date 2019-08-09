import { DescribePatchGroupStateInput } from "./DescribePatchGroupStateInput";
import { DescribePatchGroupStateOutput } from "./DescribePatchGroupStateOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
