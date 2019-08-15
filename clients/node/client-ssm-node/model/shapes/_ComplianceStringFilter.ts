import { _ComplianceStringFilterValueList } from "./_ComplianceStringFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceStringFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _ComplianceStringFilterValueList
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
