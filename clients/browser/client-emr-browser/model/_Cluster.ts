import { _ClusterStatus } from "./_ClusterStatus";
import { _Ec2InstanceAttributes } from "./_Ec2InstanceAttributes";
import { _ApplicationList } from "./_ApplicationList";
import { _TagList } from "./_TagList";
import { _ConfigurationList } from "./_ConfigurationList";
import { _KerberosAttributes } from "./_KerberosAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Cluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: _ClusterStatus
    },
    Ec2InstanceAttributes: {
      shape: _Ec2InstanceAttributes
    },
    InstanceCollectionType: {
      shape: {
        type: "string"
      }
    },
    LogUri: {
      shape: {
        type: "string"
      }
    },
    RequestedAmiVersion: {
      shape: {
        type: "string"
      }
    },
    RunningAmiVersion: {
      shape: {
        type: "string"
      }
    },
    ReleaseLabel: {
      shape: {
        type: "string"
      }
    },
    AutoTerminate: {
      shape: {
        type: "boolean"
      }
    },
    TerminationProtected: {
      shape: {
        type: "boolean"
      }
    },
    VisibleToAllUsers: {
      shape: {
        type: "boolean"
      }
    },
    Applications: {
      shape: _ApplicationList
    },
    Tags: {
      shape: _TagList
    },
    ServiceRole: {
      shape: {
        type: "string"
      }
    },
    NormalizedInstanceHours: {
      shape: {
        type: "integer"
      }
    },
    MasterPublicDnsName: {
      shape: {
        type: "string"
      }
    },
    Configurations: {
      shape: _ConfigurationList
    },
    SecurityConfiguration: {
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
    },
    CustomAmiId: {
      shape: {
        type: "string"
      }
    },
    EbsRootVolumeSize: {
      shape: {
        type: "integer"
      }
    },
    RepoUpgradeOnBoot: {
      shape: {
        type: "string"
      }
    },
    KerberosAttributes: {
      shape: _KerberosAttributes
    }
  }
};
