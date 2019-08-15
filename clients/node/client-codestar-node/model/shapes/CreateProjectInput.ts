import { _SourceCode } from "./_SourceCode";
import { _Toolchain } from "./_Toolchain";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProjectInput: _Structure_ = {
  type: "structure",
  required: ["name", "id"],
  members: {
    name: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    id: {
      shape: {
        type: "string",
        min: 2
      }
    },
    description: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sourceCode: {
      shape: _SourceCode
    },
    toolchain: {
      shape: _Toolchain
    },
    tags: {
      shape: _Tags
    }
  }
};
