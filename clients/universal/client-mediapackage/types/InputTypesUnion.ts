import { CreateChannelInput } from "./CreateChannelInput";
import { CreateOriginEndpointInput } from "./CreateOriginEndpointInput";
import { DeleteChannelInput } from "./DeleteChannelInput";
import { DeleteOriginEndpointInput } from "./DeleteOriginEndpointInput";
import { DescribeChannelInput } from "./DescribeChannelInput";
import { DescribeOriginEndpointInput } from "./DescribeOriginEndpointInput";
import { ListChannelsInput } from "./ListChannelsInput";
import { ListOriginEndpointsInput } from "./ListOriginEndpointsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { RotateChannelCredentialsInput } from "./RotateChannelCredentialsInput";
import { RotateIngestEndpointCredentialsInput } from "./RotateIngestEndpointCredentialsInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateChannelInput } from "./UpdateChannelInput";
import { UpdateOriginEndpointInput } from "./UpdateOriginEndpointInput";
export type InputTypesUnion =
  | CreateChannelInput
  | CreateOriginEndpointInput
  | DeleteChannelInput
  | DeleteOriginEndpointInput
  | DescribeChannelInput
  | DescribeOriginEndpointInput
  | ListChannelsInput
  | ListOriginEndpointsInput
  | ListTagsForResourceInput
  | RotateChannelCredentialsInput
  | RotateIngestEndpointCredentialsInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateChannelInput
  | UpdateOriginEndpointInput;
