import { _PlatformTypeList } from "./_PlatformTypeList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    VersionName: {
      shape: {
        type: "string"
      }
    },
    PlatformTypes: {
      shape: _PlatformTypeList
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    DocumentType: {
      shape: {
        type: "string"
      }
    },
    SchemaVersion: {
      shape: {
        type: "string"
      }
    },
    DocumentFormat: {
      shape: {
        type: "string"
      }
    },
    TargetType: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
