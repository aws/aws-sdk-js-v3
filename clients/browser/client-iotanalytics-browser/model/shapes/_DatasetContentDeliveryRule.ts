import { _DatasetContentDeliveryDestination } from "./_DatasetContentDeliveryDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetContentDeliveryRule: _Structure_ = {
  type: "structure",
  required: ["destination"],
  members: {
    entryName: {
      shape: {
        type: "string"
      }
    },
    destination: {
      shape: _DatasetContentDeliveryDestination
    }
  }
};
