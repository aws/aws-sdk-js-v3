import { GetCheckerIpRangesInput } from "./GetCheckerIpRangesInput";
import { GetCheckerIpRangesOutput } from "./GetCheckerIpRangesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCheckerIpRanges: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCheckerIpRanges",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/checkeripranges"
  },
  input: {
    shape: GetCheckerIpRangesInput
  },
  output: {
    shape: GetCheckerIpRangesOutput
  },
  errors: []
};
