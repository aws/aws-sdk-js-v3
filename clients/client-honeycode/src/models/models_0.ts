// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { HoneycodeServiceException as __BaseException } from "./HoneycodeServiceException";

/**
 * <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The automation execution did not end successfully.</p>
 */
export class AutomationExecutionException extends __BaseException {
  readonly name: "AutomationExecutionException" = "AutomationExecutionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationExecutionException, __BaseException>) {
    super({
      name: "AutomationExecutionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationExecutionException.prototype);
  }
}

/**
 * <p>The automation execution timed out.</p>
 */
export class AutomationExecutionTimeoutException extends __BaseException {
  readonly name: "AutomationExecutionTimeoutException" = "AutomationExecutionTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationExecutionTimeoutException, __BaseException>) {
    super({
      name: "AutomationExecutionTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationExecutionTimeoutException.prototype);
  }
}

/**
 * <p>
 *             CellInput object contains the data needed to create or update cells in a table.
 *         </p>
 *         <note>
 *             <p>
 *                 CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be
 *                 thrown if both fact and facts field are present.
 *             </p>
 *         </note>
 */
export interface CellInput {
  /**
   * <p>
   *             Fact represents the data that is entered into a cell. This data can be free text or a formula. Formulas need
   *             to start with the equals (=) sign.
   *         </p>
   */
  fact?: string;

  /**
   * <p>
   *             A list representing the values that are entered into a ROWSET cell. Facts list can have either only values
   *             or rowIDs, and rowIDs should from the same table.
   *         </p>
   */
  facts?: string[];
}

/**
 * <p>
 *             Data needed to create a single row in a table as part of the BatchCreateTableRows request.
 *         </p>
 */
export interface CreateRowData {
  /**
   * <p>
   *             An external identifier that represents the single row that is being created as part of the
   *             BatchCreateTableRows request. This can be any string that you can use to identify the row in the request.
   *             The BatchCreateTableRows API puts the batch item id in the results to allow you to link data in the
   *             request to data in the results.
   *         </p>
   */
  batchItemId: string | undefined;

  /**
   * <p>
   *             A map representing the cells to create in the new row. The key is the column id of the
   *             cell and the value is the CellInput object that represents the data to set in that cell.
   *         </p>
   */
  cellsToCreate: Record<string, CellInput> | undefined;
}

export interface BatchCreateTableRowsRequest {
  /**
   * <p>The ID of the workbook where the new rows are being added.</p>
   *         <p>
   *             If a workbook with the specified ID could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table where the new rows are being added.</p>
   *         <p>
   *             If a table with the specified ID could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>
   *             The list of rows to create at the end of the table. Each item in this list needs to have a batch item id
   *             to uniquely identify the element in the request and the cells to create for that row.
   *             You need to specify at least one item in this list.
   *         </p>
   *         <p>
   *             Note that if one of the column ids in any of the rows in the request does not exist in the table, then the
   *             request fails and no updates are made to the table.
   *         </p>
   */
  rowsToCreate: CreateRowData[] | undefined;

  /**
   * <p>
   *             The request token for performing the batch create operation.
   *             Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error
   *             like a failed network connection, you can retry the call with the same request token. The service ensures
   *             that if the first call using that request token is successfully performed, the second call will not perform
   *             the operation again.
   *         </p>
   *         <p>
   *             Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests
   *             spanning hours or days.
   *         </p>
   */
  clientRequestToken?: string;
}

/**
 * <p>
 *             A single item in a batch that failed to perform the intended action because of an error preventing it from
 *             succeeding.
 *         </p>
 */
export interface FailedBatchItem {
  /**
   * <p>
   *             The id of the batch item that failed. This is the batch item id for the BatchCreateTableRows and
   *             BatchUpsertTableRows operations and the row id for the BatchUpdateTableRows and BatchDeleteTableRows
   *             operations.
   *         </p>
   */
  id: string | undefined;

  /**
   * <p>
   *             The error message that indicates why the batch item failed.
   *         </p>
   */
  errorMessage: string | undefined;
}

export interface BatchCreateTableRowsResult {
  /**
   * <p>The updated workbook cursor after adding the new rows at the end of the table.</p>
   */
  workbookCursor: number | undefined;

  /**
   * <p>The map of batch item id to the row id that was created for that item.</p>
   */
  createdRows: Record<string, string> | undefined;

  /**
   * <p>
   *             The list of batch items in the request that could not be added to the table. Each element in this list
   *             contains one item from the request that could not be added to the table along with the reason why
   *             that item could not be added.
   *         </p>
   */
  failedBatchItems?: FailedBatchItem[];
}

/**
 * <p>There were unexpected errors from the server.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request timed out.</p>
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>
 *             The request caused service quota to be breached.
 *         </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Remote service is unreachable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>Tps(transactions per second) rate reached.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export interface BatchDeleteTableRowsRequest {
  /**
   * <p>The ID of the workbook where the rows are being deleted.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table where the rows are being deleted.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>
   *             The list of row ids to delete from the table. You need to specify at least one row id in this list.
   *         </p>
   *         <p>
   *             Note that if one of the row ids provided in the request does not exist in the table, then the request fails
   *             and no rows are deleted from the table.
   *         </p>
   */
  rowIds: string[] | undefined;

