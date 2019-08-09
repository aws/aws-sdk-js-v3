import { List as _List_ } from "@aws-sdk/types";
import { _ProvisioningParameter } from "./_ProvisioningParameter";

export const _ProvisioningParameters: _List_ = {
  type: "list",
  member: {
    shape: _ProvisioningParameter
  }
};
