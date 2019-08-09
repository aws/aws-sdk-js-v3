import { _PartitionList } from "./_PartitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHsmOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDetails: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    EniId: {
      shape: {
        type: "string"
      }
    },
    EniIp: {
      shape: {
        type: "string"
      }
    },
    SubscriptionType: {
      shape: {
        type: "string"
      }
    },
    SubscriptionStartDate: {
      shape: {
        type: "string"
      }
    },
    SubscriptionEndDate: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    SerialNumber: {
      shape: {
        type: "string"
      }
    },
    VendorName: {
      shape: {
        type: "string"
      }
    },
    HsmType: {
      shape: {
        type: "string"
      }
    },
    SoftwareVersion: {
      shape: {
        type: "string"
      }
    },
    SshPublicKey: {
      shape: {
        type: "string"
      }
    },
    SshKeyLastUpdated: {
      shape: {
        type: "string"
      }
    },
    ServerCertUri: {
      shape: {
        type: "string"
      }
    },
    ServerCertLastUpdated: {
      shape: {
        type: "string"
      }
    },
    Partitions: {
      shape: _PartitionList
    }
  }
};