  /**
   * <p>
   *             The request token for performing the delete action.
   *             Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error
   *             like a failed network connection, you can retry the call with the same request token. The service ensures
   *             that if the first call using that request token is successfully performed, the second call will not perform
   *             the action again.
   *         </p>
   *         <p>
   *             Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests
   *             spanning hours or days.
   *         </p>
   */
  clientRequestToken?: string;
}

export interface BatchDeleteTableRowsResult {
  /**
   * <p>The updated workbook cursor after deleting the rows from the table.</p>
   */
  workbookCursor: number | undefined;

  /**
   * <p>
   *             The list of row ids in the request that could not be deleted from the table. Each element in this list
   *             contains one row id from the request that could not be deleted along with the reason why that item could not
   *             be deleted.
   *         </p>
   */
  failedBatchItems?: FailedBatchItem[];
}

/**
 * <p>
 *             Data needed to create a single row in a table as part of the BatchCreateTableRows request.
 *         </p>
 */
export interface UpdateRowData {
  /**
   * <p>
   *             The id of the row that needs to be updated.
   *         </p>
   */
  rowId: string | undefined;

  /**
   * <p>
   *             A map representing the cells to update in the given row. The key is the column id of the
   *             cell and the value is the CellInput object that represents the data to set in that cell.
   *         </p>
   */
  cellsToUpdate: Record<string, CellInput> | undefined;
}

export interface BatchUpdateTableRowsRequest {
  /**
   * <p>The ID of the workbook where the rows are being updated.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table where the rows are being updated.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>
   *             The list of rows to update in the table. Each item in this list needs to contain the row id to update
   *             along with the map of column id to cell values for each column in that row that needs to be updated.
   *             You need to specify at least one row in this list, and for each row, you need to specify at least one
   *             column to update.
   *         </p>
   *         <p>
   *             Note that if one of the row or column ids in the request does not exist in the table, then the request fails
   *             and no updates are made to the table.
   *         </p>
   */
  rowsToUpdate: UpdateRowData[] | undefined;

  /**
   * <p>
   *             The request token for performing the update action.
   *             Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error
   *             like a failed network connection, you can retry the call with the same request token. The service ensures
   *             that if the first call using that request token is successfully performed, the second call will not perform
   *             the action again.
   *         </p>
   *         <p>
   *             Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests
   *             spanning hours or days.
   *         </p>
   */
  clientRequestToken?: string;
}

export interface BatchUpdateTableRowsResult {
  /**
   * <p>The updated workbook cursor after adding the new rows at the end of the table.</p>
   */
  workbookCursor: number | undefined;

  /**
   * <p>
   *             The list of batch items in the request that could not be updated in the table. Each element in this list
   *             contains one item from the request that could not be updated in the table along with the reason why
   *             that item could not be updated.
   *         </p>
   */
  failedBatchItems?: FailedBatchItem[];
}

/**
 * <p>
 *             An object that represents a filter formula along with the id of the context row under which the filter
 *             function needs to evaluate.
 *         </p>
 */
export interface Filter {
  /**
   * <p>
   *             A formula representing a filter function that returns zero or more matching rows from a table. Valid
   *             formulas in this field return a list of rows from a table. The most common ways of writing a formula to
   *             return a list of rows are to use the FindRow() or Filter() functions. Any other formula that returns zero or
   *             more rows is also acceptable. For example, you can use a formula that points to a cell that contains a
   *             filter function.
   *         </p>
   */
  formula: string | undefined;

  /**
   * <p>
   *             The optional contextRowId attribute can be used to specify the row id of the context row if the filter
   *             formula contains unqualified references to table columns and needs a context row to evaluate them
   *             successfully.
   *         </p>
   */
  contextRowId?: string;
}

/**
 * <p>
 *             Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request.
 *         </p>
 */
export interface UpsertRowData {
  /**
   * <p>
   *             An external identifier that represents a single item in the request that is being upserted as part of the
   *             BatchUpsertTableRows request. This can be any string that you can use to identify the item in the request.
   *             The BatchUpsertTableRows API puts the batch item id in the results to allow you to link data in the
   *             request to data in the results.
   *         </p>
   */
  batchItemId: string | undefined;

  /**
   * <p>
   *             The filter formula to use to find existing matching rows to update. The formula needs to return zero or more
   *             rows. If the formula returns 0 rows, then a new row will be appended in the target table. If the formula
   *             returns one or more rows, then the returned rows will be updated.
   *         </p>
   *         <p>
   *             Note that the filter formula needs to return rows from the target table for the upsert operation to succeed.
   *             If the filter formula has a syntax error or it doesn't evaluate to zero or more rows in the target table
   *             for any one item in the input list, then the entire BatchUpsertTableRows request fails and no updates are
   *             made to the table.
   *         </p>
   */
  filter: Filter | undefined;

