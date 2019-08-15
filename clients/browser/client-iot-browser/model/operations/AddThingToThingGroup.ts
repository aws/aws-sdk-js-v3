import { AddThingToThingGroupInput } from "../shapes/AddThingToThingGroupInput";
import { AddThingToThingGroupOutput } from "../shapes/AddThingToThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
