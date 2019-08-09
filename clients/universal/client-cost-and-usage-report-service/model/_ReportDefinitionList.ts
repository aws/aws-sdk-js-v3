import { List as _List_ } from "@aws-sdk/types";
import { _ReportDefinition } from "./_ReportDefinition";

export const _ReportDefinitionList: _List_ = {
  type: "list",
  member: {
    shape: _ReportDefinition
  }
};
