import { List as _List_ } from "@aws-sdk/types";
import { _RelatedResource } from "./_RelatedResource";

export const _RelatedResources: _List_ = {
  type: "list",
  member: {
    shape: _RelatedResource
  }
};
