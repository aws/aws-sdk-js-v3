// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { AthenaClient } from "./AthenaClient";
import {
  type BatchGetNamedQueryCommandInput,
  type BatchGetNamedQueryCommandOutput,
  BatchGetNamedQueryCommand,
} from "./commands/BatchGetNamedQueryCommand";
import {
  type BatchGetPreparedStatementCommandInput,
  type BatchGetPreparedStatementCommandOutput,
  BatchGetPreparedStatementCommand,
} from "./commands/BatchGetPreparedStatementCommand";
import {
  type BatchGetQueryExecutionCommandInput,
  type BatchGetQueryExecutionCommandOutput,
  BatchGetQueryExecutionCommand,
} from "./commands/BatchGetQueryExecutionCommand";
import {
  type CancelCapacityReservationCommandInput,
  type CancelCapacityReservationCommandOutput,
  CancelCapacityReservationCommand,
} from "./commands/CancelCapacityReservationCommand";
import {
  type CreateCapacityReservationCommandInput,
  type CreateCapacityReservationCommandOutput,
  CreateCapacityReservationCommand,
} from "./commands/CreateCapacityReservationCommand";
import {
  type CreateDataCatalogCommandInput,
  type CreateDataCatalogCommandOutput,
  CreateDataCatalogCommand,
} from "./commands/CreateDataCatalogCommand";
import {
  type CreateNamedQueryCommandInput,
  type CreateNamedQueryCommandOutput,
  CreateNamedQueryCommand,
} from "./commands/CreateNamedQueryCommand";
import {
  type CreateNotebookCommandInput,
  type CreateNotebookCommandOutput,
  CreateNotebookCommand,
} from "./commands/CreateNotebookCommand";
import {
  type CreatePreparedStatementCommandInput,
  type CreatePreparedStatementCommandOutput,
  CreatePreparedStatementCommand,
} from "./commands/CreatePreparedStatementCommand";
import {
  type CreatePresignedNotebookUrlCommandInput,
  type CreatePresignedNotebookUrlCommandOutput,
  CreatePresignedNotebookUrlCommand,
} from "./commands/CreatePresignedNotebookUrlCommand";
import {
  type CreateWorkGroupCommandInput,
  type CreateWorkGroupCommandOutput,
  CreateWorkGroupCommand,
} from "./commands/CreateWorkGroupCommand";
import {
  type DeleteCapacityReservationCommandInput,
  type DeleteCapacityReservationCommandOutput,
  DeleteCapacityReservationCommand,
} from "./commands/DeleteCapacityReservationCommand";
import {
  type DeleteDataCatalogCommandInput,
  type DeleteDataCatalogCommandOutput,
  DeleteDataCatalogCommand,
} from "./commands/DeleteDataCatalogCommand";
import {
  type DeleteNamedQueryCommandInput,
  type DeleteNamedQueryCommandOutput,
  DeleteNamedQueryCommand,
} from "./commands/DeleteNamedQueryCommand";
import {
  type DeleteNotebookCommandInput,
  type DeleteNotebookCommandOutput,
  DeleteNotebookCommand,
} from "./commands/DeleteNotebookCommand";
import {
  type DeletePreparedStatementCommandInput,
  type DeletePreparedStatementCommandOutput,
  DeletePreparedStatementCommand,
} from "./commands/DeletePreparedStatementCommand";
import {
  type DeleteWorkGroupCommandInput,
  type DeleteWorkGroupCommandOutput,
  DeleteWorkGroupCommand,
} from "./commands/DeleteWorkGroupCommand";
import {
  type ExportNotebookCommandInput,
  type ExportNotebookCommandOutput,
  ExportNotebookCommand,
} from "./commands/ExportNotebookCommand";
import {
  type GetCalculationExecutionCodeCommandInput,
  type GetCalculationExecutionCodeCommandOutput,
  GetCalculationExecutionCodeCommand,
} from "./commands/GetCalculationExecutionCodeCommand";
import {
  type GetCalculationExecutionCommandInput,
  type GetCalculationExecutionCommandOutput,
  GetCalculationExecutionCommand,
} from "./commands/GetCalculationExecutionCommand";
import {
  type GetCalculationExecutionStatusCommandInput,
  type GetCalculationExecutionStatusCommandOutput,
  GetCalculationExecutionStatusCommand,
} from "./commands/GetCalculationExecutionStatusCommand";
import {
  type GetCapacityAssignmentConfigurationCommandInput,
  type GetCapacityAssignmentConfigurationCommandOutput,
  GetCapacityAssignmentConfigurationCommand,
} from "./commands/GetCapacityAssignmentConfigurationCommand";
import {
  type GetCapacityReservationCommandInput,
  type GetCapacityReservationCommandOutput,
  GetCapacityReservationCommand,
} from "./commands/GetCapacityReservationCommand";
import {
  type GetDatabaseCommandInput,
  type GetDatabaseCommandOutput,
  GetDatabaseCommand,
} from "./commands/GetDatabaseCommand";
import {
  type GetDataCatalogCommandInput,
  type GetDataCatalogCommandOutput,
  GetDataCatalogCommand,
} from "./commands/GetDataCatalogCommand";
import {
  type GetNamedQueryCommandInput,
  type GetNamedQueryCommandOutput,
  GetNamedQueryCommand,
} from "./commands/GetNamedQueryCommand";
import {
  type GetNotebookMetadataCommandInput,
  type GetNotebookMetadataCommandOutput,
  GetNotebookMetadataCommand,
} from "./commands/GetNotebookMetadataCommand";
import {
  type GetPreparedStatementCommandInput,
  type GetPreparedStatementCommandOutput,
  GetPreparedStatementCommand,
} from "./commands/GetPreparedStatementCommand";
import {
  type GetQueryExecutionCommandInput,
  type GetQueryExecutionCommandOutput,
  GetQueryExecutionCommand,
} from "./commands/GetQueryExecutionCommand";
import {
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetQueryResultsCommand,
} from "./commands/GetQueryResultsCommand";
import {
  type GetQueryRuntimeStatisticsCommandInput,
  type GetQueryRuntimeStatisticsCommandOutput,
  GetQueryRuntimeStatisticsCommand,
} from "./commands/GetQueryRuntimeStatisticsCommand";
import {
  type GetResourceDashboardCommandInput,
  type GetResourceDashboardCommandOutput,
  GetResourceDashboardCommand,
} from "./commands/GetResourceDashboardCommand";
import {
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type GetSessionEndpointCommandInput,
  type GetSessionEndpointCommandOutput,
  GetSessionEndpointCommand,
} from "./commands/GetSessionEndpointCommand";
import {
  type GetSessionStatusCommandInput,
  type GetSessionStatusCommandOutput,
  GetSessionStatusCommand,
} from "./commands/GetSessionStatusCommand";
import {
  type GetTableMetadataCommandInput,
  type GetTableMetadataCommandOutput,
  GetTableMetadataCommand,
} from "./commands/GetTableMetadataCommand";
import {
  type GetWorkGroupCommandInput,
  type GetWorkGroupCommandOutput,
  GetWorkGroupCommand,
} from "./commands/GetWorkGroupCommand";
import {
  type ImportNotebookCommandInput,
  type ImportNotebookCommandOutput,
  ImportNotebookCommand,
} from "./commands/ImportNotebookCommand";
import {
  type ListApplicationDPUSizesCommandInput,
  type ListApplicationDPUSizesCommandOutput,
  ListApplicationDPUSizesCommand,
} from "./commands/ListApplicationDPUSizesCommand";
import {
  type ListCalculationExecutionsCommandInput,
  type ListCalculationExecutionsCommandOutput,
  ListCalculationExecutionsCommand,
} from "./commands/ListCalculationExecutionsCommand";
import {
  type ListCapacityReservationsCommandInput,
  type ListCapacityReservationsCommandOutput,
  ListCapacityReservationsCommand,
} from "./commands/ListCapacityReservationsCommand";
import {
  type ListDatabasesCommandInput,
  type ListDatabasesCommandOutput,
  ListDatabasesCommand,
} from "./commands/ListDatabasesCommand";
import {
  type ListDataCatalogsCommandInput,
  type ListDataCatalogsCommandOutput,
  ListDataCatalogsCommand,
} from "./commands/ListDataCatalogsCommand";
import {
  type ListEngineVersionsCommandInput,
  type ListEngineVersionsCommandOutput,
  ListEngineVersionsCommand,
} from "./commands/ListEngineVersionsCommand";
import {
  type ListExecutorsCommandInput,
  type ListExecutorsCommandOutput,
  ListExecutorsCommand,
} from "./commands/ListExecutorsCommand";
import {
  type ListNamedQueriesCommandInput,
  type ListNamedQueriesCommandOutput,
  ListNamedQueriesCommand,
} from "./commands/ListNamedQueriesCommand";
import {
  type ListNotebookMetadataCommandInput,
  type ListNotebookMetadataCommandOutput,
  ListNotebookMetadataCommand,
} from "./commands/ListNotebookMetadataCommand";
import {
  type ListNotebookSessionsCommandInput,
  type ListNotebookSessionsCommandOutput,
  ListNotebookSessionsCommand,
} from "./commands/ListNotebookSessionsCommand";
import {
  type ListPreparedStatementsCommandInput,
  type ListPreparedStatementsCommandOutput,
  ListPreparedStatementsCommand,
} from "./commands/ListPreparedStatementsCommand";
import {
  type ListQueryExecutionsCommandInput,
  type ListQueryExecutionsCommandOutput,
  ListQueryExecutionsCommand,
} from "./commands/ListQueryExecutionsCommand";
import {
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListSessionsCommand,
} from "./commands/ListSessionsCommand";
import {
  type ListTableMetadataCommandInput,
  type ListTableMetadataCommandOutput,
  ListTableMetadataCommand,
} from "./commands/ListTableMetadataCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWorkGroupsCommandInput,
  type ListWorkGroupsCommandOutput,
  ListWorkGroupsCommand,
} from "./commands/ListWorkGroupsCommand";
import {
  type PutCapacityAssignmentConfigurationCommandInput,
  type PutCapacityAssignmentConfigurationCommandOutput,
  PutCapacityAssignmentConfigurationCommand,
} from "./commands/PutCapacityAssignmentConfigurationCommand";
import {
  type StartCalculationExecutionCommandInput,
  type StartCalculationExecutionCommandOutput,
  StartCalculationExecutionCommand,
} from "./commands/StartCalculationExecutionCommand";
import {
  type StartQueryExecutionCommandInput,
  type StartQueryExecutionCommandOutput,
  StartQueryExecutionCommand,
} from "./commands/StartQueryExecutionCommand";
import {
  type StartSessionCommandInput,
  type StartSessionCommandOutput,
  StartSessionCommand,
} from "./commands/StartSessionCommand";
import {
  type StopCalculationExecutionCommandInput,
  type StopCalculationExecutionCommandOutput,
  StopCalculationExecutionCommand,
} from "./commands/StopCalculationExecutionCommand";
import {
  type StopQueryExecutionCommandInput,
  type StopQueryExecutionCommandOutput,
  StopQueryExecutionCommand,
} from "./commands/StopQueryExecutionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateSessionCommandInput,
  type TerminateSessionCommandOutput,
  TerminateSessionCommand,
} from "./commands/TerminateSessionCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateCapacityReservationCommandInput,
  type UpdateCapacityReservationCommandOutput,
  UpdateCapacityReservationCommand,
} from "./commands/UpdateCapacityReservationCommand";
import {
  type UpdateDataCatalogCommandInput,
  type UpdateDataCatalogCommandOutput,
  UpdateDataCatalogCommand,
} from "./commands/UpdateDataCatalogCommand";
import {
  type UpdateNamedQueryCommandInput,
  type UpdateNamedQueryCommandOutput,
  UpdateNamedQueryCommand,
} from "./commands/UpdateNamedQueryCommand";
import {
  type UpdateNotebookCommandInput,
  type UpdateNotebookCommandOutput,
  UpdateNotebookCommand,
} from "./commands/UpdateNotebookCommand";
import {
  type UpdateNotebookMetadataCommandInput,
  type UpdateNotebookMetadataCommandOutput,
  UpdateNotebookMetadataCommand,
} from "./commands/UpdateNotebookMetadataCommand";
import {
  type UpdatePreparedStatementCommandInput,
  type UpdatePreparedStatementCommandOutput,
  UpdatePreparedStatementCommand,
} from "./commands/UpdatePreparedStatementCommand";
import {
  type UpdateWorkGroupCommandInput,
  type UpdateWorkGroupCommandOutput,
  UpdateWorkGroupCommand,
} from "./commands/UpdateWorkGroupCommand";
import { paginateGetQueryResults } from "./pagination/GetQueryResultsPaginator";
import { paginateListApplicationDPUSizes } from "./pagination/ListApplicationDPUSizesPaginator";
import { paginateListCalculationExecutions } from "./pagination/ListCalculationExecutionsPaginator";
import { paginateListCapacityReservations } from "./pagination/ListCapacityReservationsPaginator";
import { paginateListDatabases } from "./pagination/ListDatabasesPaginator";
import { paginateListDataCatalogs } from "./pagination/ListDataCatalogsPaginator";
import { paginateListEngineVersions } from "./pagination/ListEngineVersionsPaginator";
import { paginateListExecutors } from "./pagination/ListExecutorsPaginator";
import { paginateListNamedQueries } from "./pagination/ListNamedQueriesPaginator";
import { paginateListPreparedStatements } from "./pagination/ListPreparedStatementsPaginator";
import { paginateListQueryExecutions } from "./pagination/ListQueryExecutionsPaginator";
import { paginateListSessions } from "./pagination/ListSessionsPaginator";
import { paginateListTableMetadata } from "./pagination/ListTableMetadataPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListWorkGroups } from "./pagination/ListWorkGroupsPaginator";

