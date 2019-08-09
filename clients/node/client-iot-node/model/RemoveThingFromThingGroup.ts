import { RemoveThingFromThingGroupInput } from "./RemoveThingFromThingGroupInput";
import { RemoveThingFromThingGroupOutput } from "./RemoveThingFromThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveThingFromThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveThingFromThingGroup",
  http: {
    method: "PUT",
    requestUri: "/thing-groups/removeThingFromThingGroup"
  },
  input: {
    shape: RemoveThingFromThingGroupInput
  },
  output: {
    shape: RemoveThingFromThingGroupOutput
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
