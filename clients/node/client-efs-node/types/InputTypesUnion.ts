import { CreateFileSystemInput } from "./CreateFileSystemInput";
import { CreateMountTargetInput } from "./CreateMountTargetInput";
import { CreateTagsInput } from "./CreateTagsInput";
import { DeleteFileSystemInput } from "./DeleteFileSystemInput";
import { DeleteMountTargetInput } from "./DeleteMountTargetInput";
import { DeleteTagsInput } from "./DeleteTagsInput";
import { DescribeFileSystemsInput } from "./DescribeFileSystemsInput";
import { DescribeLifecycleConfigurationInput } from "./DescribeLifecycleConfigurationInput";
import { DescribeMountTargetSecurityGroupsInput } from "./DescribeMountTargetSecurityGroupsInput";
import { DescribeMountTargetsInput } from "./DescribeMountTargetsInput";
import { DescribeTagsInput } from "./DescribeTagsInput";
import { ModifyMountTargetSecurityGroupsInput } from "./ModifyMountTargetSecurityGroupsInput";
import { PutLifecycleConfigurationInput } from "./PutLifecycleConfigurationInput";
import { UpdateFileSystemInput } from "./UpdateFileSystemInput";
export type InputTypesUnion =
  | CreateFileSystemInput
  | CreateMountTargetInput
  | CreateTagsInput
  | DeleteFileSystemInput
  | DeleteMountTargetInput
  | DeleteTagsInput
  | DescribeFileSystemsInput
  | DescribeLifecycleConfigurationInput
  | DescribeMountTargetSecurityGroupsInput
  | DescribeMountTargetsInput
  | DescribeTagsInput
  | ModifyMountTargetSecurityGroupsInput
  | PutLifecycleConfigurationInput
  | UpdateFileSystemInput;
