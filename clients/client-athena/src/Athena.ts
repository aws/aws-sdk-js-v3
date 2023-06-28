// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AthenaClient, AthenaClientConfig } from "./AthenaClient";
import {
  BatchGetNamedQueryCommand,
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput,
} from "./commands/BatchGetNamedQueryCommand";
import {
  BatchGetPreparedStatementCommand,
  BatchGetPreparedStatementCommandInput,
  BatchGetPreparedStatementCommandOutput,
} from "./commands/BatchGetPreparedStatementCommand";
import {
  BatchGetQueryExecutionCommand,
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand";
import {
  CancelCapacityReservationCommand,
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "./commands/CancelCapacityReservationCommand";
import {
  CreateCapacityReservationCommand,
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
import {
  CreateDataCatalogCommand,
  CreateDataCatalogCommandInput,
  CreateDataCatalogCommandOutput,
} from "./commands/CreateDataCatalogCommand";
import {
  CreateNamedQueryCommand,
  CreateNamedQueryCommandInput,
  CreateNamedQueryCommandOutput,
} from "./commands/CreateNamedQueryCommand";
import {
  CreateNotebookCommand,
  CreateNotebookCommandInput,
  CreateNotebookCommandOutput,
} from "./commands/CreateNotebookCommand";
import {
  CreatePreparedStatementCommand,
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "./commands/CreatePreparedStatementCommand";
import {
  CreatePresignedNotebookUrlCommand,
  CreatePresignedNotebookUrlCommandInput,
  CreatePresignedNotebookUrlCommandOutput,
} from "./commands/CreatePresignedNotebookUrlCommand";
import {
  CreateWorkGroupCommand,
  CreateWorkGroupCommandInput,
  CreateWorkGroupCommandOutput,
} from "./commands/CreateWorkGroupCommand";
import {
  DeleteCapacityReservationCommand,
  DeleteCapacityReservationCommandInput,
  DeleteCapacityReservationCommandOutput,
} from "./commands/DeleteCapacityReservationCommand";
import {
  DeleteDataCatalogCommand,
  DeleteDataCatalogCommandInput,
  DeleteDataCatalogCommandOutput,
} from "./commands/DeleteDataCatalogCommand";
import {
  DeleteNamedQueryCommand,
  DeleteNamedQueryCommandInput,
  DeleteNamedQueryCommandOutput,
} from "./commands/DeleteNamedQueryCommand";
import {
  DeleteNotebookCommand,
  DeleteNotebookCommandInput,
  DeleteNotebookCommandOutput,
} from "./commands/DeleteNotebookCommand";
import {
  DeletePreparedStatementCommand,
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "./commands/DeletePreparedStatementCommand";
import {
  DeleteWorkGroupCommand,
  DeleteWorkGroupCommandInput,
  DeleteWorkGroupCommandOutput,
} from "./commands/DeleteWorkGroupCommand";
import {
  ExportNotebookCommand,
  ExportNotebookCommandInput,
  ExportNotebookCommandOutput,
} from "./commands/ExportNotebookCommand";
import {
  GetCalculationExecutionCodeCommand,
  GetCalculationExecutionCodeCommandInput,
  GetCalculationExecutionCodeCommandOutput,
} from "./commands/GetCalculationExecutionCodeCommand";
import {
  GetCalculationExecutionCommand,
  GetCalculationExecutionCommandInput,
  GetCalculationExecutionCommandOutput,
} from "./commands/GetCalculationExecutionCommand";
import {
  GetCalculationExecutionStatusCommand,
  GetCalculationExecutionStatusCommandInput,
  GetCalculationExecutionStatusCommandOutput,
} from "./commands/GetCalculationExecutionStatusCommand";
import {
  GetCapacityAssignmentConfigurationCommand,
  GetCapacityAssignmentConfigurationCommandInput,
  GetCapacityAssignmentConfigurationCommandOutput,
} from "./commands/GetCapacityAssignmentConfigurationCommand";
import {
  GetCapacityReservationCommand,
  GetCapacityReservationCommandInput,
  GetCapacityReservationCommandOutput,
} from "./commands/GetCapacityReservationCommand";
import { GetDatabaseCommand, GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import {
  GetDataCatalogCommand,
  GetDataCatalogCommandInput,
  GetDataCatalogCommandOutput,
} from "./commands/GetDataCatalogCommand";
import {
  GetNamedQueryCommand,
  GetNamedQueryCommandInput,
  GetNamedQueryCommandOutput,
} from "./commands/GetNamedQueryCommand";
import {
  GetNotebookMetadataCommand,
  GetNotebookMetadataCommandInput,
  GetNotebookMetadataCommandOutput,
} from "./commands/GetNotebookMetadataCommand";
import {
  GetPreparedStatementCommand,
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "./commands/GetPreparedStatementCommand";
import {
  GetQueryExecutionCommand,
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput,
} from "./commands/GetQueryExecutionCommand";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "./commands/GetQueryResultsCommand";
import {
  GetQueryRuntimeStatisticsCommand,
  GetQueryRuntimeStatisticsCommandInput,
  GetQueryRuntimeStatisticsCommandOutput,
} from "./commands/GetQueryRuntimeStatisticsCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  GetSessionStatusCommand,
  GetSessionStatusCommandInput,
  GetSessionStatusCommandOutput,
} from "./commands/GetSessionStatusCommand";
import {
  GetTableMetadataCommand,
  GetTableMetadataCommandInput,
  GetTableMetadataCommandOutput,
} from "./commands/GetTableMetadataCommand";
import {
  GetWorkGroupCommand,
  GetWorkGroupCommandInput,
  GetWorkGroupCommandOutput,
} from "./commands/GetWorkGroupCommand";
import {
  ImportNotebookCommand,
  ImportNotebookCommandInput,
  ImportNotebookCommandOutput,
} from "./commands/ImportNotebookCommand";
import {
  ListApplicationDPUSizesCommand,
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
} from "./commands/ListApplicationDPUSizesCommand";
import {
  ListCalculationExecutionsCommand,
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
} from "./commands/ListCalculationExecutionsCommand";
import {
  ListCapacityReservationsCommand,
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
} from "./commands/ListCapacityReservationsCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import {
  ListDataCatalogsCommand,
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
} from "./commands/ListDataCatalogsCommand";
import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "./commands/ListEngineVersionsCommand";
import {
  ListExecutorsCommand,
  ListExecutorsCommandInput,
  ListExecutorsCommandOutput,
} from "./commands/ListExecutorsCommand";
import {
  ListNamedQueriesCommand,
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput,
} from "./commands/ListNamedQueriesCommand";
import {
  ListNotebookMetadataCommand,
  ListNotebookMetadataCommandInput,
  ListNotebookMetadataCommandOutput,
} from "./commands/ListNotebookMetadataCommand";
import {
  ListNotebookSessionsCommand,
  ListNotebookSessionsCommandInput,
  ListNotebookSessionsCommandOutput,
} from "./commands/ListNotebookSessionsCommand";
import {
  ListPreparedStatementsCommand,
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "./commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommand,
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListTableMetadataCommand,
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
} from "./commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkGroupsCommand,
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput,
} from "./commands/ListWorkGroupsCommand";
import {
  PutCapacityAssignmentConfigurationCommand,
  PutCapacityAssignmentConfigurationCommandInput,
  PutCapacityAssignmentConfigurationCommandOutput,
} from "./commands/PutCapacityAssignmentConfigurationCommand";
import {
  StartCalculationExecutionCommand,
  StartCalculationExecutionCommandInput,
  StartCalculationExecutionCommandOutput,
} from "./commands/StartCalculationExecutionCommand";
import {
  StartQueryExecutionCommand,
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand";
import {
  StartSessionCommand,
  StartSessionCommandInput,
  StartSessionCommandOutput,
} from "./commands/StartSessionCommand";
import {
  StopCalculationExecutionCommand,
  StopCalculationExecutionCommandInput,
  StopCalculationExecutionCommandOutput,
} from "./commands/StopCalculationExecutionCommand";
import {
  StopQueryExecutionCommand,
  StopQueryExecutionCommandInput,
  StopQueryExecutionCommandOutput,
} from "./commands/StopQueryExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateSessionCommand,
  TerminateSessionCommandInput,
  TerminateSessionCommandOutput,
} from "./commands/TerminateSessionCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCapacityReservationCommand,
  UpdateCapacityReservationCommandInput,
  UpdateCapacityReservationCommandOutput,
} from "./commands/UpdateCapacityReservationCommand";
import {
  UpdateDataCatalogCommand,
  UpdateDataCatalogCommandInput,
  UpdateDataCatalogCommandOutput,
} from "./commands/UpdateDataCatalogCommand";
import {
  UpdateNamedQueryCommand,
  UpdateNamedQueryCommandInput,
  UpdateNamedQueryCommandOutput,
} from "./commands/UpdateNamedQueryCommand";
import {
  UpdateNotebookCommand,
  UpdateNotebookCommandInput,
  UpdateNotebookCommandOutput,
} from "./commands/UpdateNotebookCommand";
import {
  UpdateNotebookMetadataCommand,
  UpdateNotebookMetadataCommandInput,
  UpdateNotebookMetadataCommandOutput,
} from "./commands/UpdateNotebookMetadataCommand";
import {
  UpdatePreparedStatementCommand,
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "./commands/UpdatePreparedStatementCommand";
import {
  UpdateWorkGroupCommand,
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput,
} from "./commands/UpdateWorkGroupCommand";

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
  GetSessionCommand,
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
  createNotebook(args: CreateNotebookCommandInput, cb: (err: any, data?: CreateNotebookCommandOutput) => void): void;
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
  createWorkGroup(args: CreateWorkGroupCommandInput, cb: (err: any, data?: CreateWorkGroupCommandOutput) => void): void;
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
  deleteNotebook(args: DeleteNotebookCommandInput, cb: (err: any, data?: DeleteNotebookCommandOutput) => void): void;
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
  deleteWorkGroup(args: DeleteWorkGroupCommandInput, cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void): void;
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
  exportNotebook(args: ExportNotebookCommandInput, cb: (err: any, data?: ExportNotebookCommandOutput) => void): void;
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
  getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
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
  getDataCatalog(args: GetDataCatalogCommandInput, cb: (err: any, data?: GetDataCatalogCommandOutput) => void): void;
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamedQueryCommand}
   */
  getNamedQuery(args: GetNamedQueryCommandInput, options?: __HttpHandlerOptions): Promise<GetNamedQueryCommandOutput>;
  getNamedQuery(args: GetNamedQueryCommandInput, cb: (err: any, data?: GetNamedQueryCommandOutput) => void): void;
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
  getQueryResults(args: GetQueryResultsCommandInput, cb: (err: any, data?: GetQueryResultsCommandOutput) => void): void;
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
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
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
  getWorkGroup(args: GetWorkGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkGroupCommandOutput>;
  getWorkGroup(args: GetWorkGroupCommandInput, cb: (err: any, data?: GetWorkGroupCommandOutput) => void): void;
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
  importNotebook(args: ImportNotebookCommandInput, cb: (err: any, data?: ImportNotebookCommandOutput) => void): void;
  importNotebook(
    args: ImportNotebookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportNotebookCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationDPUSizesCommand}
   */
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
  listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
  listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataCatalogsCommand}
   */
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
  listExecutors(args: ListExecutorsCommandInput, options?: __HttpHandlerOptions): Promise<ListExecutorsCommandOutput>;
  listExecutors(args: ListExecutorsCommandInput, cb: (err: any, data?: ListExecutorsCommandOutput) => void): void;
  listExecutors(
    args: ListExecutorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamedQueriesCommand}
   */
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
  listSessions(args: ListSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
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
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkGroupsCommandOutput>;
  listWorkGroups(args: ListWorkGroupsCommandInput, cb: (err: any, data?: ListWorkGroupsCommandOutput) => void): void;
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
  startSession(args: StartSessionCommandInput, options?: __HttpHandlerOptions): Promise<StartSessionCommandOutput>;
  startSession(args: StartSessionCommandInput, cb: (err: any, data?: StartSessionCommandOutput) => void): void;
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
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
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateNotebook(args: UpdateNotebookCommandInput, cb: (err: any, data?: UpdateNotebookCommandOutput) => void): void;
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
  updateWorkGroup(args: UpdateWorkGroupCommandInput, cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void): void;
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): void;
}

/**
 * @public
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
 *          <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 */
export class Athena extends AthenaClient implements Athena {}
createAggregatedClient(commands, Athena);
