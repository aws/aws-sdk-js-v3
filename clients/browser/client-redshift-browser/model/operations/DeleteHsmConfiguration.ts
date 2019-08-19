import { DeleteHsmConfigurationInput } from "../shapes/DeleteHsmConfigurationInput";
import { DeleteHsmConfigurationOutput } from "../shapes/DeleteHsmConfigurationOutput";
import { InvalidHsmConfigurationStateFault } from "../shapes/InvalidHsmConfigurationStateFault";
import { HsmConfigurationNotFoundFault } from "../shapes/HsmConfigurationNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteHsmConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHsmConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteHsmConfigurationInput
  },
  output: {
    shape: DeleteHsmConfigurationOutput
  },
  errors: [
    {
      shape: InvalidHsmConfigurationStateFault
    },
    {
      shape: HsmConfigurationNotFoundFault
    }
  ]
};
