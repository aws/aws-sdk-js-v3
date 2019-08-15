import { ListOnPremisesInstancesInput } from "../shapes/ListOnPremisesInstancesInput";
import { ListOnPremisesInstancesOutput } from "../shapes/ListOnPremisesInstancesOutput";
import { InvalidRegistrationStatusException } from "../shapes/InvalidRegistrationStatusException";
import { InvalidTagFilterException } from "../shapes/InvalidTagFilterException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOnPremisesInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOnPremisesInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOnPremisesInstancesInput
  },
  output: {
    shape: ListOnPremisesInstancesOutput
  },
  errors: [
    {
      shape: InvalidRegistrationStatusException
    },
    {
      shape: InvalidTagFilterException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
