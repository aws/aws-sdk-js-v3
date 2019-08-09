import { GetDASHStreamingSessionURLInput } from "./GetDASHStreamingSessionURLInput";
import { GetHLSStreamingSessionURLInput } from "./GetHLSStreamingSessionURLInput";
import { GetMediaForFragmentListInput } from "./GetMediaForFragmentListInput";
import { ListFragmentsInput } from "./ListFragmentsInput";
export type InputTypesUnion =
  | GetDASHStreamingSessionURLInput
  | GetHLSStreamingSessionURLInput
  | GetMediaForFragmentListInput
  | ListFragmentsInput;
