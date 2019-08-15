import { _AddRemoveAttributesFindingArnList } from "./_AddRemoveAttributesFindingArnList";
import { _UserAttributeKeyList } from "./_UserAttributeKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAttributesFromFindingsInput: _Structure_ = {
  type: "structure",
  required: ["findingArns", "attributeKeys"],
  members: {
    findingArns: {
      shape: _AddRemoveAttributesFindingArnList
    },
    attributeKeys: {
      shape: _UserAttributeKeyList
    }
  }
};
