import { _ParameterDeclarations } from "./_ParameterDeclarations";
import { _Capabilities } from "./_Capabilities";
import { _ResourceTypes } from "./_ResourceTypes";
import { _TransformsList } from "./_TransformsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTemplateSummaryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _ParameterDeclarations
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
    ResourceTypes: {
      shape: _ResourceTypes
    },
    Version: {
      shape: {
        type: "string"
      }
    },
    Metadata: {
      shape: {
        type: "string"
      }
    },
    DeclaredTransforms: {
      shape: _TransformsList
    }
  }
};
