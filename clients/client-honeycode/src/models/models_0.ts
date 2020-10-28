import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the screen/automation in the request.
 *         </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The automation execution did not end successfully.</p>
 */
export interface AutomationExecutionException extends __SmithyException, $MetadataBearer {
  name: "AutomationExecutionException";
  $fault: "client";
  message?: string;
}

export namespace AutomationExecutionException {
  export const filterSensitiveLog = (obj: AutomationExecutionException): any => ({
    ...obj,
  });
}

/**
 * <p>The automation execution timed out.</p>
 */
export interface AutomationExecutionTimeoutException extends __SmithyException, $MetadataBearer {
  name: "AutomationExecutionTimeoutException";
  $fault: "server";
  message?: string;
}

export namespace AutomationExecutionTimeoutException {
  export const filterSensitiveLog = (obj: AutomationExecutionTimeoutException): any => ({
    ...obj,
  });
}

export enum Format {
  Accounting = "ACCOUNTING",
  Auto = "AUTO",
  Contact = "CONTACT",
  Currency = "CURRENCY",
  Date = "DATE",
  DateTime = "DATE_TIME",
  Number = "NUMBER",
  Percentage = "PERCENTAGE",
  Rowlink = "ROWLINK",
  Text = "TEXT",
  Time = "TIME",
}

/**
 * <p>Metadata for column in the table.</p>
 */
export interface ColumnMetadata {
  /**
   * <p>The name of the column.</p>
   */
  name: string | undefined;

  /**
   * <p>The format of the column.</p>
   */
  format: Format | string | undefined;
}

export namespace ColumnMetadata {
  export const filterSensitiveLog = (obj: ColumnMetadata): any => ({
    ...obj,
    ...(obj.name && { name: SENSITIVE_STRING }),
  });
}

/**
 * <p>The data in a particular data cell defined on the screen.</p>
 */
export interface DataItem {
  /**
   * <p>The formatted value of the data. e.g. John Smith.</p>
   */
  formattedValue?: string;

  /**
   * <p>
   *             The overrideFormat is optional and is specified only if a particular row of data has a different format for
   *             the data than the default format defined on the screen or the table.
   *         </p>
   */
  overrideFormat?: Format | string;

  /**
   * <p>The raw value of the data. e.g. jsmith@example.com</p>
   */
  rawValue?: string;
}

export namespace DataItem {
  export const filterSensitiveLog = (obj: DataItem): any => ({
    ...obj,
  });
}

/**
 * <p>The input variables to the app to be used by the InvokeScreenAutomation action request.</p>
 */
export interface VariableValue {
  /**
   * <p>Raw value of the variable.</p>
   */
  rawValue: string | undefined;
}

export namespace VariableValue {
  export const filterSensitiveLog = (obj: VariableValue): any => ({
    ...obj,
  });
}

export interface GetScreenDataRequest {
  /**
   * <p>
   *             This parameter is optional. If a nextToken is not specified, the API returns the first page of data.
   *         </p>
   *         <p>
   *             Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API
   *             will throw ValidationException.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             Variables are optional and are needed only if the screen requires them to render correctly. Variables are
   *             specified as a map where the key is the name of the variable as defined on the screen. The value is an
   *             object which currently has only one property, rawValue, which holds the value of the variable to be passed
   *             to the screen.
   *         </p>
   */
  variables?: { [key: string]: VariableValue };

  /**
   * <p>The ID of the app that contains the screem.</p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             The number of results to be returned on a single page.
   *             Specify a number between 1 and 100. The maximum value is 100.
   *         </p>
   *         <p>
   *             This parameter is optional. If you don't specify this parameter, the default page size is 100.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the screen.</p>
   */
  screenId: string | undefined;

  /**
   * <p>The ID of the workbook that contains the screen.</p>
   */
  workbookId: string | undefined;
}

export namespace GetScreenDataRequest {
  export const filterSensitiveLog = (obj: GetScreenDataRequest): any => ({
    ...obj,
    ...(obj.variables && { variables: SENSITIVE_STRING }),
  });
}

/**
 * <p>A single row in the ResultSet.</p>
 */
export interface ResultRow {
  /**
   * <p>The ID for a particular row.</p>
   */
  rowId?: string;

  /**
   * <p>List of all the data cells in a row.</p>
   */
  dataItems: DataItem[] | undefined;
}

export namespace ResultRow {
  export const filterSensitiveLog = (obj: ResultRow): any => ({
    ...obj,
    ...(obj.dataItems && { dataItems: SENSITIVE_STRING }),
  });
}

