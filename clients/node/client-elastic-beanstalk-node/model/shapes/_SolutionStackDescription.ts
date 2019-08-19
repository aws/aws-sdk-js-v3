import { _SolutionStackFileTypeList } from "./_SolutionStackFileTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SolutionStackDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SolutionStackName: {
      shape: {
        type: "string"
      }
    },
    PermittedFileTypes: {
      shape: _SolutionStackFileTypeList
    }
  }
};
