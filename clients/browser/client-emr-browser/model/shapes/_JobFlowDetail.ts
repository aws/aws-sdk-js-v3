import { _JobFlowExecutionStatusDetail } from "./_JobFlowExecutionStatusDetail";
import { _JobFlowInstancesDetail } from "./_JobFlowInstancesDetail";
import { _StepDetailList } from "./_StepDetailList";
import { _BootstrapActionDetailList } from "./_BootstrapActionDetailList";
import { _SupportedProductsList } from "./_SupportedProductsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobFlowDetail: _Structure_ = {
  type: "structure",
  required: ["JobFlowId", "Name", "ExecutionStatusDetail", "Instances"],
  members: {
    JobFlowId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    LogUri: {
      shape: {
        type: "string"
      }
    },
    AmiVersion: {
      shape: {
        type: "string"
      }
    },
    ExecutionStatusDetail: {
      shape: _JobFlowExecutionStatusDetail
    },
    Instances: {
      shape: _JobFlowInstancesDetail
    },
    Steps: {
      shape: _StepDetailList
    },
    BootstrapActions: {
      shape: _BootstrapActionDetailList
    },
    SupportedProducts: {
      shape: _SupportedProductsList
    },
    VisibleToAllUsers: {
      shape: {
        type: "boolean"
      }
    },
    JobFlowRole: {
      shape: {
        type: "string"
      }
    },
    ServiceRole: {
      shape: {
        type: "string"
      }
    },
    AutoScalingRole: {
      shape: {
        type: "string"
      }
    },
    ScaleDownBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
