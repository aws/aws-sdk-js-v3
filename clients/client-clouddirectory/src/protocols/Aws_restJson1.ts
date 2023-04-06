// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  BatchAddFacetToObjectResponse,
  BatchAttachObject,
  BatchAttachObjectResponse,
  BatchAttachPolicy,
  BatchAttachPolicyResponse,
  BatchAttachToIndex,
  BatchAttachToIndexResponse,
  BatchAttachTypedLink,
  BatchAttachTypedLinkResponse,
  BatchCreateIndex,
  BatchCreateIndexResponse,
  BatchCreateObject,
  BatchCreateObjectResponse,
  BatchDeleteObject,
  BatchDeleteObjectResponse,
  BatchDetachFromIndex,
  BatchDetachFromIndexResponse,
  BatchDetachObject,
  BatchDetachObjectResponse,
  BatchDetachPolicy,
  BatchDetachPolicyResponse,
  BatchDetachTypedLink,
  BatchDetachTypedLinkResponse,
  BatchGetLinkAttributes,
  BatchGetLinkAttributesResponse,
  BatchGetObjectAttributes,
  BatchGetObjectAttributesResponse,
  BatchGetObjectInformation,
  BatchGetObjectInformationResponse,
  BatchListAttachedIndices,
  BatchListAttachedIndicesResponse,
  BatchListIncomingTypedLinks,
  BatchListIncomingTypedLinksResponse,
  BatchListIndex,
  BatchListIndexResponse,
  BatchListObjectAttributes,
  BatchListObjectAttributesResponse,
  BatchListObjectChildren,
  BatchListObjectChildrenResponse,
  BatchListObjectParentPaths,
  BatchListObjectParentPathsResponse,
  BatchListObjectParents,
  BatchListObjectParentsResponse,
  BatchListObjectPolicies,
  BatchListObjectPoliciesResponse,
  BatchListOutgoingTypedLinks,
  BatchListOutgoingTypedLinksResponse,
  BatchListPolicyAttachments,
  BatchListPolicyAttachmentsResponse,
  BatchLookupPolicy,
  BatchLookupPolicyResponse,
  BatchReadException,
  BatchReadOperation,
  BatchReadOperationResponse,
  BatchReadSuccessfulResponse,
  BatchRemoveFacetFromObject,
  BatchRemoveFacetFromObjectResponse,
  BatchUpdateLinkAttributes,
  BatchUpdateLinkAttributesResponse,
  BatchUpdateObjectAttributes,
  BatchUpdateObjectAttributesResponse,
  BatchWriteException,
  BatchWriteOperation,
  BatchWriteOperationResponse,
  CannotListParentOfRootException,
  Directory,
  DirectoryAlreadyExistsException,
  DirectoryDeletedException,
  DirectoryNotDisabledException,
  DirectoryNotEnabledException,
  Facet,
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
  ObjectIdentifierAndLinkNameTuple,
  ObjectNotDetachedException,
  ObjectReference,
  PathToObjectIdentifiers,
  PolicyAttachment,
  PolicyToPath,
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
  body = JSON.stringify({
    ...(input.ObjectAttributeList != null && {
      ObjectAttributeList: se_AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacet(input.SchemaFacet, context) }),
  });
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
  body = JSON.stringify({
    ...(input.PublishedSchemaArn != null && { PublishedSchemaArn: input.PublishedSchemaArn }),
  });
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
  body = JSON.stringify({
    ...(input.ChildReference != null && { ChildReference: se_ObjectReference(input.ChildReference, context) }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.PolicyReference != null && { PolicyReference: se_ObjectReference(input.PolicyReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.IndexReference != null && { IndexReference: se_ObjectReference(input.IndexReference, context) }),
    ...(input.TargetReference != null && { TargetReference: se_ObjectReference(input.TargetReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Attributes != null && { Attributes: se_AttributeNameAndValueList(input.Attributes, context) }),
    ...(input.SourceObjectReference != null && {
      SourceObjectReference: se_ObjectReference(input.SourceObjectReference, context),
    }),
    ...(input.TargetObjectReference != null && {
      TargetObjectReference: se_ObjectReference(input.TargetObjectReference, context),
    }),
    ...(input.TypedLinkFacet != null && {
      TypedLinkFacet: se_TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.Operations != null && { Operations: se_BatchReadOperationList(input.Operations, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Operations != null && { Operations: se_BatchWriteOperationList(input.Operations, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.Attributes != null && { Attributes: se_FacetAttributeList(input.Attributes, context) }),
    ...(input.FacetStyle != null && { FacetStyle: input.FacetStyle }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ObjectType != null && { ObjectType: input.ObjectType }),
  });
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
  body = JSON.stringify({
    ...(input.IsUnique != null && { IsUnique: input.IsUnique }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList != null && {
      OrderedIndexedAttributeList: se_AttributeKeyList(input.OrderedIndexedAttributeList, context),
    }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList != null && {
      ObjectAttributeList: se_AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
    ...(input.SchemaFacets != null && { SchemaFacets: se_SchemaFacetList(input.SchemaFacets, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.Facet != null && { Facet: se_TypedLinkFacet(input.Facet, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.IndexReference != null && { IndexReference: se_ObjectReference(input.IndexReference, context) }),
    ...(input.TargetReference != null && { TargetReference: se_ObjectReference(input.TargetReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.PolicyReference != null && { PolicyReference: se_ObjectReference(input.PolicyReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: se_TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.AttributeNames != null && { AttributeNames: se_AttributeNameList(input.AttributeNames, context) }),
    ...(input.ConsistencyLevel != null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: se_TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.AttributeNames != null && { AttributeNames: se_AttributeNameList(input.AttributeNames, context) }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacet(input.SchemaFacet, context) }),
  });
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
  body = JSON.stringify({
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.DirectoryArn != null && { DirectoryArn: input.DirectoryArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TargetReference != null && { TargetReference: se_ObjectReference(input.TargetReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.state != null && { state: input.state }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.ConsistencyLevel != null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.FilterAttributeRanges != null && {
      FilterAttributeRanges: se_TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: se_TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.IndexReference != null && { IndexReference: se_ObjectReference(input.IndexReference, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues != null && {
      RangesOnIndexedValues: se_ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  });
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
  body = JSON.stringify({
    ...(input.FacetFilter != null && { FacetFilter: se_SchemaFacet(input.FacetFilter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.IncludeAllLinksToEachParent != null && {
      IncludeAllLinksToEachParent: input.IncludeAllLinksToEachParent,
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.ConsistencyLevel != null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.FilterAttributeRanges != null && {
      FilterAttributeRanges: se_TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: se_TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyReference != null && { PolicyReference: se_ObjectReference(input.PolicyReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.MinorVersion != null && { MinorVersion: input.MinorVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  });
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
  body = JSON.stringify({
    ...(input.Document != null && { Document: input.Document }),
  });
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
  body = JSON.stringify({
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacet(input.SchemaFacet, context) }),
  });
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
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
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
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  });
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
  body = JSON.stringify({
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: se_FacetAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ObjectType != null && { ObjectType: input.ObjectType }),
  });
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
  body = JSON.stringify({
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: se_LinkAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: se_TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: se_ObjectAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: se_TypedLinkFacetAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.IdentityAttributeOrder != null && {
      IdentityAttributeOrder: se_AttributeNameList(input.IdentityAttributeOrder, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  });
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
  body = JSON.stringify({
    ...(input.DirectoryArn != null && { DirectoryArn: input.DirectoryArn }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.PublishedSchemaArn != null && { PublishedSchemaArn: input.PublishedSchemaArn }),
  });
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
  body = JSON.stringify({
    ...(input.DevelopmentSchemaArn != null && { DevelopmentSchemaArn: input.DevelopmentSchemaArn }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MinorVersion != null && { MinorVersion: input.MinorVersion }),
    ...(input.PublishedSchemaArn != null && { PublishedSchemaArn: input.PublishedSchemaArn }),
  });
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AppliedSchemaArn != null) {
    contents.AppliedSchemaArn = __expectString(data.AppliedSchemaArn);
  }
  if (data.DirectoryArn != null) {
    contents.DirectoryArn = __expectString(data.DirectoryArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AttachedObjectIdentifier != null) {
    contents.AttachedObjectIdentifier = __expectString(data.AttachedObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AttachedObjectIdentifier != null) {
    contents.AttachedObjectIdentifier = __expectString(data.AttachedObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.TypedLinkSpecifier != null) {
    contents.TypedLinkSpecifier = de_TypedLinkSpecifier(data.TypedLinkSpecifier, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Responses != null) {
    contents.Responses = de_BatchReadOperationResponseList(data.Responses, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Responses != null) {
    contents.Responses = de_BatchWriteOperationResponseList(data.Responses, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AppliedSchemaArn != null) {
    contents.AppliedSchemaArn = __expectString(data.AppliedSchemaArn);
  }
  if (data.DirectoryArn != null) {
    contents.DirectoryArn = __expectString(data.DirectoryArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ObjectIdentifier != null) {
    contents.ObjectIdentifier = __expectString(data.ObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ObjectIdentifier != null) {
    contents.ObjectIdentifier = __expectString(data.ObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ObjectIdentifier != null) {
    contents.ObjectIdentifier = __expectString(data.ObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.SchemaArn != null) {
    contents.SchemaArn = __expectString(data.SchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DirectoryArn != null) {
    contents.DirectoryArn = __expectString(data.DirectoryArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.SchemaArn != null) {
    contents.SchemaArn = __expectString(data.SchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DetachedObjectIdentifier != null) {
    contents.DetachedObjectIdentifier = __expectString(data.DetachedObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DetachedObjectIdentifier != null) {
    contents.DetachedObjectIdentifier = __expectString(data.DetachedObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DirectoryArn != null) {
    contents.DirectoryArn = __expectString(data.DirectoryArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DirectoryArn != null) {
    contents.DirectoryArn = __expectString(data.DirectoryArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AppliedSchemaArn != null) {
    contents.AppliedSchemaArn = __expectString(data.AppliedSchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Directory != null) {
    contents.Directory = de_Directory(data.Directory, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Facet != null) {
    contents.Facet = de_Facet(data.Facet, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Attributes != null) {
    contents.Attributes = de_AttributeKeyAndValueList(data.Attributes, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Attributes != null) {
    contents.Attributes = de_AttributeKeyAndValueList(data.Attributes, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ObjectIdentifier != null) {
    contents.ObjectIdentifier = __expectString(data.ObjectIdentifier);
  }
  if (data.SchemaFacets != null) {
    contents.SchemaFacets = de_SchemaFacetList(data.SchemaFacets, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Document != null) {
    contents.Document = __expectString(data.Document);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.IdentityAttributeOrder != null) {
    contents.IdentityAttributeOrder = de_AttributeNameList(data.IdentityAttributeOrder, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = de_Arns(data.SchemaArns, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.IndexAttachments != null) {
    contents.IndexAttachments = de_IndexAttachmentList(data.IndexAttachments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = de_Arns(data.SchemaArns, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Directories != null) {
    contents.Directories = de_DirectoryList(data.Directories, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Attributes != null) {
    contents.Attributes = de_FacetAttributeList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.FacetNames != null) {
    contents.FacetNames = de_FacetNameList(data.FacetNames, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.LinkSpecifiers != null) {
    contents.LinkSpecifiers = de_TypedLinkSpecifierList(data.LinkSpecifiers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.IndexAttachments != null) {
    contents.IndexAttachments = de_IndexAttachmentList(data.IndexAttachments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = de_Arns(data.SchemaArns, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Attributes != null) {
    contents.Attributes = de_AttributeKeyAndValueList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Children != null) {
    contents.Children = de_LinkNameToObjectIdentifierMap(data.Children, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PathToObjectIdentifiersList != null) {
    contents.PathToObjectIdentifiersList = de_PathToObjectIdentifiersList(data.PathToObjectIdentifiersList, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ParentLinks != null) {
    contents.ParentLinks = de_ObjectIdentifierAndLinkNameList(data.ParentLinks, context);
  }
  if (data.Parents != null) {
    contents.Parents = de_ObjectIdentifierToLinkNameMap(data.Parents, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AttachedPolicyIds != null) {
    contents.AttachedPolicyIds = de_ObjectIdentifierList(data.AttachedPolicyIds, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TypedLinkSpecifiers != null) {
    contents.TypedLinkSpecifiers = de_TypedLinkSpecifierList(data.TypedLinkSpecifiers, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ObjectIdentifiers != null) {
    contents.ObjectIdentifiers = de_ObjectIdentifierList(data.ObjectIdentifiers, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = de_Arns(data.SchemaArns, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Attributes != null) {
    contents.Attributes = de_TypedLinkAttributeDefinitionList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.FacetNames != null) {
    contents.FacetNames = de_TypedLinkNameList(data.FacetNames, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PolicyToPathList != null) {
    contents.PolicyToPathList = de_PolicyToPathList(data.PolicyToPathList, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.PublishedSchemaArn != null) {
    contents.PublishedSchemaArn = __expectString(data.PublishedSchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ObjectIdentifier != null) {
    contents.ObjectIdentifier = __expectString(data.ObjectIdentifier);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.SchemaArn != null) {
    contents.SchemaArn = __expectString(data.SchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DirectoryArn != null) {
    contents.DirectoryArn = __expectString(data.DirectoryArn);
  }
  if (data.UpgradedSchemaArn != null) {
    contents.UpgradedSchemaArn = __expectString(data.UpgradedSchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.UpgradedSchemaArn != null) {
    contents.UpgradedSchemaArn = __expectString(data.UpgradedSchemaArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Index != null) {
    contents.Index = __expectInt32(data.Index);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AttributeKey
 */
const se_AttributeKey = (input: AttributeKey, context: __SerdeContext): any => {
  return {
    ...(input.FacetName != null && { FacetName: input.FacetName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  };
};

/**
 * serializeAws_restJson1AttributeKeyAndValue
 */
const se_AttributeKeyAndValue = (input: AttributeKeyAndValue, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: se_AttributeKey(input.Key, context) }),
    ...(input.Value != null && { Value: se_TypedAttributeValue(input.Value, context) }),
  };
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

/**
 * serializeAws_restJson1AttributeKeyList
 */
const se_AttributeKeyList = (input: AttributeKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeKey(entry, context);
    });
};

/**
 * serializeAws_restJson1AttributeNameAndValue
 */
const se_AttributeNameAndValue = (input: AttributeNameAndValue, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Value != null && { Value: se_TypedAttributeValue(input.Value, context) }),
  };
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

/**
 * serializeAws_restJson1AttributeNameList
 */
const se_AttributeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1BatchAddFacetToObject
 */
const se_BatchAddFacetToObject = (input: BatchAddFacetToObject, context: __SerdeContext): any => {
  return {
    ...(input.ObjectAttributeList != null && {
      ObjectAttributeList: se_AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacet(input.SchemaFacet, context) }),
  };
};

/**
 * serializeAws_restJson1BatchAttachObject
 */
const se_BatchAttachObject = (input: BatchAttachObject, context: __SerdeContext): any => {
  return {
    ...(input.ChildReference != null && { ChildReference: se_ObjectReference(input.ChildReference, context) }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchAttachPolicy
 */
const se_BatchAttachPolicy = (input: BatchAttachPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.PolicyReference != null && { PolicyReference: se_ObjectReference(input.PolicyReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchAttachToIndex
 */
const se_BatchAttachToIndex = (input: BatchAttachToIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexReference != null && { IndexReference: se_ObjectReference(input.IndexReference, context) }),
    ...(input.TargetReference != null && { TargetReference: se_ObjectReference(input.TargetReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchAttachTypedLink
 */
const se_BatchAttachTypedLink = (input: BatchAttachTypedLink, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_AttributeNameAndValueList(input.Attributes, context) }),
    ...(input.SourceObjectReference != null && {
      SourceObjectReference: se_ObjectReference(input.SourceObjectReference, context),
    }),
    ...(input.TargetObjectReference != null && {
      TargetObjectReference: se_ObjectReference(input.TargetObjectReference, context),
    }),
    ...(input.TypedLinkFacet != null && {
      TypedLinkFacet: se_TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchCreateIndex
 */
const se_BatchCreateIndex = (input: BatchCreateIndex, context: __SerdeContext): any => {
  return {
    ...(input.BatchReferenceName != null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.IsUnique != null && { IsUnique: input.IsUnique }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList != null && {
      OrderedIndexedAttributeList: se_AttributeKeyList(input.OrderedIndexedAttributeList, context),
    }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchCreateObject
 */
const se_BatchCreateObject = (input: BatchCreateObject, context: __SerdeContext): any => {
  return {
    ...(input.BatchReferenceName != null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList != null && {
      ObjectAttributeList: se_AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacetList(input.SchemaFacet, context) }),
  };
};

/**
 * serializeAws_restJson1BatchDeleteObject
 */
const se_BatchDeleteObject = (input: BatchDeleteObject, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchDetachFromIndex
 */
const se_BatchDetachFromIndex = (input: BatchDetachFromIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexReference != null && { IndexReference: se_ObjectReference(input.IndexReference, context) }),
    ...(input.TargetReference != null && { TargetReference: se_ObjectReference(input.TargetReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchDetachObject
 */
const se_BatchDetachObject = (input: BatchDetachObject, context: __SerdeContext): any => {
  return {
    ...(input.BatchReferenceName != null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && { ParentReference: se_ObjectReference(input.ParentReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchDetachPolicy
 */
const se_BatchDetachPolicy = (input: BatchDetachPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.PolicyReference != null && { PolicyReference: se_ObjectReference(input.PolicyReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchDetachTypedLink
 */
const se_BatchDetachTypedLink = (input: BatchDetachTypedLink, context: __SerdeContext): any => {
  return {
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: se_TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchGetLinkAttributes
 */
const se_BatchGetLinkAttributes = (input: BatchGetLinkAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributeNames != null && { AttributeNames: se_AttributeNameList(input.AttributeNames, context) }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: se_TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchGetObjectAttributes
 */
const se_BatchGetObjectAttributes = (input: BatchGetObjectAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributeNames != null && { AttributeNames: se_AttributeNameList(input.AttributeNames, context) }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacet(input.SchemaFacet, context) }),
  };
};

/**
 * serializeAws_restJson1BatchGetObjectInformation
 */
const se_BatchGetObjectInformation = (input: BatchGetObjectInformation, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListAttachedIndices
 */
const se_BatchListAttachedIndices = (input: BatchListAttachedIndices, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TargetReference != null && { TargetReference: se_ObjectReference(input.TargetReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListIncomingTypedLinks
 */
const se_BatchListIncomingTypedLinks = (input: BatchListIncomingTypedLinks, context: __SerdeContext): any => {
  return {
    ...(input.FilterAttributeRanges != null && {
      FilterAttributeRanges: se_TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: se_TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListIndex
 */
const se_BatchListIndex = (input: BatchListIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexReference != null && { IndexReference: se_ObjectReference(input.IndexReference, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues != null && {
      RangesOnIndexedValues: se_ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchListObjectAttributes
 */
const se_BatchListObjectAttributes = (input: BatchListObjectAttributes, context: __SerdeContext): any => {
  return {
    ...(input.FacetFilter != null && { FacetFilter: se_SchemaFacet(input.FacetFilter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListObjectChildren
 */
const se_BatchListObjectChildren = (input: BatchListObjectChildren, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListObjectParentPaths
 */
const se_BatchListObjectParentPaths = (input: BatchListObjectParentPaths, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListObjectParents
 */
const se_BatchListObjectParents = (input: BatchListObjectParents, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListObjectPolicies
 */
const se_BatchListObjectPolicies = (input: BatchListObjectPolicies, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListOutgoingTypedLinks
 */
const se_BatchListOutgoingTypedLinks = (input: BatchListOutgoingTypedLinks, context: __SerdeContext): any => {
  return {
    ...(input.FilterAttributeRanges != null && {
      FilterAttributeRanges: se_TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: se_TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchListPolicyAttachments
 */
const se_BatchListPolicyAttachments = (input: BatchListPolicyAttachments, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyReference != null && { PolicyReference: se_ObjectReference(input.PolicyReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchLookupPolicy
 */
const se_BatchLookupPolicy = (input: BatchLookupPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchReadOperation
 */
const se_BatchReadOperation = (input: BatchReadOperation, context: __SerdeContext): any => {
  return {
    ...(input.GetLinkAttributes != null && {
      GetLinkAttributes: se_BatchGetLinkAttributes(input.GetLinkAttributes, context),
    }),
    ...(input.GetObjectAttributes != null && {
      GetObjectAttributes: se_BatchGetObjectAttributes(input.GetObjectAttributes, context),
    }),
    ...(input.GetObjectInformation != null && {
      GetObjectInformation: se_BatchGetObjectInformation(input.GetObjectInformation, context),
    }),
    ...(input.ListAttachedIndices != null && {
      ListAttachedIndices: se_BatchListAttachedIndices(input.ListAttachedIndices, context),
    }),
    ...(input.ListIncomingTypedLinks != null && {
      ListIncomingTypedLinks: se_BatchListIncomingTypedLinks(input.ListIncomingTypedLinks, context),
    }),
    ...(input.ListIndex != null && { ListIndex: se_BatchListIndex(input.ListIndex, context) }),
    ...(input.ListObjectAttributes != null && {
      ListObjectAttributes: se_BatchListObjectAttributes(input.ListObjectAttributes, context),
    }),
    ...(input.ListObjectChildren != null && {
      ListObjectChildren: se_BatchListObjectChildren(input.ListObjectChildren, context),
    }),
    ...(input.ListObjectParentPaths != null && {
      ListObjectParentPaths: se_BatchListObjectParentPaths(input.ListObjectParentPaths, context),
    }),
    ...(input.ListObjectParents != null && {
      ListObjectParents: se_BatchListObjectParents(input.ListObjectParents, context),
    }),
    ...(input.ListObjectPolicies != null && {
      ListObjectPolicies: se_BatchListObjectPolicies(input.ListObjectPolicies, context),
    }),
    ...(input.ListOutgoingTypedLinks != null && {
      ListOutgoingTypedLinks: se_BatchListOutgoingTypedLinks(input.ListOutgoingTypedLinks, context),
    }),
    ...(input.ListPolicyAttachments != null && {
      ListPolicyAttachments: se_BatchListPolicyAttachments(input.ListPolicyAttachments, context),
    }),
    ...(input.LookupPolicy != null && { LookupPolicy: se_BatchLookupPolicy(input.LookupPolicy, context) }),
  };
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

/**
 * serializeAws_restJson1BatchRemoveFacetFromObject
 */
const se_BatchRemoveFacetFromObject = (input: BatchRemoveFacetFromObject, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
    ...(input.SchemaFacet != null && { SchemaFacet: se_SchemaFacet(input.SchemaFacet, context) }),
  };
};

/**
 * serializeAws_restJson1BatchUpdateLinkAttributes
 */
const se_BatchUpdateLinkAttributes = (input: BatchUpdateLinkAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: se_LinkAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: se_TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchUpdateObjectAttributes
 */
const se_BatchUpdateObjectAttributes = (input: BatchUpdateObjectAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: se_ObjectAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.ObjectReference != null && { ObjectReference: se_ObjectReference(input.ObjectReference, context) }),
  };
};

/**
 * serializeAws_restJson1BatchWriteOperation
 */
const se_BatchWriteOperation = (input: BatchWriteOperation, context: __SerdeContext): any => {
  return {
    ...(input.AddFacetToObject != null && {
      AddFacetToObject: se_BatchAddFacetToObject(input.AddFacetToObject, context),
    }),
    ...(input.AttachObject != null && { AttachObject: se_BatchAttachObject(input.AttachObject, context) }),
    ...(input.AttachPolicy != null && { AttachPolicy: se_BatchAttachPolicy(input.AttachPolicy, context) }),
    ...(input.AttachToIndex != null && { AttachToIndex: se_BatchAttachToIndex(input.AttachToIndex, context) }),
    ...(input.AttachTypedLink != null && { AttachTypedLink: se_BatchAttachTypedLink(input.AttachTypedLink, context) }),
    ...(input.CreateIndex != null && { CreateIndex: se_BatchCreateIndex(input.CreateIndex, context) }),
    ...(input.CreateObject != null && { CreateObject: se_BatchCreateObject(input.CreateObject, context) }),
    ...(input.DeleteObject != null && { DeleteObject: se_BatchDeleteObject(input.DeleteObject, context) }),
    ...(input.DetachFromIndex != null && { DetachFromIndex: se_BatchDetachFromIndex(input.DetachFromIndex, context) }),
    ...(input.DetachObject != null && { DetachObject: se_BatchDetachObject(input.DetachObject, context) }),
    ...(input.DetachPolicy != null && { DetachPolicy: se_BatchDetachPolicy(input.DetachPolicy, context) }),
    ...(input.DetachTypedLink != null && { DetachTypedLink: se_BatchDetachTypedLink(input.DetachTypedLink, context) }),
    ...(input.RemoveFacetFromObject != null && {
      RemoveFacetFromObject: se_BatchRemoveFacetFromObject(input.RemoveFacetFromObject, context),
    }),
    ...(input.UpdateLinkAttributes != null && {
      UpdateLinkAttributes: se_BatchUpdateLinkAttributes(input.UpdateLinkAttributes, context),
    }),
    ...(input.UpdateObjectAttributes != null && {
      UpdateObjectAttributes: se_BatchUpdateObjectAttributes(input.UpdateObjectAttributes, context),
    }),
  };
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
  return {
    ...(input.AttributeDefinition != null && {
      AttributeDefinition: se_FacetAttributeDefinition(input.AttributeDefinition, context),
    }),
    ...(input.AttributeReference != null && {
      AttributeReference: se_FacetAttributeReference(input.AttributeReference, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequiredBehavior != null && { RequiredBehavior: input.RequiredBehavior }),
  };
};

/**
 * serializeAws_restJson1FacetAttributeDefinition
 */
const se_FacetAttributeDefinition = (input: FacetAttributeDefinition, context: __SerdeContext): any => {
  return {
    ...(input.DefaultValue != null && { DefaultValue: se_TypedAttributeValue(input.DefaultValue, context) }),
    ...(input.IsImmutable != null && { IsImmutable: input.IsImmutable }),
    ...(input.Rules != null && { Rules: se_RuleMap(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
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

/**
 * serializeAws_restJson1FacetAttributeReference
 */
const se_FacetAttributeReference = (input: FacetAttributeReference, context: __SerdeContext): any => {
  return {
    ...(input.TargetAttributeName != null && { TargetAttributeName: input.TargetAttributeName }),
    ...(input.TargetFacetName != null && { TargetFacetName: input.TargetFacetName }),
  };
};

/**
 * serializeAws_restJson1FacetAttributeUpdate
 */
const se_FacetAttributeUpdate = (input: FacetAttributeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Attribute != null && { Attribute: se_FacetAttribute(input.Attribute, context) }),
  };
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
  return {
    ...(input.AttributeActionType != null && { AttributeActionType: input.AttributeActionType }),
    ...(input.AttributeUpdateValue != null && {
      AttributeUpdateValue: se_TypedAttributeValue(input.AttributeUpdateValue, context),
    }),
  };
};

/**
 * serializeAws_restJson1LinkAttributeUpdate
 */
const se_LinkAttributeUpdate = (input: LinkAttributeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.AttributeAction != null && { AttributeAction: se_LinkAttributeAction(input.AttributeAction, context) }),
    ...(input.AttributeKey != null && { AttributeKey: se_AttributeKey(input.AttributeKey, context) }),
  };
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
  return {
    ...(input.ObjectAttributeActionType != null && { ObjectAttributeActionType: input.ObjectAttributeActionType }),
    ...(input.ObjectAttributeUpdateValue != null && {
      ObjectAttributeUpdateValue: se_TypedAttributeValue(input.ObjectAttributeUpdateValue, context),
    }),
  };
};

/**
 * serializeAws_restJson1ObjectAttributeRange
 */
const se_ObjectAttributeRange = (input: ObjectAttributeRange, context: __SerdeContext): any => {
  return {
    ...(input.AttributeKey != null && { AttributeKey: se_AttributeKey(input.AttributeKey, context) }),
    ...(input.Range != null && { Range: se_TypedAttributeValueRange(input.Range, context) }),
  };
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
  return {
    ...(input.ObjectAttributeAction != null && {
      ObjectAttributeAction: se_ObjectAttributeAction(input.ObjectAttributeAction, context),
    }),
    ...(input.ObjectAttributeKey != null && { ObjectAttributeKey: se_AttributeKey(input.ObjectAttributeKey, context) }),
  };
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

/**
 * serializeAws_restJson1ObjectReference
 */
const se_ObjectReference = (input: ObjectReference, context: __SerdeContext): any => {
  return {
    ...(input.Selector != null && { Selector: input.Selector }),
  };
};

/**
 * serializeAws_restJson1Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: se_RuleParameterMap(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1RuleMap
 */
const se_RuleMap = (input: Record<string, Rule>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Rule(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RuleParameterMap
 */
const se_RuleParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SchemaFacet
 */
const se_SchemaFacet = (input: SchemaFacet, context: __SerdeContext): any => {
  return {
    ...(input.FacetName != null && { FacetName: input.FacetName }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  };
};

/**
 * serializeAws_restJson1SchemaFacetList
 */
const se_SchemaFacetList = (input: SchemaFacet[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SchemaFacet(entry, context);
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

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
  return {
    ...(input.EndMode != null && { EndMode: input.EndMode }),
    ...(input.EndValue != null && { EndValue: se_TypedAttributeValue(input.EndValue, context) }),
    ...(input.StartMode != null && { StartMode: input.StartMode }),
    ...(input.StartValue != null && { StartValue: se_TypedAttributeValue(input.StartValue, context) }),
  };
};

/**
 * serializeAws_restJson1TypedLinkAttributeDefinition
 */
const se_TypedLinkAttributeDefinition = (input: TypedLinkAttributeDefinition, context: __SerdeContext): any => {
  return {
    ...(input.DefaultValue != null && { DefaultValue: se_TypedAttributeValue(input.DefaultValue, context) }),
    ...(input.IsImmutable != null && { IsImmutable: input.IsImmutable }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequiredBehavior != null && { RequiredBehavior: input.RequiredBehavior }),
    ...(input.Rules != null && { Rules: se_RuleMap(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
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
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Range != null && { Range: se_TypedAttributeValueRange(input.Range, context) }),
  };
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
  return {
    ...(input.Attributes != null && { Attributes: se_TypedLinkAttributeDefinitionList(input.Attributes, context) }),
    ...(input.IdentityAttributeOrder != null && {
      IdentityAttributeOrder: se_AttributeNameList(input.IdentityAttributeOrder, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1TypedLinkFacetAttributeUpdate
 */
const se_TypedLinkFacetAttributeUpdate = (input: TypedLinkFacetAttributeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Attribute != null && { Attribute: se_TypedLinkAttributeDefinition(input.Attribute, context) }),
  };
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

/**
 * serializeAws_restJson1TypedLinkSchemaAndFacetName
 */
const se_TypedLinkSchemaAndFacetName = (input: TypedLinkSchemaAndFacetName, context: __SerdeContext): any => {
  return {
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
    ...(input.TypedLinkName != null && { TypedLinkName: input.TypedLinkName }),
  };
};

/**
 * serializeAws_restJson1TypedLinkSpecifier
 */
const se_TypedLinkSpecifier = (input: TypedLinkSpecifier, context: __SerdeContext): any => {
  return {
    ...(input.IdentityAttributeValues != null && {
      IdentityAttributeValues: se_AttributeNameAndValueList(input.IdentityAttributeValues, context),
    }),
    ...(input.SourceObjectReference != null && {
      SourceObjectReference: se_ObjectReference(input.SourceObjectReference, context),
    }),
    ...(input.TargetObjectReference != null && {
      TargetObjectReference: se_ObjectReference(input.TargetObjectReference, context),
    }),
    ...(input.TypedLinkFacet != null && {
      TypedLinkFacet: se_TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
    }),
  };
};

/**
 * deserializeAws_restJson1Arns
 */
const de_Arns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AttributeKey
 */
const de_AttributeKey = (output: any, context: __SerdeContext): AttributeKey => {
  return {
    FacetName: __expectString(output.FacetName),
    Name: __expectString(output.Name),
    SchemaArn: __expectString(output.SchemaArn),
  } as any;
};

/**
 * deserializeAws_restJson1AttributeKeyAndValue
 */
const de_AttributeKeyAndValue = (output: any, context: __SerdeContext): AttributeKeyAndValue => {
  return {
    Key: output.Key != null ? de_AttributeKey(output.Key, context) : undefined,
    Value: output.Value != null ? de_TypedAttributeValue(__expectUnion(output.Value), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AttributeKeyAndValueList
 */
const de_AttributeKeyAndValueList = (output: any, context: __SerdeContext): AttributeKeyAndValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeKeyAndValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AttributeNameAndValue
 */
const de_AttributeNameAndValue = (output: any, context: __SerdeContext): AttributeNameAndValue => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Value: output.Value != null ? de_TypedAttributeValue(__expectUnion(output.Value), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AttributeNameAndValueList
 */
const de_AttributeNameAndValueList = (output: any, context: __SerdeContext): AttributeNameAndValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeNameAndValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AttributeNameList
 */
const de_AttributeNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchAddFacetToObjectResponse
 */
const de_BatchAddFacetToObjectResponse = (output: any, context: __SerdeContext): BatchAddFacetToObjectResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchAttachObjectResponse
 */
const de_BatchAttachObjectResponse = (output: any, context: __SerdeContext): BatchAttachObjectResponse => {
  return {
    attachedObjectIdentifier: __expectString(output.attachedObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchAttachPolicyResponse
 */
const de_BatchAttachPolicyResponse = (output: any, context: __SerdeContext): BatchAttachPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchAttachToIndexResponse
 */
const de_BatchAttachToIndexResponse = (output: any, context: __SerdeContext): BatchAttachToIndexResponse => {
  return {
    AttachedObjectIdentifier: __expectString(output.AttachedObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchAttachTypedLinkResponse
 */
const de_BatchAttachTypedLinkResponse = (output: any, context: __SerdeContext): BatchAttachTypedLinkResponse => {
  return {
    TypedLinkSpecifier:
      output.TypedLinkSpecifier != null ? de_TypedLinkSpecifier(output.TypedLinkSpecifier, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchCreateIndexResponse
 */
const de_BatchCreateIndexResponse = (output: any, context: __SerdeContext): BatchCreateIndexResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchCreateObjectResponse
 */
const de_BatchCreateObjectResponse = (output: any, context: __SerdeContext): BatchCreateObjectResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDeleteObjectResponse
 */
const de_BatchDeleteObjectResponse = (output: any, context: __SerdeContext): BatchDeleteObjectResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchDetachFromIndexResponse
 */
const de_BatchDetachFromIndexResponse = (output: any, context: __SerdeContext): BatchDetachFromIndexResponse => {
  return {
    DetachedObjectIdentifier: __expectString(output.DetachedObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDetachObjectResponse
 */
const de_BatchDetachObjectResponse = (output: any, context: __SerdeContext): BatchDetachObjectResponse => {
  return {
    detachedObjectIdentifier: __expectString(output.detachedObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDetachPolicyResponse
 */
const de_BatchDetachPolicyResponse = (output: any, context: __SerdeContext): BatchDetachPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchDetachTypedLinkResponse
 */
const de_BatchDetachTypedLinkResponse = (output: any, context: __SerdeContext): BatchDetachTypedLinkResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchGetLinkAttributesResponse
 */
const de_BatchGetLinkAttributesResponse = (output: any, context: __SerdeContext): BatchGetLinkAttributesResponse => {
  return {
    Attributes: output.Attributes != null ? de_AttributeKeyAndValueList(output.Attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetObjectAttributesResponse
 */
const de_BatchGetObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectAttributesResponse => {
  return {
    Attributes: output.Attributes != null ? de_AttributeKeyAndValueList(output.Attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetObjectInformationResponse
 */
const de_BatchGetObjectInformationResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectInformationResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
    SchemaFacets: output.SchemaFacets != null ? de_SchemaFacetList(output.SchemaFacets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchListAttachedIndicesResponse
 */
const de_BatchListAttachedIndicesResponse = (
  output: any,
  context: __SerdeContext
): BatchListAttachedIndicesResponse => {
  return {
    IndexAttachments:
      output.IndexAttachments != null ? de_IndexAttachmentList(output.IndexAttachments, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1BatchListIncomingTypedLinksResponse
 */
const de_BatchListIncomingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListIncomingTypedLinksResponse => {
  return {
    LinkSpecifiers:
      output.LinkSpecifiers != null ? de_TypedLinkSpecifierList(output.LinkSpecifiers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1BatchListIndexResponse
 */
const de_BatchListIndexResponse = (output: any, context: __SerdeContext): BatchListIndexResponse => {
  return {
    IndexAttachments:
      output.IndexAttachments != null ? de_IndexAttachmentList(output.IndexAttachments, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1BatchListObjectAttributesResponse
 */
const de_BatchListObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectAttributesResponse => {
  return {
    Attributes: output.Attributes != null ? de_AttributeKeyAndValueList(output.Attributes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1BatchListObjectChildrenResponse
 */
const de_BatchListObjectChildrenResponse = (output: any, context: __SerdeContext): BatchListObjectChildrenResponse => {
  return {
    Children: output.Children != null ? de_LinkNameToObjectIdentifierMap(output.Children, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1BatchListObjectParentPathsResponse
 */
const de_BatchListObjectParentPathsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentPathsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PathToObjectIdentifiersList:
      output.PathToObjectIdentifiersList != null
        ? de_PathToObjectIdentifiersList(output.PathToObjectIdentifiersList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchListObjectParentsResponse
 */
const de_BatchListObjectParentsResponse = (output: any, context: __SerdeContext): BatchListObjectParentsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParentLinks:
      output.ParentLinks != null ? de_ObjectIdentifierAndLinkNameList(output.ParentLinks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchListObjectPoliciesResponse
 */
const de_BatchListObjectPoliciesResponse = (output: any, context: __SerdeContext): BatchListObjectPoliciesResponse => {
  return {
    AttachedPolicyIds:
      output.AttachedPolicyIds != null ? de_ObjectIdentifierList(output.AttachedPolicyIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1BatchListOutgoingTypedLinksResponse
 */
const de_BatchListOutgoingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListOutgoingTypedLinksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TypedLinkSpecifiers:
      output.TypedLinkSpecifiers != null ? de_TypedLinkSpecifierList(output.TypedLinkSpecifiers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchListPolicyAttachmentsResponse
 */
const de_BatchListPolicyAttachmentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListPolicyAttachmentsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ObjectIdentifiers:
      output.ObjectIdentifiers != null ? de_ObjectIdentifierList(output.ObjectIdentifiers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchLookupPolicyResponse
 */
const de_BatchLookupPolicyResponse = (output: any, context: __SerdeContext): BatchLookupPolicyResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PolicyToPathList:
      output.PolicyToPathList != null ? de_PolicyToPathList(output.PolicyToPathList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchReadException
 */
const de_BatchReadException = (output: any, context: __SerdeContext): BatchReadException => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1BatchReadOperationResponse
 */
const de_BatchReadOperationResponse = (output: any, context: __SerdeContext): BatchReadOperationResponse => {
  return {
    ExceptionResponse:
      output.ExceptionResponse != null ? de_BatchReadException(output.ExceptionResponse, context) : undefined,
    SuccessfulResponse:
      output.SuccessfulResponse != null
        ? de_BatchReadSuccessfulResponse(output.SuccessfulResponse, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchReadOperationResponseList
 */
const de_BatchReadOperationResponseList = (output: any, context: __SerdeContext): BatchReadOperationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchReadOperationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchReadSuccessfulResponse
 */
const de_BatchReadSuccessfulResponse = (output: any, context: __SerdeContext): BatchReadSuccessfulResponse => {
  return {
    GetLinkAttributes:
      output.GetLinkAttributes != null
        ? de_BatchGetLinkAttributesResponse(output.GetLinkAttributes, context)
        : undefined,
    GetObjectAttributes:
      output.GetObjectAttributes != null
        ? de_BatchGetObjectAttributesResponse(output.GetObjectAttributes, context)
        : undefined,
    GetObjectInformation:
      output.GetObjectInformation != null
        ? de_BatchGetObjectInformationResponse(output.GetObjectInformation, context)
        : undefined,
    ListAttachedIndices:
      output.ListAttachedIndices != null
        ? de_BatchListAttachedIndicesResponse(output.ListAttachedIndices, context)
        : undefined,
    ListIncomingTypedLinks:
      output.ListIncomingTypedLinks != null
        ? de_BatchListIncomingTypedLinksResponse(output.ListIncomingTypedLinks, context)
        : undefined,
    ListIndex: output.ListIndex != null ? de_BatchListIndexResponse(output.ListIndex, context) : undefined,
    ListObjectAttributes:
      output.ListObjectAttributes != null
        ? de_BatchListObjectAttributesResponse(output.ListObjectAttributes, context)
        : undefined,
    ListObjectChildren:
      output.ListObjectChildren != null
        ? de_BatchListObjectChildrenResponse(output.ListObjectChildren, context)
        : undefined,
    ListObjectParentPaths:
      output.ListObjectParentPaths != null
        ? de_BatchListObjectParentPathsResponse(output.ListObjectParentPaths, context)
        : undefined,
    ListObjectParents:
      output.ListObjectParents != null
        ? de_BatchListObjectParentsResponse(output.ListObjectParents, context)
        : undefined,
    ListObjectPolicies:
      output.ListObjectPolicies != null
        ? de_BatchListObjectPoliciesResponse(output.ListObjectPolicies, context)
        : undefined,
    ListOutgoingTypedLinks:
      output.ListOutgoingTypedLinks != null
        ? de_BatchListOutgoingTypedLinksResponse(output.ListOutgoingTypedLinks, context)
        : undefined,
    ListPolicyAttachments:
      output.ListPolicyAttachments != null
        ? de_BatchListPolicyAttachmentsResponse(output.ListPolicyAttachments, context)
        : undefined,
    LookupPolicy: output.LookupPolicy != null ? de_BatchLookupPolicyResponse(output.LookupPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchRemoveFacetFromObjectResponse
 */
const de_BatchRemoveFacetFromObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchRemoveFacetFromObjectResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchUpdateLinkAttributesResponse
 */
const de_BatchUpdateLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateLinkAttributesResponse => {
  return {} as any;
};

/**
 * deserializeAws_restJson1BatchUpdateObjectAttributesResponse
 */
const de_BatchUpdateObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateObjectAttributesResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1BatchWriteOperationResponse
 */
const de_BatchWriteOperationResponse = (output: any, context: __SerdeContext): BatchWriteOperationResponse => {
  return {
    AddFacetToObject:
      output.AddFacetToObject != null ? de_BatchAddFacetToObjectResponse(output.AddFacetToObject, context) : undefined,
    AttachObject: output.AttachObject != null ? de_BatchAttachObjectResponse(output.AttachObject, context) : undefined,
    AttachPolicy: output.AttachPolicy != null ? de_BatchAttachPolicyResponse(output.AttachPolicy, context) : undefined,
    AttachToIndex:
      output.AttachToIndex != null ? de_BatchAttachToIndexResponse(output.AttachToIndex, context) : undefined,
    AttachTypedLink:
      output.AttachTypedLink != null ? de_BatchAttachTypedLinkResponse(output.AttachTypedLink, context) : undefined,
    CreateIndex: output.CreateIndex != null ? de_BatchCreateIndexResponse(output.CreateIndex, context) : undefined,
    CreateObject: output.CreateObject != null ? de_BatchCreateObjectResponse(output.CreateObject, context) : undefined,
    DeleteObject: output.DeleteObject != null ? de_BatchDeleteObjectResponse(output.DeleteObject, context) : undefined,
    DetachFromIndex:
      output.DetachFromIndex != null ? de_BatchDetachFromIndexResponse(output.DetachFromIndex, context) : undefined,
    DetachObject: output.DetachObject != null ? de_BatchDetachObjectResponse(output.DetachObject, context) : undefined,
    DetachPolicy: output.DetachPolicy != null ? de_BatchDetachPolicyResponse(output.DetachPolicy, context) : undefined,
    DetachTypedLink:
      output.DetachTypedLink != null ? de_BatchDetachTypedLinkResponse(output.DetachTypedLink, context) : undefined,
    RemoveFacetFromObject:
      output.RemoveFacetFromObject != null
        ? de_BatchRemoveFacetFromObjectResponse(output.RemoveFacetFromObject, context)
        : undefined,
    UpdateLinkAttributes:
      output.UpdateLinkAttributes != null
        ? de_BatchUpdateLinkAttributesResponse(output.UpdateLinkAttributes, context)
        : undefined,
    UpdateObjectAttributes:
      output.UpdateObjectAttributes != null
        ? de_BatchUpdateObjectAttributesResponse(output.UpdateObjectAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchWriteOperationResponseList
 */
const de_BatchWriteOperationResponseList = (output: any, context: __SerdeContext): BatchWriteOperationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchWriteOperationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Directory
 */
const de_Directory = (output: any, context: __SerdeContext): Directory => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    DirectoryArn: __expectString(output.DirectoryArn),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1DirectoryList
 */
const de_DirectoryList = (output: any, context: __SerdeContext): Directory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Directory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Facet
 */
const de_Facet = (output: any, context: __SerdeContext): Facet => {
  return {
    FacetStyle: __expectString(output.FacetStyle),
    Name: __expectString(output.Name),
    ObjectType: __expectString(output.ObjectType),
  } as any;
};

/**
 * deserializeAws_restJson1FacetAttribute
 */
const de_FacetAttribute = (output: any, context: __SerdeContext): FacetAttribute => {
  return {
    AttributeDefinition:
      output.AttributeDefinition != null ? de_FacetAttributeDefinition(output.AttributeDefinition, context) : undefined,
    AttributeReference:
      output.AttributeReference != null ? de_FacetAttributeReference(output.AttributeReference, context) : undefined,
    Name: __expectString(output.Name),
    RequiredBehavior: __expectString(output.RequiredBehavior),
  } as any;
};

/**
 * deserializeAws_restJson1FacetAttributeDefinition
 */
const de_FacetAttributeDefinition = (output: any, context: __SerdeContext): FacetAttributeDefinition => {
  return {
    DefaultValue:
      output.DefaultValue != null ? de_TypedAttributeValue(__expectUnion(output.DefaultValue), context) : undefined,
    IsImmutable: __expectBoolean(output.IsImmutable),
    Rules: output.Rules != null ? de_RuleMap(output.Rules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1FacetAttributeList
 */
const de_FacetAttributeList = (output: any, context: __SerdeContext): FacetAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FacetAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FacetAttributeReference
 */
const de_FacetAttributeReference = (output: any, context: __SerdeContext): FacetAttributeReference => {
  return {
    TargetAttributeName: __expectString(output.TargetAttributeName),
    TargetFacetName: __expectString(output.TargetFacetName),
  } as any;
};

/**
 * deserializeAws_restJson1FacetNameList
 */
const de_FacetNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IndexAttachment
 */
const de_IndexAttachment = (output: any, context: __SerdeContext): IndexAttachment => {
  return {
    IndexedAttributes:
      output.IndexedAttributes != null ? de_AttributeKeyAndValueList(output.IndexedAttributes, context) : undefined,
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1IndexAttachmentList
 */
const de_IndexAttachmentList = (output: any, context: __SerdeContext): IndexAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IndexAttachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinkNameToObjectIdentifierMap
 */
const de_LinkNameToObjectIdentifierMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ObjectIdentifierAndLinkNameList
 */
const de_ObjectIdentifierAndLinkNameList = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ObjectIdentifierAndLinkNameTuple(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple
 */
const de_ObjectIdentifierAndLinkNameTuple = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple => {
  return {
    LinkName: __expectString(output.LinkName),
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1ObjectIdentifierList
 */
const de_ObjectIdentifierList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ObjectIdentifierToLinkNameMap
 */
const de_ObjectIdentifierToLinkNameMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ObjectReference
 */
const de_ObjectReference = (output: any, context: __SerdeContext): ObjectReference => {
  return {
    Selector: __expectString(output.Selector),
  } as any;
};

/**
 * deserializeAws_restJson1PathToObjectIdentifiers
 */
const de_PathToObjectIdentifiers = (output: any, context: __SerdeContext): PathToObjectIdentifiers => {
  return {
    ObjectIdentifiers:
      output.ObjectIdentifiers != null ? de_ObjectIdentifierList(output.ObjectIdentifiers, context) : undefined,
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_restJson1PathToObjectIdentifiersList
 */
const de_PathToObjectIdentifiersList = (output: any, context: __SerdeContext): PathToObjectIdentifiers[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PathToObjectIdentifiers(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyAttachment
 */
const de_PolicyAttachment = (output: any, context: __SerdeContext): PolicyAttachment => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
    PolicyId: __expectString(output.PolicyId),
    PolicyType: __expectString(output.PolicyType),
  } as any;
};

/**
 * deserializeAws_restJson1PolicyAttachmentList
 */
const de_PolicyAttachmentList = (output: any, context: __SerdeContext): PolicyAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyAttachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyToPath
 */
const de_PolicyToPath = (output: any, context: __SerdeContext): PolicyToPath => {
  return {
    Path: __expectString(output.Path),
    Policies: output.Policies != null ? de_PolicyAttachmentList(output.Policies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PolicyToPathList
 */
const de_PolicyToPathList = (output: any, context: __SerdeContext): PolicyToPath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyToPath(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Parameters: output.Parameters != null ? de_RuleParameterMap(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1RuleMap
 */
const de_RuleMap = (output: any, context: __SerdeContext): Record<string, Rule> => {
  return Object.entries(output).reduce((acc: Record<string, Rule>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Rule(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1RuleParameterMap
 */
const de_RuleParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SchemaFacet
 */
const de_SchemaFacet = (output: any, context: __SerdeContext): SchemaFacet => {
  return {
    FacetName: __expectString(output.FacetName),
    SchemaArn: __expectString(output.SchemaArn),
  } as any;
};

/**
 * deserializeAws_restJson1SchemaFacetList
 */
const de_SchemaFacetList = (output: any, context: __SerdeContext): SchemaFacet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaFacet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

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
  return {
    DefaultValue:
      output.DefaultValue != null ? de_TypedAttributeValue(__expectUnion(output.DefaultValue), context) : undefined,
    IsImmutable: __expectBoolean(output.IsImmutable),
    Name: __expectString(output.Name),
    RequiredBehavior: __expectString(output.RequiredBehavior),
    Rules: output.Rules != null ? de_RuleMap(output.Rules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1TypedLinkAttributeDefinitionList
 */
const de_TypedLinkAttributeDefinitionList = (output: any, context: __SerdeContext): TypedLinkAttributeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TypedLinkAttributeDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TypedLinkNameList
 */
const de_TypedLinkNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TypedLinkSchemaAndFacetName
 */
const de_TypedLinkSchemaAndFacetName = (output: any, context: __SerdeContext): TypedLinkSchemaAndFacetName => {
  return {
    SchemaArn: __expectString(output.SchemaArn),
    TypedLinkName: __expectString(output.TypedLinkName),
  } as any;
};

/**
 * deserializeAws_restJson1TypedLinkSpecifier
 */
const de_TypedLinkSpecifier = (output: any, context: __SerdeContext): TypedLinkSpecifier => {
  return {
    IdentityAttributeValues:
      output.IdentityAttributeValues != null
        ? de_AttributeNameAndValueList(output.IdentityAttributeValues, context)
        : undefined,
    SourceObjectReference:
      output.SourceObjectReference != null ? de_ObjectReference(output.SourceObjectReference, context) : undefined,
    TargetObjectReference:
      output.TargetObjectReference != null ? de_ObjectReference(output.TargetObjectReference, context) : undefined,
    TypedLinkFacet:
      output.TypedLinkFacet != null ? de_TypedLinkSchemaAndFacetName(output.TypedLinkFacet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TypedLinkSpecifierList
 */
const de_TypedLinkSpecifierList = (output: any, context: __SerdeContext): TypedLinkSpecifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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
