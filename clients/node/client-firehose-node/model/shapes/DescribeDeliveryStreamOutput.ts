import { _DeliveryStreamDescription } from "./_DeliveryStreamDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeliveryStreamOutput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamDescription"],
  members: {
    DeliveryStreamDescription: {
      shape: _DeliveryStreamDescription
    }
  }
};
