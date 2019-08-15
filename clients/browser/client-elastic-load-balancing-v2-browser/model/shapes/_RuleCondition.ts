import { _ListOfString } from "./_ListOfString";
import { _HostHeaderConditionConfig } from "./_HostHeaderConditionConfig";
import { _PathPatternConditionConfig } from "./_PathPatternConditionConfig";
import { _HttpHeaderConditionConfig } from "./_HttpHeaderConditionConfig";
import { _QueryStringConditionConfig } from "./_QueryStringConditionConfig";
import { _HttpRequestMethodConditionConfig } from "./_HttpRequestMethodConditionConfig";
import { _SourceIpConditionConfig } from "./_SourceIpConditionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RuleCondition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Field: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _ListOfString
    },
    HostHeaderConfig: {
      shape: _HostHeaderConditionConfig
    },
    PathPatternConfig: {
      shape: _PathPatternConditionConfig
    },
    HttpHeaderConfig: {
      shape: _HttpHeaderConditionConfig
    },
    QueryStringConfig: {
      shape: _QueryStringConditionConfig
    },
    HttpRequestMethodConfig: {
      shape: _HttpRequestMethodConditionConfig
    },
    SourceIpConfig: {
      shape: _SourceIpConditionConfig
    }
  }
};
