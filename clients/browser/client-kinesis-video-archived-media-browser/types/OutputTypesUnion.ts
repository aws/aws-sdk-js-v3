import { GetDASHStreamingSessionURLOutput } from "./GetDASHStreamingSessionURLOutput";
import { GetHLSStreamingSessionURLOutput } from "./GetHLSStreamingSessionURLOutput";
import { GetMediaForFragmentListOutput } from "./GetMediaForFragmentListOutput";
import { ListFragmentsOutput } from "./ListFragmentsOutput";
export type OutputTypesUnion =
  | GetDASHStreamingSessionURLOutput
  | GetHLSStreamingSessionURLOutput
  | GetMediaForFragmentListOutput
  | ListFragmentsOutput;
