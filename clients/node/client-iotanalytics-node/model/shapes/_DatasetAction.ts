import { _SqlQueryDatasetAction } from "./_SqlQueryDatasetAction";
import { _ContainerDatasetAction } from "./_ContainerDatasetAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queryAction: {
      shape: _SqlQueryDatasetAction
    },
    containerAction: {
      shape: _ContainerDatasetAction
    }
  }
};
