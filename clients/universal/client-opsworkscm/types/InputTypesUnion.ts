import { AssociateNodeInput } from "./AssociateNodeInput";
import { CreateBackupInput } from "./CreateBackupInput";
import { CreateServerInput } from "./CreateServerInput";
import { DeleteBackupInput } from "./DeleteBackupInput";
import { DeleteServerInput } from "./DeleteServerInput";
import { DescribeAccountAttributesInput } from "./DescribeAccountAttributesInput";
import { DescribeBackupsInput } from "./DescribeBackupsInput";
import { DescribeEventsInput } from "./DescribeEventsInput";
import { DescribeNodeAssociationStatusInput } from "./DescribeNodeAssociationStatusInput";
import { DescribeServersInput } from "./DescribeServersInput";
import { DisassociateNodeInput } from "./DisassociateNodeInput";
import { ExportServerEngineAttributeInput } from "./ExportServerEngineAttributeInput";
import { RestoreServerInput } from "./RestoreServerInput";
import { StartMaintenanceInput } from "./StartMaintenanceInput";
import { UpdateServerInput } from "./UpdateServerInput";
import { UpdateServerEngineAttributesInput } from "./UpdateServerEngineAttributesInput";
export type InputTypesUnion =
  | AssociateNodeInput
  | CreateBackupInput
  | CreateServerInput
  | DeleteBackupInput
  | DeleteServerInput
  | DescribeAccountAttributesInput
  | DescribeBackupsInput
  | DescribeEventsInput
  | DescribeNodeAssociationStatusInput
  | DescribeServersInput
  | DisassociateNodeInput
  | ExportServerEngineAttributeInput
  | RestoreServerInput
  | StartMaintenanceInput
  | UpdateServerInput
  | UpdateServerEngineAttributesInput;
