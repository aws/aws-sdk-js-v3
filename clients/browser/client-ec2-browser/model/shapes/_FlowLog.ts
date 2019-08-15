import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlowLog: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTime"
    },
    DeliverLogsErrorMessage: {
      shape: {
        type: "string"
      },
      locationName: "deliverLogsErrorMessage"
    },
    DeliverLogsPermissionArn: {
      shape: {
        type: "string"
      },
      locationName: "deliverLogsPermissionArn"
    },
    DeliverLogsStatus: {
      shape: {
        type: "string"
      },
      locationName: "deliverLogsStatus"
    },
    FlowLogId: {
      shape: {
        type: "string"
      },
      locationName: "flowLogId"
    },
    FlowLogStatus: {
      shape: {
        type: "string"
      },
      locationName: "flowLogStatus"
    },
    LogGroupName: {
      shape: {
        type: "string"
      },
      locationName: "logGroupName"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    TrafficType: {
      shape: {
        type: "string"
      },
      locationName: "trafficType"
    },
    LogDestinationType: {
      shape: {
        type: "string"
      },
      locationName: "logDestinationType"
    },
    LogDestination: {
      shape: {
        type: "string"
      },
      locationName: "logDestination"
    }
  }
};
