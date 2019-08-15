import { _JobMetadata } from "./_JobMetadata";
import { _JobMetadataList } from "./_JobMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobMetadata: {
      shape: _JobMetadata
    },
    SubJobMetadata: {
      shape: _JobMetadataList
    }
  }
};
