import { _ConfigurationIdList } from "./_ConfigurationIdList";
import { _TagSet } from "./_TagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTagsInput: _Structure_ = {
  type: "structure",
  required: ["configurationIds"],
  members: {
    configurationIds: {
      shape: _ConfigurationIdList
    },
    tags: {
      shape: _TagSet
    }
  }
};
