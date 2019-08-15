import { ListVerifiedEmailAddressesInput } from "../shapes/ListVerifiedEmailAddressesInput";
import { ListVerifiedEmailAddressesOutput } from "../shapes/ListVerifiedEmailAddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVerifiedEmailAddresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVerifiedEmailAddresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVerifiedEmailAddressesInput
  },
  output: {
    shape: ListVerifiedEmailAddressesOutput,
    resultWrapper: "ListVerifiedEmailAddressesResult"
  },
  errors: []
};
