import { ClaimDevicesByClaimCodeInput } from "./ClaimDevicesByClaimCodeInput";
import { DescribeDeviceInput } from "./DescribeDeviceInput";
import { FinalizeDeviceClaimInput } from "./FinalizeDeviceClaimInput";
import { GetDeviceMethodsInput } from "./GetDeviceMethodsInput";
import { InitiateDeviceClaimInput } from "./InitiateDeviceClaimInput";
import { InvokeDeviceMethodInput } from "./InvokeDeviceMethodInput";
import { ListDeviceEventsInput } from "./ListDeviceEventsInput";
import { ListDevicesInput } from "./ListDevicesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { TagResourceInput } from "./TagResourceInput";
import { UnclaimDeviceInput } from "./UnclaimDeviceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateDeviceStateInput } from "./UpdateDeviceStateInput";
export type InputTypesUnion =
  | ClaimDevicesByClaimCodeInput
  | DescribeDeviceInput
  | FinalizeDeviceClaimInput
  | GetDeviceMethodsInput
  | InitiateDeviceClaimInput
  | InvokeDeviceMethodInput
  | ListDeviceEventsInput
  | ListDevicesInput
  | ListTagsForResourceInput
  | TagResourceInput
  | UnclaimDeviceInput
  | UntagResourceInput
  | UpdateDeviceStateInput;