const commands = {
  BatchGetNamedQueryCommand,
  BatchGetPreparedStatementCommand,
  BatchGetQueryExecutionCommand,
  CancelCapacityReservationCommand,
  CreateCapacityReservationCommand,
  CreateDataCatalogCommand,
  CreateNamedQueryCommand,
  CreateNotebookCommand,
  CreatePreparedStatementCommand,
  CreatePresignedNotebookUrlCommand,
  CreateWorkGroupCommand,
  DeleteCapacityReservationCommand,
  DeleteDataCatalogCommand,
  DeleteNamedQueryCommand,
  DeleteNotebookCommand,
  DeletePreparedStatementCommand,
  DeleteWorkGroupCommand,
  ExportNotebookCommand,
  GetCalculationExecutionCommand,
  GetCalculationExecutionCodeCommand,
  GetCalculationExecutionStatusCommand,
  GetCapacityAssignmentConfigurationCommand,
  GetCapacityReservationCommand,
  GetDatabaseCommand,
  GetDataCatalogCommand,
  GetNamedQueryCommand,
  GetNotebookMetadataCommand,
  GetPreparedStatementCommand,
  GetQueryExecutionCommand,
  GetQueryResultsCommand,
  GetQueryRuntimeStatisticsCommand,
  GetResourceDashboardCommand,
  GetSessionCommand,
  GetSessionEndpointCommand,
  GetSessionStatusCommand,
  GetTableMetadataCommand,
  GetWorkGroupCommand,
  ImportNotebookCommand,
  ListApplicationDPUSizesCommand,
  ListCalculationExecutionsCommand,
  ListCapacityReservationsCommand,
  ListDatabasesCommand,
  ListDataCatalogsCommand,
  ListEngineVersionsCommand,
  ListExecutorsCommand,
  ListNamedQueriesCommand,
  ListNotebookMetadataCommand,
  ListNotebookSessionsCommand,
  ListPreparedStatementsCommand,
  ListQueryExecutionsCommand,
  ListSessionsCommand,
  ListTableMetadataCommand,
  ListTagsForResourceCommand,
  ListWorkGroupsCommand,
  PutCapacityAssignmentConfigurationCommand,
  StartCalculationExecutionCommand,
  StartQueryExecutionCommand,
  StartSessionCommand,
  StopCalculationExecutionCommand,
  StopQueryExecutionCommand,
  TagResourceCommand,
  TerminateSessionCommand,
  UntagResourceCommand,
  UpdateCapacityReservationCommand,
  UpdateDataCatalogCommand,
  UpdateNamedQueryCommand,
  UpdateNotebookCommand,
  UpdateNotebookMetadataCommand,
  UpdatePreparedStatementCommand,
  UpdateWorkGroupCommand,
};
const paginators = {
  paginateGetQueryResults,
  paginateListApplicationDPUSizes,
  paginateListCalculationExecutions,
  paginateListCapacityReservations,
  paginateListDatabases,
  paginateListDataCatalogs,
  paginateListEngineVersions,
  paginateListExecutors,
  paginateListNamedQueries,
  paginateListPreparedStatements,
  paginateListQueryExecutions,
  paginateListSessions,
  paginateListTableMetadata,
  paginateListTagsForResource,
  paginateListWorkGroups,
};

