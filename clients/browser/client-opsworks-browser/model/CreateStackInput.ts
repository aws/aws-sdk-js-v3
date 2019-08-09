import { _StackAttributes } from "./_StackAttributes";
import { _StackConfigurationManager } from "./_StackConfigurationManager";
import { _ChefConfiguration } from "./_ChefConfiguration";
import { _Source } from "./_Source";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Region", "ServiceRoleArn", "DefaultInstanceProfileArn"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _StackAttributes
    },
    ServiceRoleArn: {
      shape: {
        type: "string"
      }
    },
    DefaultInstanceProfileArn: {
      shape: {
        type: "string"
      }
    },
    DefaultOs: {
      shape: {
        type: "string"
      }
    },
    HostnameTheme: {
      shape: {
        type: "string"
      }
    },
    DefaultAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    DefaultSubnetId: {
      shape: {
        type: "string"
      }
    },
    CustomJson: {
      shape: {
        type: "string"
      }
    },
    ConfigurationManager: {
      shape: _StackConfigurationManager
    },
    ChefConfiguration: {
      shape: _ChefConfiguration
    },
    UseCustomCookbooks: {
      shape: {
        type: "boolean"
      }
    },
    UseOpsworksSecurityGroups: {
      shape: {
        type: "boolean"
      }
    },
    CustomCookbooksSource: {
      shape: _Source
    },
    DefaultSshKeyName: {
      shape: {
        type: "string"
      }
    },
    DefaultRootDeviceType: {
      shape: {
        type: "string"
      }
    },
    AgentVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
