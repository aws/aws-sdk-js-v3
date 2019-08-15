import { _IntegerList } from "./_IntegerList";
import { _LocaleList } from "./_LocaleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QualificationRequirement: _Structure_ = {
  type: "structure",
  required: ["QualificationTypeId", "Comparator"],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string"
      }
    },
    Comparator: {
      shape: {
        type: "string"
      }
    },
    IntegerValues: {
      shape: _IntegerList
    },
    LocaleValues: {
      shape: _LocaleList
    },
    RequiredToPreview: {
      shape: {
        type: "boolean"
      }
    },
    ActionsGuarded: {
      shape: {
        type: "string"
      }
    }
  }
};
