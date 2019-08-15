import { _ConfigurationList } from "./_ConfigurationList";
import { _StringMap } from "./_StringMap";
import { Structure as _Structure_ } from "@aws-sdk/types";
import { Member as _Member_ } from "@aws-sdk/types";

export const _Configuration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Classification: {
      shape: {
        type: "string"
      }
    },
    get Configurations(): _Member_ {
      Object.defineProperty(_Configuration, "Configurations", {
        value: {
          shape: _ConfigurationList
        }
      });
      return {
        shape: _ConfigurationList
      };
    },
    Properties: {
      shape: _StringMap
    }
  }
};
