import { CreateThingGroupInput } from "./CreateThingGroupInput";
import { CreateThingGroupOutput } from "./CreateThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
