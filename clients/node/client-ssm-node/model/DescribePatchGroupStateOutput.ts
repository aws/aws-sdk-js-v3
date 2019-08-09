import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchGroupStateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithInstalledPatches: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithInstalledOtherPatches: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithInstalledRejectedPatches: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithMissingPatches: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithFailedPatches: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithNotApplicablePatches: {
      shape: {
        type: "integer"
      }
    },
    InstancesWithUnreportedNotApplicablePatches: {
      shape: {
        type: "integer"
      }
    }
  }
};
