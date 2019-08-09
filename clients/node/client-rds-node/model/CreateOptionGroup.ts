import { CreateOptionGroupInput } from "./CreateOptionGroupInput";
import { CreateOptionGroupOutput } from "./CreateOptionGroupOutput";
import { OptionGroupAlreadyExistsFault } from "./OptionGroupAlreadyExistsFault";
import { OptionGroupQuotaExceededFault } from "./OptionGroupQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateOptionGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOptionGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateOptionGroupInput
  },
  output: {
    shape: CreateOptionGroupOutput,
    resultWrapper: "CreateOptionGroupResult"
  },
  errors: [
    {
      shape: OptionGroupAlreadyExistsFault
    },
    {
      shape: OptionGroupQuotaExceededFault
    }
  ]
};
