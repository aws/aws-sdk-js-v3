import { _AttributeKey } from "./_AttributeKey";
import { _ObjectAttributeAction } from "./_ObjectAttributeAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectAttributeUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ObjectAttributeKey: {
      shape: _AttributeKey
    },
    ObjectAttributeAction: {
      shape: _ObjectAttributeAction
    }
  }
};
