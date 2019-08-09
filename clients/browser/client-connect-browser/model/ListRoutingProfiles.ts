import { ListRoutingProfilesInput } from "./ListRoutingProfilesInput";
import { ListRoutingProfilesOutput } from "./ListRoutingProfilesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
