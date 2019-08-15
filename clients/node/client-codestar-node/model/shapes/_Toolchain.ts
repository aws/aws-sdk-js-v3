import { _ToolchainSource } from "./_ToolchainSource";
import { _TemplateParameterMap } from "./_TemplateParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Toolchain: _Structure_ = {
  type: "structure",
  required: ["source"],
  members: {
    source: {
      shape: _ToolchainSource
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stackParameters: {
      shape: _TemplateParameterMap
    }
  }
};
