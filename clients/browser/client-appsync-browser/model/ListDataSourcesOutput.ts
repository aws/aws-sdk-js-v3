import { _DataSources } from "./_DataSources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDataSourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dataSources: {
      shape: _DataSources
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
