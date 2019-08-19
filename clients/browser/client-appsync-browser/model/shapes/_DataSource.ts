import { _DynamodbDataSourceConfig } from "./_DynamodbDataSourceConfig";
import { _LambdaDataSourceConfig } from "./_LambdaDataSourceConfig";
import { _ElasticsearchDataSourceConfig } from "./_ElasticsearchDataSourceConfig";
import { _HttpDataSourceConfig } from "./_HttpDataSourceConfig";
import { _RelationalDatabaseDataSourceConfig } from "./_RelationalDatabaseDataSourceConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dataSourceArn: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    serviceRoleArn: {
      shape: {
        type: "string"
      }
    },
    dynamodbConfig: {
      shape: _DynamodbDataSourceConfig
    },
    lambdaConfig: {
      shape: _LambdaDataSourceConfig
    },
    elasticsearchConfig: {
      shape: _ElasticsearchDataSourceConfig
    },
    httpConfig: {
      shape: _HttpDataSourceConfig
    },
    relationalDatabaseConfig: {
      shape: _RelationalDatabaseDataSourceConfig
    }
  }
};
