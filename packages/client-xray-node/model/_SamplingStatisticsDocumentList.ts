import { List as _List_ } from "@aws-sdk/types";
import { _SamplingStatisticsDocument } from "./_SamplingStatisticsDocument";

export const _SamplingStatisticsDocumentList: _List_ = {
  type: "list",
  member: {
    shape: _SamplingStatisticsDocument
  }
};