  /**
   * <p>
   *             A map representing the cells to update for the matching rows or an appended row. The key is the column id
   *             of the cell and the value is the CellInput object that represents the data to set in that cell.
   *         </p>
   */
  cellsToUpdate: Record<string, CellInput> | undefined;
}

export interface BatchUpsertTableRowsRequest {
  /**
   * <p>The ID of the workbook where the rows are being upserted.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table where the rows are being upserted.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>
   *             The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely
   *             identify the element in the request, a filter expression to find the rows to update for that element
   *             and the cell values to set for each column in the upserted rows. You need to specify
   *             at least one item in this list.
   *         </p>
   *         <p>
   *             Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the
   *             column ids in any of the rows does not exist in the table, then the request fails
   *             and no updates are made to the table.
   *         </p>
   */
  rowsToUpsert: UpsertRowData[] | undefined;

  /**
   * <p>
   *             The request token for performing the update action.
   *             Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error
   *             like a failed network connection, you can retry the call with the same request token. The service ensures
   *             that if the first call using that request token is successfully performed, the second call will not perform
   *             the action again.
   *         </p>
   *         <p>
   *             Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests
   *             spanning hours or days.
   *         </p>
   */
  clientRequestToken?: string;
}

export enum UpsertAction {
  Appended = "APPENDED",
  Updated = "UPDATED",
}

/**
 * <p>
 *             An object that represents the result of a single upsert row request.
 *         </p>
 */
export interface UpsertRowsResult {
  /**
   * <p>
   *             The list of row ids that were changed as part of an upsert row operation. If the upsert resulted in an
   *             update, this list could potentially contain multiple rows that matched the filter and hence got updated.
   *             If the upsert resulted in an append, this list would only have the single row that was appended.
   *         </p>
   */
  rowIds: string[] | undefined;

  /**
   * <p>
   *             The result of the upsert action.
   *         </p>
   */
  upsertAction: UpsertAction | string | undefined;
}

export interface BatchUpsertTableRowsResult {
  /**
   * <p>
   *             A map with the batch item id as the key and the result of the upsert operation as the value. The
   *             result of the upsert operation specifies whether existing rows were updated or a new row was appended, along
   *             with the list of row ids that were affected.
   *         </p>
   */
  rows: Record<string, UpsertRowsResult> | undefined;

  /**
   * <p>The updated workbook cursor after updating or appending rows in the table.</p>
   */
  workbookCursor: number | undefined;

  /**
   * <p>
   *             The list of batch items in the request that could not be updated or appended in the table. Each element in
   *             this list contains one item from the request that could not be updated in the table along with the reason
   *             why that item could not be updated or appended.
   *         </p>
   */
  failedBatchItems?: FailedBatchItem[];
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
  Rowset = "ROWSET",
  Text = "TEXT",
  Time = "TIME",
}

/**
 * <p>An object that represents a single cell in a table.</p>
 */
export interface Cell {
  /**
   * <p>
   *             The formula contained in the cell. This field is empty if a cell does not have a formula.
   *         </p>
   */
  formula?: string;

  /**
   * <p>The format of the cell. If this field is empty, then the format is either not specified in the
   *         workbook or the format is set to AUTO.</p>
   */
  format?: Format | string;

  /**
   * <p>
   *             The raw value of the data contained in the cell. The raw value depends on the format of the data in the
   *             cell. However the attribute in the API return value is always a string containing the raw value.
   *         </p>
   *         <p>
   *             Cells with format DATE, DATE_TIME or TIME have the raw value as a floating point
   *             number where the whole number represents the number of days since 1/1/1900 and the fractional part
   *             represents the fraction of the day since midnight. For example, a cell with date 11/3/2020 has the raw value
   *             "44138". A cell with the time 9:00 AM has the raw value "0.375" and a cell with date/time value of
   *             11/3/2020 9:00 AM has the raw value "44138.375". Notice that even though the raw value is a number in all
   *             three cases, it is still represented as a string.
   *         </p>
   *         <p>
   *             Cells with format NUMBER, CURRENCY, PERCENTAGE and ACCOUNTING have the raw value of the data as the number
   *             representing the data being displayed. For example, the number 1.325 with two decimal places in the format
   *             will have it's raw value as "1.325" and formatted value as "1.33". A currency value for
   *             $10 will have the raw value as "10" and formatted value as "$10.00". A value representing 20% with two
   *             decimal places in the format will have its raw value as "0.2" and the formatted value as "20.00%". An
   *             accounting value of -$25 will have "-25" as the raw value and "$  (25.00)" as the formatted value.
   *         </p>
   *         <p>
   *             Cells with format TEXT will have the raw text as the raw value. For example, a cell with text "John Smith"
   *             will have "John Smith" as both the raw value and the formatted value.
   *         </p>
   *         <p>
   *             Cells with format CONTACT will have the name of the contact as a formatted value and the email address of
   *             the contact as the raw value. For example, a contact for John Smith will have "John Smith" as the
   *             formatted value and "john.smith@example.com" as the raw value.
   *         </p>
   *         <p>
   *             Cells with format ROWLINK (aka picklist) will have the first column of the linked row as the formatted value
   *             and the row id of the linked row as the raw value. For example, a cell containing a picklist to a table
   *             that displays task status might have "Completed" as the formatted value and
   *             "row:dfcefaee-5b37-4355-8f28-40c3e4ff5dd4/ca432b2f-b8eb-431d-9fb5-cbe0342f9f03" as the raw value.
   *         </p>
   *         <p>
   *             Cells with format ROWSET (aka multi-select or multi-record picklist) will by default have the first column
   *             of each of the linked rows as the formatted value in the list, and the rowset id of the linked rows as the
   *             raw value. For example, a cell containing a multi-select picklist to a table that contains items might have
   *             "Item A", "Item B" in the formatted value list and "rows:b742c1f4-6cb0-4650-a845-35eb86fcc2bb/
   *             [fdea123b-8f68-474a-aa8a-5ff87aa333af,6daf41f0-a138-4eee-89da-123086d36ecf]" as the raw value.
   *         </p>
   *         <p>
   *             Cells with format ATTACHMENT will have the name of the attachment as the formatted value and the attachment
   *             id as the raw value. For example, a cell containing an attachment named "image.jpeg" will have
   *             "image.jpeg" as the formatted value and "attachment:ca432b2f-b8eb-431d-9fb5-cbe0342f9f03" as the raw value.
   *         </p>
   *         <p>
   *             Cells with format AUTO or cells without any format that are auto-detected as one of the formats above will
   *             contain the raw and formatted values as mentioned above, based on the auto-detected formats. If there is no
   *             auto-detected format, the raw and formatted values will be the same as the data in the cell.
   *         </p>
   */
  rawValue?: string;

