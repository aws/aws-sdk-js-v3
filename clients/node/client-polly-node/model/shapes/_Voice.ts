import { _LanguageCodeList } from "./_LanguageCodeList";
import { _EngineList } from "./_EngineList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Voice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Gender: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    LanguageName: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    AdditionalLanguageCodes: {
      shape: _LanguageCodeList
    },
    SupportedEngines: {
      shape: _EngineList
    }
  }
};
