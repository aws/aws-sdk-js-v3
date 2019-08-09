import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchDataSourceConfig: _Structure_ = {
  type: "structure",
  required: ["endpoint", "awsRegion"],
  members: {
    endpoint: {
      shape: {
        type: "string"
      }
    },
    awsRegion: {
      shape: {
        type: "string"
      }
    }
  }
};
