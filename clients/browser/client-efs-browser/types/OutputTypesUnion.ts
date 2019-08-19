import { CreateFileSystemOutput } from "./CreateFileSystemOutput";
import { CreateMountTargetOutput } from "./CreateMountTargetOutput";
import { CreateTagsOutput } from "./CreateTagsOutput";
import { DeleteFileSystemOutput } from "./DeleteFileSystemOutput";
import { DeleteMountTargetOutput } from "./DeleteMountTargetOutput";
import { DeleteTagsOutput } from "./DeleteTagsOutput";
import { DescribeFileSystemsOutput } from "./DescribeFileSystemsOutput";
import { DescribeLifecycleConfigurationOutput } from "./DescribeLifecycleConfigurationOutput";
import { DescribeMountTargetSecurityGroupsOutput } from "./DescribeMountTargetSecurityGroupsOutput";
import { DescribeMountTargetsOutput } from "./DescribeMountTargetsOutput";
import { DescribeTagsOutput } from "./DescribeTagsOutput";
import { ModifyMountTargetSecurityGroupsOutput } from "./ModifyMountTargetSecurityGroupsOutput";
import { PutLifecycleConfigurationOutput } from "./PutLifecycleConfigurationOutput";
import { UpdateFileSystemOutput } from "./UpdateFileSystemOutput";
export type OutputTypesUnion =
  | CreateFileSystemOutput
  | CreateMountTargetOutput
  | CreateTagsOutput
  | DeleteFileSystemOutput
  | DeleteMountTargetOutput
  | DeleteTagsOutput
  | DescribeFileSystemsOutput
  | DescribeLifecycleConfigurationOutput
  | DescribeMountTargetSecurityGroupsOutput
  | DescribeMountTargetsOutput
  | DescribeTagsOutput
  | ModifyMountTargetSecurityGroupsOutput
  | PutLifecycleConfigurationOutput
  | UpdateFileSystemOutput;
