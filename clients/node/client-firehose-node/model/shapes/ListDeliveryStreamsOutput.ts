import { _DeliveryStreamNameList } from "./_DeliveryStreamNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeliveryStreamsOutput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamNames", "HasMoreDeliveryStreams"],
  members: {
    DeliveryStreamNames: {
      shape: _DeliveryStreamNameList
    },
    HasMoreDeliveryStreams: {
      shape: {
        type: "boolean"
      }
    }
  }
};
