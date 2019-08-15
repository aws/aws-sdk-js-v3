import { _Certificate } from "./_Certificate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificate: {
      shape: _Certificate
    }
  }
};
