import { _TemplateParameters } from "./_TemplateParameters";
import { _Capabilities } from "./_Capabilities";
import { _TransformsList } from "./_TransformsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _TemplateParameters
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Capabilities: {
      shape: _Capabilities
    },
    CapabilitiesReason: {
      shape: {
        type: "string"
      }
    },
    DeclaredTransforms: {
      shape: _TransformsList
    }
  }
};
