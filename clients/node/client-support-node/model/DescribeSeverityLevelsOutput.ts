import { _SeverityLevelsList } from "./_SeverityLevelsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSeverityLevelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    severityLevels: {
      shape: _SeverityLevelsList
    }
  }
};
