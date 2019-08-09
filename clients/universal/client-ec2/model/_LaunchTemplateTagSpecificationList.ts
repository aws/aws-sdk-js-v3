import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateTagSpecification } from "./_LaunchTemplateTagSpecification";

export const _LaunchTemplateTagSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateTagSpecification,
    locationName: "item"
  }
};
