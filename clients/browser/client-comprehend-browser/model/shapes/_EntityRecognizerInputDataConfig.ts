import { _EntityTypesList } from "./_EntityTypesList";
import { _EntityRecognizerDocuments } from "./_EntityRecognizerDocuments";
import { _EntityRecognizerAnnotations } from "./_EntityRecognizerAnnotations";
import { _EntityRecognizerEntityList } from "./_EntityRecognizerEntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityRecognizerInputDataConfig: _Structure_ = {
  type: "structure",
  required: ["EntityTypes", "Documents"],
  members: {
    EntityTypes: {
      shape: _EntityTypesList
    },
    Documents: {
      shape: _EntityRecognizerDocuments
    },
    Annotations: {
      shape: _EntityRecognizerAnnotations
    },
    EntityList: {
      shape: _EntityRecognizerEntityList
    }
  }
};
