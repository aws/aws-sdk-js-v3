import { List as _List_ } from "@aws-sdk/types";
import { _DomainValidationOption } from "./_DomainValidationOption";

export const _DomainValidationOptionList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DomainValidationOption
  }
};
