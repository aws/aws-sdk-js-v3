import { CreateChannelOutput } from "./CreateChannelOutput";
import { CreateOriginEndpointOutput } from "./CreateOriginEndpointOutput";
import { DeleteChannelOutput } from "./DeleteChannelOutput";
import { DeleteOriginEndpointOutput } from "./DeleteOriginEndpointOutput";
import { DescribeChannelOutput } from "./DescribeChannelOutput";
import { DescribeOriginEndpointOutput } from "./DescribeOriginEndpointOutput";
import { ListChannelsOutput } from "./ListChannelsOutput";
import { ListOriginEndpointsOutput } from "./ListOriginEndpointsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { RotateChannelCredentialsOutput } from "./RotateChannelCredentialsOutput";
import { RotateIngestEndpointCredentialsOutput } from "./RotateIngestEndpointCredentialsOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateChannelOutput } from "./UpdateChannelOutput";
import { UpdateOriginEndpointOutput } from "./UpdateOriginEndpointOutput";
export type OutputTypesUnion =
  | CreateChannelOutput
  | CreateOriginEndpointOutput
  | DeleteChannelOutput
  | DeleteOriginEndpointOutput
  | DescribeChannelOutput
  | DescribeOriginEndpointOutput
  | ListChannelsOutput
  | ListOriginEndpointsOutput
  | ListTagsForResourceOutput
  | RotateChannelCredentialsOutput
  | RotateIngestEndpointCredentialsOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateChannelOutput
  | UpdateOriginEndpointOutput;
