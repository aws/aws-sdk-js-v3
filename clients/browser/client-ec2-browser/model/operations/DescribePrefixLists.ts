import { DescribePrefixListsInput } from "../shapes/DescribePrefixListsInput";
import { DescribePrefixListsOutput } from "../shapes/DescribePrefixListsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePrefixLists: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePrefixLists",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePrefixListsInput
  },
  output: {
    shape: DescribePrefixListsOutput
  },
  errors: []
};
