import { ListNetworkProfilesInput } from "./ListNetworkProfilesInput";
import { ListNetworkProfilesOutput } from "./ListNetworkProfilesOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListNetworkProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNetworkProfiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListNetworkProfilesInput
  },
  output: {
    shape: ListNetworkProfilesOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
