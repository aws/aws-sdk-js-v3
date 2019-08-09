import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DevEndpointCustomLibraries: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExtraPythonLibsS3Path: {
      shape: {
        type: "string"
      }
    },
    ExtraJarsS3Path: {
      shape: {
        type: "string"
      }
    }
  }
};
