import { CreateBackupOutput } from "./CreateBackupOutput";
import { CreateFileSystemOutput } from "./CreateFileSystemOutput";
import { CreateFileSystemFromBackupOutput } from "./CreateFileSystemFromBackupOutput";
import { DeleteBackupOutput } from "./DeleteBackupOutput";
import { DeleteFileSystemOutput } from "./DeleteFileSystemOutput";
import { DescribeBackupsOutput } from "./DescribeBackupsOutput";
import { DescribeFileSystemsOutput } from "./DescribeFileSystemsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateFileSystemOutput } from "./UpdateFileSystemOutput";
export type OutputTypesUnion =
  | CreateBackupOutput
  | CreateFileSystemOutput
  | CreateFileSystemFromBackupOutput
  | DeleteBackupOutput
  | DeleteFileSystemOutput
  | DescribeBackupsOutput
  | DescribeFileSystemsOutput
  | ListTagsForResourceOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateFileSystemOutput;
