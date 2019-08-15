import { CreateFleetInput } from "../shapes/CreateFleetInput";
import { CreateFleetOutput } from "../shapes/CreateFleetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFleetInput
  },
  output: {
    shape: CreateFleetOutput
  },
  errors: []
};
