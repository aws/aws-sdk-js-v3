import { Map as _Map_ } from "@aws-sdk/types";
import { _MaintenanceWindowTaskParameterValueExpression } from "./_MaintenanceWindowTaskParameterValueExpression";

export const _MaintenanceWindowTaskParameters: _Map_ = {
  type: "map",
  sensitive: true,
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _MaintenanceWindowTaskParameterValueExpression
  }
};
