import { _LabelingJobDataSource } from "./_LabelingJobDataSource";
import { _LabelingJobDataAttributes } from "./_LabelingJobDataAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobInputConfig: _Structure_ = {
  type: "structure",
  required: ["DataSource"],
  members: {
    DataSource: {
      shape: _LabelingJobDataSource
    },
    DataAttributes: {
      shape: _LabelingJobDataAttributes
    }
  }
};
