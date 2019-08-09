import { _serverCertificateMetadataListType } from "./_serverCertificateMetadataListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServerCertificatesOutput: _Structure_ = {
  type: "structure",
  required: ["ServerCertificateMetadataList"],
  members: {
    ServerCertificateMetadataList: {
      shape: _serverCertificateMetadataListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
