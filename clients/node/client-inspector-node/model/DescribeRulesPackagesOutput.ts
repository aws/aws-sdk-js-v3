import { _RulesPackageList } from "./_RulesPackageList";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRulesPackagesOutput: _Structure_ = {
  type: "structure",
  required: ["rulesPackages", "failedItems"],
  members: {
    rulesPackages: {
      shape: _RulesPackageList
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
