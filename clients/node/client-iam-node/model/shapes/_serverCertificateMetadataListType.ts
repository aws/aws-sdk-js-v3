import { List as _List_ } from "@aws-sdk/types";
import { _ServerCertificateMetadata } from "./_ServerCertificateMetadata";

export const _serverCertificateMetadataListType: _List_ = {
  type: "list",
  member: {
    shape: _ServerCertificateMetadata
  }
};
