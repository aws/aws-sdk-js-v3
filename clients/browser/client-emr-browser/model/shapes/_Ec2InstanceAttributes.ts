import { _XmlStringMaxLen256List } from "./_XmlStringMaxLen256List";
import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ec2InstanceAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ec2KeyName: {
      shape: {
        type: "string"
      }
    },
    Ec2SubnetId: {
      shape: {
        type: "string"
      }
    },
    RequestedEc2SubnetIds: {
      shape: _XmlStringMaxLen256List
    },
    Ec2AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    RequestedEc2AvailabilityZones: {
      shape: _XmlStringMaxLen256List
    },
    IamInstanceProfile: {
      shape: {
        type: "string"
      }
    },
    EmrManagedMasterSecurityGroup: {
      shape: {
        type: "string"
      }
    },
    EmrManagedSlaveSecurityGroup: {
      shape: {
        type: "string"
      }
    },
    ServiceAccessSecurityGroup: {
      shape: {
        type: "string"
      }
    },
    AdditionalMasterSecurityGroups: {
      shape: _StringList
    },
    AdditionalSlaveSecurityGroups: {
      shape: _StringList
    }
  }
};
