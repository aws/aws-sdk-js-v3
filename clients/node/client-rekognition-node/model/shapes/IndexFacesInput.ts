import { _Image } from "./_Image";
import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IndexFacesInput: _Structure_ = {
  type: "structure",
  required: ["CollectionId", "Image"],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Image: {
      shape: _Image
    },
    ExternalImageId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DetectionAttributes: {
      shape: _Attributes
    },
    MaxFaces: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    QualityFilter: {
      shape: {
        type: "string"
      }
    }
  }
};
