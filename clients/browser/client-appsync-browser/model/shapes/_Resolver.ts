import { _PipelineConfig } from "./_PipelineConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Resolver: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    typeName: {
      shape: {
        type: "string"
      }
    },
    fieldName: {
      shape: {
        type: "string"
      }
    },
    dataSourceName: {
      shape: {
        type: "string"
      }
    },
    resolverArn: {
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
