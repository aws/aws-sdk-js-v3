import { DescribePatchGroupsInput } from "../shapes/DescribePatchGroupsInput";
import { DescribePatchGroupsOutput } from "../shapes/DescribePatchGroupsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePatchGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePatchGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePatchGroupsInput
  },
  output: {
    shape: DescribePatchGroupsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
