import { _ImportTablesCompleted } from "./_ImportTablesCompleted";
import { _ImportTablesInProgress } from "./_ImportTablesInProgress";
import { _ImportTablesNotStarted } from "./_ImportTablesNotStarted";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResizeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetNodeType: {
      shape: {
        type: "string"
      }
    },
    TargetNumberOfNodes: {
      shape: {
        type: "integer"
      }
    },
    TargetClusterType: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ImportTablesCompleted: {
      shape: _ImportTablesCompleted
    },
    ImportTablesInProgress: {
      shape: _ImportTablesInProgress
    },
    ImportTablesNotStarted: {
      shape: _ImportTablesNotStarted
    },
    AvgResizeRateInMegaBytesPerSecond: {
      shape: {
        type: "float"
      }
    },
    TotalResizeDataInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    ProgressInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    ElapsedTimeInSeconds: {
      shape: {
        type: "integer"
      }
    },
    EstimatedTimeToCompletionInSeconds: {
      shape: {
        type: "integer"
      }
    },
    ResizeType: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    TargetEncryptionType: {
      shape: {
        type: "string"
      }
    },
    DataTransferProgressPercent: {
      shape: {
        type: "float"
      }
    }
  }
};
