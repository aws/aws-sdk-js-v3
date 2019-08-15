import { List as _List_ } from "@aws-sdk/types";
import { _DomainIspPlacement } from "./_DomainIspPlacement";

export const _DomainIspPlacements: _List_ = {
  type: "list",
  member: {
    shape: _DomainIspPlacement
  }
};
