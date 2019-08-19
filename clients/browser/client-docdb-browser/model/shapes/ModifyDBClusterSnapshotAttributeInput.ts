import { _AttributeValueList } from "./_AttributeValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBClusterSnapshotAttributeInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterSnapshotIdentifier", "AttributeName"],
  members: {
    DBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    AttributeName: {
      shape: {
        type: "string"
      }
    },
    ValuesToAdd: {
      shape: _AttributeValueList
    },
    ValuesToRemove: {
      shape: _AttributeValueList
    }
  }
};
