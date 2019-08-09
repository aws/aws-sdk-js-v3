import { _CACertificateDescription } from "./_CACertificateDescription";
import { _RegistrationConfig } from "./_RegistrationConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCACertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateDescription: {
      shape: _CACertificateDescription
    },
    registrationConfig: {
      shape: _RegistrationConfig
    }
  }
};
