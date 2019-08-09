import { DeleteHsmConfigurationInput } from "./DeleteHsmConfigurationInput";
import { DeleteHsmConfigurationOutput } from "./DeleteHsmConfigurationOutput";
import { InvalidHsmConfigurationStateFault } from "./InvalidHsmConfigurationStateFault";
import { HsmConfigurationNotFoundFault } from "./HsmConfigurationNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