  /**
   * <p>
   *             The formatted value of the cell. This is the value that you see displayed in the cell in the UI.
   *         </p>
   *         <p>
   *             Note that the formatted value of a cell is always represented as a string irrespective of the data that is
   *             stored in the cell. For example, if a cell contains a date, the formatted value of the cell is the string
   *             representation of the formatted date being shown in the cell in the UI. See details in the rawValue field
   *             below for how cells of different formats will have different raw and formatted values.
   *         </p>
   */
  formattedValue?: string;

  /**
   * <p>
   *             A list of formatted values of the cell. This field is only returned when the cell is ROWSET format
   *             (aka multi-select or multi-record picklist). Values in the list are always represented as strings.
   *             The formattedValue field will be empty if this field is returned.
   *         </p>
   */
  formattedValues?: string[];
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

/**
 * <p>The data in a particular data cell defined on the screen.</p>
 */
export interface DataItem {
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

  /**
   * <p>The formatted value of the data. e.g. John Smith.</p>
   */
  formattedValue?: string;
}

export enum ImportDataCharacterEncoding {
  ISO_8859_1 = "ISO-8859-1",
  US_ASCII = "US-ASCII",
  UTF_16 = "UTF-16",
  UTF_16BE = "UTF-16BE",
  UTF_16LE = "UTF-16LE",
  UTF_8 = "UTF-8",
}

/**
 * <p>
 *             An object that contains the options relating to parsing delimited text as part of an import request.
 *         </p>
 */
export interface DelimitedTextImportOptions {
  /**
   * <p>The delimiter to use for separating columns in a single row of the input.</p>
   */
  delimiter: string | undefined;

  /**
   * <p>Indicates whether the input file has a header row at the top containing the column names.</p>
   */
  hasHeaderRow?: boolean;

  /**
   * <p>A parameter to indicate whether empty rows should be ignored or be included in the import.</p>
   */
  ignoreEmptyRows?: boolean;

  /**
   * <p>The encoding of the data in the input file.</p>
   */
  dataCharacterEncoding?: ImportDataCharacterEncoding | string;
}

export interface DescribeTableDataImportJobRequest {
  /**
   * <p>The ID of the workbook into which data was imported.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table into which data was imported.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>The ID of the job that was returned by the StartTableDataImportJob request.</p>
   *         <p>
   *             If a job with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  jobId: string | undefined;
}

export enum ErrorCode {
  AccessDenied = "ACCESS_DENIED",
  FileEmptyError = "FILE_EMPTY_ERROR",
  FileNotFoundError = "FILE_NOT_FOUND_ERROR",
  FileParsingError = "FILE_PARSING_ERROR",
  FileSizeLimitError = "FILE_SIZE_LIMIT_ERROR",
  InvalidFileTypeError = "INVALID_FILE_TYPE_ERROR",
  InvalidImportOptionsError = "INVALID_IMPORT_OPTIONS_ERROR",
  InvalidTableColumnIdError = "INVALID_TABLE_COLUMN_ID_ERROR",
  InvalidTableIdError = "INVALID_TABLE_ID_ERROR",
  InvalidUrlError = "INVALID_URL_ERROR",
  ResourceNotFoundError = "RESOURCE_NOT_FOUND_ERROR",
  SystemLimitError = "SYSTEM_LIMIT_ERROR",
  TableNotFoundError = "TABLE_NOT_FOUND_ERROR",
  UnknownError = "UNKNOWN_ERROR",
}

/**
 * <p>
 *             An object that contains the configuration parameters for the data source of an import request.
 *         </p>
 */
export interface ImportDataSourceConfig {
  /**
   * <p>
   *             The URL from which source data will be downloaded for the import request.
   *         </p>
   */
  dataSourceUrl?: string;
}

/**
 * <p>An object that has details about the source of the data that was submitted for import.</p>
 */
export interface ImportDataSource {
  /**
   * <p>The configuration parameters for the data source of the import</p>
   */
  dataSourceConfig: ImportDataSourceConfig | undefined;
}

/**
 * <p>An object that contains the properties for importing data to a specific column in a table.</p>
 */
export interface SourceDataColumnProperties {
  /**
   * <p>The index of the column in the input file.</p>
   */
  columnIndex?: number;
}

/**
 * <p>An object that contains the options relating to the destination of the import request.</p>
 */
export interface DestinationOptions {
  /**
   * <p>A map of the column id to the import properties for each column.</p>
   */
  columnMap?: Record<string, SourceDataColumnProperties>;
}

/**
 * <p>An object that contains the options specified by the sumitter of the import request.</p>
 */
export interface ImportOptions {
  /**
   * <p>Options relating to the destination of the import request.</p>
   */
  destinationOptions?: DestinationOptions;

