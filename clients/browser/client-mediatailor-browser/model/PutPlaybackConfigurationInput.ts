import { _CdnConfiguration } from "./_CdnConfiguration";
import { _DashConfigurationForPut } from "./_DashConfigurationForPut";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPlaybackConfigurationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdDecisionServerUrl: {
      shape: {
        type: "string"
      }
    },
    CdnConfiguration: {
      shape: _CdnConfiguration
    },
    DashConfiguration: {
      shape: _DashConfigurationForPut
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    SlateAdUrl: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    },
    TranscodeProfileName: {
      shape: {
        type: "string"
      }
    },
    VideoContentSourceUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
