import { _BillingRecords } from "./_BillingRecords";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ViewBillingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextPageMarker: {
      shape: {
        type: "string"
      }
    },
    BillingRecords: {
      shape: _BillingRecords
    }
  }
};
