import { List as _List_ } from "@aws-sdk/types";
import { _DeleteLaunchTemplateVersionsResponseSuccessItem } from "./_DeleteLaunchTemplateVersionsResponseSuccessItem";

export const _DeleteLaunchTemplateVersionsResponseSuccessSet: _List_ = {
  type: "list",
  member: {
    shape: _DeleteLaunchTemplateVersionsResponseSuccessItem,
    locationName: "item"
  }
};
