import { _OnPremisesTagSetList } from "./_OnPremisesTagSetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OnPremisesTagSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    onPremisesTagSetList: {
      shape: _OnPremisesTagSetList
    }
  }
};
