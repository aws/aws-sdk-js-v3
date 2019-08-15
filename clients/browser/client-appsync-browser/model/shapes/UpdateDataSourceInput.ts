import { _DynamodbDataSourceConfig } from "./_DynamodbDataSourceConfig";
import { _LambdaDataSourceConfig } from "./_LambdaDataSourceConfig";
import { _ElasticsearchDataSourceConfig } from "./_ElasticsearchDataSourceConfig";
import { _HttpDataSourceConfig } from "./_HttpDataSourceConfig";
import { _RelationalDatabaseDataSourceConfig } from "./_RelationalDatabaseDataSourceConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDataSourceInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "name", "type"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    name: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "name"
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
