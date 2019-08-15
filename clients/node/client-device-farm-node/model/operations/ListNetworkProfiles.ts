import { ListNetworkProfilesInput } from "../shapes/ListNetworkProfilesInput";
import { ListNetworkProfilesOutput } from "../shapes/ListNetworkProfilesOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
