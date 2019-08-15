import { _CrawlerTargets } from "./_CrawlerTargets";
import { _ClassifierNameList } from "./_ClassifierNameList";
import { _SchemaChangePolicy } from "./_SchemaChangePolicy";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCrawlerInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Role", "Targets"],
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
    Targets: {
      shape: _CrawlerTargets
    },
    Schedule: {
      shape: {
        type: "string"
      }
    },
    Classifiers: {
      shape: _ClassifierNameList
    },
    TablePrefix: {
      shape: {
        type: "string"
      }
    },
    SchemaChangePolicy: {
      shape: _SchemaChangePolicy
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
    },
    Tags: {
      shape: _TagsMap
    }
  }
};
