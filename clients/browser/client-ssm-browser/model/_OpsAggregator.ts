import { _OpsAggregatorValueMap } from "./_OpsAggregatorValueMap";
import { _OpsFilterList } from "./_OpsFilterList";
import { _OpsAggregatorList } from "./_OpsAggregatorList";
import { Structure as _Structure_ } from "@aws-sdk/types";
import { Member as _Member_ } from "@aws-sdk/types";

export const _OpsAggregator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregatorType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AttributeName: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _OpsAggregatorValueMap
    },
    Filters: {
      shape: _OpsFilterList
    },
    get Aggregators(): _Member_ {
      Object.defineProperty(_OpsAggregator, "Aggregators", {
        value: {
          shape: _OpsAggregatorList
        }
      });
      return {
        shape: _OpsAggregatorList
      };
    }
  }
};
