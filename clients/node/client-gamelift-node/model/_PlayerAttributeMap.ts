import { Map as _Map_ } from "@aws-sdk/types";
import { _AttributeValue } from "./_AttributeValue";

export const _PlayerAttributeMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _AttributeValue
  }
};
