import { _JobManifestSpec } from "./_JobManifestSpec";
import { _JobManifestLocation } from "./_JobManifestLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobManifest: _Structure_ = {
  type: "structure",
  required: ["Spec", "Location"],
  members: {
    Spec: {
      shape: _JobManifestSpec
    },
    Location: {
      shape: _JobManifestLocation
    }
  }
};
