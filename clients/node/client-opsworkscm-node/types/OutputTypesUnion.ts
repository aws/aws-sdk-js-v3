import { AssociateNodeOutput } from "./AssociateNodeOutput";
import { CreateBackupOutput } from "./CreateBackupOutput";
import { CreateServerOutput } from "./CreateServerOutput";
import { DeleteBackupOutput } from "./DeleteBackupOutput";
import { DeleteServerOutput } from "./DeleteServerOutput";
import { DescribeAccountAttributesOutput } from "./DescribeAccountAttributesOutput";
import { DescribeBackupsOutput } from "./DescribeBackupsOutput";
import { DescribeEventsOutput } from "./DescribeEventsOutput";
import { DescribeNodeAssociationStatusOutput } from "./DescribeNodeAssociationStatusOutput";
import { DescribeServersOutput } from "./DescribeServersOutput";
import { DisassociateNodeOutput } from "./DisassociateNodeOutput";
import { ExportServerEngineAttributeOutput } from "./ExportServerEngineAttributeOutput";
import { RestoreServerOutput } from "./RestoreServerOutput";
import { StartMaintenanceOutput } from "./StartMaintenanceOutput";
import { UpdateServerOutput } from "./UpdateServerOutput";
import { UpdateServerEngineAttributesOutput } from "./UpdateServerEngineAttributesOutput";
export type OutputTypesUnion =
  | AssociateNodeOutput
  | CreateBackupOutput
  | CreateServerOutput
  | DeleteBackupOutput
  | DeleteServerOutput
  | DescribeAccountAttributesOutput
  | DescribeBackupsOutput
  | DescribeEventsOutput
  | DescribeNodeAssociationStatusOutput
  | DescribeServersOutput
  | DisassociateNodeOutput
  | ExportServerEngineAttributeOutput
  | RestoreServerOutput
  | StartMaintenanceOutput
  | UpdateServerOutput
  | UpdateServerEngineAttributesOutput;
