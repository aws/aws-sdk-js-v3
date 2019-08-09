import { List as _List_ } from "@aws-sdk/types";
import { _UpdateProvisioningParameter } from "./_UpdateProvisioningParameter";

export const _UpdateProvisioningParameters: _List_ = {
  type: "list",
  member: {
    shape: _UpdateProvisioningParameter
  }
};
