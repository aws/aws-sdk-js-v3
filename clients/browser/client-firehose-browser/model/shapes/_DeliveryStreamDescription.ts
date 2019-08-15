import { _DeliveryStreamEncryptionConfiguration } from "./_DeliveryStreamEncryptionConfiguration";
import { _SourceDescription } from "./_SourceDescription";
import { _DestinationDescriptionList } from "./_DestinationDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeliveryStreamDescription: _Structure_ = {
  type: "structure",
  required: [
    "DeliveryStreamName",
    "DeliveryStreamARN",
    "DeliveryStreamStatus",
    "DeliveryStreamType",
    "VersionId",
    "Destinations",
    "HasMoreDestinations"
  ],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeliveryStreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeliveryStreamStatus: {
      shape: {
        type: "string"
      }
    },
    DeliveryStreamEncryptionConfiguration: {
      shape: _DeliveryStreamEncryptionConfiguration
    },
    DeliveryStreamType: {
      shape: {
        type: "string"
      }
    },
    VersionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Source: {
      shape: _SourceDescription
    },
    Destinations: {
      shape: _DestinationDescriptionList
    },
    HasMoreDestinations: {
      shape: {
        type: "boolean"
      }
    }
  }
};
