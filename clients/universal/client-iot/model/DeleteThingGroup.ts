import { DeleteThingGroupInput } from "./DeleteThingGroupInput";
import { DeleteThingGroupOutput } from "./DeleteThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteThingGroup",
  http: {
    method: "DELETE",
    requestUri: "/thing-groups/{thingGroupName}"
  },
  input: {
    shape: DeleteThingGroupInput
  },
  output: {
    shape: DeleteThingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: VersionConflictException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
