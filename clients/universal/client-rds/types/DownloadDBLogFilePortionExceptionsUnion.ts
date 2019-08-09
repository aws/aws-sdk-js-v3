import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBLogFileNotFoundFault } from "./DBLogFileNotFoundFault";
export type DownloadDBLogFilePortionExceptionsUnion =
  | DBInstanceNotFoundFault
  | DBLogFileNotFoundFault;
