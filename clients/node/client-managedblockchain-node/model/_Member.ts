import { _MemberFrameworkAttributes } from "./_MemberFrameworkAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Member: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    FrameworkAttributes: {
      shape: _MemberFrameworkAttributes
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
