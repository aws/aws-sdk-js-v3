import { _PipelineConfig } from "./_PipelineConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResolverInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "typeName", "fieldName", "requestMappingTemplate"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    typeName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "typeName"
    },
    fieldName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "fieldName"
    },
    dataSourceName: {
      shape: {
        type: "string"
      }
    },
    requestMappingTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    responseMappingTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    kind: {
      shape: {
        type: "string"
      }
    },
    pipelineConfig: {
      shape: _PipelineConfig
    }
  }
};
