// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "../commands/AddFacetToObjectCommand";
import { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "../commands/ApplySchemaCommand";
import { AttachObjectCommandInput, AttachObjectCommandOutput } from "../commands/AttachObjectCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "../commands/AttachPolicyCommand";
import { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "../commands/AttachToIndexCommand";
import { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "../commands/AttachTypedLinkCommand";
import { BatchReadCommandInput, BatchReadCommandOutput } from "../commands/BatchReadCommand";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "../commands/BatchWriteCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "../commands/CreateDirectoryCommand";
import { CreateFacetCommandInput, CreateFacetCommandOutput } from "../commands/CreateFacetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import { CreateObjectCommandInput, CreateObjectCommandOutput } from "../commands/CreateObjectCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "../commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "../commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "../commands/DeleteDirectoryCommand";
import { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "../commands/DeleteFacetCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "../commands/DeleteObjectCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "../commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "../commands/DetachFromIndexCommand";
import { DetachObjectCommandInput, DetachObjectCommandOutput } from "../commands/DetachObjectCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "../commands/DetachPolicyCommand";
import { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "../commands/DetachTypedLinkCommand";
import { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "../commands/DisableDirectoryCommand";
import { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "../commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "../commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "../commands/GetDirectoryCommand";
import { GetFacetCommandInput, GetFacetCommandOutput } from "../commands/GetFacetCommand";
import { GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput } from "../commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "../commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "../commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "../commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "../commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "../commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "../commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "../commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "../commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "../commands/ListFacetAttributesCommand";
import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "../commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "../commands/ListIncomingTypedLinksCommand";
import { ListIndexCommandInput, ListIndexCommandOutput } from "../commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "../commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "../commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "../commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "../commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "../commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "../commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "../commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "../commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "../commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "../commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "../commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "../commands/LookupPolicyCommand";
import { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "../commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput } from "../commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "../commands/RemoveFacetFromObjectCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "../commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "../commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "../commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "../commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "../commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "../commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "../commands/UpgradePublishedSchemaCommand";
import { CloudDirectoryServiceException as __BaseException } from "../models/CloudDirectoryServiceException";
import {
  AccessDeniedException,
  AttributeKey,
  AttributeKeyAndValue,
  AttributeNameAndValue,
  BatchAddFacetToObject,
  BatchAttachObject,
  BatchAttachPolicy,
  BatchAttachToIndex,
  BatchAttachTypedLink,
  BatchAttachTypedLinkResponse,
  BatchCreateIndex,
  BatchCreateObject,
  BatchDeleteObject,
  BatchDetachFromIndex,
  BatchDetachObject,
  BatchDetachPolicy,
  BatchDetachTypedLink,
  BatchGetLinkAttributes,
  BatchGetLinkAttributesResponse,
  BatchGetObjectAttributes,
  BatchGetObjectAttributesResponse,
  BatchGetObjectInformation,
  BatchListAttachedIndices,
  BatchListAttachedIndicesResponse,
  BatchListIncomingTypedLinks,
  BatchListIncomingTypedLinksResponse,
  BatchListIndex,
  BatchListIndexResponse,
  BatchListObjectAttributes,
  BatchListObjectAttributesResponse,
  BatchListObjectChildren,
  BatchListObjectParentPaths,
  BatchListObjectParents,
  BatchListObjectPolicies,
  BatchListOutgoingTypedLinks,
  BatchListOutgoingTypedLinksResponse,
  BatchListPolicyAttachments,
  BatchLookupPolicy,
  BatchReadOperation,
  BatchReadOperationResponse,
  BatchReadSuccessfulResponse,
  BatchRemoveFacetFromObject,
  BatchUpdateLinkAttributes,
  BatchUpdateObjectAttributes,
  BatchWriteException,
  BatchWriteOperation,
  BatchWriteOperationResponse,
  CannotListParentOfRootException,
  Directory,
  DirectoryAlreadyExistsException,
  DirectoryDeletedException,
  DirectoryNotDisabledException,
  DirectoryNotEnabledException,
  FacetAlreadyExistsException,
  FacetAttribute,
  FacetAttributeDefinition,
  FacetAttributeReference,
  FacetAttributeUpdate,
  FacetInUseException,
  FacetNotFoundException,
  FacetValidationException,
  IncompatibleSchemaException,
  IndexAttachment,
  IndexedAttributeMissingException,
  InternalServiceException,
  InvalidArnException,
  InvalidAttachmentException,
  InvalidFacetUpdateException,
  InvalidNextTokenException,
  InvalidRuleException,
  InvalidSchemaDocException,
  InvalidTaggingRequestException,
  LimitExceededException,
  LinkAttributeAction,
  LinkAttributeUpdate,
  LinkNameAlreadyInUseException,
  NotIndexException,
  NotNodeException,
  NotPolicyException,
  ObjectAlreadyDetachedException,
  ObjectAttributeAction,
  ObjectAttributeRange,
  ObjectAttributeUpdate,
  ObjectNotDetachedException,
  ObjectReference,
  ResourceNotFoundException,
  RetryableConflictException,
  Rule,
  SchemaAlreadyExistsException,
  SchemaAlreadyPublishedException,
  SchemaFacet,
  StillContainsLinksException,
  Tag,
  TypedAttributeValue,
  TypedAttributeValueRange,
  TypedLinkAttributeDefinition,
  TypedLinkAttributeRange,
  TypedLinkFacet,
  TypedLinkFacetAttributeUpdate,
  TypedLinkSchemaAndFacetName,
  TypedLinkSpecifier,
  UnsupportedIndexTypeException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddFacetToObjectCommand
 */
export const se_AddFacetToObjectCommand = async (
  input: AddFacetToObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/facets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectAttributeList: (_) => se_AttributeKeyAndValueList(_, context),
      ObjectReference: (_) => _json(_),
      SchemaFacet: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ApplySchemaCommand
 */
export const se_ApplySchemaCommand = async (
  input: ApplySchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/apply";
  let body: any;
  body = JSON.stringify(
    take(input, {
      PublishedSchemaArn: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AttachObjectCommand
 */
export const se_AttachObjectCommand = async (
  input: AttachObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/attach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChildReference: (_) => _json(_),
      LinkName: [],
      ParentReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AttachPolicyCommand
 */
export const se_AttachPolicyCommand = async (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/policy/attach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectReference: (_) => _json(_),
      PolicyReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AttachToIndexCommand
 */
export const se_AttachToIndexCommand = async (
  input: AttachToIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/index/attach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      IndexReference: (_) => _json(_),
      TargetReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AttachTypedLinkCommand
 */
export const se_AttachTypedLinkCommand = async (
  input: AttachTypedLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/attach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => se_AttributeNameAndValueList(_, context),
      SourceObjectReference: (_) => _json(_),
      TargetObjectReference: (_) => _json(_),
      TypedLinkFacet: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchReadCommand
 */
export const se_BatchReadCommand = async (
  input: BatchReadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/batchread";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Operations: (_) => se_BatchReadOperationList(_, context),
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
 * serializeAws_restJson1BatchWriteCommand
 */
export const se_BatchWriteCommand = async (
  input: BatchWriteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/batchwrite";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Operations: (_) => se_BatchWriteOperationList(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDirectoryCommand
 */
export const se_CreateDirectoryCommand = async (
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/directory/create";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFacetCommand
 */
export const se_CreateFacetCommand = async (
  input: CreateFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/facet/create";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => se_FacetAttributeList(_, context),
      FacetStyle: [],
      Name: [],
      ObjectType: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateIndexCommand
 */
export const se_CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/index";
  let body: any;
  body = JSON.stringify(
    take(input, {
      IsUnique: [],
      LinkName: [],
      OrderedIndexedAttributeList: (_) => _json(_),
      ParentReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateObjectCommand
 */
export const se_CreateObjectCommand = async (
  input: CreateObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/object";
  let body: any;
  body = JSON.stringify(
    take(input, {
      LinkName: [],
      ObjectAttributeList: (_) => se_AttributeKeyAndValueList(_, context),
      ParentReference: (_) => _json(_),
      SchemaFacets: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSchemaCommand
 */
export const se_CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/create";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateTypedLinkFacetCommand
 */
export const se_CreateTypedLinkFacetCommand = async (
  input: CreateTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/facet/create";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Facet: (_) => se_TypedLinkFacet(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDirectoryCommand
 */
export const se_DeleteDirectoryCommand = async (
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/directory";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFacetCommand
 */
export const se_DeleteFacetCommand = async (
  input: DeleteFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/facet/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteObjectCommand
 */
export const se_DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSchemaCommand
 */
export const se_DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/schema";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteTypedLinkFacetCommand
 */
export const se_DeleteTypedLinkFacetCommand = async (
  input: DeleteTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/facet/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DetachFromIndexCommand
 */
export const se_DetachFromIndexCommand = async (
  input: DetachFromIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/index/detach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      IndexReference: (_) => _json(_),
      TargetReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DetachObjectCommand
 */
export const se_DetachObjectCommand = async (
  input: DetachObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/detach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      LinkName: [],
      ParentReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DetachPolicyCommand
 */
export const se_DetachPolicyCommand = async (
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/policy/detach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectReference: (_) => _json(_),
      PolicyReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DetachTypedLinkCommand
 */
export const se_DetachTypedLinkCommand = async (
  input: DetachTypedLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/detach";
  let body: any;
  body = JSON.stringify(
    take(input, {
      TypedLinkSpecifier: (_) => se_TypedLinkSpecifier(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisableDirectoryCommand
 */
export const se_DisableDirectoryCommand = async (
  input: DisableDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/directory/disable";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EnableDirectoryCommand
 */
export const se_EnableDirectoryCommand = async (
  input: EnableDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/directory/enable";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAppliedSchemaVersionCommand
 */
export const se_GetAppliedSchemaVersionCommand = async (
  input: GetAppliedSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/getappliedschema";
  let body: any;
  body = JSON.stringify(
    take(input, {
      SchemaArn: [],
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
 * serializeAws_restJson1GetDirectoryCommand
 */
export const se_GetDirectoryCommand = async (
  input: GetDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/directory/get";
  let body: any;
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
 * serializeAws_restJson1GetFacetCommand
 */
export const se_GetFacetCommand = async (
  input: GetFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/facet";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
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
 * serializeAws_restJson1GetLinkAttributesCommand
 */
export const se_GetLinkAttributesCommand = async (
  input: GetLinkAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/attributes/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeNames: (_) => _json(_),
      ConsistencyLevel: [],
      TypedLinkSpecifier: (_) => se_TypedLinkSpecifier(_, context),
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
 * serializeAws_restJson1GetObjectAttributesCommand
 */
export const se_GetObjectAttributesCommand = async (
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/attributes/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeNames: (_) => _json(_),
      ObjectReference: (_) => _json(_),
      SchemaFacet: (_) => _json(_),
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
 * serializeAws_restJson1GetObjectInformationCommand
 */
export const se_GetObjectInformationCommand = async (
  input: GetObjectInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/information";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1GetSchemaAsJsonCommand
 */
export const se_GetSchemaAsJsonCommand = async (
  input: GetSchemaAsJsonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/json";
  let body: any;
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
 * serializeAws_restJson1GetTypedLinkFacetInformationCommand
 */
export const se_GetTypedLinkFacetInformationCommand = async (
  input: GetTypedLinkFacetInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/facet/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
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
 * serializeAws_restJson1ListAppliedSchemaArnsCommand
 */
export const se_ListAppliedSchemaArnsCommand = async (
  input: ListAppliedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/applied";
  let body: any;
  body = JSON.stringify(
    take(input, {
      DirectoryArn: [],
      MaxResults: [],
      NextToken: [],
      SchemaArn: [],
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
 * serializeAws_restJson1ListAttachedIndicesCommand
 */
export const se_ListAttachedIndicesCommand = async (
  input: ListAttachedIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/indices";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      TargetReference: (_) => _json(_),
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
 * serializeAws_restJson1ListDevelopmentSchemaArnsCommand
 */
export const se_ListDevelopmentSchemaArnsCommand = async (
  input: ListDevelopmentSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/development";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
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
 * serializeAws_restJson1ListDirectoriesCommand
 */
export const se_ListDirectoriesCommand = async (
  input: ListDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/directory/list";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      state: [],
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
 * serializeAws_restJson1ListFacetAttributesCommand
 */
export const se_ListFacetAttributesCommand = async (
  input: ListFacetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/facet/attributes";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      Name: [],
      NextToken: [],
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
 * serializeAws_restJson1ListFacetNamesCommand
 */
export const se_ListFacetNamesCommand = async (
  input: ListFacetNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/facet/list";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
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
 * serializeAws_restJson1ListIncomingTypedLinksCommand
 */
export const se_ListIncomingTypedLinksCommand = async (
  input: ListIncomingTypedLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/incoming";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConsistencyLevel: [],
      FilterAttributeRanges: (_) => se_TypedLinkAttributeRangeList(_, context),
      FilterTypedLink: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListIndexCommand
 */
export const se_ListIndexCommand = async (
  input: ListIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/index/targets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      IndexReference: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      RangesOnIndexedValues: (_) => se_ObjectAttributeRangeList(_, context),
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
 * serializeAws_restJson1ListManagedSchemaArnsCommand
 */
export const se_ListManagedSchemaArnsCommand = async (
  input: ListManagedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/managed";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      SchemaArn: [],
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
 * serializeAws_restJson1ListObjectAttributesCommand
 */
export const se_ListObjectAttributesCommand = async (
  input: ListObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/attributes";
  let body: any;
  body = JSON.stringify(
    take(input, {
      FacetFilter: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListObjectChildrenCommand
 */
export const se_ListObjectChildrenCommand = async (
  input: ListObjectChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/children";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListObjectParentPathsCommand
 */
export const se_ListObjectParentPathsCommand = async (
  input: ListObjectParentPathsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/parentpaths";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListObjectParentsCommand
 */
export const se_ListObjectParentsCommand = async (
  input: ListObjectParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/parent";
  let body: any;
  body = JSON.stringify(
    take(input, {
      IncludeAllLinksToEachParent: [],
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListObjectPoliciesCommand
 */
export const se_ListObjectPoliciesCommand = async (
  input: ListObjectPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/policy";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListOutgoingTypedLinksCommand
 */
export const se_ListOutgoingTypedLinksCommand = async (
  input: ListOutgoingTypedLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/outgoing";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConsistencyLevel: [],
      FilterAttributeRanges: (_) => se_TypedLinkAttributeRangeList(_, context),
      FilterTypedLink: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1ListPolicyAttachmentsCommand
 */
export const se_ListPolicyAttachmentsCommand = async (
  input: ListPolicyAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
    "x-amz-consistency-level": input.ConsistencyLevel!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/policy/attachment";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      PolicyReference: (_) => _json(_),
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
 * serializeAws_restJson1ListPublishedSchemaArnsCommand
 */
export const se_ListPublishedSchemaArnsCommand = async (
  input: ListPublishedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/published";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      SchemaArn: [],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/tags";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ResourceArn: [],
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
 * serializeAws_restJson1ListTypedLinkFacetAttributesCommand
 */
export const se_ListTypedLinkFacetAttributesCommand = async (
  input: ListTypedLinkFacetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      Name: [],
      NextToken: [],
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
 * serializeAws_restJson1ListTypedLinkFacetNamesCommand
 */
export const se_ListTypedLinkFacetNamesCommand = async (
  input: ListTypedLinkFacetNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/facet/list";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
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
 * serializeAws_restJson1LookupPolicyCommand
 */
export const se_LookupPolicyCommand = async (
  input: LookupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/policy/lookup";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ObjectReference: (_) => _json(_),
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
 * serializeAws_restJson1PublishSchemaCommand
 */
export const se_PublishSchemaCommand = async (
  input: PublishSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DevelopmentSchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/publish";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MinorVersion: [],
      Name: [],
      Version: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutSchemaFromJsonCommand
 */
export const se_PutSchemaFromJsonCommand = async (
  input: PutSchemaFromJsonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/json";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Document: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveFacetFromObjectCommand
 */
export const se_RemoveFacetFromObjectCommand = async (
  input: RemoveFacetFromObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/facets/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectReference: (_) => _json(_),
      SchemaFacet: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/tags/add";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      Tags: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/tags/remove";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      TagKeys: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFacetCommand
 */
export const se_UpdateFacetCommand = async (
  input: UpdateFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/amazonclouddirectory/2017-01-11/facet";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeUpdates: (_) => se_FacetAttributeUpdateList(_, context),
      Name: [],
      ObjectType: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLinkAttributesCommand
 */
export const se_UpdateLinkAttributesCommand = async (
  input: UpdateLinkAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/attributes/update";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeUpdates: (_) => se_LinkAttributeUpdateList(_, context),
      TypedLinkSpecifier: (_) => se_TypedLinkSpecifier(_, context),
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
 * serializeAws_restJson1UpdateObjectAttributesCommand
 */
export const se_UpdateObjectAttributesCommand = async (
  input: UpdateObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.DirectoryArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/object/update";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeUpdates: (_) => se_ObjectAttributeUpdateList(_, context),
      ObjectReference: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSchemaCommand
 */
export const se_UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/update";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTypedLinkFacetCommand
 */
export const se_UpdateTypedLinkFacetCommand = async (
  input: UpdateTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-data-partition": input.SchemaArn!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/typedlink/facet";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeUpdates: (_) => se_TypedLinkFacetAttributeUpdateList(_, context),
      IdentityAttributeOrder: (_) => _json(_),
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpgradeAppliedSchemaCommand
 */
export const se_UpgradeAppliedSchemaCommand = async (
  input: UpgradeAppliedSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/upgradeapplied";
  let body: any;
  body = JSON.stringify(
    take(input, {
      DirectoryArn: [],
      DryRun: [],
      PublishedSchemaArn: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpgradePublishedSchemaCommand
 */
export const se_UpgradePublishedSchemaCommand = async (
  input: UpgradePublishedSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/amazonclouddirectory/2017-01-11/schema/upgradepublished";
  let body: any;
  body = JSON.stringify(
    take(input, {
      DevelopmentSchemaArn: [],
      DryRun: [],
      MinorVersion: [],
      PublishedSchemaArn: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AddFacetToObjectCommand
 */
export const de_AddFacetToObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddFacetToObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AddFacetToObjectCommandError
 */
const de_AddFacetToObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ApplySchemaCommand
 */
export const de_ApplySchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ApplySchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppliedSchemaArn: __expectString,
    DirectoryArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ApplySchemaCommandError
 */
const de_ApplySchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await de_InvalidAttachmentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      throw await de_SchemaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1AttachObjectCommand
 */
export const de_AttachObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AttachObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttachedObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AttachObjectCommandError
 */
const de_AttachObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await de_InvalidAttachmentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await de_LinkNameAlreadyInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1AttachPolicyCommand
 */
export const de_AttachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AttachPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AttachPolicyCommandError
 */
const de_AttachPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      throw await de_NotPolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1AttachToIndexCommand
 */
export const de_AttachToIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AttachToIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttachedObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AttachToIndexCommandError
 */
const de_AttachToIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "IndexedAttributeMissingException":
    case "com.amazonaws.clouddirectory#IndexedAttributeMissingException":
      throw await de_IndexedAttributeMissingExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await de_InvalidAttachmentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await de_LinkNameAlreadyInUseExceptionRes(parsedOutput, context);
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      throw await de_NotIndexExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1AttachTypedLinkCommand
 */
export const de_AttachTypedLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AttachTypedLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TypedLinkSpecifier: (_) => de_TypedLinkSpecifier(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AttachTypedLinkCommandError
 */
const de_AttachTypedLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await de_InvalidAttachmentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1BatchReadCommand
 */
export const de_BatchReadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchReadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Responses: (_) => de_BatchReadOperationResponseList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchReadCommandError
 */
const de_BatchReadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1BatchWriteCommand
 */
export const de_BatchWriteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchWriteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Responses: (_) => de_BatchWriteOperationResponseList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchWriteCommandError
 */
const de_BatchWriteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BatchWriteException":
    case "com.amazonaws.clouddirectory#BatchWriteException":
      throw await de_BatchWriteExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1CreateDirectoryCommand
 */
export const de_CreateDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDirectoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppliedSchemaArn: __expectString,
    DirectoryArn: __expectString,
    Name: __expectString,
    ObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDirectoryCommandError
 */
const de_CreateDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryAlreadyExistsException":
    case "com.amazonaws.clouddirectory#DirectoryAlreadyExistsException":
      throw await de_DirectoryAlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1CreateFacetCommand
 */
export const de_CreateFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFacetCommandError
 */
const de_CreateFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      throw await de_FacetAlreadyExistsExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await de_InvalidRuleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1CreateIndexCommand
 */
export const de_CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIndexCommandError
 */
const de_CreateIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await de_LinkNameAlreadyInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      throw await de_UnsupportedIndexTypeExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1CreateObjectCommand
 */
export const de_CreateObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateObjectCommandError
 */
const de_CreateObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await de_LinkNameAlreadyInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      throw await de_UnsupportedIndexTypeExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1CreateSchemaCommand
 */
export const de_CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSchemaCommandError
 */
const de_CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      throw await de_SchemaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1CreateTypedLinkFacetCommand
 */
export const de_CreateTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTypedLinkFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTypedLinkFacetCommandError
 */
const de_CreateTypedLinkFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      throw await de_FacetAlreadyExistsExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await de_InvalidRuleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DeleteDirectoryCommand
 */
export const de_DeleteDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDirectoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDirectoryCommandError
 */
const de_DeleteDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      throw await de_DirectoryDeletedExceptionRes(parsedOutput, context);
    case "DirectoryNotDisabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotDisabledException":
      throw await de_DirectoryNotDisabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DeleteFacetCommand
 */
export const de_DeleteFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFacetCommandError
 */
const de_DeleteFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetInUseException":
    case "com.amazonaws.clouddirectory#FacetInUseException":
      throw await de_FacetInUseExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DeleteObjectCommand
 */
export const de_DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteObjectCommandError
 */
const de_DeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ObjectNotDetachedException":
    case "com.amazonaws.clouddirectory#ObjectNotDetachedException":
      throw await de_ObjectNotDetachedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DeleteSchemaCommand
 */
export const de_DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSchemaCommandError
 */
const de_DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "StillContainsLinksException":
    case "com.amazonaws.clouddirectory#StillContainsLinksException":
      throw await de_StillContainsLinksExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DeleteTypedLinkFacetCommand
 */
export const de_DeleteTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTypedLinkFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTypedLinkFacetCommandError
 */
const de_DeleteTypedLinkFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DetachFromIndexCommand
 */
export const de_DetachFromIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DetachFromIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DetachedObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DetachFromIndexCommandError
 */
const de_DetachFromIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      throw await de_NotIndexExceptionRes(parsedOutput, context);
    case "ObjectAlreadyDetachedException":
    case "com.amazonaws.clouddirectory#ObjectAlreadyDetachedException":
      throw await de_ObjectAlreadyDetachedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DetachObjectCommand
 */
export const de_DetachObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DetachObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DetachedObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DetachObjectCommandError
 */
const de_DetachObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      throw await de_NotNodeExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DetachPolicyCommand
 */
export const de_DetachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DetachPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DetachPolicyCommandError
 */
const de_DetachPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      throw await de_NotPolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DetachTypedLinkCommand
 */
export const de_DetachTypedLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DetachTypedLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DetachTypedLinkCommandError
 */
const de_DetachTypedLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1DisableDirectoryCommand
 */
export const de_DisableDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableDirectoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableDirectoryCommandError
 */
const de_DisableDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      throw await de_DirectoryDeletedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1EnableDirectoryCommand
 */
export const de_EnableDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableDirectoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableDirectoryCommandError
 */
const de_EnableDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      throw await de_DirectoryDeletedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetAppliedSchemaVersionCommand
 */
export const de_GetAppliedSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppliedSchemaVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppliedSchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppliedSchemaVersionCommandError
 */
const de_GetAppliedSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetDirectoryCommand
 */
export const de_GetDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDirectoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Directory: (_) => de_Directory(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDirectoryCommandError
 */
const de_GetDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetFacetCommand
 */
export const de_GetFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Facet: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFacetCommandError
 */
const de_GetFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetLinkAttributesCommand
 */
export const de_GetLinkAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLinkAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: (_) => de_AttributeKeyAndValueList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLinkAttributesCommandError
 */
const de_GetLinkAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetObjectAttributesCommand
 */
export const de_GetObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: (_) => de_AttributeKeyAndValueList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetObjectAttributesCommandError
 */
const de_GetObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetObjectInformationCommand
 */
export const de_GetObjectInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectInformationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ObjectIdentifier: __expectString,
    SchemaFacets: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetObjectInformationCommandError
 */
const de_GetObjectInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetSchemaAsJsonCommand
 */
export const de_GetSchemaAsJsonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaAsJsonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Document: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaAsJsonCommandError
 */
const de_GetSchemaAsJsonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1GetTypedLinkFacetInformationCommand
 */
export const de_GetTypedLinkFacetInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTypedLinkFacetInformationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityAttributeOrder: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTypedLinkFacetInformationCommandError
 */
const de_GetTypedLinkFacetInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListAppliedSchemaArnsCommand
 */
export const de_ListAppliedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppliedSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SchemaArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppliedSchemaArnsCommandError
 */
const de_ListAppliedSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListAttachedIndicesCommand
 */
export const de_ListAttachedIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAttachedIndicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IndexAttachments: (_) => de_IndexAttachmentList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttachedIndicesCommandError
 */
const de_ListAttachedIndicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListDevelopmentSchemaArnsCommand
 */
export const de_ListDevelopmentSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDevelopmentSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SchemaArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError
 */
const de_ListDevelopmentSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListDirectoriesCommand
 */
export const de_ListDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDirectoriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Directories: (_) => de_DirectoryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDirectoriesCommandError
 */
const de_ListDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListFacetAttributesCommand
 */
export const de_ListFacetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFacetAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: (_) => de_FacetAttributeList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFacetAttributesCommandError
 */
const de_ListFacetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListFacetNamesCommand
 */
export const de_ListFacetNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFacetNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FacetNames: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFacetNamesCommandError
 */
const de_ListFacetNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListIncomingTypedLinksCommand
 */
export const de_ListIncomingTypedLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIncomingTypedLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LinkSpecifiers: (_) => de_TypedLinkSpecifierList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIncomingTypedLinksCommandError
 */
const de_ListIncomingTypedLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListIndexCommand
 */
export const de_ListIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IndexAttachments: (_) => de_IndexAttachmentList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIndexCommandError
 */
const de_ListIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      throw await de_NotIndexExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListManagedSchemaArnsCommand
 */
export const de_ListManagedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListManagedSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SchemaArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedSchemaArnsCommandError
 */
const de_ListManagedSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListObjectAttributesCommand
 */
export const de_ListObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: (_) => de_AttributeKeyAndValueList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListObjectAttributesCommandError
 */
const de_ListObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListObjectChildrenCommand
 */
export const de_ListObjectChildrenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectChildrenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Children: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListObjectChildrenCommandError
 */
const de_ListObjectChildrenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      throw await de_NotNodeExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListObjectParentPathsCommand
 */
export const de_ListObjectParentPathsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectParentPathsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PathToObjectIdentifiersList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListObjectParentPathsCommandError
 */
const de_ListObjectParentPathsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListObjectParentsCommand
 */
export const de_ListObjectParentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectParentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ParentLinks: _json,
    Parents: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListObjectParentsCommandError
 */
const de_ListObjectParentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "CannotListParentOfRootException":
    case "com.amazonaws.clouddirectory#CannotListParentOfRootException":
      throw await de_CannotListParentOfRootExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListObjectPoliciesCommand
 */
export const de_ListObjectPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttachedPolicyIds: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListObjectPoliciesCommandError
 */
const de_ListObjectPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListOutgoingTypedLinksCommand
 */
export const de_ListOutgoingTypedLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOutgoingTypedLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TypedLinkSpecifiers: (_) => de_TypedLinkSpecifierList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOutgoingTypedLinksCommandError
 */
const de_ListOutgoingTypedLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListPolicyAttachmentsCommand
 */
export const de_ListPolicyAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPolicyAttachmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ObjectIdentifiers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyAttachmentsCommandError
 */
const de_ListPolicyAttachmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      throw await de_NotPolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListPublishedSchemaArnsCommand
 */
export const de_ListPublishedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPublishedSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SchemaArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPublishedSchemaArnsCommandError
 */
const de_ListPublishedSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      throw await de_InvalidTaggingRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListTypedLinkFacetAttributesCommand
 */
export const de_ListTypedLinkFacetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTypedLinkFacetAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: (_) => de_TypedLinkAttributeDefinitionList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError
 */
const de_ListTypedLinkFacetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1ListTypedLinkFacetNamesCommand
 */
export const de_ListTypedLinkFacetNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTypedLinkFacetNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FacetNames: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTypedLinkFacetNamesCommandError
 */
const de_ListTypedLinkFacetNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1LookupPolicyCommand
 */
export const de_LookupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_LookupPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PolicyToPathList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1LookupPolicyCommandError
 */
const de_LookupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1PublishSchemaCommand
 */
export const de_PublishSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PublishSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PublishedSchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PublishSchemaCommandError
 */
const de_PublishSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "SchemaAlreadyPublishedException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyPublishedException":
      throw await de_SchemaAlreadyPublishedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1PutSchemaFromJsonCommand
 */
export const de_PutSchemaFromJsonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutSchemaFromJsonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSchemaFromJsonCommandError
 */
const de_PutSchemaFromJsonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await de_InvalidRuleExceptionRes(parsedOutput, context);
    case "InvalidSchemaDocException":
    case "com.amazonaws.clouddirectory#InvalidSchemaDocException":
      throw await de_InvalidSchemaDocExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1RemoveFacetFromObjectCommand
 */
export const de_RemoveFacetFromObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveFacetFromObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveFacetFromObjectCommandError
 */
const de_RemoveFacetFromObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      throw await de_InvalidTaggingRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      throw await de_InvalidTaggingRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpdateFacetCommand
 */
export const de_UpdateFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFacetCommandError
 */
const de_UpdateFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      throw await de_InvalidFacetUpdateExceptionRes(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await de_InvalidRuleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpdateLinkAttributesCommand
 */
export const de_UpdateLinkAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLinkAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLinkAttributesCommandError
 */
const de_UpdateLinkAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpdateObjectAttributesCommand
 */
export const de_UpdateObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateObjectAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ObjectIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateObjectAttributesCommandError
 */
const de_UpdateObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await de_DirectoryNotEnabledExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await de_LinkNameAlreadyInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpdateSchemaCommand
 */
export const de_UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSchemaCommandError
 */
const de_UpdateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpdateTypedLinkFacetCommand
 */
export const de_UpdateTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTypedLinkFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTypedLinkFacetCommandError
 */
const de_UpdateTypedLinkFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await de_FacetNotFoundExceptionRes(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await de_FacetValidationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      throw await de_InvalidFacetUpdateExceptionRes(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await de_InvalidRuleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpgradeAppliedSchemaCommand
 */
export const de_UpgradeAppliedSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpgradeAppliedSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryArn: __expectString,
    UpgradedSchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpgradeAppliedSchemaCommandError
 */
const de_UpgradeAppliedSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      throw await de_IncompatibleSchemaExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await de_InvalidAttachmentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      throw await de_SchemaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1UpgradePublishedSchemaCommand
 */
export const de_UpgradePublishedSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpgradePublishedSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UpgradedSchemaArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpgradePublishedSchemaCommandError
 */
const de_UpgradePublishedSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      throw await de_IncompatibleSchemaExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await de_InvalidAttachmentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await de_RetryableConflictExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
 * deserializeAws_restJson1BatchWriteExceptionRes
 */
const de_BatchWriteExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BatchWriteException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Index: __expectInt32,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BatchWriteException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CannotListParentOfRootExceptionRes
 */
const de_CannotListParentOfRootExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotListParentOfRootException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CannotListParentOfRootException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DirectoryAlreadyExistsExceptionRes
 */
const de_DirectoryAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DirectoryAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DirectoryDeletedExceptionRes
 */
const de_DirectoryDeletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryDeletedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DirectoryDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DirectoryNotDisabledExceptionRes
 */
const de_DirectoryNotDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNotDisabledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DirectoryNotDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DirectoryNotEnabledExceptionRes
 */
const de_DirectoryNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNotEnabledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DirectoryNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FacetAlreadyExistsExceptionRes
 */
const de_FacetAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new FacetAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FacetInUseExceptionRes
 */
const de_FacetInUseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<FacetInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new FacetInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FacetNotFoundExceptionRes
 */
const de_FacetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new FacetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FacetValidationExceptionRes
 */
const de_FacetValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new FacetValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IncompatibleSchemaExceptionRes
 */
const de_IncompatibleSchemaExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleSchemaException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IncompatibleSchemaException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IndexedAttributeMissingExceptionRes
 */
const de_IndexedAttributeMissingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IndexedAttributeMissingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IndexedAttributeMissingException({
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
 * deserializeAws_restJson1InvalidArnExceptionRes
 */
const de_InvalidArnExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArnException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidAttachmentExceptionRes
 */
const de_InvalidAttachmentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttachmentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidAttachmentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidFacetUpdateExceptionRes
 */
const de_InvalidFacetUpdateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFacetUpdateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidFacetUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRuleExceptionRes
 */
const de_InvalidRuleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuleException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSchemaDocExceptionRes
 */
const de_InvalidSchemaDocExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemaDocException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidSchemaDocException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidTaggingRequestExceptionRes
 */
const de_InvalidTaggingRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTaggingRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidTaggingRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LinkNameAlreadyInUseExceptionRes
 */
const de_LinkNameAlreadyInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LinkNameAlreadyInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LinkNameAlreadyInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotIndexExceptionRes
 */
const de_NotIndexExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotIndexException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotIndexException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotNodeExceptionRes
 */
const de_NotNodeExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotNodeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotNodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotPolicyExceptionRes
 */
const de_NotPolicyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotPolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ObjectAlreadyDetachedExceptionRes
 */
const de_ObjectAlreadyDetachedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectAlreadyDetachedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ObjectAlreadyDetachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ObjectNotDetachedExceptionRes
 */
const de_ObjectNotDetachedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotDetachedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ObjectNotDetachedException({
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
 * deserializeAws_restJson1RetryableConflictExceptionRes
 */
const de_RetryableConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RetryableConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RetryableConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SchemaAlreadyExistsExceptionRes
 */
const de_SchemaAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchemaAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SchemaAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SchemaAlreadyPublishedExceptionRes
 */
const de_SchemaAlreadyPublishedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchemaAlreadyPublishedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SchemaAlreadyPublishedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1StillContainsLinksExceptionRes
 */
const de_StillContainsLinksExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StillContainsLinksException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new StillContainsLinksException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedIndexTypeExceptionRes
 */
const de_UnsupportedIndexTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedIndexTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedIndexTypeException({
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

// se_AttributeKey omitted.

/**
 * serializeAws_restJson1AttributeKeyAndValue
 */
const se_AttributeKeyAndValue = (input: AttributeKeyAndValue, context: __SerdeContext): any => {
  return take(input, {
    Key: _json,
    Value: (_) => se_TypedAttributeValue(_, context),
  });
};

/**
 * serializeAws_restJson1AttributeKeyAndValueList
 */
const se_AttributeKeyAndValueList = (input: AttributeKeyAndValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeKeyAndValue(entry, context);
    });
};

// se_AttributeKeyList omitted.

/**
 * serializeAws_restJson1AttributeNameAndValue
 */
const se_AttributeNameAndValue = (input: AttributeNameAndValue, context: __SerdeContext): any => {
  return take(input, {
    AttributeName: [],
    Value: (_) => se_TypedAttributeValue(_, context),
  });
};

/**
 * serializeAws_restJson1AttributeNameAndValueList
 */
const se_AttributeNameAndValueList = (input: AttributeNameAndValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeNameAndValue(entry, context);
    });
};

// se_AttributeNameList omitted.

/**
 * serializeAws_restJson1BatchAddFacetToObject
 */
const se_BatchAddFacetToObject = (input: BatchAddFacetToObject, context: __SerdeContext): any => {
  return take(input, {
    ObjectAttributeList: (_) => se_AttributeKeyAndValueList(_, context),
    ObjectReference: _json,
    SchemaFacet: _json,
  });
};

// se_BatchAttachObject omitted.

// se_BatchAttachPolicy omitted.

// se_BatchAttachToIndex omitted.

/**
 * serializeAws_restJson1BatchAttachTypedLink
 */
const se_BatchAttachTypedLink = (input: BatchAttachTypedLink, context: __SerdeContext): any => {
  return take(input, {
    Attributes: (_) => se_AttributeNameAndValueList(_, context),
    SourceObjectReference: _json,
    TargetObjectReference: _json,
    TypedLinkFacet: _json,
  });
};

// se_BatchCreateIndex omitted.

/**
 * serializeAws_restJson1BatchCreateObject
 */
const se_BatchCreateObject = (input: BatchCreateObject, context: __SerdeContext): any => {
  return take(input, {
    BatchReferenceName: [],
    LinkName: [],
    ObjectAttributeList: (_) => se_AttributeKeyAndValueList(_, context),
    ParentReference: _json,
    SchemaFacet: _json,
  });
};

// se_BatchDeleteObject omitted.

// se_BatchDetachFromIndex omitted.

// se_BatchDetachObject omitted.

// se_BatchDetachPolicy omitted.

/**
 * serializeAws_restJson1BatchDetachTypedLink
 */
const se_BatchDetachTypedLink = (input: BatchDetachTypedLink, context: __SerdeContext): any => {
  return take(input, {
    TypedLinkSpecifier: (_) => se_TypedLinkSpecifier(_, context),
  });
};

/**
 * serializeAws_restJson1BatchGetLinkAttributes
 */
const se_BatchGetLinkAttributes = (input: BatchGetLinkAttributes, context: __SerdeContext): any => {
  return take(input, {
    AttributeNames: _json,
    TypedLinkSpecifier: (_) => se_TypedLinkSpecifier(_, context),
  });
};

// se_BatchGetObjectAttributes omitted.

// se_BatchGetObjectInformation omitted.

// se_BatchListAttachedIndices omitted.

/**
 * serializeAws_restJson1BatchListIncomingTypedLinks
 */
const se_BatchListIncomingTypedLinks = (input: BatchListIncomingTypedLinks, context: __SerdeContext): any => {
  return take(input, {
    FilterAttributeRanges: (_) => se_TypedLinkAttributeRangeList(_, context),
    FilterTypedLink: _json,
    MaxResults: [],
    NextToken: [],
    ObjectReference: _json,
  });
};

/**
 * serializeAws_restJson1BatchListIndex
 */
const se_BatchListIndex = (input: BatchListIndex, context: __SerdeContext): any => {
  return take(input, {
    IndexReference: _json,
    MaxResults: [],
    NextToken: [],
    RangesOnIndexedValues: (_) => se_ObjectAttributeRangeList(_, context),
  });
};

// se_BatchListObjectAttributes omitted.

// se_BatchListObjectChildren omitted.

// se_BatchListObjectParentPaths omitted.

// se_BatchListObjectParents omitted.

// se_BatchListObjectPolicies omitted.

/**
 * serializeAws_restJson1BatchListOutgoingTypedLinks
 */
const se_BatchListOutgoingTypedLinks = (input: BatchListOutgoingTypedLinks, context: __SerdeContext): any => {
  return take(input, {
    FilterAttributeRanges: (_) => se_TypedLinkAttributeRangeList(_, context),
    FilterTypedLink: _json,
    MaxResults: [],
    NextToken: [],
    ObjectReference: _json,
  });
};

// se_BatchListPolicyAttachments omitted.

// se_BatchLookupPolicy omitted.

/**
 * serializeAws_restJson1BatchReadOperation
 */
const se_BatchReadOperation = (input: BatchReadOperation, context: __SerdeContext): any => {
  return take(input, {
    GetLinkAttributes: (_) => se_BatchGetLinkAttributes(_, context),
    GetObjectAttributes: _json,
    GetObjectInformation: _json,
    ListAttachedIndices: _json,
    ListIncomingTypedLinks: (_) => se_BatchListIncomingTypedLinks(_, context),
    ListIndex: (_) => se_BatchListIndex(_, context),
    ListObjectAttributes: _json,
    ListObjectChildren: _json,
    ListObjectParentPaths: _json,
    ListObjectParents: _json,
    ListObjectPolicies: _json,
    ListOutgoingTypedLinks: (_) => se_BatchListOutgoingTypedLinks(_, context),
    ListPolicyAttachments: _json,
    LookupPolicy: _json,
  });
};

/**
 * serializeAws_restJson1BatchReadOperationList
 */
const se_BatchReadOperationList = (input: BatchReadOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchReadOperation(entry, context);
    });
};

// se_BatchRemoveFacetFromObject omitted.

/**
 * serializeAws_restJson1BatchUpdateLinkAttributes
 */
const se_BatchUpdateLinkAttributes = (input: BatchUpdateLinkAttributes, context: __SerdeContext): any => {
  return take(input, {
    AttributeUpdates: (_) => se_LinkAttributeUpdateList(_, context),
    TypedLinkSpecifier: (_) => se_TypedLinkSpecifier(_, context),
  });
};

/**
 * serializeAws_restJson1BatchUpdateObjectAttributes
 */
const se_BatchUpdateObjectAttributes = (input: BatchUpdateObjectAttributes, context: __SerdeContext): any => {
  return take(input, {
    AttributeUpdates: (_) => se_ObjectAttributeUpdateList(_, context),
    ObjectReference: _json,
  });
};

/**
 * serializeAws_restJson1BatchWriteOperation
 */
const se_BatchWriteOperation = (input: BatchWriteOperation, context: __SerdeContext): any => {
  return take(input, {
    AddFacetToObject: (_) => se_BatchAddFacetToObject(_, context),
    AttachObject: _json,
    AttachPolicy: _json,
    AttachToIndex: _json,
    AttachTypedLink: (_) => se_BatchAttachTypedLink(_, context),
    CreateIndex: _json,
    CreateObject: (_) => se_BatchCreateObject(_, context),
    DeleteObject: _json,
    DetachFromIndex: _json,
    DetachObject: _json,
    DetachPolicy: _json,
    DetachTypedLink: (_) => se_BatchDetachTypedLink(_, context),
    RemoveFacetFromObject: _json,
    UpdateLinkAttributes: (_) => se_BatchUpdateLinkAttributes(_, context),
    UpdateObjectAttributes: (_) => se_BatchUpdateObjectAttributes(_, context),
  });
};

/**
 * serializeAws_restJson1BatchWriteOperationList
 */
const se_BatchWriteOperationList = (input: BatchWriteOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchWriteOperation(entry, context);
    });
};

/**
 * serializeAws_restJson1FacetAttribute
 */
const se_FacetAttribute = (input: FacetAttribute, context: __SerdeContext): any => {
  return take(input, {
    AttributeDefinition: (_) => se_FacetAttributeDefinition(_, context),
    AttributeReference: _json,
    Name: [],
    RequiredBehavior: [],
  });
};

/**
 * serializeAws_restJson1FacetAttributeDefinition
 */
const se_FacetAttributeDefinition = (input: FacetAttributeDefinition, context: __SerdeContext): any => {
  return take(input, {
    DefaultValue: (_) => se_TypedAttributeValue(_, context),
    IsImmutable: [],
    Rules: _json,
    Type: [],
  });
};

/**
 * serializeAws_restJson1FacetAttributeList
 */
const se_FacetAttributeList = (input: FacetAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FacetAttribute(entry, context);
    });
};

// se_FacetAttributeReference omitted.

/**
 * serializeAws_restJson1FacetAttributeUpdate
 */
const se_FacetAttributeUpdate = (input: FacetAttributeUpdate, context: __SerdeContext): any => {
  return take(input, {
    Action: [],
    Attribute: (_) => se_FacetAttribute(_, context),
  });
};

/**
 * serializeAws_restJson1FacetAttributeUpdateList
 */
const se_FacetAttributeUpdateList = (input: FacetAttributeUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FacetAttributeUpdate(entry, context);
    });
};

/**
 * serializeAws_restJson1LinkAttributeAction
 */
const se_LinkAttributeAction = (input: LinkAttributeAction, context: __SerdeContext): any => {
  return take(input, {
    AttributeActionType: [],
    AttributeUpdateValue: (_) => se_TypedAttributeValue(_, context),
  });
};

/**
 * serializeAws_restJson1LinkAttributeUpdate
 */
const se_LinkAttributeUpdate = (input: LinkAttributeUpdate, context: __SerdeContext): any => {
  return take(input, {
    AttributeAction: (_) => se_LinkAttributeAction(_, context),
    AttributeKey: _json,
  });
};

/**
 * serializeAws_restJson1LinkAttributeUpdateList
 */
const se_LinkAttributeUpdateList = (input: LinkAttributeUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LinkAttributeUpdate(entry, context);
    });
};

/**
 * serializeAws_restJson1ObjectAttributeAction
 */
const se_ObjectAttributeAction = (input: ObjectAttributeAction, context: __SerdeContext): any => {
  return take(input, {
    ObjectAttributeActionType: [],
    ObjectAttributeUpdateValue: (_) => se_TypedAttributeValue(_, context),
  });
};

/**
 * serializeAws_restJson1ObjectAttributeRange
 */
const se_ObjectAttributeRange = (input: ObjectAttributeRange, context: __SerdeContext): any => {
  return take(input, {
    AttributeKey: _json,
    Range: (_) => se_TypedAttributeValueRange(_, context),
  });
};

/**
 * serializeAws_restJson1ObjectAttributeRangeList
 */
const se_ObjectAttributeRangeList = (input: ObjectAttributeRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ObjectAttributeRange(entry, context);
    });
};

/**
 * serializeAws_restJson1ObjectAttributeUpdate
 */
const se_ObjectAttributeUpdate = (input: ObjectAttributeUpdate, context: __SerdeContext): any => {
  return take(input, {
    ObjectAttributeAction: (_) => se_ObjectAttributeAction(_, context),
    ObjectAttributeKey: _json,
  });
};

/**
 * serializeAws_restJson1ObjectAttributeUpdateList
 */
const se_ObjectAttributeUpdateList = (input: ObjectAttributeUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ObjectAttributeUpdate(entry, context);
    });
};

// se_ObjectReference omitted.

// se_Rule omitted.

// se_RuleMap omitted.

// se_RuleParameterMap omitted.

// se_SchemaFacet omitted.

// se_SchemaFacetList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

/**
 * serializeAws_restJson1TypedAttributeValue
 */
const se_TypedAttributeValue = (input: TypedAttributeValue, context: __SerdeContext): any => {
  return TypedAttributeValue.visit(input, {
    BinaryValue: (value) => ({ BinaryValue: context.base64Encoder(value) }),
    BooleanValue: (value) => ({ BooleanValue: value }),
    DatetimeValue: (value) => ({ DatetimeValue: Math.round(value.getTime() / 1000) }),
    NumberValue: (value) => ({ NumberValue: value }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1TypedAttributeValueRange
 */
const se_TypedAttributeValueRange = (input: TypedAttributeValueRange, context: __SerdeContext): any => {
  return take(input, {
    EndMode: [],
    EndValue: (_) => se_TypedAttributeValue(_, context),
    StartMode: [],
    StartValue: (_) => se_TypedAttributeValue(_, context),
  });
};

/**
 * serializeAws_restJson1TypedLinkAttributeDefinition
 */
const se_TypedLinkAttributeDefinition = (input: TypedLinkAttributeDefinition, context: __SerdeContext): any => {
  return take(input, {
    DefaultValue: (_) => se_TypedAttributeValue(_, context),
    IsImmutable: [],
    Name: [],
    RequiredBehavior: [],
    Rules: _json,
    Type: [],
  });
};

/**
 * serializeAws_restJson1TypedLinkAttributeDefinitionList
 */
const se_TypedLinkAttributeDefinitionList = (input: TypedLinkAttributeDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TypedLinkAttributeDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1TypedLinkAttributeRange
 */
const se_TypedLinkAttributeRange = (input: TypedLinkAttributeRange, context: __SerdeContext): any => {
  return take(input, {
    AttributeName: [],
    Range: (_) => se_TypedAttributeValueRange(_, context),
  });
};

/**
 * serializeAws_restJson1TypedLinkAttributeRangeList
 */
const se_TypedLinkAttributeRangeList = (input: TypedLinkAttributeRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TypedLinkAttributeRange(entry, context);
    });
};

/**
 * serializeAws_restJson1TypedLinkFacet
 */
const se_TypedLinkFacet = (input: TypedLinkFacet, context: __SerdeContext): any => {
  return take(input, {
    Attributes: (_) => se_TypedLinkAttributeDefinitionList(_, context),
    IdentityAttributeOrder: _json,
    Name: [],
  });
};

/**
 * serializeAws_restJson1TypedLinkFacetAttributeUpdate
 */
const se_TypedLinkFacetAttributeUpdate = (input: TypedLinkFacetAttributeUpdate, context: __SerdeContext): any => {
  return take(input, {
    Action: [],
    Attribute: (_) => se_TypedLinkAttributeDefinition(_, context),
  });
};

/**
 * serializeAws_restJson1TypedLinkFacetAttributeUpdateList
 */
const se_TypedLinkFacetAttributeUpdateList = (input: TypedLinkFacetAttributeUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TypedLinkFacetAttributeUpdate(entry, context);
    });
};

// se_TypedLinkSchemaAndFacetName omitted.

/**
 * serializeAws_restJson1TypedLinkSpecifier
 */
const se_TypedLinkSpecifier = (input: TypedLinkSpecifier, context: __SerdeContext): any => {
  return take(input, {
    IdentityAttributeValues: (_) => se_AttributeNameAndValueList(_, context),
    SourceObjectReference: _json,
    TargetObjectReference: _json,
    TypedLinkFacet: _json,
  });
};

// de_Arns omitted.

// de_AttributeKey omitted.

/**
 * deserializeAws_restJson1AttributeKeyAndValue
 */
const de_AttributeKeyAndValue = (output: any, context: __SerdeContext): AttributeKeyAndValue => {
  return take(output, {
    Key: _json,
    Value: (_: any) => de_TypedAttributeValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1AttributeKeyAndValueList
 */
const de_AttributeKeyAndValueList = (output: any, context: __SerdeContext): AttributeKeyAndValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeKeyAndValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AttributeNameAndValue
 */
const de_AttributeNameAndValue = (output: any, context: __SerdeContext): AttributeNameAndValue => {
  return take(output, {
    AttributeName: __expectString,
    Value: (_: any) => de_TypedAttributeValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1AttributeNameAndValueList
 */
const de_AttributeNameAndValueList = (output: any, context: __SerdeContext): AttributeNameAndValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeNameAndValue(entry, context);
    });
  return retVal;
};

// de_AttributeNameList omitted.

// de_BatchAddFacetToObjectResponse omitted.

// de_BatchAttachObjectResponse omitted.

// de_BatchAttachPolicyResponse omitted.

// de_BatchAttachToIndexResponse omitted.

/**
 * deserializeAws_restJson1BatchAttachTypedLinkResponse
 */
const de_BatchAttachTypedLinkResponse = (output: any, context: __SerdeContext): BatchAttachTypedLinkResponse => {
  return take(output, {
    TypedLinkSpecifier: (_: any) => de_TypedLinkSpecifier(_, context),
  }) as any;
};

// de_BatchCreateIndexResponse omitted.

// de_BatchCreateObjectResponse omitted.

// de_BatchDeleteObjectResponse omitted.

// de_BatchDetachFromIndexResponse omitted.

// de_BatchDetachObjectResponse omitted.

// de_BatchDetachPolicyResponse omitted.

// de_BatchDetachTypedLinkResponse omitted.

/**
 * deserializeAws_restJson1BatchGetLinkAttributesResponse
 */
const de_BatchGetLinkAttributesResponse = (output: any, context: __SerdeContext): BatchGetLinkAttributesResponse => {
  return take(output, {
    Attributes: (_: any) => de_AttributeKeyAndValueList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BatchGetObjectAttributesResponse
 */
const de_BatchGetObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectAttributesResponse => {
  return take(output, {
    Attributes: (_: any) => de_AttributeKeyAndValueList(_, context),
  }) as any;
};

// de_BatchGetObjectInformationResponse omitted.

/**
 * deserializeAws_restJson1BatchListAttachedIndicesResponse
 */
const de_BatchListAttachedIndicesResponse = (
  output: any,
  context: __SerdeContext
): BatchListAttachedIndicesResponse => {
  return take(output, {
    IndexAttachments: (_: any) => de_IndexAttachmentList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchListIncomingTypedLinksResponse
 */
const de_BatchListIncomingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListIncomingTypedLinksResponse => {
  return take(output, {
    LinkSpecifiers: (_: any) => de_TypedLinkSpecifierList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchListIndexResponse
 */
const de_BatchListIndexResponse = (output: any, context: __SerdeContext): BatchListIndexResponse => {
  return take(output, {
    IndexAttachments: (_: any) => de_IndexAttachmentList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchListObjectAttributesResponse
 */
const de_BatchListObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectAttributesResponse => {
  return take(output, {
    Attributes: (_: any) => de_AttributeKeyAndValueList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_BatchListObjectChildrenResponse omitted.

// de_BatchListObjectParentPathsResponse omitted.

// de_BatchListObjectParentsResponse omitted.

// de_BatchListObjectPoliciesResponse omitted.

/**
 * deserializeAws_restJson1BatchListOutgoingTypedLinksResponse
 */
const de_BatchListOutgoingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListOutgoingTypedLinksResponse => {
  return take(output, {
    NextToken: __expectString,
    TypedLinkSpecifiers: (_: any) => de_TypedLinkSpecifierList(_, context),
  }) as any;
};

// de_BatchListPolicyAttachmentsResponse omitted.

// de_BatchLookupPolicyResponse omitted.

// de_BatchReadException omitted.

/**
 * deserializeAws_restJson1BatchReadOperationResponse
 */
const de_BatchReadOperationResponse = (output: any, context: __SerdeContext): BatchReadOperationResponse => {
  return take(output, {
    ExceptionResponse: _json,
    SuccessfulResponse: (_: any) => de_BatchReadSuccessfulResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BatchReadOperationResponseList
 */
const de_BatchReadOperationResponseList = (output: any, context: __SerdeContext): BatchReadOperationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchReadOperationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchReadSuccessfulResponse
 */
const de_BatchReadSuccessfulResponse = (output: any, context: __SerdeContext): BatchReadSuccessfulResponse => {
  return take(output, {
    GetLinkAttributes: (_: any) => de_BatchGetLinkAttributesResponse(_, context),
    GetObjectAttributes: (_: any) => de_BatchGetObjectAttributesResponse(_, context),
    GetObjectInformation: _json,
    ListAttachedIndices: (_: any) => de_BatchListAttachedIndicesResponse(_, context),
    ListIncomingTypedLinks: (_: any) => de_BatchListIncomingTypedLinksResponse(_, context),
    ListIndex: (_: any) => de_BatchListIndexResponse(_, context),
    ListObjectAttributes: (_: any) => de_BatchListObjectAttributesResponse(_, context),
    ListObjectChildren: _json,
    ListObjectParentPaths: _json,
    ListObjectParents: _json,
    ListObjectPolicies: _json,
    ListOutgoingTypedLinks: (_: any) => de_BatchListOutgoingTypedLinksResponse(_, context),
    ListPolicyAttachments: _json,
    LookupPolicy: _json,
  }) as any;
};

// de_BatchRemoveFacetFromObjectResponse omitted.

// de_BatchUpdateLinkAttributesResponse omitted.

// de_BatchUpdateObjectAttributesResponse omitted.

/**
 * deserializeAws_restJson1BatchWriteOperationResponse
 */
const de_BatchWriteOperationResponse = (output: any, context: __SerdeContext): BatchWriteOperationResponse => {
  return take(output, {
    AddFacetToObject: _json,
    AttachObject: _json,
    AttachPolicy: _json,
    AttachToIndex: _json,
    AttachTypedLink: (_: any) => de_BatchAttachTypedLinkResponse(_, context),
    CreateIndex: _json,
    CreateObject: _json,
    DeleteObject: _json,
    DetachFromIndex: _json,
    DetachObject: _json,
    DetachPolicy: _json,
    DetachTypedLink: _json,
    RemoveFacetFromObject: _json,
    UpdateLinkAttributes: _json,
    UpdateObjectAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchWriteOperationResponseList
 */
const de_BatchWriteOperationResponseList = (output: any, context: __SerdeContext): BatchWriteOperationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchWriteOperationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Directory
 */
const de_Directory = (output: any, context: __SerdeContext): Directory => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryArn: __expectString,
    Name: __expectString,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DirectoryList
 */
const de_DirectoryList = (output: any, context: __SerdeContext): Directory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Directory(entry, context);
    });
  return retVal;
};

// de_Facet omitted.

/**
 * deserializeAws_restJson1FacetAttribute
 */
const de_FacetAttribute = (output: any, context: __SerdeContext): FacetAttribute => {
  return take(output, {
    AttributeDefinition: (_: any) => de_FacetAttributeDefinition(_, context),
    AttributeReference: _json,
    Name: __expectString,
    RequiredBehavior: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FacetAttributeDefinition
 */
const de_FacetAttributeDefinition = (output: any, context: __SerdeContext): FacetAttributeDefinition => {
  return take(output, {
    DefaultValue: (_: any) => de_TypedAttributeValue(__expectUnion(_), context),
    IsImmutable: __expectBoolean,
    Rules: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FacetAttributeList
 */
const de_FacetAttributeList = (output: any, context: __SerdeContext): FacetAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FacetAttribute(entry, context);
    });
  return retVal;
};

// de_FacetAttributeReference omitted.

// de_FacetNameList omitted.

/**
 * deserializeAws_restJson1IndexAttachment
 */
const de_IndexAttachment = (output: any, context: __SerdeContext): IndexAttachment => {
  return take(output, {
    IndexedAttributes: (_: any) => de_AttributeKeyAndValueList(_, context),
    ObjectIdentifier: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IndexAttachmentList
 */
const de_IndexAttachmentList = (output: any, context: __SerdeContext): IndexAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IndexAttachment(entry, context);
    });
  return retVal;
};

// de_LinkNameToObjectIdentifierMap omitted.

// de_ObjectIdentifierAndLinkNameList omitted.

// de_ObjectIdentifierAndLinkNameTuple omitted.

// de_ObjectIdentifierList omitted.

// de_ObjectIdentifierToLinkNameMap omitted.

// de_ObjectReference omitted.

// de_PathToObjectIdentifiers omitted.

// de_PathToObjectIdentifiersList omitted.

// de_PolicyAttachment omitted.

// de_PolicyAttachmentList omitted.

// de_PolicyToPath omitted.

// de_PolicyToPathList omitted.

// de_Rule omitted.

// de_RuleMap omitted.

// de_RuleParameterMap omitted.

// de_SchemaFacet omitted.

// de_SchemaFacetList omitted.

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_restJson1TypedAttributeValue
 */
const de_TypedAttributeValue = (output: any, context: __SerdeContext): TypedAttributeValue => {
  if (output.BinaryValue != null) {
    return {
      BinaryValue: context.base64Decoder(output.BinaryValue),
    };
  }
  if (__expectBoolean(output.BooleanValue) !== undefined) {
    return { BooleanValue: __expectBoolean(output.BooleanValue) as any };
  }
  if (output.DatetimeValue != null) {
    return {
      DatetimeValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DatetimeValue))),
    };
  }
  if (__expectString(output.NumberValue) !== undefined) {
    return { NumberValue: __expectString(output.NumberValue) as any };
  }
  if (__expectString(output.StringValue) !== undefined) {
    return { StringValue: __expectString(output.StringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1TypedLinkAttributeDefinition
 */
const de_TypedLinkAttributeDefinition = (output: any, context: __SerdeContext): TypedLinkAttributeDefinition => {
  return take(output, {
    DefaultValue: (_: any) => de_TypedAttributeValue(__expectUnion(_), context),
    IsImmutable: __expectBoolean,
    Name: __expectString,
    RequiredBehavior: __expectString,
    Rules: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TypedLinkAttributeDefinitionList
 */
const de_TypedLinkAttributeDefinitionList = (output: any, context: __SerdeContext): TypedLinkAttributeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TypedLinkAttributeDefinition(entry, context);
    });
  return retVal;
};

// de_TypedLinkNameList omitted.

// de_TypedLinkSchemaAndFacetName omitted.

/**
 * deserializeAws_restJson1TypedLinkSpecifier
 */
const de_TypedLinkSpecifier = (output: any, context: __SerdeContext): TypedLinkSpecifier => {
  return take(output, {
    IdentityAttributeValues: (_: any) => de_AttributeNameAndValueList(_, context),
    SourceObjectReference: _json,
    TargetObjectReference: _json,
    TypedLinkFacet: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TypedLinkSpecifierList
 */
const de_TypedLinkSpecifierList = (output: any, context: __SerdeContext): TypedLinkSpecifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TypedLinkSpecifier(entry, context);
    });
  return retVal;
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
