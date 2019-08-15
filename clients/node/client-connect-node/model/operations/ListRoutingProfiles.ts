import { ListRoutingProfilesInput } from "../shapes/ListRoutingProfilesInput";
import { ListRoutingProfilesOutput } from "../shapes/ListRoutingProfilesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRoutingProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoutingProfiles",
  http: {
    method: "GET",
    requestUri: "/routing-profiles-summary/{InstanceId}"
  },
  input: {
    shape: ListRoutingProfilesInput
  },
  output: {
    shape: ListRoutingProfilesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceException
    }
  ]
};
