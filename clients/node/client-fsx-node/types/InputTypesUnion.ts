import { CreateBackupInput } from "./CreateBackupInput";
import { CreateFileSystemInput } from "./CreateFileSystemInput";
import { CreateFileSystemFromBackupInput } from "./CreateFileSystemFromBackupInput";
import { DeleteBackupInput } from "./DeleteBackupInput";
import { DeleteFileSystemInput } from "./DeleteFileSystemInput";
import { DescribeBackupsInput } from "./DescribeBackupsInput";
import { DescribeFileSystemsInput } from "./DescribeFileSystemsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateFileSystemInput } from "./UpdateFileSystemInput";
export type InputTypesUnion =
  | CreateBackupInput
  | CreateFileSystemInput
  | CreateFileSystemFromBackupInput
  | DeleteBackupInput
  | DeleteFileSystemInput
  | DescribeBackupsInput
  | DescribeFileSystemsInput
  | ListTagsForResourceInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateFileSystemInput;
