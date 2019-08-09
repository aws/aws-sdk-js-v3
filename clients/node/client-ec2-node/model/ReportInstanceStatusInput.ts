import { _InstanceIdStringList } from "./_InstanceIdStringList";
import { _ReasonCodesList } from "./_ReasonCodesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReportInstanceStatusInput: _Structure_ = {
  type: "structure",
  required: ["Instances", "ReasonCodes", "Status"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    EndTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "endTime"
    },
    Instances: {
      shape: _InstanceIdStringList,
      locationName: "instanceId"
    },
    ReasonCodes: {
      shape: _ReasonCodesList,
      locationName: "reasonCode"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
