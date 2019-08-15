import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateTagSpecificationRequest } from "./_LaunchTemplateTagSpecificationRequest";

export const _LaunchTemplateTagSpecificationRequestList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateTagSpecificationRequest,
    locationName: "LaunchTemplateTagSpecificationRequest"
  }
};
