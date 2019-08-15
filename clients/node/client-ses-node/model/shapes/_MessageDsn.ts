import { _ExtensionFieldList } from "./_ExtensionFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageDsn: _Structure_ = {
  type: "structure",
  required: ["ReportingMta"],
  members: {
    ReportingMta: {
      shape: {
        type: "string"
      }
    },
    ArrivalDate: {
      shape: {
        type: "timestamp"
      }
    },
    ExtensionFields: {
      shape: _ExtensionFieldList
    }
  }
};
