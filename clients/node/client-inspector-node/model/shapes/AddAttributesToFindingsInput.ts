import { _AddRemoveAttributesFindingArnList } from "./_AddRemoveAttributesFindingArnList";
import { _UserAttributeList } from "./_UserAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddAttributesToFindingsInput: _Structure_ = {
  type: "structure",
  required: ["findingArns", "attributes"],
  members: {
    findingArns: {
      shape: _AddRemoveAttributesFindingArnList
    },
    attributes: {
      shape: _UserAttributeList
    }
  }
};
