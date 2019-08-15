import { CreateThingGroupInput } from "../shapes/CreateThingGroupInput";
import { CreateThingGroupOutput } from "../shapes/CreateThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateThingGroup",
  http: {
    method: "POST",
    requestUri: "/thing-groups/{thingGroupName}"
  },
  input: {
    shape: CreateThingGroupInput
  },
  output: {
    shape: CreateThingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
