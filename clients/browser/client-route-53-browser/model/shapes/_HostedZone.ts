import { _HostedZoneConfig } from "./_HostedZoneConfig";
import { _LinkedService } from "./_LinkedService";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostedZone: _Structure_ = {
  type: "structure",
  required: ["Id", "Name", "CallerReference"],
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
    CallerReference: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Config: {
      shape: _HostedZoneConfig
    },
    ResourceRecordSetCount: {
      shape: {
        type: "integer"
      }
    },
    LinkedService: {
      shape: _LinkedService
    }
  }
};
