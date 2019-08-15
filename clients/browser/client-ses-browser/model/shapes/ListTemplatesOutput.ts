import { _TemplateMetadataList } from "./_TemplateMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTemplatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplatesMetadata: {
      shape: _TemplateMetadataList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
