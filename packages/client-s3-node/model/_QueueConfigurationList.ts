import { List as _List_ } from "@aws-sdk/types";
import { _QueueConfiguration } from "./_QueueConfiguration";

export const _QueueConfigurationList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _QueueConfiguration
  }
};
