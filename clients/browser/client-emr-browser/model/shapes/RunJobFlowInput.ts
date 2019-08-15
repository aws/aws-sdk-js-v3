import { _JobFlowInstancesConfig } from "./_JobFlowInstancesConfig";
import { _StepConfigList } from "./_StepConfigList";
import { _BootstrapActionConfigList } from "./_BootstrapActionConfigList";
import { _SupportedProductsList } from "./_SupportedProductsList";
import { _NewSupportedProductsList } from "./_NewSupportedProductsList";
import { _ApplicationList } from "./_ApplicationList";
import { _ConfigurationList } from "./_ConfigurationList";
import { _TagList } from "./_TagList";
import { _KerberosAttributes } from "./_KerberosAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunJobFlowInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Instances"],
  members: {
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
    AdditionalInfo: {
      shape: {
        type: "string"
      }
    },
    AmiVersion: {
      shape: {
        type: "string"
      }
    },
    ReleaseLabel: {
      shape: {
        type: "string"
      }
    },
    Instances: {
      shape: _JobFlowInstancesConfig
    },
    Steps: {
      shape: _StepConfigList
    },
    BootstrapActions: {
      shape: _BootstrapActionConfigList
    },
    SupportedProducts: {
      shape: _SupportedProductsList
    },
    NewSupportedProducts: {
      shape: _NewSupportedProductsList
    },
    Applications: {
      shape: _ApplicationList
    },
    Configurations: {
      shape: _ConfigurationList
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
    Tags: {
      shape: _TagList
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
