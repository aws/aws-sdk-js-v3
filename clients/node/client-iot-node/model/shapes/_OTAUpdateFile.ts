import { _FileLocation } from "./_FileLocation";
import { _CodeSigning } from "./_CodeSigning";
import { _AttributesMap } from "./_AttributesMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OTAUpdateFile: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fileName: {
      shape: {
        type: "string"
      }
    },
    fileVersion: {
      shape: {
        type: "string"
      }
    },
    fileLocation: {
      shape: _FileLocation
    },
    codeSigning: {
      shape: _CodeSigning
    },
    attributes: {
      shape: _AttributesMap
    }
  }
};
