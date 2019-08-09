import { ListSecurityProfilesForTargetInput } from "./ListSecurityProfilesForTargetInput";
import { ListSecurityProfilesForTargetOutput } from "./ListSecurityProfilesForTargetOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSecurityProfilesForTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSecurityProfilesForTarget",
  http: {
    method: "GET",
    requestUri: "/security-profiles-for-target"
  },
  input: {
    shape: ListSecurityProfilesForTargetInput
  },
  output: {
    shape: ListSecurityProfilesForTargetOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
