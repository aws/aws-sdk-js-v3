import { _StartSigningJobParameter } from "./_StartSigningJobParameter";
import { _CustomCodeSigning } from "./_CustomCodeSigning";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeSigning: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    awsSignerJobId: {
      shape: {
        type: "string"
      }
    },
    startSigningJobParameter: {
      shape: _StartSigningJobParameter
    },
    customCodeSigning: {
      shape: _CustomCodeSigning
    }
  }
};