/**
 * <p>
 *             ResultSet contains the results of the request for a single block or list defined on the screen.
 *         </p>
 */
export interface ResultSet {
  /**
   * <p>
   *             List of rows returned by the request. Each row has a row Id and a list of data cells in that row. The data
   *             cells will be present in the same order as they are defined in the header.
   *         </p>
   */
  rows: ResultRow[] | undefined;

  /**
   * <p>
   *             List of headers for all the data cells in the block. The header identifies the name and default format of
   *             the data cell. Data cells appear in the same order in all rows as defined in the header. The names and
   *             formats are not repeated in the rows. If a particular row does not have a value for a data cell, a blank
   *             value is used.
   *         </p>
   *         <p>
   *             For example, a task list that displays the task name, due date and assigned person might have headers
   *             [ { "name": "Task Name"}, {"name": "Due Date", "format": "DATE"}, {"name": "Assigned", "format": "CONTACT"} ].
   *             Every row in the result will have the task name as the first item, due date as the second item and assigned
   *             person as the third item. If a particular task does not have a due date, that row will still have a blank
   *             value in the second element and the assigned person will still be in the third element.
   *         </p>
   */
  headers: ColumnMetadata[] | undefined;
}

export namespace ResultSet {
  export const filterSensitiveLog = (obj: ResultSet): any => ({
    ...obj,
    ...(obj.headers && { headers: obj.headers.map((item) => ColumnMetadata.filterSensitiveLog(item)) }),
  });
}

export interface GetScreenDataResult {
  /**
   * <p>
   *             Provides the pagination token to load the next page if there are more results matching the request. If a
   *             pagination token is not present in the response, it means that all data matching the query has been loaded.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             Indicates the cursor of the workbook at which the data returned by this workbook is read. Workbook cursor
   *             keeps increasing with every update and the increments are not sequential.
   *         </p>
   */
  workbookCursor: number | undefined;

  /**
   * <p>A map of all the rows on the screen keyed by block name.</p>
   */
  results: { [key: string]: ResultSet } | undefined;
}

export namespace GetScreenDataResult {
  export const filterSensitiveLog = (obj: GetScreenDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>There were unexpected errors from the server.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The request timed out.</p>
 */
export interface RequestTimeoutException extends __SmithyException, $MetadataBearer {
  name: "RequestTimeoutException";
  $fault: "server";
  message?: string;
}

export namespace RequestTimeoutException {
  export const filterSensitiveLog = (obj: RequestTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>A Workbook, App, Screen or Screen Automation was not found with the given ID.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Remote service is unreachable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Tps(transactions per second) rate reached.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface InvokeScreenAutomationRequest {
  /**
   * <p>The ID of the workbook that contains the screen automation.</p>
   */
  workbookId: string | undefined;

  /**
   * <p>
   *             The row ID for the automation if the automation is defined inside a block with source or list.
   *         </p>
   */
  rowId?: string;

  /**
   * <p>
   *             The request token for performing the automation action.
   *             Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error
   *             like a failed network connection, you can retry the call with the same request token. The service ensures
   *             that if the first call using that request token is successfully performed, the second call will return the
   *             response of the previous call rather than performing the action again.
   *         </p>
   *         <p>
   *             Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests
   *             spanning hours or days.
   *         </p>
   */
  clientRequestToken?: string;

  /**
   * <p>The ID of the screen that contains the screen automation.</p>
   */
  screenId: string | undefined;

  /**
   * <p>The ID of the app that contains the screen automation.</p>
   */
  appId: string | undefined;

  /**
   * <p>The ID of the automation action to be performed.</p>
   */
  screenAutomationId: string | undefined;

  /**
   * <p>
   *             Variables are optional and are needed only if the screen requires them to render correctly. Variables are
   *             specified as a map where the key is the name of the variable as defined on the screen. The value is an
   *             object which currently has only one property, rawValue, which holds the value of the variable to be passed
   *             to the screen.
   *         </p>
   */
  variables?: { [key: string]: VariableValue };
}

export namespace InvokeScreenAutomationRequest {
  export const filterSensitiveLog = (obj: InvokeScreenAutomationRequest): any => ({
    ...obj,
    ...(obj.variables && { variables: SENSITIVE_STRING }),
  });
}

export interface InvokeScreenAutomationResult {
  /**
   * <p>The updated workbook cursor after performing the automation action.</p>
   */
  workbookCursor: number | undefined;
}

export namespace InvokeScreenAutomationResult {
  export const filterSensitiveLog = (obj: InvokeScreenAutomationResult): any => ({
    ...obj,
  });
}
