import { List as _List_, Member as _Member_ } from "@aws-sdk/types";
import { _AttributeValue } from "./_AttributeValue";

export const _ListAttributeValue: _List_ = {
  type: "list",
  get member(): _Member_ {
    Object.defineProperty(_ListAttributeValue, "member", {
      value: {
        shape: _AttributeValue
      }
    });
    return {
      shape: _AttributeValue
    };
  }
};
