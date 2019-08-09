import { _GlacierJobParameters } from "./_GlacierJobParameters";
import { _SelectParameters } from "./_SelectParameters";
import { _OutputLocation } from "./_OutputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RestoreRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Days: {
      shape: {
        type: "integer"
      }
    },
    GlacierJobParameters: {
      shape: _GlacierJobParameters
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    SelectParameters: {
      shape: _SelectParameters
    },
    OutputLocation: {
      shape: _OutputLocation
    }
  }
};
