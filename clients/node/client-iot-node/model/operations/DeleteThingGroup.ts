import { DeleteThingGroupInput } from "../shapes/DeleteThingGroupInput";
import { DeleteThingGroupOutput } from "../shapes/DeleteThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
