import { _ErrorInfo } from "./_ErrorInfo";
import { _MutableClusterInfo } from "./_MutableClusterInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterOperationInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientRequestId: {
      shape: {
        type: "string"
      },
      locationName: "clientRequestId"
    },
    ClusterArn: {
      shape: {
        type: "string"
      },
      locationName: "clusterArn"
    },
    CreationTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "creationTime"
    },
    EndTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "endTime"
    },
    ErrorInfo: {
      shape: _ErrorInfo,
      locationName: "errorInfo"
    },
    OperationArn: {
      shape: {
        type: "string"
      },
      locationName: "operationArn"
    },
    OperationState: {
      shape: {
        type: "string"
      },
      locationName: "operationState"
    },
    OperationType: {
      shape: {
        type: "string"
      },
      locationName: "operationType"
    },
    SourceClusterInfo: {
      shape: _MutableClusterInfo,
      locationName: "sourceClusterInfo"
    },
    TargetClusterInfo: {
      shape: _MutableClusterInfo,
      locationName: "targetClusterInfo"
    }
  }
};
