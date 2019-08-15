import { _JSONMappingParameters } from "./_JSONMappingParameters";
import { _CSVMappingParameters } from "./_CSVMappingParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MappingParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JSONMappingParameters: {
      shape: _JSONMappingParameters
    },
    CSVMappingParameters: {
      shape: _CSVMappingParameters
    }
  }
};
