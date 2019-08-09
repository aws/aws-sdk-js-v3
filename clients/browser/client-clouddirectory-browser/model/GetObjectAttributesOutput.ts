import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _AttributeKeyAndValueList
    }
  }
};
