import { _StringSetAttributeValue } from "./_StringSetAttributeValue";
import { _NumberSetAttributeValue } from "./_NumberSetAttributeValue";
import { _BinarySetAttributeValue } from "./_BinarySetAttributeValue";
import { _MapAttributeValue } from "./_MapAttributeValue";
import { _ListAttributeValue } from "./_ListAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S: {
      shape: {
        type: "string"
      }
    },
    N: {
      shape: {
        type: "string"
      }
    },
    B: {
      shape: {
        type: "blob"
      }
    },
    SS: {
      shape: _StringSetAttributeValue
    },
    NS: {
      shape: _NumberSetAttributeValue
    },
    BS: {
      shape: _BinarySetAttributeValue
    },
    M: {
      shape: _MapAttributeValue
    },
    L: {
      shape: _ListAttributeValue
    },
    NULL: {
      shape: {
        type: "boolean"
      }
    },
    BOOL: {
      shape: {
        type: "boolean"
      }
    }
  }
};
