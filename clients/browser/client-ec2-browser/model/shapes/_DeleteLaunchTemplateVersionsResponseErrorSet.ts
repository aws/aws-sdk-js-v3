import { List as _List_ } from "@aws-sdk/types";
import { _DeleteLaunchTemplateVersionsResponseErrorItem } from "./_DeleteLaunchTemplateVersionsResponseErrorItem";

export const _DeleteLaunchTemplateVersionsResponseErrorSet: _List_ = {
  type: "list",
  member: {
    shape: _DeleteLaunchTemplateVersionsResponseErrorItem,
    locationName: "item"
  }
};
