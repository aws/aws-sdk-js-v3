import { ClaimDevicesByClaimCodeOutput } from "./ClaimDevicesByClaimCodeOutput";
import { DescribeDeviceOutput } from "./DescribeDeviceOutput";
import { FinalizeDeviceClaimOutput } from "./FinalizeDeviceClaimOutput";
import { GetDeviceMethodsOutput } from "./GetDeviceMethodsOutput";
import { InitiateDeviceClaimOutput } from "./InitiateDeviceClaimOutput";
import { InvokeDeviceMethodOutput } from "./InvokeDeviceMethodOutput";
import { ListDeviceEventsOutput } from "./ListDeviceEventsOutput";
import { ListDevicesOutput } from "./ListDevicesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UnclaimDeviceOutput } from "./UnclaimDeviceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateDeviceStateOutput } from "./UpdateDeviceStateOutput";
export type OutputTypesUnion =
  | ClaimDevicesByClaimCodeOutput
  | DescribeDeviceOutput
  | FinalizeDeviceClaimOutput
  | GetDeviceMethodsOutput
  | InitiateDeviceClaimOutput
  | InvokeDeviceMethodOutput
  | ListDeviceEventsOutput
  | ListDevicesOutput
  | ListTagsForResourceOutput
  | TagResourceOutput
  | UnclaimDeviceOutput
  | UntagResourceOutput
  | UpdateDeviceStateOutput;
