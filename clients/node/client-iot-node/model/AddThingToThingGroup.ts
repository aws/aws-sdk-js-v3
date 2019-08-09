import { AddThingToThingGroupInput } from "./AddThingToThingGroupInput";
import { AddThingToThingGroupOutput } from "./AddThingToThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddThingToThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddThingToThingGroup",
  http: {
    method: "PUT",
    requestUri: "/thing-groups/addThingToThingGroup"
  },
  input: {
    shape: AddThingToThingGroupInput
  },
  output: {
    shape: AddThingToThingGroupOutput
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
