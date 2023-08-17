// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchGetTokenBalanceCommandInput,
  BatchGetTokenBalanceCommandOutput,
} from "../commands/BatchGetTokenBalanceCommand";
import { GetTokenBalanceCommandInput, GetTokenBalanceCommandOutput } from "../commands/GetTokenBalanceCommand";
import { GetTransactionCommandInput, GetTransactionCommandOutput } from "../commands/GetTransactionCommand";
import { ListTokenBalancesCommandInput, ListTokenBalancesCommandOutput } from "../commands/ListTokenBalancesCommand";
import {
  ListTransactionEventsCommandInput,
  ListTransactionEventsCommandOutput,
} from "../commands/ListTransactionEventsCommand";
import { ListTransactionsCommandInput, ListTransactionsCommandOutput } from "../commands/ListTransactionsCommand";
import { ManagedBlockchainQueryServiceException as __BaseException } from "../models/ManagedBlockchainQueryServiceException";
import {
  AccessDeniedException,
  BatchGetTokenBalanceErrorItem,
  BatchGetTokenBalanceInputItem,
  BatchGetTokenBalanceOutputItem,
  BlockchainInstant,
  InternalServerException,
  ListTransactionsSort,
  OwnerFilter,
  OwnerIdentifier,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  TokenBalance,
  TokenFilter,
  TokenIdentifier,
  Transaction,
  TransactionOutputItem,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetTokenBalanceCommand
 */
export const se_BatchGetTokenBalanceCommand = async (
  input: BatchGetTokenBalanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/batch-get-token-balance";
  let body: any;
  body = JSON.stringify(
    take(input, {
      getTokenBalanceInputs: (_) => se_GetTokenBalanceInputList(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTokenBalanceCommand
 */
export const se_GetTokenBalanceCommand = async (
  input: GetTokenBalanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-token-balance";
  let body: any;
  body = JSON.stringify(
    take(input, {
      atBlockchainInstant: (_) => se_BlockchainInstant(_, context),
      ownerIdentifier: (_) => _json(_),
      tokenIdentifier: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTransactionCommand
 */
export const se_GetTransactionCommand = async (
  input: GetTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-transaction";
  let body: any;
  body = JSON.stringify(
    take(input, {
      network: [],
      transactionHash: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTokenBalancesCommand
 */
export const se_ListTokenBalancesCommand = async (
  input: ListTokenBalancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-token-balances";
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      ownerFilter: (_) => _json(_),
      tokenFilter: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTransactionEventsCommand
 */
export const se_ListTransactionEventsCommand = async (
  input: ListTransactionEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-transaction-events";
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      network: [],
      nextToken: [],
      transactionHash: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTransactionsCommand
 */
export const se_ListTransactionsCommand = async (
  input: ListTransactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-transactions";
  let body: any;
  body = JSON.stringify(
    take(input, {
      address: [],
      fromBlockchainInstant: (_) => se_BlockchainInstant(_, context),
      maxResults: [],
      network: [],
      nextToken: [],
      sort: (_) => _json(_),
      toBlockchainInstant: (_) => se_BlockchainInstant(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1BatchGetTokenBalanceCommand
 */
export const de_BatchGetTokenBalanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTokenBalanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetTokenBalanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: (_) => de_BatchGetTokenBalanceErrors(_, context),
    tokenBalances: (_) => de_BatchGetTokenBalanceOutputList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetTokenBalanceCommandError
 */
const de_BatchGetTokenBalanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTokenBalanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchainquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.managedblockchainquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchainquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.managedblockchainquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchainquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.managedblockchainquery#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTokenBalanceCommand
 */
export const de_GetTokenBalanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenBalanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTokenBalanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    atBlockchainInstant: (_) => de_BlockchainInstant(_, context),
    balance: __expectString,
    lastUpdatedTime: (_) => de_BlockchainInstant(_, context),
    ownerIdentifier: _json,
    tokenIdentifier: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTokenBalanceCommandError
 */
const de_GetTokenBalanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenBalanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchainquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.managedblockchainquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchainquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.managedblockchainquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchainquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.managedblockchainquery#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTransactionCommand
 */
export const de_GetTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    transaction: (_) => de_Transaction(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTransactionCommandError
 */
const de_GetTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchainquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.managedblockchainquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchainquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.managedblockchainquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchainquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.managedblockchainquery#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTokenBalancesCommand
 */
export const de_ListTokenBalancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTokenBalancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTokenBalancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tokenBalances: (_) => de_TokenBalanceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTokenBalancesCommandError
 */
const de_ListTokenBalancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTokenBalancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchainquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.managedblockchainquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.managedblockchainquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchainquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.managedblockchainquery#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTransactionEventsCommand
 */
export const de_ListTransactionEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTransactionEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    events: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTransactionEventsCommandError
 */
const de_ListTransactionEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchainquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.managedblockchainquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.managedblockchainquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchainquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.managedblockchainquery#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTransactionsCommand
 */
export const de_ListTransactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTransactionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    transactions: (_) => de_TransactionOutputList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTransactionsCommandError
 */
const de_ListTransactionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchainquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.managedblockchainquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.managedblockchainquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchainquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.managedblockchainquery#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1BatchGetTokenBalanceInputItem
 */
const se_BatchGetTokenBalanceInputItem = (input: BatchGetTokenBalanceInputItem, context: __SerdeContext): any => {
  return take(input, {
    atBlockchainInstant: (_) => se_BlockchainInstant(_, context),
    ownerIdentifier: _json,
    tokenIdentifier: _json,
  });
};

/**
 * serializeAws_restJson1BlockchainInstant
 */
const se_BlockchainInstant = (input: BlockchainInstant, context: __SerdeContext): any => {
  return take(input, {
    time: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_restJson1GetTokenBalanceInputList
 */
const se_GetTokenBalanceInputList = (input: BatchGetTokenBalanceInputItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchGetTokenBalanceInputItem(entry, context);
    });
};

// se_ListTransactionsSort omitted.

// se_OwnerFilter omitted.

// se_OwnerIdentifier omitted.

// se_TokenFilter omitted.

// se_TokenIdentifier omitted.

/**
 * deserializeAws_restJson1BatchGetTokenBalanceErrorItem
 */
const de_BatchGetTokenBalanceErrorItem = (output: any, context: __SerdeContext): BatchGetTokenBalanceErrorItem => {
  return take(output, {
    atBlockchainInstant: (_: any) => de_BlockchainInstant(_, context),
    errorCode: __expectString,
    errorMessage: __expectString,
    errorType: __expectString,
    ownerIdentifier: _json,
    tokenIdentifier: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchGetTokenBalanceErrors
 */
const de_BatchGetTokenBalanceErrors = (output: any, context: __SerdeContext): BatchGetTokenBalanceErrorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchGetTokenBalanceErrorItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetTokenBalanceOutputItem
 */
const de_BatchGetTokenBalanceOutputItem = (output: any, context: __SerdeContext): BatchGetTokenBalanceOutputItem => {
  return take(output, {
    atBlockchainInstant: (_: any) => de_BlockchainInstant(_, context),
    balance: __expectString,
    lastUpdatedTime: (_: any) => de_BlockchainInstant(_, context),
    ownerIdentifier: _json,
    tokenIdentifier: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchGetTokenBalanceOutputList
 */
const de_BatchGetTokenBalanceOutputList = (output: any, context: __SerdeContext): BatchGetTokenBalanceOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchGetTokenBalanceOutputItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BlockchainInstant
 */
const de_BlockchainInstant = (output: any, context: __SerdeContext): BlockchainInstant => {
  return take(output, {
    time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_OwnerIdentifier omitted.

/**
 * deserializeAws_restJson1TokenBalance
 */
const de_TokenBalance = (output: any, context: __SerdeContext): TokenBalance => {
  return take(output, {
    atBlockchainInstant: (_: any) => de_BlockchainInstant(_, context),
    balance: __expectString,
    lastUpdatedTime: (_: any) => de_BlockchainInstant(_, context),
    ownerIdentifier: _json,
    tokenIdentifier: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TokenBalanceList
 */
const de_TokenBalanceList = (output: any, context: __SerdeContext): TokenBalance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TokenBalance(entry, context);
    });
  return retVal;
};

// de_TokenIdentifier omitted.

/**
 * deserializeAws_restJson1Transaction
 */
const de_Transaction = (output: any, context: __SerdeContext): Transaction => {
  return take(output, {
    blockHash: __expectString,
    blockNumber: __expectString,
    contractAddress: __expectString,
    cumulativeGasUsed: __expectString,
    effectiveGasPrice: __expectString,
    from: __expectString,
    gasUsed: __expectString,
    network: __expectString,
    numberOfTransactions: __expectLong,
    signatureR: __expectString,
    signatureS: __expectString,
    signatureV: __expectInt32,
    status: __expectString,
    to: __expectString,
    transactionFee: __expectString,
    transactionHash: __expectString,
    transactionId: __expectString,
    transactionIndex: __expectLong,
    transactionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TransactionEvent omitted.

// de_TransactionEventList omitted.

/**
 * deserializeAws_restJson1TransactionOutputItem
 */
const de_TransactionOutputItem = (output: any, context: __SerdeContext): TransactionOutputItem => {
  return take(output, {
    network: __expectString,
    transactionHash: __expectString,
    transactionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TransactionOutputList
 */
const de_TransactionOutputList = (output: any, context: __SerdeContext): TransactionOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TransactionOutputItem(entry, context);
    });
  return retVal;
};

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
