// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  BatchDescribeEntitiesCommandInput,
  BatchDescribeEntitiesCommandOutput,
} from "../commands/BatchDescribeEntitiesCommand";
import { CancelChangeSetCommandInput, CancelChangeSetCommandOutput } from "../commands/CancelChangeSetCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "../commands/DescribeChangeSetCommand";
import { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "../commands/DescribeEntityCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "../commands/ListChangeSetsCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "../commands/ListEntitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { StartChangeSetCommandInput, StartChangeSetCommandOutput } from "../commands/StartChangeSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { MarketplaceCatalogServiceException as __BaseException } from "../models/MarketplaceCatalogServiceException";
import {
  AccessDeniedException,
  AmiProductEntityIdFilter,
  AmiProductFilters,
  AmiProductLastModifiedDateFilter,
  AmiProductLastModifiedDateFilterDateRange,
  AmiProductSort,
  AmiProductTitleFilter,
  AmiProductVisibilityFilter,
  AmiProductVisibilityString,
  Change,
  ChangeSummary,
  ContainerProductEntityIdFilter,
  ContainerProductFilters,
  ContainerProductLastModifiedDateFilter,
  ContainerProductLastModifiedDateFilterDateRange,
  ContainerProductSort,
  ContainerProductTitleFilter,
  ContainerProductVisibilityFilter,
  ContainerProductVisibilityString,
  DataProductEntityIdFilter,
  DataProductFilters,
  DataProductLastModifiedDateFilter,
  DataProductLastModifiedDateFilterDateRange,
  DataProductSort,
  DataProductTitleFilter,
  DataProductVisibilityFilter,
  DataProductVisibilityString,
  Entity,
  EntityDetail,
  EntityRequest,
  EntityTypeFilters,
  EntityTypeSort,
  Filter,
  InternalServiceException,
  MachineLearningProductEntityIdFilter,
  MachineLearningProductFilters,
  MachineLearningProductLastModifiedDateFilter,
  MachineLearningProductLastModifiedDateFilterDateRange,
  MachineLearningProductSort,
  MachineLearningProductTitleFilter,
  MachineLearningProductVisibilityFilter,
  MachineLearningProductVisibilityString,
  OfferAvailabilityEndDateFilter,
  OfferAvailabilityEndDateFilterDateRange,
  OfferBuyerAccountsFilter,
  OfferEntityIdFilter,
  OfferFilters,
  OfferLastModifiedDateFilter,
  OfferLastModifiedDateFilterDateRange,
  OfferNameFilter,
  OfferProductIdFilter,
  OfferReleaseDateFilter,
  OfferReleaseDateFilterDateRange,
  OfferResaleAuthorizationIdFilter,
  OfferSort,
  OfferStateFilter,
  OfferStateString,
  OfferTargetingFilter,
  OfferTargetingString,
  ResaleAuthorizationAvailabilityEndDateFilter,
  ResaleAuthorizationAvailabilityEndDateFilterDateRange,
  ResaleAuthorizationCreatedDateFilter,
  ResaleAuthorizationCreatedDateFilterDateRange,
  ResaleAuthorizationEntityIdFilter,
  ResaleAuthorizationFilters,
  ResaleAuthorizationLastModifiedDateFilter,
  ResaleAuthorizationLastModifiedDateFilterDateRange,
  ResaleAuthorizationManufacturerAccountIdFilter,
  ResaleAuthorizationManufacturerLegalNameFilter,
  ResaleAuthorizationNameFilter,
  ResaleAuthorizationOfferExtendedStatusFilter,
  ResaleAuthorizationProductIdFilter,
  ResaleAuthorizationProductNameFilter,
  ResaleAuthorizationResellerAccountIDFilter,
  ResaleAuthorizationResellerLegalNameFilter,
  ResaleAuthorizationSort,
  ResaleAuthorizationStatusFilter,
  ResaleAuthorizationStatusString,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotSupportedException,
  SaaSProductEntityIdFilter,
  SaaSProductFilters,
  SaaSProductLastModifiedDateFilter,
  SaaSProductLastModifiedDateFilterDateRange,
  SaaSProductSort,
  SaaSProductTitleFilter,
  SaaSProductVisibilityFilter,
  SaaSProductVisibilityString,
  ServiceQuotaExceededException,
  Sort,
  Tag,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchDescribeEntitiesCommand
 */
export const se_BatchDescribeEntitiesCommand = async (
  input: BatchDescribeEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchDescribeEntities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EntityRequestList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelChangeSetCommand
 */
export const se_CancelChangeSetCommand = async (
  input: CancelChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/CancelChangeSet");
  const query: any = map({
    [_c]: [, __expectNonNull(input[_C]!, `Catalog`)],
    [_cSI]: [, __expectNonNull(input[_CSI]!, `ChangeSetId`)],
  });
  let body: any;
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteResourcePolicy");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChangeSetCommand
 */
export const se_DescribeChangeSetCommand = async (
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DescribeChangeSet");
  const query: any = map({
    [_c]: [, __expectNonNull(input[_C]!, `Catalog`)],
    [_cSI]: [, __expectNonNull(input[_CSI]!, `ChangeSetId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEntityCommand
 */
export const se_DescribeEntityCommand = async (
  input: DescribeEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DescribeEntity");
  const query: any = map({
    [_c]: [, __expectNonNull(input[_C]!, `Catalog`)],
    [_eI]: [, __expectNonNull(input[_EI]!, `EntityId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetResourcePolicy");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChangeSetsCommand
 */
export const se_ListChangeSetsCommand = async (
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListChangeSets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Catalog: [],
      FilterList: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      Sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEntitiesCommand
 */
export const se_ListEntitiesCommand = async (
  input: ListEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListEntities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Catalog: [],
      EntityType: [],
      EntityTypeFilters: (_) => _json(_),
      EntityTypeSort: (_) => _json(_),
      FilterList: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      OwnershipType: [],
      Sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutResourcePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
      ResourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartChangeSetCommand
 */
export const se_StartChangeSetCommand = async (
  input: StartChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartChangeSet");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Catalog: [],
      ChangeSet: (_) => se_RequestedChangeList(_, context),
      ChangeSetName: [],
      ChangeSetTags: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Intent: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UntagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchDescribeEntitiesCommand
 */
export const de_BatchDescribeEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EntityDetails: (_) => de_EntityDetails(_, context),
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelChangeSetCommand
 */
export const de_CancelChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeSetArn: __expectString,
    ChangeSetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChangeSetCommand
 */
export const de_DescribeChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeSet: (_) => de_ChangeSetDescription(_, context),
    ChangeSetArn: __expectString,
    ChangeSetId: __expectString,
    ChangeSetName: __expectString,
    EndTime: __expectString,
    FailureCode: __expectString,
    FailureDescription: __expectString,
    Intent: __expectString,
    StartTime: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEntityCommand
 */
export const de_DescribeEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Details: __expectString,
    DetailsDocument: (_) => de_JsonDocumentType(_, context),
    EntityArn: __expectString,
    EntityIdentifier: __expectString,
    EntityType: __expectString,
    LastModifiedDate: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChangeSetsCommand
 */
export const de_ListChangeSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeSetSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEntitiesCommand
 */
export const de_ListEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EntitySummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceArn: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartChangeSetCommand
 */
export const de_StartChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeSetArn: __expectString,
    ChangeSetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.marketplacecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotSupportedException":
    case "com.amazonaws.marketplacecatalog#ResourceNotSupportedException":
      throw await de_ResourceNotSupportedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.marketplacecatalog#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceInUseException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotSupportedExceptionRes
 */
const de_ResourceNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotSupportedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotSupportedException({
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
    Message: __expectString,
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AmiProductEntityIdFilter omitted.

// se_AmiProductEntityIdFilterValueList omitted.

// se_AmiProductFilters omitted.

// se_AmiProductLastModifiedDateFilter omitted.

// se_AmiProductLastModifiedDateFilterDateRange omitted.

// se_AmiProductSort omitted.

// se_AmiProductTitleFilter omitted.

// se_AmiProductTitleFilterValueList omitted.

// se_AmiProductVisibilityFilter omitted.

// se_AmiProductVisibilityFilterValueList omitted.

/**
 * serializeAws_restJson1Change
 */
const se_Change = (input: Change, context: __SerdeContext): any => {
  return take(input, {
    ChangeName: [],
    ChangeType: [],
    Details: [],
    DetailsDocument: (_) => se_JsonDocumentType(_, context),
    Entity: _json,
    EntityTags: _json,
  });
};

// se_ContainerProductEntityIdFilter omitted.

// se_ContainerProductEntityIdFilterValueList omitted.

// se_ContainerProductFilters omitted.

// se_ContainerProductLastModifiedDateFilter omitted.

// se_ContainerProductLastModifiedDateFilterDateRange omitted.

// se_ContainerProductSort omitted.

// se_ContainerProductTitleFilter omitted.

// se_ContainerProductTitleFilterValueList omitted.

// se_ContainerProductVisibilityFilter omitted.

// se_ContainerProductVisibilityFilterValueList omitted.

// se_DataProductEntityIdFilter omitted.

// se_DataProductEntityIdFilterValueList omitted.

// se_DataProductFilters omitted.

// se_DataProductLastModifiedDateFilter omitted.

// se_DataProductLastModifiedDateFilterDateRange omitted.

// se_DataProductSort omitted.

// se_DataProductTitleFilter omitted.

// se_DataProductTitleFilterValueList omitted.

// se_DataProductVisibilityFilter omitted.

// se_DataProductVisibilityFilterValueList omitted.

// se_Entity omitted.

// se_EntityRequest omitted.

// se_EntityRequestList omitted.

// se_EntityTypeFilters omitted.

// se_EntityTypeSort omitted.

// se_Filter omitted.

// se_FilterList omitted.

/**
 * serializeAws_restJson1JsonDocumentType
 */
const se_JsonDocumentType = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_MachineLearningProductEntityIdFilter omitted.

// se_MachineLearningProductEntityIdFilterValueList omitted.

// se_MachineLearningProductFilters omitted.

// se_MachineLearningProductLastModifiedDateFilter omitted.

// se_MachineLearningProductLastModifiedDateFilterDateRange omitted.

// se_MachineLearningProductSort omitted.

// se_MachineLearningProductTitleFilter omitted.

// se_MachineLearningProductTitleFilterValueList omitted.

// se_MachineLearningProductVisibilityFilter omitted.

// se_MachineLearningProductVisibilityFilterValueList omitted.

// se_OfferAvailabilityEndDateFilter omitted.

// se_OfferAvailabilityEndDateFilterDateRange omitted.

// se_OfferBuyerAccountsFilter omitted.

// se_OfferEntityIdFilter omitted.

// se_OfferEntityIdFilterValueList omitted.

// se_OfferFilters omitted.

// se_OfferLastModifiedDateFilter omitted.

// se_OfferLastModifiedDateFilterDateRange omitted.

// se_OfferNameFilter omitted.

// se_OfferNameFilterValueList omitted.

// se_OfferProductIdFilter omitted.

// se_OfferProductIdFilterValueList omitted.

// se_OfferReleaseDateFilter omitted.

// se_OfferReleaseDateFilterDateRange omitted.

// se_OfferResaleAuthorizationIdFilter omitted.

// se_OfferResaleAuthorizationIdFilterValueList omitted.

// se_OfferSort omitted.

// se_OfferStateFilter omitted.

// se_OfferStateFilterValueList omitted.

// se_OfferTargetingFilter omitted.

// se_OfferTargetingFilterValueList omitted.

/**
 * serializeAws_restJson1RequestedChangeList
 */
const se_RequestedChangeList = (input: Change[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Change(entry, context);
    });
};

// se_ResaleAuthorizationAvailabilityEndDateFilter omitted.

// se_ResaleAuthorizationAvailabilityEndDateFilterDateRange omitted.

// se_ResaleAuthorizationAvailabilityEndDateFilterValueList omitted.

// se_ResaleAuthorizationCreatedDateFilter omitted.

// se_ResaleAuthorizationCreatedDateFilterDateRange omitted.

// se_ResaleAuthorizationCreatedDateFilterValueList omitted.

// se_ResaleAuthorizationEntityIdFilter omitted.

// se_ResaleAuthorizationEntityIdFilterValueList omitted.

// se_ResaleAuthorizationFilters omitted.

// se_ResaleAuthorizationLastModifiedDateFilter omitted.

// se_ResaleAuthorizationLastModifiedDateFilterDateRange omitted.

// se_ResaleAuthorizationManufacturerAccountIdFilter omitted.

// se_ResaleAuthorizationManufacturerAccountIdFilterValueList omitted.

// se_ResaleAuthorizationManufacturerLegalNameFilter omitted.

// se_ResaleAuthorizationManufacturerLegalNameFilterValueList omitted.

// se_ResaleAuthorizationNameFilter omitted.

// se_ResaleAuthorizationNameFilterValueList omitted.

// se_ResaleAuthorizationOfferExtendedStatusFilter omitted.

// se_ResaleAuthorizationOfferExtendedStatusFilterValueList omitted.

// se_ResaleAuthorizationProductIdFilter omitted.

// se_ResaleAuthorizationProductIdFilterValueList omitted.

// se_ResaleAuthorizationProductNameFilter omitted.

// se_ResaleAuthorizationProductNameFilterValueList omitted.

// se_ResaleAuthorizationResellerAccountIDFilter omitted.

// se_ResaleAuthorizationResellerAccountIDFilterValueList omitted.

// se_ResaleAuthorizationResellerLegalNameFilter omitted.

// se_ResaleAuthorizationResellerLegalNameFilterValueList omitted.

// se_ResaleAuthorizationSort omitted.

// se_ResaleAuthorizationStatusFilter omitted.

// se_ResaleAuthorizationStatusFilterValueList omitted.

// se_SaaSProductEntityIdFilter omitted.

// se_SaaSProductEntityIdFilterValueList omitted.

// se_SaaSProductFilters omitted.

// se_SaaSProductLastModifiedDateFilter omitted.

// se_SaaSProductLastModifiedDateFilterDateRange omitted.

// se_SaaSProductSort omitted.

// se_SaaSProductTitleFilter omitted.

// se_SaaSProductTitleFilterValueList omitted.

// se_SaaSProductVisibilityFilter omitted.

// se_SaaSProductVisibilityFilterValueList omitted.

// se_Sort omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_ValueList omitted.

// de_AmiProductSummary omitted.

// de_BatchDescribeErrorDetail omitted.

/**
 * deserializeAws_restJson1ChangeSetDescription
 */
const de_ChangeSetDescription = (output: any, context: __SerdeContext): ChangeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeSummary(entry, context);
    });
  return retVal;
};

// de_ChangeSetSummaryList omitted.

// de_ChangeSetSummaryListItem omitted.

/**
 * deserializeAws_restJson1ChangeSummary
 */
const de_ChangeSummary = (output: any, context: __SerdeContext): ChangeSummary => {
  return take(output, {
    ChangeName: __expectString,
    ChangeType: __expectString,
    Details: __expectString,
    DetailsDocument: (_: any) => de_JsonDocumentType(_, context),
    Entity: _json,
    ErrorDetailList: _json,
  }) as any;
};

// de_ContainerProductSummary omitted.

// de_DataProductSummary omitted.

// de_Entity omitted.

/**
 * deserializeAws_restJson1EntityDetail
 */
const de_EntityDetail = (output: any, context: __SerdeContext): EntityDetail => {
  return take(output, {
    DetailsDocument: (_: any) => de_JsonDocumentType(_, context),
    EntityArn: __expectString,
    EntityIdentifier: __expectString,
    EntityType: __expectString,
    LastModifiedDate: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EntityDetails
 */
const de_EntityDetails = (output: any, context: __SerdeContext): Record<string, EntityDetail> => {
  return Object.entries(output).reduce((acc: Record<string, EntityDetail>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_EntityDetail(value, context);
    return acc;
  }, {} as Record<string, EntityDetail>);
};

// de_EntitySummary omitted.

// de_EntitySummaryList omitted.

// de_ErrorDetail omitted.

// de_ErrorDetailList omitted.

// de_Errors omitted.

/**
 * deserializeAws_restJson1JsonDocumentType
 */
const de_JsonDocumentType = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_MachineLearningProductSummary omitted.

// de_OfferBuyerAccountsList omitted.

// de_OfferSummary omitted.

// de_OfferTargetingList omitted.

// de_ResaleAuthorizationSummary omitted.

// de_ResourceIdList omitted.

// de_SaaSProductSummary omitted.

// de_Tag omitted.

// de_TagList omitted.

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

const _C = "Catalog";
const _CSI = "ChangeSetId";
const _EI = "EntityId";
const _RA = "ResourceArn";
const _c = "catalog";
const _cSI = "changeSetId";
const _eI = "entityId";
const _rA = "resourceArn";
