import { _MaintenanceWindowTaskParameterValueList } from "./_MaintenanceWindowTaskParameterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowTaskParameterValueExpression: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Values: {
      shape: _MaintenanceWindowTaskParameterValueList
    }
  },
  sensitive: true
};
