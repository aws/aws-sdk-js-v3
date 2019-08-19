import { DeleteOptionGroupInput } from "../shapes/DeleteOptionGroupInput";
import { DeleteOptionGroupOutput } from "../shapes/DeleteOptionGroupOutput";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { InvalidOptionGroupStateFault } from "../shapes/InvalidOptionGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteOptionGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOptionGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteOptionGroupInput
  },
  output: {
    shape: DeleteOptionGroupOutput
  },
  errors: [
    {
      shape: OptionGroupNotFoundFault
    },
    {
      shape: InvalidOptionGroupStateFault
    }
  ]
};
