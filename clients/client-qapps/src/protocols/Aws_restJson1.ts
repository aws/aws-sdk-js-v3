// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateLibraryItemReviewCommandInput,
  AssociateLibraryItemReviewCommandOutput,
} from "../commands/AssociateLibraryItemReviewCommand";
import {
  AssociateQAppWithUserCommandInput,
  AssociateQAppWithUserCommandOutput,
} from "../commands/AssociateQAppWithUserCommand";
import {
  BatchCreateCategoryCommandInput,
  BatchCreateCategoryCommandOutput,
} from "../commands/BatchCreateCategoryCommand";
import {
  BatchDeleteCategoryCommandInput,
  BatchDeleteCategoryCommandOutput,
} from "../commands/BatchDeleteCategoryCommand";
import {
  BatchUpdateCategoryCommandInput,
  BatchUpdateCategoryCommandOutput,
} from "../commands/BatchUpdateCategoryCommand";
import { CreateLibraryItemCommandInput, CreateLibraryItemCommandOutput } from "../commands/CreateLibraryItemCommand";
import { CreatePresignedUrlCommandInput, CreatePresignedUrlCommandOutput } from "../commands/CreatePresignedUrlCommand";
import { CreateQAppCommandInput, CreateQAppCommandOutput } from "../commands/CreateQAppCommand";
import { DeleteLibraryItemCommandInput, DeleteLibraryItemCommandOutput } from "../commands/DeleteLibraryItemCommand";
import { DeleteQAppCommandInput, DeleteQAppCommandOutput } from "../commands/DeleteQAppCommand";
import {
  DescribeQAppPermissionsCommandInput,
  DescribeQAppPermissionsCommandOutput,
} from "../commands/DescribeQAppPermissionsCommand";
import {
  DisassociateLibraryItemReviewCommandInput,
  DisassociateLibraryItemReviewCommandOutput,
} from "../commands/DisassociateLibraryItemReviewCommand";
import {
  DisassociateQAppFromUserCommandInput,
  DisassociateQAppFromUserCommandOutput,
} from "../commands/DisassociateQAppFromUserCommand";
import {
  ExportQAppSessionDataCommandInput,
  ExportQAppSessionDataCommandOutput,
} from "../commands/ExportQAppSessionDataCommand";
import { GetLibraryItemCommandInput, GetLibraryItemCommandOutput } from "../commands/GetLibraryItemCommand";
import { GetQAppCommandInput, GetQAppCommandOutput } from "../commands/GetQAppCommand";
import { GetQAppSessionCommandInput, GetQAppSessionCommandOutput } from "../commands/GetQAppSessionCommand";
import {
  GetQAppSessionMetadataCommandInput,
  GetQAppSessionMetadataCommandOutput,
} from "../commands/GetQAppSessionMetadataCommand";
import { ImportDocumentCommandInput, ImportDocumentCommandOutput } from "../commands/ImportDocumentCommand";
import { ListCategoriesCommandInput, ListCategoriesCommandOutput } from "../commands/ListCategoriesCommand";
import { ListLibraryItemsCommandInput, ListLibraryItemsCommandOutput } from "../commands/ListLibraryItemsCommand";
import { ListQAppsCommandInput, ListQAppsCommandOutput } from "../commands/ListQAppsCommand";
import {
  ListQAppSessionDataCommandInput,
  ListQAppSessionDataCommandOutput,
} from "../commands/ListQAppSessionDataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PredictQAppCommandInput, PredictQAppCommandOutput } from "../commands/PredictQAppCommand";
import { StartQAppSessionCommandInput, StartQAppSessionCommandOutput } from "../commands/StartQAppSessionCommand";
import { StopQAppSessionCommandInput, StopQAppSessionCommandOutput } from "../commands/StopQAppSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLibraryItemCommandInput, UpdateLibraryItemCommandOutput } from "../commands/UpdateLibraryItemCommand";
import {
  UpdateLibraryItemMetadataCommandInput,
  UpdateLibraryItemMetadataCommandOutput,
} from "../commands/UpdateLibraryItemMetadataCommand";
import { UpdateQAppCommandInput, UpdateQAppCommandOutput } from "../commands/UpdateQAppCommand";
import {
  UpdateQAppPermissionsCommandInput,
  UpdateQAppPermissionsCommandOutput,
} from "../commands/UpdateQAppPermissionsCommand";
import { UpdateQAppSessionCommandInput, UpdateQAppSessionCommandOutput } from "../commands/UpdateQAppSessionCommand";
import {
  UpdateQAppSessionMetadataCommandInput,
  UpdateQAppSessionMetadataCommandOutput,
} from "../commands/UpdateQAppSessionMetadataCommand";
import {
  AccessDeniedException,
  AppDefinition,
  AppDefinitionInput,
  AttributeFilter,
  BatchCreateCategoryInputCategory,
  Card,
  CardInput,
  CardStatus,
  CardValue,
  CategoryInput,
  ConflictException,
  ContentTooLargeException,
  ConversationMessage,
  DocumentAttribute,
  DocumentAttributeValue,
  FileUploadCardInput,
  FormInputCard,
  FormInputCardInput,
  FormInputCardMetadata,
  InternalServerException,
  LibraryItemMember,
  PermissionInput,
  PredictAppDefinition,
  PredictQAppInputOptions,
  QAppSessionData,
  QPluginCardInput,
  QQueryCard,
  QQueryCardInput,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SessionSharingConfiguration,
  Submission,
  SubmissionMutation,
  TextInputCardInput,
  ThrottlingException,
  UnauthorizedException,
  UserAppItem,
  ValidationException,
} from "../models/models_0";
import { QAppsServiceException as __BaseException } from "../models/QAppsServiceException";

