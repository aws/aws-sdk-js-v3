import { AddTagsToOnPremisesInstancesInput } from "../shapes/AddTagsToOnPremisesInstancesInput";
import { AddTagsToOnPremisesInstancesOutput } from "../shapes/AddTagsToOnPremisesInstancesOutput";
import { InstanceNameRequiredException } from "../shapes/InstanceNameRequiredException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { TagRequiredException } from "../shapes/TagRequiredException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { TagLimitExceededException } from "../shapes/TagLimitExceededException";
import { InstanceLimitExceededException } from "../shapes/InstanceLimitExceededException";
import { InstanceNotRegisteredException } from "../shapes/InstanceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTagsToOnPremisesInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToOnPremisesInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsToOnPremisesInstancesInput
  },
  output: {
    shape: AddTagsToOnPremisesInstancesOutput
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
