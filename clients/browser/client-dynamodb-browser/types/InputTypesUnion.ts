import { BatchGetItemInput } from "./BatchGetItemInput";
import { BatchWriteItemInput } from "./BatchWriteItemInput";
import { CreateBackupInput } from "./CreateBackupInput";
import { CreateGlobalTableInput } from "./CreateGlobalTableInput";
import { CreateTableInput } from "./CreateTableInput";
import { DeleteBackupInput } from "./DeleteBackupInput";
import { DeleteItemInput } from "./DeleteItemInput";
import { DeleteTableInput } from "./DeleteTableInput";
import { DescribeBackupInput } from "./DescribeBackupInput";
import { DescribeContinuousBackupsInput } from "./DescribeContinuousBackupsInput";
import { DescribeEndpointsInput } from "./DescribeEndpointsInput";
import { DescribeGlobalTableInput } from "./DescribeGlobalTableInput";
import { DescribeGlobalTableSettingsInput } from "./DescribeGlobalTableSettingsInput";
import { DescribeLimitsInput } from "./DescribeLimitsInput";
import { DescribeTableInput } from "./DescribeTableInput";
import { DescribeTimeToLiveInput } from "./DescribeTimeToLiveInput";
import { GetItemInput } from "./GetItemInput";
import { ListBackupsInput } from "./ListBackupsInput";
import { ListGlobalTablesInput } from "./ListGlobalTablesInput";
import { ListTablesInput } from "./ListTablesInput";
import { ListTagsOfResourceInput } from "./ListTagsOfResourceInput";
import { PutItemInput } from "./PutItemInput";
import { QueryInput } from "./QueryInput";
import { RestoreTableFromBackupInput } from "./RestoreTableFromBackupInput";
import { RestoreTableToPointInTimeInput } from "./RestoreTableToPointInTimeInput";
import { ScanInput } from "./ScanInput";
import { TagResourceInput } from "./TagResourceInput";
import { TransactGetItemsInput } from "./TransactGetItemsInput";
import { TransactWriteItemsInput } from "./TransactWriteItemsInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateContinuousBackupsInput } from "./UpdateContinuousBackupsInput";
import { UpdateGlobalTableInput } from "./UpdateGlobalTableInput";
import { UpdateGlobalTableSettingsInput } from "./UpdateGlobalTableSettingsInput";
import { UpdateItemInput } from "./UpdateItemInput";
import { UpdateTableInput } from "./UpdateTableInput";
import { UpdateTimeToLiveInput } from "./UpdateTimeToLiveInput";
export type InputTypesUnion =
  | BatchGetItemInput
  | BatchWriteItemInput
  | CreateBackupInput
  | CreateGlobalTableInput
  | CreateTableInput
  | DeleteBackupInput
  | DeleteItemInput
  | DeleteTableInput
  | DescribeBackupInput
  | DescribeContinuousBackupsInput
  | DescribeEndpointsInput
  | DescribeGlobalTableInput
  | DescribeGlobalTableSettingsInput
  | DescribeLimitsInput
  | DescribeTableInput
  | DescribeTimeToLiveInput
  | GetItemInput
  | ListBackupsInput
  | ListGlobalTablesInput
  | ListTablesInput
  | ListTagsOfResourceInput
  | PutItemInput
  | QueryInput
  | RestoreTableFromBackupInput
  | RestoreTableToPointInTimeInput
  | ScanInput
  | TagResourceInput
  | TransactGetItemsInput
  | TransactWriteItemsInput
  | UntagResourceInput
  | UpdateContinuousBackupsInput
  | UpdateGlobalTableInput
  | UpdateGlobalTableSettingsInput
  | UpdateItemInput
  | UpdateTableInput
  | UpdateTimeToLiveInput;
