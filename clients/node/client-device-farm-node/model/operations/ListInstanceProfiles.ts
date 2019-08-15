import { ListInstanceProfilesInput } from "../shapes/ListInstanceProfilesInput";
import { ListInstanceProfilesOutput } from "../shapes/ListInstanceProfilesOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
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
    shape: ListInstanceProfilesOutput
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