  /**
   * <p>Options relating to parsing delimited text. Required if dataFormat is DELIMITED_TEXT.</p>
   */
  delimitedTextOptions?: DelimitedTextImportOptions;
}

/**
 * <p>An object that contains the attributes of the submitter of the import job.</p>
 */
export interface ImportJobSubmitter {
  /**
   * <p>The email id of the submitter of the import job, if available.</p>
   */
  email?: string;

  /**
   * <p>The AWS user ARN of the submitter of the import job, if available.</p>
   */
  userArn?: string;
}

/**
 * <p>The metadata associated with the table data import job that was submitted.</p>
 */
export interface TableDataImportJobMetadata {
  /**
   * <p>Details about the submitter of the import request.</p>
   */
  submitter: ImportJobSubmitter | undefined;

  /**
   * <p>The timestamp when the job was submitted for import.</p>
   */
  submitTime: Date | undefined;

  /**
   * <p>The options that was specified at the time of submitting the import request.</p>
   */
  importOptions: ImportOptions | undefined;

  /**
   * <p>The source of the data that was submitted for import.</p>
   */
  dataSource: ImportDataSource | undefined;
}

export enum TableDataImportJobStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Submitted = "SUBMITTED",
}

export interface DescribeTableDataImportJobResult {
  /**
   * <p>
   *             The current status of the import job.
   *         </p>
   */
  jobStatus: TableDataImportJobStatus | string | undefined;

  /**
   * <p>
   *             A message providing more details about the current status of the import job.
   *         </p>
   */
  message: string | undefined;

  /**
   * <p>
   *             The metadata about the job that was submitted for import.
   *         </p>
   */
  jobMetadata: TableDataImportJobMetadata | undefined;

  /**
   * <p>
   *             If job status is failed, error code to understand reason for the failure.
   *         </p>
   */
  errorCode?: ErrorCode | string;
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

export interface GetScreenDataRequest {
  /**
   * <p>The ID of the workbook that contains the screen.</p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the app that contains the screen.</p>
   */
  appId: string | undefined;

  /**
   * <p>The ID of the screen.</p>
   */
  screenId: string | undefined;

  /**
   * <p>
   *             Variables are optional and are needed only if the screen requires them to render correctly. Variables are
   *             specified as a map where the key is the name of the variable as defined on the screen. The value is an
   *             object which currently has only one property, rawValue, which holds the value of the variable to be passed
   *             to the screen.
   *         </p>
   */
  variables?: Record<string, VariableValue>;

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
   * <p>
   *             This parameter is optional. If a nextToken is not specified, the API returns the first page of data.
   *         </p>
   *         <p>
   *             Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API
   *             will throw ValidationException.
   *         </p>
   */
  nextToken?: string;
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

/**
 * <p>
 *             ResultSet contains the results of the request for a single block or list defined on the screen.
 *         </p>
 */
export interface ResultSet {
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

  /**
   * <p>
   *             List of rows returned by the request. Each row has a row Id and a list of data cells in that row. The data
   *             cells will be present in the same order as they are defined in the header.
   *         </p>
   */
  rows: ResultRow[] | undefined;
}

export interface GetScreenDataResult {
  /**
   * <p>A map of all the rows on the screen keyed by block name.</p>
   */
  results: Record<string, ResultSet> | undefined;

  /**
   * <p>
   *             Indicates the cursor of the workbook at which the data returned by this workbook is read. Workbook cursor
   *             keeps increasing with every update and the increments are not sequential.
   *         </p>
   */
  workbookCursor: number | undefined;

  /**
   * <p>
   *             Provides the pagination token to load the next page if there are more results matching the request. If a
   *             pagination token is not present in the response, it means that all data matching the query has been loaded.
   *         </p>
   */
  nextToken?: string;
}

export enum ImportSourceDataFormat {
  DelimitedText = "DELIMITED_TEXT",
}

export interface InvokeScreenAutomationRequest {
  /**
   * <p>The ID of the workbook that contains the screen automation.</p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the app that contains the screen automation.</p>
   */
  appId: string | undefined;

