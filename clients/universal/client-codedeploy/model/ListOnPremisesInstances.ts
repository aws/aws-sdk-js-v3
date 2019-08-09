import { ListOnPremisesInstancesInput } from "./ListOnPremisesInstancesInput";
import { ListOnPremisesInstancesOutput } from "./ListOnPremisesInstancesOutput";
import { InvalidRegistrationStatusException } from "./InvalidRegistrationStatusException";
import { InvalidTagFilterException } from "./InvalidTagFilterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
