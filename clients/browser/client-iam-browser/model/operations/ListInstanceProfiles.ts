import { ListInstanceProfilesInput } from "../shapes/ListInstanceProfilesInput";
import { ListInstanceProfilesOutput } from "../shapes/ListInstanceProfilesOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInstanceProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInstanceProfiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInstanceProfilesInput
  },
  output: {
    shape: ListInstanceProfilesOutput,
    resultWrapper: "ListInstanceProfilesResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
