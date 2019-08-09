import { DeleteOptionGroupInput } from "./DeleteOptionGroupInput";
import { DeleteOptionGroupOutput } from "./DeleteOptionGroupOutput";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { InvalidOptionGroupStateFault } from "./InvalidOptionGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