  /**
   * <p>The ID of the screen that contains the screen automation.</p>
   */
  screenId: string | undefined;

  /**
   * <p>The ID of the automation action to be performed.</p>
   */
  screenAutomationId: string | undefined;

  /**
   * <p>
   *             Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an
   *             object which currently has only one property, rawValue, which holds the value of the variable to be passed
   *             to the screen. Any variables defined in a screen are required to be passed in the call.
   *         </p>
   */
  variables?: Record<string, VariableValue>;

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
}

export interface InvokeScreenAutomationResult {
  /**
   * <p>The updated workbook cursor after performing the automation action.</p>
   */
  workbookCursor: number | undefined;
}

export interface ListTableColumnsRequest {
  /**
   * <p>The ID of the workbook that contains the table whose columns are being retrieved.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table whose columns are being retrieved.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

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
}

/**
 * <p>An object that contains attributes about a single column in a table</p>
 */
export interface TableColumn {
  /**
   * <p>The id of the column in the table.</p>
   */
  tableColumnId?: string;

  /**
   * <p>The name of the column in the table.</p>
   */
  tableColumnName?: string;

  /**
   * <p>
   *             The column level format that is applied in the table. An empty value in this field means that the
   *             column format is the default value 'AUTO'.
   *         </p>
   */
  format?: Format | string;
}

export interface ListTableColumnsResult {
  /**
   * <p>
   *             The list of columns in the table.
   *         </p>
   */
  tableColumns: TableColumn[] | undefined;

  /**
   * <p>
   *             Provides the pagination token to load the next page if there are more results matching the request. If a
   *             pagination token is not present in the response, it means that all data matching the request has been
   *             loaded.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor
   *             keeps increasing with every update and the increments are not sequential.
   *         </p>
   */
  workbookCursor?: number;
}

export interface ListTableRowsRequest {
  /**
   * <p>The ID of the workbook that contains the table whose rows are being retrieved.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table whose rows are being retrieved.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>
   *             This parameter is optional. If one or more row ids are specified in this list, then only the specified
   *             row ids are returned in the result. If no row ids are specified here, then all the rows in the table are
   *             returned.
   *         </p>
   */
  rowIds?: string[];

  /**
   * <p>The maximum number of rows to return in each page of the results.</p>
   */
  maxResults?: number;

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
}

/**
 * <p>An object that contains attributes about a single row in a table</p>
 */
export interface TableRow {
  /**
   * <p>The id of the row in the table.</p>
   */
  rowId: string | undefined;

  /**
   * <p>A list of cells in the table row. The cells appear in the same order as the columns of the table.
   *         </p>
   */
  cells: Cell[] | undefined;
}

export interface ListTableRowsResult {
  /**
   * <p>
   *             The list of columns in the table whose row data is returned in the result.
   *         </p>
   */
  columnIds: string[] | undefined;

  /**
   * <p>
   *             The list of rows in the table. Note that this result is paginated, so this list contains a maximum of 100
   *             rows.
   *         </p>
   */
  rows: TableRow[] | undefined;

  /**
   * <p>
   *             The list of row ids included in the request that were not found in the table.
   *         </p>
   */
  rowIdsNotFound?: string[];

  /**
   * <p>
   *             Provides the pagination token to load the next page if there are more results matching the request. If a
   *             pagination token is not present in the response, it means that all data matching the request has been
   *             loaded.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor
   *             keeps increasing with every update and the increments are not sequential.
   *         </p>
   */
  workbookCursor: number | undefined;
}

export interface ListTablesRequest {
  /**
   * <p>The ID of the workbook whose tables are being retrieved.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The maximum number of tables to return in each page of the results.</p>
   */
  maxResults?: number;

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
}

/**
 * <p>An object representing the properties of a table in a workbook.</p>
 */
export interface Table {
  /**
   * <p>The id of the table.</p>
   */
  tableId?: string;

  /**
   * <p>The name of the table.</p>
   */
  tableName?: string;
}

export interface ListTablesResult {
  /**
   * <p>
   *             The list of tables in the workbook.
   *         </p>
   */
  tables: Table[] | undefined;

  /**
   * <p>
   *             Provides the pagination token to load the next page if there are more results matching the request. If a
   *             pagination token is not present in the response, it means that all data matching the request has been
   *             loaded.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor
   *             keeps increasing with every update and the increments are not sequential.
   *         </p>
   */
  workbookCursor?: number;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResult {
  /**
   * <p>The resource's tags.</p>
   */
  tags?: Record<string, string>;
}

export interface QueryTableRowsRequest {
  /**
   * <p>The ID of the workbook whose table rows are being queried.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>The ID of the table whose rows are being queried.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  tableId: string | undefined;

  /**
   * <p>An object that represents a filter formula along with the id of the context row under which the filter
   *             function needs to evaluate.</p>
   */
  filterFormula: Filter | undefined;

