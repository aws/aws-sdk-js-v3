import { ModifyOptionGroupInput } from "./ModifyOptionGroupInput";
import { ModifyOptionGroupOutput } from "./ModifyOptionGroupOutput";
import { InvalidOptionGroupStateFault } from "./InvalidOptionGroupStateFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