export interface Athena {
  /**
   * @see {@link BatchGetNamedQueryCommand}
   */
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetNamedQueryCommandOutput>;
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): void;
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPreparedStatementCommand}
   */
  batchGetPreparedStatement(
    args: BatchGetPreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPreparedStatementCommandOutput>;
  batchGetPreparedStatement(
    args: BatchGetPreparedStatementCommandInput,
    cb: (err: any, data?: BatchGetPreparedStatementCommandOutput) => void
  ): void;
  batchGetPreparedStatement(
    args: BatchGetPreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPreparedStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetQueryExecutionCommand}
   */
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetQueryExecutionCommandOutput>;
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): void;
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelCapacityReservationCommand}
   */
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCapacityReservationCommandOutput>;
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    cb: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): void;
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCapacityReservationCommand}
   */
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityReservationCommandOutput>;
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    cb: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): void;
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataCatalogCommand}
   */
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataCatalogCommandOutput>;
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    cb: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): void;
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNamedQueryCommand}
   */
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamedQueryCommandOutput>;
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    cb: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): void;
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotebookCommand}
   */
  createNotebook(
    args: CreateNotebookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotebookCommandOutput>;
  createNotebook(
    args: CreateNotebookCommandInput,
    cb: (err: any, data?: CreateNotebookCommandOutput) => void
  ): void;
  createNotebook(
    args: CreateNotebookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotebookCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePreparedStatementCommand}
   */
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePreparedStatementCommandOutput>;
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    cb: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): void;
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePresignedNotebookUrlCommand}
   */
  createPresignedNotebookUrl(
    args: CreatePresignedNotebookUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresignedNotebookUrlCommandOutput>;
  createPresignedNotebookUrl(
    args: CreatePresignedNotebookUrlCommandInput,
    cb: (err: any, data?: CreatePresignedNotebookUrlCommandOutput) => void
  ): void;
  createPresignedNotebookUrl(
    args: CreatePresignedNotebookUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresignedNotebookUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkGroupCommand}
   */
  createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkGroupCommandOutput>;
  createWorkGroup(
    args: CreateWorkGroupCommandInput,
    cb: (err: any, data?: CreateWorkGroupCommandOutput) => void
  ): void;
  createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCapacityReservationCommand}
   */
  deleteCapacityReservation(
    args: DeleteCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCapacityReservationCommandOutput>;
  deleteCapacityReservation(
    args: DeleteCapacityReservationCommandInput,
    cb: (err: any, data?: DeleteCapacityReservationCommandOutput) => void
  ): void;
  deleteCapacityReservation(
    args: DeleteCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataCatalogCommand}
   */
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataCatalogCommandOutput>;
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    cb: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): void;
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamedQueryCommand}
   */
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamedQueryCommandOutput>;
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): void;
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotebookCommand}
   */
  deleteNotebook(
    args: DeleteNotebookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotebookCommandOutput>;
  deleteNotebook(
    args: DeleteNotebookCommandInput,
    cb: (err: any, data?: DeleteNotebookCommandOutput) => void
  ): void;
  deleteNotebook(
    args: DeleteNotebookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotebookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePreparedStatementCommand}
   */
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePreparedStatementCommandOutput>;
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    cb: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): void;
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkGroupCommand}
   */
  deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkGroupCommandOutput>;
  deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void
  ): void;
  deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportNotebookCommand}
   */
  exportNotebook(
    args: ExportNotebookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportNotebookCommandOutput>;
  exportNotebook(
    args: ExportNotebookCommandInput,
    cb: (err: any, data?: ExportNotebookCommandOutput) => void
  ): void;
  exportNotebook(
    args: ExportNotebookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportNotebookCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculationExecutionCommand}
   */
  getCalculationExecution(
    args: GetCalculationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculationExecutionCommandOutput>;
  getCalculationExecution(
    args: GetCalculationExecutionCommandInput,
    cb: (err: any, data?: GetCalculationExecutionCommandOutput) => void
  ): void;
  getCalculationExecution(
    args: GetCalculationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculationExecutionCodeCommand}
   */
  getCalculationExecutionCode(
    args: GetCalculationExecutionCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculationExecutionCodeCommandOutput>;
  getCalculationExecutionCode(
    args: GetCalculationExecutionCodeCommandInput,
    cb: (err: any, data?: GetCalculationExecutionCodeCommandOutput) => void
  ): void;
  getCalculationExecutionCode(
    args: GetCalculationExecutionCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculationExecutionCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculationExecutionStatusCommand}
   */
  getCalculationExecutionStatus(
    args: GetCalculationExecutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculationExecutionStatusCommandOutput>;
  getCalculationExecutionStatus(
    args: GetCalculationExecutionStatusCommandInput,
    cb: (err: any, data?: GetCalculationExecutionStatusCommandOutput) => void
  ): void;
  getCalculationExecutionStatus(
    args: GetCalculationExecutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculationExecutionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCapacityAssignmentConfigurationCommand}
   */
  getCapacityAssignmentConfiguration(
    args: GetCapacityAssignmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCapacityAssignmentConfigurationCommandOutput>;
  getCapacityAssignmentConfiguration(
    args: GetCapacityAssignmentConfigurationCommandInput,
    cb: (err: any, data?: GetCapacityAssignmentConfigurationCommandOutput) => void
  ): void;
  getCapacityAssignmentConfiguration(
    args: GetCapacityAssignmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCapacityAssignmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCapacityReservationCommand}
   */
  getCapacityReservation(
    args: GetCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCapacityReservationCommandOutput>;
  getCapacityReservation(
    args: GetCapacityReservationCommandInput,
    cb: (err: any, data?: GetCapacityReservationCommandOutput) => void
  ): void;
  getCapacityReservation(
    args: GetCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(
    args: GetDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatabaseCommandOutput>;
  getDatabase(
    args: GetDatabaseCommandInput,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataCatalogCommand}
   */
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCatalogCommandOutput>;
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    cb: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): void;
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamedQueryCommand}
   */
  getNamedQuery(
    args: GetNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNamedQueryCommandOutput>;
  getNamedQuery(
    args: GetNamedQueryCommandInput,
    cb: (err: any, data?: GetNamedQueryCommandOutput) => void
  ): void;
  getNamedQuery(
    args: GetNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotebookMetadataCommand}
   */
  getNotebookMetadata(
    args: GetNotebookMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotebookMetadataCommandOutput>;
  getNotebookMetadata(
    args: GetNotebookMetadataCommandInput,
    cb: (err: any, data?: GetNotebookMetadataCommandOutput) => void
  ): void;
  getNotebookMetadata(
    args: GetNotebookMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotebookMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPreparedStatementCommand}
   */
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPreparedStatementCommandOutput>;
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    cb: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): void;
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryExecutionCommand}
   */
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryExecutionCommandOutput>;
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    cb: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): void;
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryResultsCommandOutput>;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryRuntimeStatisticsCommand}
   */
  getQueryRuntimeStatistics(
    args: GetQueryRuntimeStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryRuntimeStatisticsCommandOutput>;
  getQueryRuntimeStatistics(
    args: GetQueryRuntimeStatisticsCommandInput,
    cb: (err: any, data?: GetQueryRuntimeStatisticsCommandOutput) => void
  ): void;
  getQueryRuntimeStatistics(
    args: GetQueryRuntimeStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryRuntimeStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceDashboardCommand}
   */
  getResourceDashboard(
    args: GetResourceDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceDashboardCommandOutput>;
  getResourceDashboard(
    args: GetResourceDashboardCommandInput,
    cb: (err: any, data?: GetResourceDashboardCommandOutput) => void
  ): void;
  getResourceDashboard(
    args: GetResourceDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionEndpointCommand}
   */
  getSessionEndpoint(
    args: GetSessionEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionEndpointCommandOutput>;
  getSessionEndpoint(
    args: GetSessionEndpointCommandInput,
    cb: (err: any, data?: GetSessionEndpointCommandOutput) => void
  ): void;
  getSessionEndpoint(
    args: GetSessionEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionStatusCommand}
   */
  getSessionStatus(
    args: GetSessionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionStatusCommandOutput>;
  getSessionStatus(
    args: GetSessionStatusCommandInput,
    cb: (err: any, data?: GetSessionStatusCommandOutput) => void
  ): void;
  getSessionStatus(
    args: GetSessionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMetadataCommand}
   */
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableMetadataCommandOutput>;
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    cb: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): void;
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkGroupCommand}
   */
  getWorkGroup(
    args: GetWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkGroupCommandOutput>;
  getWorkGroup(
    args: GetWorkGroupCommandInput,
    cb: (err: any, data?: GetWorkGroupCommandOutput) => void
  ): void;
  getWorkGroup(
    args: GetWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportNotebookCommand}
   */
  importNotebook(
    args: ImportNotebookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportNotebookCommandOutput>;
  importNotebook(
    args: ImportNotebookCommandInput,
    cb: (err: any, data?: ImportNotebookCommandOutput) => void
  ): void;
  importNotebook(
    args: ImportNotebookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportNotebookCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationDPUSizesCommand}
   */
  listApplicationDPUSizes(): Promise<ListApplicationDPUSizesCommandOutput>;
  listApplicationDPUSizes(
    args: ListApplicationDPUSizesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationDPUSizesCommandOutput>;
  listApplicationDPUSizes(
    args: ListApplicationDPUSizesCommandInput,
    cb: (err: any, data?: ListApplicationDPUSizesCommandOutput) => void
  ): void;
  listApplicationDPUSizes(
    args: ListApplicationDPUSizesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationDPUSizesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCalculationExecutionsCommand}
   */
  listCalculationExecutions(
    args: ListCalculationExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCalculationExecutionsCommandOutput>;
  listCalculationExecutions(
    args: ListCalculationExecutionsCommandInput,
    cb: (err: any, data?: ListCalculationExecutionsCommandOutput) => void
  ): void;
  listCalculationExecutions(
    args: ListCalculationExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCalculationExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCapacityReservationsCommand}
   */
  listCapacityReservations(): Promise<ListCapacityReservationsCommandOutput>;
  listCapacityReservations(
    args: ListCapacityReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCapacityReservationsCommandOutput>;
  listCapacityReservations(
    args: ListCapacityReservationsCommandInput,
    cb: (err: any, data?: ListCapacityReservationsCommandOutput) => void
  ): void;
  listCapacityReservations(
    args: ListCapacityReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCapacityReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(
    args: ListDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatabasesCommandOutput>;
  listDatabases(
    args: ListDatabasesCommandInput,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataCatalogsCommand}
   */
  listDataCatalogs(): Promise<ListDataCatalogsCommandOutput>;
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataCatalogsCommandOutput>;
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    cb: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): void;
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngineVersionsCommand}
   */
  listEngineVersions(): Promise<ListEngineVersionsCommandOutput>;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngineVersionsCommandOutput>;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutorsCommand}
   */
  listExecutors(
    args: ListExecutorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutorsCommandOutput>;
  listExecutors(
    args: ListExecutorsCommandInput,
    cb: (err: any, data?: ListExecutorsCommandOutput) => void
  ): void;
  listExecutors(
    args: ListExecutorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamedQueriesCommand}
   */
  listNamedQueries(): Promise<ListNamedQueriesCommandOutput>;
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamedQueriesCommandOutput>;
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    cb: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): void;
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotebookMetadataCommand}
   */
  listNotebookMetadata(
    args: ListNotebookMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookMetadataCommandOutput>;
  listNotebookMetadata(
    args: ListNotebookMetadataCommandInput,
    cb: (err: any, data?: ListNotebookMetadataCommandOutput) => void
  ): void;
  listNotebookMetadata(
    args: ListNotebookMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotebookSessionsCommand}
   */
  listNotebookSessions(
    args: ListNotebookSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookSessionsCommandOutput>;
  listNotebookSessions(
    args: ListNotebookSessionsCommandInput,
    cb: (err: any, data?: ListNotebookSessionsCommandOutput) => void
  ): void;
  listNotebookSessions(
    args: ListNotebookSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPreparedStatementsCommand}
   */
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPreparedStatementsCommandOutput>;
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    cb: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): void;
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueryExecutionsCommand}
   */
  listQueryExecutions(): Promise<ListQueryExecutionsCommandOutput>;
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueryExecutionsCommandOutput>;
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): void;
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableMetadataCommand}
   */
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableMetadataCommandOutput>;
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    cb: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): void;
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkGroupsCommand}
   */
  listWorkGroups(): Promise<ListWorkGroupsCommandOutput>;
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkGroupsCommandOutput>;
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    cb: (err: any, data?: ListWorkGroupsCommandOutput) => void
  ): void;
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCapacityAssignmentConfigurationCommand}
   */
  putCapacityAssignmentConfiguration(
    args: PutCapacityAssignmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCapacityAssignmentConfigurationCommandOutput>;
  putCapacityAssignmentConfiguration(
    args: PutCapacityAssignmentConfigurationCommandInput,
    cb: (err: any, data?: PutCapacityAssignmentConfigurationCommandOutput) => void
  ): void;
  putCapacityAssignmentConfiguration(
    args: PutCapacityAssignmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCapacityAssignmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCalculationExecutionCommand}
   */
  startCalculationExecution(
    args: StartCalculationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCalculationExecutionCommandOutput>;
  startCalculationExecution(
    args: StartCalculationExecutionCommandInput,
    cb: (err: any, data?: StartCalculationExecutionCommandOutput) => void
  ): void;
  startCalculationExecution(
    args: StartCalculationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCalculationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryExecutionCommand}
   */
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryExecutionCommandOutput>;
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    cb: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): void;
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSessionCommand}
   */
  startSession(
    args: StartSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSessionCommandOutput>;
  startSession(
    args: StartSessionCommandInput,
    cb: (err: any, data?: StartSessionCommandOutput) => void
  ): void;
  startSession(
    args: StartSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCalculationExecutionCommand}
   */
  stopCalculationExecution(
    args: StopCalculationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCalculationExecutionCommandOutput>;
  stopCalculationExecution(
    args: StopCalculationExecutionCommandInput,
    cb: (err: any, data?: StopCalculationExecutionCommandOutput) => void
  ): void;
  stopCalculationExecution(
    args: StopCalculationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCalculationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQueryExecutionCommand}
   */
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopQueryExecutionCommandOutput>;
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    cb: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): void;
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateSessionCommand}
   */
  terminateSession(
    args: TerminateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateSessionCommandOutput>;
  terminateSession(
    args: TerminateSessionCommandInput,
    cb: (err: any, data?: TerminateSessionCommandOutput) => void
  ): void;
  terminateSession(
    args: TerminateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCapacityReservationCommand}
   */
  updateCapacityReservation(
    args: UpdateCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCapacityReservationCommandOutput>;
  updateCapacityReservation(
    args: UpdateCapacityReservationCommandInput,
    cb: (err: any, data?: UpdateCapacityReservationCommandOutput) => void
  ): void;
  updateCapacityReservation(
    args: UpdateCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataCatalogCommand}
   */
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataCatalogCommandOutput>;
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    cb: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): void;
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNamedQueryCommand}
   */
  updateNamedQuery(
    args: UpdateNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNamedQueryCommandOutput>;
  updateNamedQuery(
    args: UpdateNamedQueryCommandInput,
    cb: (err: any, data?: UpdateNamedQueryCommandOutput) => void
  ): void;
  updateNamedQuery(
    args: UpdateNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNamedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotebookCommand}
   */
  updateNotebook(
    args: UpdateNotebookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotebookCommandOutput>;
  updateNotebook(
    args: UpdateNotebookCommandInput,
    cb: (err: any, data?: UpdateNotebookCommandOutput) => void
  ): void;
  updateNotebook(
    args: UpdateNotebookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotebookCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotebookMetadataCommand}
   */
  updateNotebookMetadata(
    args: UpdateNotebookMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotebookMetadataCommandOutput>;
  updateNotebookMetadata(
    args: UpdateNotebookMetadataCommandInput,
    cb: (err: any, data?: UpdateNotebookMetadataCommandOutput) => void
  ): void;
  updateNotebookMetadata(
    args: UpdateNotebookMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotebookMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePreparedStatementCommand}
   */
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePreparedStatementCommandOutput>;
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    cb: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): void;
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkGroupCommand}
   */
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkGroupCommandOutput>;
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): void;
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetQueryResultsCommandOutput}.
   */
  paginateGetQueryResults(
    args: GetQueryResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetQueryResultsCommandOutput>;

  /**
   * @see {@link ListApplicationDPUSizesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationDPUSizesCommandOutput}.
   */
  paginateListApplicationDPUSizes(
    args?: ListApplicationDPUSizesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationDPUSizesCommandOutput>;

  /**
   * @see {@link ListCalculationExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCalculationExecutionsCommandOutput}.
   */
  paginateListCalculationExecutions(
    args: ListCalculationExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCalculationExecutionsCommandOutput>;

  /**
   * @see {@link ListCapacityReservationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCapacityReservationsCommandOutput}.
   */
  paginateListCapacityReservations(
    args?: ListCapacityReservationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCapacityReservationsCommandOutput>;

  /**
   * @see {@link ListDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatabasesCommandOutput}.
   */
  paginateListDatabases(
    args: ListDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatabasesCommandOutput>;

  /**
   * @see {@link ListDataCatalogsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataCatalogsCommandOutput}.
   */
  paginateListDataCatalogs(
    args?: ListDataCatalogsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataCatalogsCommandOutput>;

  /**
   * @see {@link ListEngineVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngineVersionsCommandOutput}.
   */
  paginateListEngineVersions(
    args?: ListEngineVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngineVersionsCommandOutput>;

  /**
   * @see {@link ListExecutorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExecutorsCommandOutput}.
   */
  paginateListExecutors(
    args: ListExecutorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExecutorsCommandOutput>;

  /**
   * @see {@link ListNamedQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNamedQueriesCommandOutput}.
   */
  paginateListNamedQueries(
    args?: ListNamedQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNamedQueriesCommandOutput>;

  /**
   * @see {@link ListPreparedStatementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPreparedStatementsCommandOutput}.
   */
  paginateListPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPreparedStatementsCommandOutput>;

  /**
   * @see {@link ListQueryExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueryExecutionsCommandOutput}.
   */
  paginateListQueryExecutions(
    args?: ListQueryExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueryExecutionsCommandOutput>;

  /**
   * @see {@link ListSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsCommandOutput}.
   */
  paginateListSessions(
    args: ListSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsCommandOutput>;

  /**
   * @see {@link ListTableMetadataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTableMetadataCommandOutput}.
   */
  paginateListTableMetadata(
    args: ListTableMetadataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTableMetadataCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListWorkGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkGroupsCommandOutput}.
   */
  paginateListWorkGroups(
    args?: ListWorkGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkGroupsCommandOutput>;
}

/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL
 *             to analyze data directly in Amazon S3. You can point Athena at your
 *             data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay
 *             only for the queries you run. Athena scales automatically—executing queries
 *             in parallel—so results are fast, even with large datasets and complex queries. For more
 *             information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User
 *                 Guide</i>.</p>
 *          <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the
 *             driver or later with the Amazon Athena API. Earlier version drivers do not
 *             support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                     Amazon Athena with JDBC</a>.</p>
 * @public
 */
export class Athena extends AthenaClient implements Athena {}
createAggregatedClient(commands, Athena, { paginators });
