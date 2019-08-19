import { _TriggerNodeDetails } from "./_TriggerNodeDetails";
import { _JobNodeDetails } from "./_JobNodeDetails";
import { _CrawlerNodeDetails } from "./_CrawlerNodeDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Node: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UniqueId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TriggerDetails: {
      shape: _TriggerNodeDetails
    },
    JobDetails: {
      shape: _JobNodeDetails
    },
    CrawlerDetails: {
      shape: _CrawlerNodeDetails
    }
  }
};
