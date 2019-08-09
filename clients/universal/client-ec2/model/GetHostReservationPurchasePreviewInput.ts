import { _RequestHostIdSet } from "./_RequestHostIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHostReservationPurchasePreviewInput: _Structure_ = {
  type: "structure",
  required: ["HostIdSet", "OfferingId"],
  members: {
    HostIdSet: {
      shape: _RequestHostIdSet
    },
    OfferingId: {
      shape: {
        type: "string"
      }
    }
  }
};
