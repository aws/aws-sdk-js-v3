import { RemoveTagsFromOnPremisesInstancesInput } from "./RemoveTagsFromOnPremisesInstancesInput";
import { RemoveTagsFromOnPremisesInstancesOutput } from "./RemoveTagsFromOnPremisesInstancesOutput";
import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { TagRequiredException } from "./TagRequiredException";
import { InvalidTagException } from "./InvalidTagException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { InstanceLimitExceededException } from "./InstanceLimitExceededException";
import { InstanceNotRegisteredException } from "./InstanceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveTagsFromOnPremisesInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromOnPremisesInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromOnPremisesInstancesInput
  },
  output: {
    shape: RemoveTagsFromOnPremisesInstancesOutput
  },
  errors: [
    {
      shape: InstanceNameRequiredException
    },
    {
      shape: InvalidInstanceNameException
    },
    {
      shape: TagRequiredException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: TagLimitExceededException
    },
    {
      shape: InstanceLimitExceededException
    },
    {
      shape: InstanceNotRegisteredException
    }
  ]
};
