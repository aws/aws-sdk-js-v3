import { _AgentIdList } from "./_AgentIdList";
import { _AutoScalingGroupList } from "./_AutoScalingGroupList";
import { _RuleNameList } from "./_RuleNameList";
import { _SeverityList } from "./_SeverityList";
import { _FilterRulesPackageArnList } from "./_FilterRulesPackageArnList";
import { _AttributeList } from "./_AttributeList";
import { _TimestampRange } from "./_TimestampRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FindingFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentIds: {
      shape: _AgentIdList
    },
    autoScalingGroups: {
      shape: _AutoScalingGroupList
    },
    ruleNames: {
      shape: _RuleNameList
    },
    severities: {
      shape: _SeverityList
    },
    rulesPackageArns: {
      shape: _FilterRulesPackageArnList
    },
    attributes: {
      shape: _AttributeList
    },
    userAttributes: {
      shape: _AttributeList
    },
    creationTimeRange: {
      shape: _TimestampRange
    }
  }
};
