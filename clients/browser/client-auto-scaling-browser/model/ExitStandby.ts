import { ExitStandbyInput } from "./ExitStandbyInput";
import { ExitStandbyOutput } from "./ExitStandbyOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ExitStandby: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExitStandby",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExitStandbyInput
  },
  output: {
    shape: ExitStandbyOutput,
    resultWrapper: "ExitStandbyResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