/**
 * serializeAws_restJson1AssociateLibraryItemReviewCommand
 */
export const se_AssociateLibraryItemReviewCommand = async (
  input: AssociateLibraryItemReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.associateItemRating");
  let body: any;
  body = JSON.stringify(
    take(input, {
      libraryItemId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateQAppWithUserCommand
 */
export const se_AssociateQAppWithUserCommand = async (
  input: AssociateQAppWithUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.install");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateCategoryCommand
 */
export const se_BatchCreateCategoryCommand = async (
  input: BatchCreateCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.createCategories");
  let body: any;
  body = JSON.stringify(
    take(input, {
      categories: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteCategoryCommand
 */
export const se_BatchDeleteCategoryCommand = async (
  input: BatchDeleteCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.deleteCategories");
  let body: any;
  body = JSON.stringify(
    take(input, {
      categories: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateCategoryCommand
 */
export const se_BatchUpdateCategoryCommand = async (
  input: BatchUpdateCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.updateCategories");
  let body: any;
  body = JSON.stringify(
    take(input, {
      categories: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLibraryItemCommand
 */
export const se_CreateLibraryItemCommand = async (
  input: CreateLibraryItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.createItem");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
      appVersion: [],
      categories: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePresignedUrlCommand
 */
export const se_CreatePresignedUrlCommand = async (
  input: CreatePresignedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.createPresignedUrl");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
      cardId: [],
      fileContentsSha256: [],
      fileName: [],
      scope: [],
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQAppCommand
 */
export const se_CreateQAppCommand = async (
  input: CreateQAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appDefinition: (_) => se_AppDefinitionInput(_, context),
      description: [],
      tags: (_) => _json(_),
      title: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLibraryItemCommand
 */
export const se_DeleteLibraryItemCommand = async (
  input: DeleteLibraryItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.deleteItem");
  let body: any;
  body = JSON.stringify(
    take(input, {
      libraryItemId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQAppCommand
 */
export const se_DeleteQAppCommand = async (
  input: DeleteQAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeQAppPermissionsCommand
 */
export const se_DescribeQAppPermissionsCommand = async (
  input: DescribeQAppPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.describeQAppPermissions");
  const query: any = map({
    [_aI]: [, __expectNonNull(input[_aI]!, `appId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateLibraryItemReviewCommand
 */
export const se_DisassociateLibraryItemReviewCommand = async (
  input: DisassociateLibraryItemReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.disassociateItemRating");
  let body: any;
  body = JSON.stringify(
    take(input, {
      libraryItemId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateQAppFromUserCommand
 */
export const se_DisassociateQAppFromUserCommand = async (
  input: DisassociateQAppFromUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.uninstall");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportQAppSessionDataCommand
 */
export const se_ExportQAppSessionDataCommand = async (
  input: ExportQAppSessionDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.exportQAppSessionData");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLibraryItemCommand
 */
export const se_GetLibraryItemCommand = async (
  input: GetLibraryItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.getItem");
  const query: any = map({
    [_lII]: [, __expectNonNull(input[_lII]!, `libraryItemId`)],
    [_aI]: [, input[_aI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQAppCommand
 */
export const se_GetQAppCommand = async (
  input: GetQAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.get");
  const query: any = map({
    [_aI]: [, __expectNonNull(input[_aI]!, `appId`)],
    [_aV]: [() => input.appVersion !== void 0, () => input[_aV]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQAppSessionCommand
 */
export const se_GetQAppSessionCommand = async (
  input: GetQAppSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.getQAppSession");
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQAppSessionMetadataCommand
 */
export const se_GetQAppSessionMetadataCommand = async (
  input: GetQAppSessionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.getQAppSessionMetadata");
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportDocumentCommand
 */
export const se_ImportDocumentCommand = async (
  input: ImportDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.importDocument");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
      cardId: [],
      fileContentsBase64: [],
      fileName: [],
      scope: [],
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCategoriesCommand
 */
export const se_ListCategoriesCommand = async (
  input: ListCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.listCategories");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLibraryItemsCommand
 */
export const se_ListLibraryItemsCommand = async (
  input: ListLibraryItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.list");
  const query: any = map({
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_nT]: [, input[_nT]!],
    [_cI]: [, input[_cI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQAppsCommand
 */
export const se_ListQAppsCommand = async (
  input: ListQAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.list");
  const query: any = map({
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQAppSessionDataCommand
 */
export const se_ListQAppSessionDataCommand = async (
  input: ListQAppSessionDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.listQAppSessionData");
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  const headers: any = {};
  b.bp("/tags/{resourceARN}");
  b.p("resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PredictQAppCommand
 */
export const se_PredictQAppCommand = async (
  input: PredictQAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.predictQApp");
  let body: any;
  body = JSON.stringify(
    take(input, {
      options: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartQAppSessionCommand
 */
export const se_StartQAppSessionCommand = async (
  input: StartQAppSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.startQAppSession");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
      appVersion: [],
      initialValues: (_) => _json(_),
      sessionId: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopQAppSessionCommand
 */
export const se_StopQAppSessionCommand = async (
  input: StopQAppSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.deleteMiniAppRun");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionId: [],
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
  b.bp("/tags/{resourceARN}");
  b.p("resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  const headers: any = {};
  b.bp("/tags/{resourceARN}");
  b.p("resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLibraryItemCommand
 */
export const se_UpdateLibraryItemCommand = async (
  input: UpdateLibraryItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.updateItem");
  let body: any;
  body = JSON.stringify(
    take(input, {
      categories: (_) => _json(_),
      libraryItemId: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLibraryItemMetadataCommand
 */
export const se_UpdateLibraryItemMetadataCommand = async (
  input: UpdateLibraryItemMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/catalog.updateItemMetadata");
  let body: any;
  body = JSON.stringify(
    take(input, {
      isVerified: [],
      libraryItemId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQAppCommand
 */
export const se_UpdateQAppCommand = async (
  input: UpdateQAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appDefinition: (_) => se_AppDefinitionInput(_, context),
      appId: [],
      description: [],
      title: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQAppPermissionsCommand
 */
export const se_UpdateQAppPermissionsCommand = async (
  input: UpdateQAppPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/apps.updateQAppPermissions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
      grantPermissions: (_) => _json(_),
      revokePermissions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQAppSessionCommand
 */
export const se_UpdateQAppSessionCommand = async (
  input: UpdateQAppSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.updateQAppSession");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionId: [],
      values: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQAppSessionMetadataCommand
 */
export const se_UpdateQAppSessionMetadataCommand = async (
  input: UpdateQAppSessionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ii]: input[_iI]!,
  });
  b.bp("/runtime.updateQAppSessionMetadata");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionId: [],
      sessionName: [],
      sharingConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateLibraryItemReviewCommand
 */
export const de_AssociateLibraryItemReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLibraryItemReviewCommandOutput> => {
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
 * deserializeAws_restJson1AssociateQAppWithUserCommand
 */
export const de_AssociateQAppWithUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQAppWithUserCommandOutput> => {
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
 * deserializeAws_restJson1BatchCreateCategoryCommand
 */
export const de_BatchCreateCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateCategoryCommandOutput> => {
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
 * deserializeAws_restJson1BatchDeleteCategoryCommand
 */
export const de_BatchDeleteCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteCategoryCommandOutput> => {
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
 * deserializeAws_restJson1BatchUpdateCategoryCommand
 */
export const de_BatchUpdateCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateCategoryCommandOutput> => {
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
 * deserializeAws_restJson1CreateLibraryItemCommand
 */
export const de_CreateLibraryItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLibraryItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    isVerified: __expectBoolean,
    libraryItemId: __expectString,
    ratingCount: __expectInt32,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePresignedUrlCommand
 */
export const de_CreatePresignedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fileId: __expectString,
    presignedUrl: __expectString,
    presignedUrlExpiration: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    presignedUrlFields: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQAppCommand
 */
export const de_CreateQAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appId: __expectString,
    appVersion: __expectInt32,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    initialPrompt: __expectString,
    requiredCapabilities: _json,
    status: __expectString,
    title: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLibraryItemCommand
 */
export const de_DeleteLibraryItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLibraryItemCommandOutput> => {
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
 * deserializeAws_restJson1DeleteQAppCommand
 */
export const de_DeleteQAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQAppCommandOutput> => {
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
 * deserializeAws_restJson1DescribeQAppPermissionsCommand
 */
export const de_DescribeQAppPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQAppPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appId: __expectString,
    permissions: _json,
    resourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLibraryItemReviewCommand
 */
export const de_DisassociateLibraryItemReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLibraryItemReviewCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateQAppFromUserCommand
 */
export const de_DisassociateQAppFromUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQAppFromUserCommandOutput> => {
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
 * deserializeAws_restJson1ExportQAppSessionDataCommand
 */
export const de_ExportQAppSessionDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportQAppSessionDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    csvFileLink: __expectString,
    expiresAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLibraryItemCommand
 */
export const de_GetLibraryItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLibraryItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appId: __expectString,
    appVersion: __expectInt32,
    categories: _json,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    isRatedByUser: __expectBoolean,
    isVerified: __expectBoolean,
    libraryItemId: __expectString,
    ratingCount: __expectInt32,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    userCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQAppCommand
 */
export const de_GetQAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appDefinition: (_) => de_AppDefinition(_, context),
    appId: __expectString,
    appVersion: __expectInt32,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    initialPrompt: __expectString,
    requiredCapabilities: _json,
    status: __expectString,
    title: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQAppSessionCommand
 */
export const de_GetQAppSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQAppSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appVersion: __expectInt32,
    cardStatus: (_) => de_CardStatusMap(_, context),
    latestPublishedAppVersion: __expectInt32,
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionName: __expectString,
    status: __expectString,
    userIsHost: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQAppSessionMetadataCommand
 */
export const de_GetQAppSessionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQAppSessionMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionName: __expectString,
    sessionOwner: __expectBoolean,
    sharingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportDocumentCommand
 */
export const de_ImportDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCategoriesCommand
 */
export const de_ListCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCategoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    categories: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLibraryItemsCommand
 */
export const de_ListLibraryItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLibraryItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    libraryItems: (_) => de_LibraryItemList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQAppsCommand
 */
export const de_ListQAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apps: (_) => de_UserAppsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQAppSessionDataCommand
 */
export const de_ListQAppSessionDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQAppSessionDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessionArn: __expectString,
    sessionData: (_) => de_QAppSessionDataList(_, context),
    sessionId: __expectString,
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PredictQAppCommand
 */
export const de_PredictQAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictQAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    app: (_) => de_PredictAppDefinition(_, context),
    problemStatement: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartQAppSessionCommand
 */
export const de_StartQAppSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQAppSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionArn: __expectString,
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopQAppSessionCommand
 */
export const de_StopQAppSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQAppSessionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateLibraryItemCommand
 */
export const de_UpdateLibraryItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLibraryItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appId: __expectString,
    appVersion: __expectInt32,
    categories: _json,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    isRatedByUser: __expectBoolean,
    isVerified: __expectBoolean,
    libraryItemId: __expectString,
    ratingCount: __expectInt32,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    userCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLibraryItemMetadataCommand
 */
export const de_UpdateLibraryItemMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLibraryItemMetadataCommandOutput> => {
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
 * deserializeAws_restJson1UpdateQAppCommand
 */
export const de_UpdateQAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appId: __expectString,
    appVersion: __expectInt32,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    initialPrompt: __expectString,
    requiredCapabilities: _json,
    status: __expectString,
    title: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQAppPermissionsCommand
 */
export const de_UpdateQAppPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQAppPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appId: __expectString,
    permissions: _json,
    resourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQAppSessionCommand
 */
export const de_UpdateQAppSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQAppSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionArn: __expectString,
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQAppSessionMetadataCommand
 */
export const de_UpdateQAppSessionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQAppSessionMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionName: __expectString,
    sharingConfiguration: _json,
  });
  Object.assign(contents, doc);
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
    case "com.amazonaws.qapps#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.qapps#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.qapps#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qapps#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.qapps#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.qapps#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.qapps#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.qapps#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ContentTooLargeException":
    case "com.amazonaws.qapps#ContentTooLargeException":
      throw await de_ContentTooLargeExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ContentTooLargeExceptionRes
 */
const de_ContentTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContentTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ContentTooLargeException({
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
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
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AppDefinitionInput
 */
const se_AppDefinitionInput = (input: AppDefinitionInput, context: __SerdeContext): any => {
  return take(input, {
    cards: (_) => se_CardList(_, context),
    initialPrompt: [],
  });
};

/**
 * serializeAws_restJson1AttributeFilter
 */
const se_AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return take(input, {
    andAllFilters: (_) => se_AttributeFilters(_, context),
    containsAll: (_) => se_DocumentAttribute(_, context),
    containsAny: (_) => se_DocumentAttribute(_, context),
    equalsTo: (_) => se_DocumentAttribute(_, context),
    greaterThan: (_) => se_DocumentAttribute(_, context),
    greaterThanOrEquals: (_) => se_DocumentAttribute(_, context),
    lessThan: (_) => se_DocumentAttribute(_, context),
    lessThanOrEquals: (_) => se_DocumentAttribute(_, context),
    notFilter: (_) => se_AttributeFilter(_, context),
    orAllFilters: (_) => se_AttributeFilters(_, context),
  });
};

/**
 * serializeAws_restJson1AttributeFilters
 */
const se_AttributeFilters = (input: AttributeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeFilter(entry, context);
    });
};

// se_BatchCreateCategoryInputCategory omitted.

// se_BatchCreateCategoryInputCategoryList omitted.

/**
 * serializeAws_restJson1CardInput
 */
const se_CardInput = (input: CardInput, context: __SerdeContext): any => {
  return CardInput.visit(input, {
    fileUpload: (value) => ({ fileUpload: _json(value) }),
    formInput: (value) => ({ formInput: se_FormInputCardInput(value, context) }),
    qPlugin: (value) => ({ qPlugin: _json(value) }),
    qQuery: (value) => ({ qQuery: se_QQueryCardInput(value, context) }),
    textInput: (value) => ({ textInput: _json(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1CardList
 */
const se_CardList = (input: CardInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CardInput(entry, context);
    });
};

// se_CardValue omitted.

// se_CardValueList omitted.

// se_CategoryIdList omitted.

// se_CategoryInput omitted.

// se_CategoryListInput omitted.

// se_ConversationMessage omitted.

// se_DeleteCategoryInputList omitted.

/**
 * serializeAws_restJson1DocumentAttribute
 */
const se_DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    value: (_) => se_DocumentAttributeValue(_, context),
  });
};

// se_DocumentAttributeStringListValue omitted.

/**
 * serializeAws_restJson1DocumentAttributeValue
 */
const se_DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return DocumentAttributeValue.visit(input, {
    dateValue: (value) => ({ dateValue: value.getTime() / 1_000 }),
    longValue: (value) => ({ longValue: value }),
    stringListValue: (value) => ({ stringListValue: _json(value) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_FileUploadCardInput omitted.

/**
 * serializeAws_restJson1FormInputCardInput
 */
const se_FormInputCardInput = (input: FormInputCardInput, context: __SerdeContext): any => {
  return take(input, {
    computeMode: [],
    id: [],
    metadata: (_) => se_FormInputCardMetadata(_, context),
    title: [],
    type: [],
  });
};

/**
 * serializeAws_restJson1FormInputCardMetadata
 */
const se_FormInputCardMetadata = (input: FormInputCardMetadata, context: __SerdeContext): any => {
  return take(input, {
    schema: (_) => se_FormInputCardMetadataSchema(_, context),
  });
};

/**
 * serializeAws_restJson1FormInputCardMetadataSchema
 */
const se_FormInputCardMetadataSchema = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_MessageList omitted.

// se_PermissionInput omitted.

// se_PermissionsInputList omitted.

// se_PredictQAppInputOptions omitted.

// se_QPluginCardInput omitted.

/**
 * serializeAws_restJson1QQueryCardInput
 */
const se_QQueryCardInput = (input: QQueryCardInput, context: __SerdeContext): any => {
  return take(input, {
    attributeFilter: (_) => se_AttributeFilter(_, context),
    id: [],
    outputSource: [],
    prompt: [],
    title: [],
    type: [],
  });
};

// se_SessionSharingConfiguration omitted.

// se_SubmissionMutation omitted.

// se_TagMap omitted.

// se_Tags omitted.

// se_TextInputCardInput omitted.

/**
 * deserializeAws_restJson1AppDefinition
 */
const de_AppDefinition = (output: any, context: __SerdeContext): AppDefinition => {
  return take(output, {
    appDefinitionVersion: __expectString,
    canEdit: __expectBoolean,
    cards: (_: any) => de_CardModelList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AppDefinitionInput
 */
const de_AppDefinitionInput = (output: any, context: __SerdeContext): AppDefinitionInput => {
  return take(output, {
    cards: (_: any) => de_CardList(_, context),
    initialPrompt: __expectString,
  }) as any;
};

// de_AppRequiredCapabilities omitted.

/**
 * deserializeAws_restJson1AttributeFilter
 */
const de_AttributeFilter = (output: any, context: __SerdeContext): AttributeFilter => {
  return take(output, {
    andAllFilters: (_: any) => de_AttributeFilters(_, context),
    containsAll: (_: any) => de_DocumentAttribute(_, context),
    containsAny: (_: any) => de_DocumentAttribute(_, context),
    equalsTo: (_: any) => de_DocumentAttribute(_, context),
    greaterThan: (_: any) => de_DocumentAttribute(_, context),
    greaterThanOrEquals: (_: any) => de_DocumentAttribute(_, context),
    lessThan: (_: any) => de_DocumentAttribute(_, context),
    lessThanOrEquals: (_: any) => de_DocumentAttribute(_, context),
    notFilter: (_: any) => de_AttributeFilter(_, context),
    orAllFilters: (_: any) => de_AttributeFilters(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AttributeFilters
 */
const de_AttributeFilters = (output: any, context: __SerdeContext): AttributeFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Card
 */
const de_Card = (output: any, context: __SerdeContext): Card => {
  if (output.fileUpload != null) {
    return {
      fileUpload: _json(output.fileUpload),
    };
  }
  if (output.formInput != null) {
    return {
      formInput: de_FormInputCard(output.formInput, context),
    };
  }
  if (output.qPlugin != null) {
    return {
      qPlugin: _json(output.qPlugin),
    };
  }
  if (output.qQuery != null) {
    return {
      qQuery: de_QQueryCard(output.qQuery, context),
    };
  }
  if (output.textInput != null) {
    return {
      textInput: _json(output.textInput),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1CardInput
 */
const de_CardInput = (output: any, context: __SerdeContext): CardInput => {
  if (output.fileUpload != null) {
    return {
      fileUpload: _json(output.fileUpload),
    };
  }
  if (output.formInput != null) {
    return {
      formInput: de_FormInputCardInput(output.formInput, context),
    };
  }
  if (output.qPlugin != null) {
    return {
      qPlugin: _json(output.qPlugin),
    };
  }
  if (output.qQuery != null) {
    return {
      qQuery: de_QQueryCardInput(output.qQuery, context),
    };
  }
  if (output.textInput != null) {
    return {
      textInput: _json(output.textInput),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1CardList
 */
const de_CardList = (output: any, context: __SerdeContext): CardInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CardInput(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CardModelList
 */
const de_CardModelList = (output: any, context: __SerdeContext): Card[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Card(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CardStatus
 */
const de_CardStatus = (output: any, context: __SerdeContext): CardStatus => {
  return take(output, {
    currentState: __expectString,
    currentValue: __expectString,
    submissions: (_: any) => de_SubmissionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CardStatusMap
 */
const de_CardStatusMap = (output: any, context: __SerdeContext): Record<string, CardStatus> => {
  return Object.entries(output).reduce((acc: Record<string, CardStatus>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_CardStatus(value, context);
    return acc;
  }, {} as Record<string, CardStatus>);
};

// de_CategoriesList omitted.

// de_Category omitted.

// de_CategoryList omitted.

// de_DependencyList omitted.

/**
 * deserializeAws_restJson1DocumentAttribute
 */
const de_DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return take(output, {
    name: __expectString,
    value: (_: any) => de_DocumentAttributeValue(__expectUnion(_), context),
  }) as any;
};

// de_DocumentAttributeStringListValue omitted.

/**
 * deserializeAws_restJson1DocumentAttributeValue
 */
const de_DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  if (output.dateValue != null) {
    return {
      dateValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.dateValue))),
    };
  }
  if (__expectLong(output.longValue) !== undefined) {
    return { longValue: __expectLong(output.longValue) as any };
  }
  if (output.stringListValue != null) {
    return {
      stringListValue: _json(output.stringListValue),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_FileUploadCard omitted.

// de_FileUploadCardInput omitted.

/**
 * deserializeAws_restJson1FormInputCard
 */
const de_FormInputCard = (output: any, context: __SerdeContext): FormInputCard => {
  return take(output, {
    computeMode: __expectString,
    dependencies: _json,
    id: __expectString,
    metadata: (_: any) => de_FormInputCardMetadata(_, context),
    title: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FormInputCardInput
 */
const de_FormInputCardInput = (output: any, context: __SerdeContext): FormInputCardInput => {
  return take(output, {
    computeMode: __expectString,
    id: __expectString,
    metadata: (_: any) => de_FormInputCardMetadata(_, context),
    title: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FormInputCardMetadata
 */
const de_FormInputCardMetadata = (output: any, context: __SerdeContext): FormInputCardMetadata => {
  return take(output, {
    schema: (_: any) => de_FormInputCardMetadataSchema(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FormInputCardMetadataSchema
 */
const de_FormInputCardMetadataSchema = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1LibraryItemList
 */
const de_LibraryItemList = (output: any, context: __SerdeContext): LibraryItemMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LibraryItemMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LibraryItemMember
 */
const de_LibraryItemMember = (output: any, context: __SerdeContext): LibraryItemMember => {
  return take(output, {
    appId: __expectString,
    appVersion: __expectInt32,
    categories: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    isRatedByUser: __expectBoolean,
    isVerified: __expectBoolean,
    libraryItemId: __expectString,
    ratingCount: __expectInt32,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    userCount: __expectInt32,
  }) as any;
};

// de_MemoryReferenceList omitted.

// de_PermissionOutput omitted.

// de_PermissionsOutputList omitted.

/**
 * deserializeAws_restJson1PredictAppDefinition
 */
const de_PredictAppDefinition = (output: any, context: __SerdeContext): PredictAppDefinition => {
  return take(output, {
    appDefinition: (_: any) => de_AppDefinitionInput(_, context),
    description: __expectString,
    title: __expectString,
  }) as any;
};

// de_PresignedUrlFields omitted.

// de_PrincipalOutput omitted.

/**
 * deserializeAws_restJson1QAppSessionData
 */
const de_QAppSessionData = (output: any, context: __SerdeContext): QAppSessionData => {
  return take(output, {
    cardId: __expectString,
    submissionId: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    user: _json,
    value: (_: any) => de_Document(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1QAppSessionDataList
 */
const de_QAppSessionDataList = (output: any, context: __SerdeContext): QAppSessionData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QAppSessionData(entry, context);
    });
  return retVal;
};

// de_QPluginCard omitted.

// de_QPluginCardInput omitted.

/**
 * deserializeAws_restJson1QQueryCard
 */
const de_QQueryCard = (output: any, context: __SerdeContext): QQueryCard => {
  return take(output, {
    attributeFilter: (_: any) => de_AttributeFilter(_, context),
    dependencies: _json,
    id: __expectString,
    memoryReferences: _json,
    outputSource: __expectString,
    prompt: __expectString,
    title: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1QQueryCardInput
 */
const de_QQueryCardInput = (output: any, context: __SerdeContext): QQueryCardInput => {
  return take(output, {
    attributeFilter: (_: any) => de_AttributeFilter(_, context),
    id: __expectString,
    outputSource: __expectString,
    prompt: __expectString,
    title: __expectString,
    type: __expectString,
  }) as any;
};

// de_SessionSharingConfiguration omitted.

/**
 * deserializeAws_restJson1Submission
 */
const de_Submission = (output: any, context: __SerdeContext): Submission => {
  return take(output, {
    submissionId: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    value: (_: any) => de_Document(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SubmissionList
 */
const de_SubmissionList = (output: any, context: __SerdeContext): Submission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Submission(entry, context);
    });
  return retVal;
};

// de_Tags omitted.

// de_TextInputCard omitted.

// de_TextInputCardInput omitted.

// de_User omitted.

/**
 * deserializeAws_restJson1UserAppItem
 */
const de_UserAppItem = (output: any, context: __SerdeContext): UserAppItem => {
  return take(output, {
    appArn: __expectString,
    appId: __expectString,
    canEdit: __expectBoolean,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    isVerified: __expectBoolean,
    status: __expectString,
    title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UserAppsList
 */
const de_UserAppsList = (output: any, context: __SerdeContext): UserAppItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserAppItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

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

const _aI = "appId";
const _aV = "appVersion";
const _cI = "categoryId";
const _iI = "instanceId";
const _ii = "instance-id";
const _l = "limit";
const _lII = "libraryItemId";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _sI = "sessionId";
const _tK = "tagKeys";
