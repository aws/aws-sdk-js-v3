import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Recipes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Setup: {
      shape: _Strings
    },
    Configure: {
      shape: _Strings
    },
    Deploy: {
      shape: _Strings
    },
    Undeploy: {
      shape: _Strings
    },
    Shutdown: {
      shape: _Strings
    }
  }
};
