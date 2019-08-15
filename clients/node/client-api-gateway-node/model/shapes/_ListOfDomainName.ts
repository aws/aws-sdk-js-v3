import { List as _List_ } from "@aws-sdk/types";
import { _DomainName } from "./_DomainName";

export const _ListOfDomainName: _List_ = {
  type: "list",
  member: {
    shape: _DomainName
  }
};
