import { _S3Location } from "./_S3Location";
import { _GitHubLocation } from "./_GitHubLocation";
import { _RawString } from "./_RawString";
import { _AppSpecContent } from "./_AppSpecContent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RevisionLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    revisionType: {
      shape: {
        type: "string"
      }
    },
    s3Location: {
      shape: _S3Location
    },
    gitHubLocation: {
      shape: _GitHubLocation
    },
    string: {
      shape: _RawString
    },
    appSpecContent: {
      shape: _AppSpecContent
    }
  }
};
