import { _S3TargetList } from "./_S3TargetList";
import { _JdbcTargetList } from "./_JdbcTargetList";
import { _DynamoDBTargetList } from "./_DynamoDBTargetList";
import { _CatalogTargetList } from "./_CatalogTargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CrawlerTargets: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Targets: {
      shape: _S3TargetList
    },
    JdbcTargets: {
      shape: _JdbcTargetList
    },
    DynamoDBTargets: {
      shape: _DynamoDBTargetList
    },
    CatalogTargets: {
      shape: _CatalogTargetList
    }
  }
};
