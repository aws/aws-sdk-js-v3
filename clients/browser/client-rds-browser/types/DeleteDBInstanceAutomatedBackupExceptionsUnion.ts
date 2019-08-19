import { InvalidDBInstanceAutomatedBackupStateFault } from "./InvalidDBInstanceAutomatedBackupStateFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "./DBInstanceAutomatedBackupNotFoundFault";
export type DeleteDBInstanceAutomatedBackupExceptionsUnion =
  | InvalidDBInstanceAutomatedBackupStateFault
  | DBInstanceAutomatedBackupNotFoundFault;
