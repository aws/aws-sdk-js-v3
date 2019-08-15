import { SearchAddressBooksInput } from "../shapes/SearchAddressBooksInput";
import { SearchAddressBooksOutput } from "../shapes/SearchAddressBooksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchAddressBooks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchAddressBooks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchAddressBooksInput
  },
  output: {
    shape: SearchAddressBooksOutput
  },
  errors: []
};
