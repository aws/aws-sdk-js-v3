import { _CdnConfiguration } from "./_CdnConfiguration";
import { _DashConfiguration } from "./_DashConfiguration";
import { _HlsConfiguration } from "./_HlsConfiguration";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPlaybackConfigurationOutput: _Structure_ = {
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
      shape: _DashConfiguration
    },
    HlsConfiguration: {
      shape: _HlsConfiguration
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    PlaybackConfigurationArn: {
      shape: {
        type: "string"
      }
    },
    PlaybackEndpointPrefix: {
      shape: {
        type: "string"
      }
    },
    SessionInitializationEndpointPrefix: {
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
