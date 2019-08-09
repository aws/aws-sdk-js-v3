import { _ParameterConstraints } from "./_ParameterConstraints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifactParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    ParameterType: {
      shape: {
        type: "string"
      }
    },
    IsNoEcho: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ParameterConstraints: {
      shape: _ParameterConstraints
    }
  }
};
