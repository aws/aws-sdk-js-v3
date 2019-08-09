import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRandomPasswordInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PasswordLength: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ExcludeCharacters: {
      shape: {
        type: "string"
      }
    },
    ExcludeNumbers: {
      shape: {
        type: "boolean"
      }
    },
    ExcludePunctuation: {
      shape: {
        type: "boolean"
      }
    },
    ExcludeUppercase: {
      shape: {
        type: "boolean"
      }
    },
    ExcludeLowercase: {
      shape: {
        type: "boolean"
      }
    },
    IncludeSpace: {
      shape: {
        type: "boolean"
      }
    },
    RequireEachIncludedType: {
      shape: {
        type: "boolean"
      }
    }
  }
};
