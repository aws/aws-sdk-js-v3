import { _InspectorServiceAttributes } from "./_InspectorServiceAttributes";
import { _AssetAttributes } from "./_AssetAttributes";
import { _AttributeList } from "./_AttributeList";
import { _UserAttributeList } from "./_UserAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Finding: _Structure_ = {
  type: "structure",
  required: ["arn", "attributes", "userAttributes", "createdAt", "updatedAt"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    schemaVersion: {
      shape: {
        type: "integer"
      }
    },
    service: {
      shape: {
        type: "string"
      }
    },
    serviceAttributes: {
      shape: _InspectorServiceAttributes
    },
    assetType: {
      shape: {
        type: "string"
      }
    },
    assetAttributes: {
      shape: _AssetAttributes
    },
    id: {
      shape: {
        type: "string"
      }
    },
    title: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    recommendation: {
      shape: {
        type: "string"
      }
    },
    severity: {
      shape: {
        type: "string"
      }
    },
    numericSeverity: {
      shape: {
        type: "float"
      }
    },
    confidence: {
      shape: {
        type: "integer"
      }
    },
    indicatorOfCompromise: {
      shape: {
        type: "boolean"
      }
    },
    attributes: {
      shape: _AttributeList
    },
    userAttributes: {
      shape: _UserAttributeList
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    updatedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
