import { _Datastore } from "./_Datastore";
import { _DatastoreStatistics } from "./_DatastoreStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatastoreOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datastore: {
      shape: _Datastore
    },
    statistics: {
      shape: _DatastoreStatistics
    }
  }
};
