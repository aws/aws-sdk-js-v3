import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowTaskParameters } from "./_MaintenanceWindowTaskParameters";

export const _MaintenanceWindowTaskParametersList: _List_ = {
  type: "list",
  sensitive: true,
  member: {
    shape: _MaintenanceWindowTaskParameters
  }
};
