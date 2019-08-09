import { _Locale } from "./_Locale";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Qualification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GrantTime: {
      shape: {
        type: "timestamp"
      }
    },
    IntegerValue: {
      shape: {
        type: "integer"
      }
    },
    LocaleValue: {
      shape: _Locale
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
