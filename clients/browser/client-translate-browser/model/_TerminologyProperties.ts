import { _LanguageCodeStringList } from "./_LanguageCodeStringList";
import { _EncryptionKey } from "./_EncryptionKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TerminologyProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    Arn: {
      shape: {
        type: "string"
      }
    },
    SourceLanguageCode: {
      shape: {
        type: "string",
        min: 2
      }
    },
    TargetLanguageCodes: {
      shape: _LanguageCodeStringList
    },
    EncryptionKey: {
      shape: _EncryptionKey
    },
    SizeBytes: {
      shape: {
        type: "integer"
      }
    },
    TermCount: {
      shape: {
        type: "integer"
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
