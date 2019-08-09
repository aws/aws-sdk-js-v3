import { List as _List_ } from "@aws-sdk/types";
import { _TerminologyProperties } from "./_TerminologyProperties";

export const _TerminologyPropertiesList: _List_ = {
  type: "list",
  member: {
    shape: _TerminologyProperties
  }
};
