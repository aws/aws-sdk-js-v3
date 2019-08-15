import { _ArchiveContainerSettings } from "./_ArchiveContainerSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArchiveOutputSettings: _Structure_ = {
  type: "structure",
  required: ["ContainerSettings"],
  members: {
    ContainerSettings: {
      shape: _ArchiveContainerSettings,
      locationName: "containerSettings"
    },
    Extension: {
      shape: {
        type: "string"
      },
      locationName: "extension"
    },
    NameModifier: {
      shape: {
        type: "string"
      },
      locationName: "nameModifier"
    }
  }
};
