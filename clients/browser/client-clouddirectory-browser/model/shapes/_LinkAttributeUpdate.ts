import { _AttributeKey } from "./_AttributeKey";
import { _LinkAttributeAction } from "./_LinkAttributeAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LinkAttributeUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeKey: {
      shape: _AttributeKey
    },
    AttributeAction: {
      shape: _LinkAttributeAction
    }
  }
};
