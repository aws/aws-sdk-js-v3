import { EnterStandbyInput } from "../shapes/EnterStandbyInput";
import { EnterStandbyOutput } from "../shapes/EnterStandbyOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnterStandby: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnterStandby",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnterStandbyInput
  },
  output: {
    shape: EnterStandbyOutput,
    resultWrapper: "EnterStandbyResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
