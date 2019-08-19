import { _HandshakeResources } from "./_HandshakeResources";
import { Structure as _Structure_ } from "@aws-sdk/types";
import { Member as _Member_ } from "@aws-sdk/types";

export const _HandshakeResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    get Resources(): _Member_ {
      Object.defineProperty(_HandshakeResource, "Resources", {
        value: {
          shape: _HandshakeResources
        }
      });
      return {
        shape: _HandshakeResources
      };
    }
  }
};
