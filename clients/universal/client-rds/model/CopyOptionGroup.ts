import { CopyOptionGroupInput } from "./CopyOptionGroupInput";
import { CopyOptionGroupOutput } from "./CopyOptionGroupOutput";
import { OptionGroupAlreadyExistsFault } from "./OptionGroupAlreadyExistsFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { OptionGroupQuotaExceededFault } from "./OptionGroupQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
