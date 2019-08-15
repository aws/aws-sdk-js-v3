import { ModifyOptionGroupInput } from "../shapes/ModifyOptionGroupInput";
import { ModifyOptionGroupOutput } from "../shapes/ModifyOptionGroupOutput";
import { InvalidOptionGroupStateFault } from "../shapes/InvalidOptionGroupStateFault";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyOptionGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyOptionGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyOptionGroupInput
  },
  output: {
    shape: ModifyOptionGroupOutput,
    resultWrapper: "ModifyOptionGroupResult"
  },
  errors: [
    {
      shape: InvalidOptionGroupStateFault
    },
    {
      shape: OptionGroupNotFoundFault
    }
  ]
};
