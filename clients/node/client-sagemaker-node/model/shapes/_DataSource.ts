import { _S3DataSource } from "./_S3DataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3DataSource: {
      shape: _S3DataSource
    }
  }
};
