import { CreateReservedInstancesListingInput } from "./CreateReservedInstancesListingInput";
import { CreateReservedInstancesListingOutput } from "./CreateReservedInstancesListingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateReservedInstancesListing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReservedInstancesListing",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReservedInstancesListingInput
  },
  output: {
    shape: CreateReservedInstancesListingOutput
  },
  errors: []
};
