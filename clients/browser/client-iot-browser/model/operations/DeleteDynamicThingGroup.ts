import { DeleteDynamicThingGroupInput } from "../shapes/DeleteDynamicThingGroupInput";
import { DeleteDynamicThingGroupOutput } from "../shapes/DeleteDynamicThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDynamicThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDynamicThingGroup",
  http: {
    method: "DELETE",
    requestUri: "/dynamic-thing-groups/{thingGroupName}"
  },
  input: {
    shape: DeleteDynamicThingGroupInput
  },
  output: {
    shape: DeleteDynamicThingGroupOutput
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
