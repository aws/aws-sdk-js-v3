import { List as _List_ } from "@aws-sdk/types";
import { _ApplicationVersionDescription } from "./_ApplicationVersionDescription";

export const _ApplicationVersionDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _ApplicationVersionDescription
  }
};