  /**
   * <p>The maximum number of rows to return in each page of the results.</p>
   */
  maxResults?: number;

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
}

export interface QueryTableRowsResult {
  /**
   * <p>
   *             The list of columns in the table whose row data is returned in the result.
   *         </p>
   */
  columnIds: string[] | undefined;

  /**
   * <p>
   *             The list of rows in the table that match the query filter.
   *         </p>
   */
  rows: TableRow[] | undefined;

  /**
   * <p>
   *             Provides the pagination token to load the next page if there are more results matching the request. If a
   *             pagination token is not present in the response, it means that all data matching the request has been
   *             loaded.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor
   *             keeps increasing with every update and the increments are not sequential.
   *         </p>
   */
  workbookCursor: number | undefined;
}

export interface StartTableDataImportJobRequest {
  /**
   * <p>The ID of the workbook where the rows are being imported.</p>
   *         <p>
   *             If a workbook with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  workbookId: string | undefined;

  /**
   * <p>
   *             The source of the data that is being imported. The size of source must be no larger than 100 MB.
   *             Source must have no more than 100,000 cells and no more than 1,000 rows.
   *         </p>
   */
  dataSource: ImportDataSource | undefined;

  /**
   * <p>
   *             The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT".
   *         </p>
   */
  dataFormat: ImportSourceDataFormat | string | undefined;

  /**
   * <p>The ID of the table where the rows are being imported.</p>
   *         <p>
   *             If a table with the specified id could not be found, this API throws ResourceNotFoundException.
   *         </p>
   */
  destinationTableId: string | undefined;

  /**
   * <p>
   *             The options for customizing this import request.
   *         </p>
   */
  importOptions: ImportOptions | undefined;

  /**
   * <p>
   *             The request token for performing the update action.
   *             Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error
   *             like a failed network connection, you can retry the call with the same request token. The service ensures
   *             that if the first call using that request token is successfully performed, the second call will not perform
   *             the action again.
   *         </p>
   *         <p>
   *             Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests
   *             spanning hours or days.
   *         </p>
   */
  clientRequestToken: string | undefined;
}

export interface StartTableDataImportJobResult {
  /**
   * <p>
   *             The id that is assigned to this import job. Future requests to find out the status of this import job
   *             need to send this id in the appropriate parameter in the request.
   *         </p>
   */
  jobId: string | undefined;

