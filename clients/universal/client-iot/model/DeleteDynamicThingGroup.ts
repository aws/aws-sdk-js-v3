import { DeleteDynamicThingGroupInput } from "./DeleteDynamicThingGroupInput";
import { DeleteDynamicThingGroupOutput } from "./DeleteDynamicThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
