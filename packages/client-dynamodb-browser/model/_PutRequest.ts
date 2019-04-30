import { _PutItemInputAttributeMap } from "./_PutItemInputAttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PutRequest: _Structure_ = {
  type: "structure",
  required: ["Item"],
  members: {
    Item: {
      shape: _PutItemInputAttributeMap
    }
  }
};
