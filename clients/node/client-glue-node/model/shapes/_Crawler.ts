import { _CrawlerTargets } from "./_CrawlerTargets";
import { _ClassifierNameList } from "./_ClassifierNameList";
import { _SchemaChangePolicy } from "./_SchemaChangePolicy";
import { _Schedule } from "./_Schedule";
import { _LastCrawlInfo } from "./_LastCrawlInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Crawler: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    Targets: {
      shape: _CrawlerTargets
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Classifiers: {
      shape: _ClassifierNameList
    },
    SchemaChangePolicy: {
      shape: _SchemaChangePolicy
    },
    State: {
      shape: {
        type: "string"
      }
    },
    TablePrefix: {
      shape: {
        type: "string"
      }
    },
    Schedule: {
      shape: _Schedule
    },
    CrawlElapsedTime: {
      shape: {
        type: "integer"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    LastCrawl: {
      shape: _LastCrawlInfo
    },
    Version: {
      shape: {
        type: "integer"
      }
    },
    Configuration: {
      shape: {
        type: "string"
      }
    },
    CrawlerSecurityConfiguration: {
      shape: {
        type: "string"
      }
    }
  }
};
