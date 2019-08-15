import { CopyOptionGroupInput } from "../shapes/CopyOptionGroupInput";
import { CopyOptionGroupOutput } from "../shapes/CopyOptionGroupOutput";
import { OptionGroupAlreadyExistsFault } from "../shapes/OptionGroupAlreadyExistsFault";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { OptionGroupQuotaExceededFault } from "../shapes/OptionGroupQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyOptionGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyOptionGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyOptionGroupInput
  },
  output: {
    shape: CopyOptionGroupOutput,
    resultWrapper: "CopyOptionGroupResult"
  },
  errors: [
    {
      shape: OptionGroupAlreadyExistsFault
    },
    {
      shape: OptionGroupNotFoundFault
    },
    {
      shape: OptionGroupQuotaExceededFault
    }
  ]
};