  /**
   * <p>
   *             The status of the import job immediately after submitting the request.
   *         </p>
   */
  jobStatus: TableDataImportJobStatus | string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to apply to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResult {}

export interface UntagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResult {}

/**
 * @internal
 */
export const CellInputFilterSensitiveLog = (obj: CellInput): any => ({
  ...obj,
  ...(obj.fact && { fact: SENSITIVE_STRING }),
  ...(obj.facts && { facts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRowDataFilterSensitiveLog = (obj: CreateRowData): any => ({
  ...obj,
  ...(obj.cellsToCreate && {
    cellsToCreate: Object.entries(obj.cellsToCreate).reduce(
      (acc: any, [key, value]: [string, CellInput]) => ((acc[key] = CellInputFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const BatchCreateTableRowsRequestFilterSensitiveLog = (obj: BatchCreateTableRowsRequest): any => ({
  ...obj,
  ...(obj.rowsToCreate && { rowsToCreate: obj.rowsToCreate.map((item) => CreateRowDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FailedBatchItemFilterSensitiveLog = (obj: FailedBatchItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateTableRowsResultFilterSensitiveLog = (obj: BatchCreateTableRowsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteTableRowsRequestFilterSensitiveLog = (obj: BatchDeleteTableRowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteTableRowsResultFilterSensitiveLog = (obj: BatchDeleteTableRowsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRowDataFilterSensitiveLog = (obj: UpdateRowData): any => ({
  ...obj,
  ...(obj.cellsToUpdate && {
    cellsToUpdate: Object.entries(obj.cellsToUpdate).reduce(
      (acc: any, [key, value]: [string, CellInput]) => ((acc[key] = CellInputFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const BatchUpdateTableRowsRequestFilterSensitiveLog = (obj: BatchUpdateTableRowsRequest): any => ({
  ...obj,
  ...(obj.rowsToUpdate && { rowsToUpdate: obj.rowsToUpdate.map((item) => UpdateRowDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchUpdateTableRowsResultFilterSensitiveLog = (obj: BatchUpdateTableRowsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
  ...(obj.formula && { formula: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpsertRowDataFilterSensitiveLog = (obj: UpsertRowData): any => ({
  ...obj,
  ...(obj.filter && { filter: FilterFilterSensitiveLog(obj.filter) }),
  ...(obj.cellsToUpdate && {
    cellsToUpdate: Object.entries(obj.cellsToUpdate).reduce(
      (acc: any, [key, value]: [string, CellInput]) => ((acc[key] = CellInputFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const BatchUpsertTableRowsRequestFilterSensitiveLog = (obj: BatchUpsertTableRowsRequest): any => ({
  ...obj,
  ...(obj.rowsToUpsert && { rowsToUpsert: obj.rowsToUpsert.map((item) => UpsertRowDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpsertRowsResultFilterSensitiveLog = (obj: UpsertRowsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpsertTableRowsResultFilterSensitiveLog = (obj: BatchUpsertTableRowsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CellFilterSensitiveLog = (obj: Cell): any => ({
  ...obj,
  ...(obj.formula && { formula: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ColumnMetadataFilterSensitiveLog = (obj: ColumnMetadata): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataItemFilterSensitiveLog = (obj: DataItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DelimitedTextImportOptionsFilterSensitiveLog = (obj: DelimitedTextImportOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTableDataImportJobRequestFilterSensitiveLog = (obj: DescribeTableDataImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportDataSourceConfigFilterSensitiveLog = (obj: ImportDataSourceConfig): any => ({
  ...obj,
  ...(obj.dataSourceUrl && { dataSourceUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportDataSourceFilterSensitiveLog = (obj: ImportDataSource): any => ({
  ...obj,
  ...(obj.dataSourceConfig && { dataSourceConfig: ImportDataSourceConfigFilterSensitiveLog(obj.dataSourceConfig) }),
});

/**
 * @internal
 */
export const SourceDataColumnPropertiesFilterSensitiveLog = (obj: SourceDataColumnProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationOptionsFilterSensitiveLog = (obj: DestinationOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportOptionsFilterSensitiveLog = (obj: ImportOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportJobSubmitterFilterSensitiveLog = (obj: ImportJobSubmitter): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TableDataImportJobMetadataFilterSensitiveLog = (obj: TableDataImportJobMetadata): any => ({
  ...obj,
  ...(obj.submitter && { submitter: ImportJobSubmitterFilterSensitiveLog(obj.submitter) }),
  ...(obj.dataSource && { dataSource: ImportDataSourceFilterSensitiveLog(obj.dataSource) }),
});

/**
 * @internal
 */
export const DescribeTableDataImportJobResultFilterSensitiveLog = (obj: DescribeTableDataImportJobResult): any => ({
  ...obj,
  ...(obj.jobMetadata && { jobMetadata: TableDataImportJobMetadataFilterSensitiveLog(obj.jobMetadata) }),
});

/**
 * @internal
 */
export const VariableValueFilterSensitiveLog = (obj: VariableValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetScreenDataRequestFilterSensitiveLog = (obj: GetScreenDataRequest): any => ({
  ...obj,
  ...(obj.variables && { variables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResultRowFilterSensitiveLog = (obj: ResultRow): any => ({
  ...obj,
  ...(obj.dataItems && { dataItems: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResultSetFilterSensitiveLog = (obj: ResultSet): any => ({
  ...obj,
  ...(obj.headers && { headers: obj.headers.map((item) => ColumnMetadataFilterSensitiveLog(item)) }),
  ...(obj.rows && { rows: obj.rows.map((item) => ResultRowFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetScreenDataResultFilterSensitiveLog = (obj: GetScreenDataResult): any => ({
  ...obj,
  ...(obj.results && {
    results: Object.entries(obj.results).reduce(
      (acc: any, [key, value]: [string, ResultSet]) => ((acc[key] = ResultSetFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const InvokeScreenAutomationRequestFilterSensitiveLog = (obj: InvokeScreenAutomationRequest): any => ({
  ...obj,
  ...(obj.variables && { variables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeScreenAutomationResultFilterSensitiveLog = (obj: InvokeScreenAutomationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTableColumnsRequestFilterSensitiveLog = (obj: ListTableColumnsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableColumnFilterSensitiveLog = (obj: TableColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTableColumnsResultFilterSensitiveLog = (obj: ListTableColumnsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTableRowsRequestFilterSensitiveLog = (obj: ListTableRowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableRowFilterSensitiveLog = (obj: TableRow): any => ({
  ...obj,
  ...(obj.cells && { cells: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTableRowsResultFilterSensitiveLog = (obj: ListTableRowsResult): any => ({
  ...obj,
  ...(obj.rows && { rows: obj.rows.map((item) => TableRowFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTablesRequestFilterSensitiveLog = (obj: ListTablesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFilterSensitiveLog = (obj: Table): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTablesResultFilterSensitiveLog = (obj: ListTablesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryTableRowsRequestFilterSensitiveLog = (obj: QueryTableRowsRequest): any => ({
  ...obj,
  ...(obj.filterFormula && { filterFormula: FilterFilterSensitiveLog(obj.filterFormula) }),
});

/**
 * @internal
 */
export const QueryTableRowsResultFilterSensitiveLog = (obj: QueryTableRowsResult): any => ({
  ...obj,
  ...(obj.rows && { rows: obj.rows.map((item) => TableRowFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartTableDataImportJobRequestFilterSensitiveLog = (obj: StartTableDataImportJobRequest): any => ({
  ...obj,
  ...(obj.dataSource && { dataSource: ImportDataSourceFilterSensitiveLog(obj.dataSource) }),
});

/**
 * @internal
 */
export const StartTableDataImportJobResultFilterSensitiveLog = (obj: StartTableDataImportJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResultFilterSensitiveLog = (obj: TagResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResultFilterSensitiveLog = (obj: UntagResourceResult): any => ({
  ...obj,
});
