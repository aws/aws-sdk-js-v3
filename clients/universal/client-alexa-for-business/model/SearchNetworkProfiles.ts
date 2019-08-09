import { SearchNetworkProfilesInput } from "./SearchNetworkProfilesInput";
import { SearchNetworkProfilesOutput } from "./SearchNetworkProfilesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SearchNetworkProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchNetworkProfiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchNetworkProfilesInput
  },
  output: {
    shape: SearchNetworkProfilesOutput
  },
  errors: []
};
