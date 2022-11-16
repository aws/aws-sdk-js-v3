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

export const serializeAws_restJson1AddFacetToObjectCommand = async (
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
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.SchemaFacet != null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
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

export const serializeAws_restJson1ApplySchemaCommand = async (
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

export const serializeAws_restJson1AttachObjectCommand = async (
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
    ...(input.ChildReference != null && {
      ChildReference: serializeAws_restJson1ObjectReference(input.ChildReference, context),
    }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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

export const serializeAws_restJson1AttachPolicyCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.PolicyReference != null && {
      PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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

export const serializeAws_restJson1AttachToIndexCommand = async (
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
    ...(input.IndexReference != null && {
      IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
    }),
    ...(input.TargetReference != null && {
      TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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

export const serializeAws_restJson1AttachTypedLinkCommand = async (
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
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1AttributeNameAndValueList(input.Attributes, context),
    }),
    ...(input.SourceObjectReference != null && {
      SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
    }),
    ...(input.TargetObjectReference != null && {
      TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
    }),
    ...(input.TypedLinkFacet != null && {
      TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
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

export const serializeAws_restJson1BatchReadCommand = async (
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
    ...(input.Operations != null && {
      Operations: serializeAws_restJson1BatchReadOperationList(input.Operations, context),
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

export const serializeAws_restJson1BatchWriteCommand = async (
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
    ...(input.Operations != null && {
      Operations: serializeAws_restJson1BatchWriteOperationList(input.Operations, context),
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

export const serializeAws_restJson1CreateDirectoryCommand = async (
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

export const serializeAws_restJson1CreateFacetCommand = async (
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
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1FacetAttributeList(input.Attributes, context),
    }),
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

export const serializeAws_restJson1CreateIndexCommand = async (
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
      OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(input.OrderedIndexedAttributeList, context),
    }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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

export const serializeAws_restJson1CreateObjectCommand = async (
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
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
    }),
    ...(input.SchemaFacets != null && {
      SchemaFacets: serializeAws_restJson1SchemaFacetList(input.SchemaFacets, context),
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

export const serializeAws_restJson1CreateSchemaCommand = async (
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

export const serializeAws_restJson1CreateTypedLinkFacetCommand = async (
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
    ...(input.Facet != null && { Facet: serializeAws_restJson1TypedLinkFacet(input.Facet, context) }),
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

export const serializeAws_restJson1DeleteDirectoryCommand = async (
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

export const serializeAws_restJson1DeleteFacetCommand = async (
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

export const serializeAws_restJson1DeleteObjectCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1DeleteSchemaCommand = async (
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

export const serializeAws_restJson1DeleteTypedLinkFacetCommand = async (
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

export const serializeAws_restJson1DetachFromIndexCommand = async (
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
    ...(input.IndexReference != null && {
      IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
    }),
    ...(input.TargetReference != null && {
      TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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

export const serializeAws_restJson1DetachObjectCommand = async (
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
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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

export const serializeAws_restJson1DetachPolicyCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.PolicyReference != null && {
      PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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

export const serializeAws_restJson1DetachTypedLinkCommand = async (
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
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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

export const serializeAws_restJson1DisableDirectoryCommand = async (
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

export const serializeAws_restJson1EnableDirectoryCommand = async (
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

export const serializeAws_restJson1GetAppliedSchemaVersionCommand = async (
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

export const serializeAws_restJson1GetDirectoryCommand = async (
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

export const serializeAws_restJson1GetFacetCommand = async (
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

export const serializeAws_restJson1GetLinkAttributesCommand = async (
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
    ...(input.AttributeNames != null && {
      AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
    }),
    ...(input.ConsistencyLevel != null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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

export const serializeAws_restJson1GetObjectAttributesCommand = async (
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
    ...(input.AttributeNames != null && {
      AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
    }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.SchemaFacet != null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
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

export const serializeAws_restJson1GetObjectInformationCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1GetSchemaAsJsonCommand = async (
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

export const serializeAws_restJson1GetTypedLinkFacetInformationCommand = async (
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

export const serializeAws_restJson1ListAppliedSchemaArnsCommand = async (
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

export const serializeAws_restJson1ListAttachedIndicesCommand = async (
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
    ...(input.TargetReference != null && {
      TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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

export const serializeAws_restJson1ListDevelopmentSchemaArnsCommand = async (
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

export const serializeAws_restJson1ListDirectoriesCommand = async (
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

export const serializeAws_restJson1ListFacetAttributesCommand = async (
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

export const serializeAws_restJson1ListFacetNamesCommand = async (
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

export const serializeAws_restJson1ListIncomingTypedLinksCommand = async (
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
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListIndexCommand = async (
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
    ...(input.IndexReference != null && {
      IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues != null && {
      RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
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

export const serializeAws_restJson1ListManagedSchemaArnsCommand = async (
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

export const serializeAws_restJson1ListObjectAttributesCommand = async (
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
    ...(input.FacetFilter != null && { FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListObjectChildrenCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListObjectParentPathsCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListObjectParentsCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListObjectPoliciesCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListOutgoingTypedLinksCommand = async (
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
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1ListPolicyAttachmentsCommand = async (
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
    ...(input.PolicyReference != null && {
      PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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

export const serializeAws_restJson1ListPublishedSchemaArnsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTypedLinkFacetAttributesCommand = async (
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

export const serializeAws_restJson1ListTypedLinkFacetNamesCommand = async (
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

export const serializeAws_restJson1LookupPolicyCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1PublishSchemaCommand = async (
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

export const serializeAws_restJson1PutSchemaFromJsonCommand = async (
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

export const serializeAws_restJson1RemoveFacetFromObjectCommand = async (
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
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.SchemaFacet != null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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

export const serializeAws_restJson1UpdateFacetCommand = async (
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
      AttributeUpdates: serializeAws_restJson1FacetAttributeUpdateList(input.AttributeUpdates, context),
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

export const serializeAws_restJson1UpdateLinkAttributesCommand = async (
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
      AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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

export const serializeAws_restJson1UpdateObjectAttributesCommand = async (
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
      AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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

export const serializeAws_restJson1UpdateSchemaCommand = async (
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

export const serializeAws_restJson1UpdateTypedLinkFacetCommand = async (
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
      AttributeUpdates: serializeAws_restJson1TypedLinkFacetAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.IdentityAttributeOrder != null && {
      IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(input.IdentityAttributeOrder, context),
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

export const serializeAws_restJson1UpgradeAppliedSchemaCommand = async (
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

export const serializeAws_restJson1UpgradePublishedSchemaCommand = async (
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

export const deserializeAws_restJson1AddFacetToObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFacetToObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AddFacetToObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ApplySchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ApplySchemaCommandError(output, context);
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

const deserializeAws_restJson1ApplySchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      throw await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AttachObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachObjectCommandError(output, context);
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

const deserializeAws_restJson1AttachObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AttachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AttachPolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      throw await deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AttachToIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachToIndexCommandError(output, context);
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

const deserializeAws_restJson1AttachToIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "IndexedAttributeMissingException":
    case "com.amazonaws.clouddirectory#IndexedAttributeMissingException":
      throw await deserializeAws_restJson1IndexedAttributeMissingExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context);
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      throw await deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AttachTypedLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachTypedLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TypedLinkSpecifier != null) {
    contents.TypedLinkSpecifier = deserializeAws_restJson1TypedLinkSpecifier(data.TypedLinkSpecifier, context);
  }
  return contents;
};

const deserializeAws_restJson1AttachTypedLinkCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchReadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchReadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Responses != null) {
    contents.Responses = deserializeAws_restJson1BatchReadOperationResponseList(data.Responses, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchReadCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchWriteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchWriteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Responses != null) {
    contents.Responses = deserializeAws_restJson1BatchWriteOperationResponseList(data.Responses, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchWriteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BatchWriteException":
    case "com.amazonaws.clouddirectory#BatchWriteException":
      throw await deserializeAws_restJson1BatchWriteExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDirectoryCommandError(output, context);
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

const deserializeAws_restJson1CreateDirectoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryAlreadyExistsException":
    case "com.amazonaws.clouddirectory#DirectoryAlreadyExistsException":
      throw await deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      throw await deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIndexCommandError(output, context);
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

const deserializeAws_restJson1CreateIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      throw await deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateObjectCommandError(output, context);
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

const deserializeAws_restJson1CreateObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      throw await deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSchemaCommandError(output, context);
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

const deserializeAws_restJson1CreateSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      throw await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTypedLinkFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateTypedLinkFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      throw await deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDirectoryCommandError(output, context);
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

const deserializeAws_restJson1DeleteDirectoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      throw await deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context);
    case "DirectoryNotDisabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotDisabledException":
      throw await deserializeAws_restJson1DirectoryNotDisabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetInUseException":
    case "com.amazonaws.clouddirectory#FacetInUseException":
      throw await deserializeAws_restJson1FacetInUseExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ObjectNotDetachedException":
    case "com.amazonaws.clouddirectory#ObjectNotDetachedException":
      throw await deserializeAws_restJson1ObjectNotDetachedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSchemaCommandError(output, context);
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

const deserializeAws_restJson1DeleteSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "StillContainsLinksException":
    case "com.amazonaws.clouddirectory#StillContainsLinksException":
      throw await deserializeAws_restJson1StillContainsLinksExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTypedLinkFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTypedLinkFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DetachFromIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachFromIndexCommandError(output, context);
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

const deserializeAws_restJson1DetachFromIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      throw await deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context);
    case "ObjectAlreadyDetachedException":
    case "com.amazonaws.clouddirectory#ObjectAlreadyDetachedException":
      throw await deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DetachObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachObjectCommandError(output, context);
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

const deserializeAws_restJson1DetachObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      throw await deserializeAws_restJson1NotNodeExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DetachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DetachPolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      throw await deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DetachTypedLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachTypedLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DetachTypedLinkCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisableDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableDirectoryCommandError(output, context);
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

const deserializeAws_restJson1DisableDirectoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      throw await deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EnableDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableDirectoryCommandError(output, context);
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

const deserializeAws_restJson1EnableDirectoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      throw await deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAppliedSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppliedSchemaVersionCommandError(output, context);
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

const deserializeAws_restJson1GetAppliedSchemaVersionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDirectoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Directory != null) {
    contents.Directory = deserializeAws_restJson1Directory(data.Directory, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDirectoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Facet != null) {
    contents.Facet = deserializeAws_restJson1Facet(data.Facet, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLinkAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLinkAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLinkAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetObjectAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetObjectAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetObjectInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetObjectInformationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ObjectIdentifier != null) {
    contents.ObjectIdentifier = __expectString(data.ObjectIdentifier);
  }
  if (data.SchemaFacets != null) {
    contents.SchemaFacets = deserializeAws_restJson1SchemaFacetList(data.SchemaFacets, context);
  }
  return contents;
};

const deserializeAws_restJson1GetObjectInformationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSchemaAsJsonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaAsJsonCommandError(output, context);
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

const deserializeAws_restJson1GetSchemaAsJsonCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTypedLinkFacetInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTypedLinkFacetInformationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityAttributeOrder != null) {
    contents.IdentityAttributeOrder = deserializeAws_restJson1AttributeNameList(data.IdentityAttributeOrder, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTypedLinkFacetInformationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppliedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppliedSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return contents;
};

const deserializeAws_restJson1ListAppliedSchemaArnsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAttachedIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttachedIndicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IndexAttachments != null) {
    contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(data.IndexAttachments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAttachedIndicesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDevelopmentSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return contents;
};

const deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDirectoriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Directories != null) {
    contents.Directories = deserializeAws_restJson1DirectoryList(data.Directories, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDirectoriesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFacetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFacetAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1FacetAttributeList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFacetAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFacetNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFacetNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FacetNames != null) {
    contents.FacetNames = deserializeAws_restJson1FacetNameList(data.FacetNames, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFacetNamesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListIncomingTypedLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIncomingTypedLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkSpecifiers != null) {
    contents.LinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(data.LinkSpecifiers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIncomingTypedLinksCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IndexAttachments != null) {
    contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(data.IndexAttachments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      throw await deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListManagedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListManagedSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return contents;
};

const deserializeAws_restJson1ListManagedSchemaArnsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListObjectAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListObjectChildrenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectChildrenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Children != null) {
    contents.Children = deserializeAws_restJson1LinkNameToObjectIdentifierMap(data.Children, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListObjectChildrenCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      throw await deserializeAws_restJson1NotNodeExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListObjectParentPathsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectParentPathsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PathToObjectIdentifiersList != null) {
    contents.PathToObjectIdentifiersList = deserializeAws_restJson1PathToObjectIdentifiersList(
      data.PathToObjectIdentifiersList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListObjectParentPathsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListObjectParentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectParentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ParentLinks != null) {
    contents.ParentLinks = deserializeAws_restJson1ObjectIdentifierAndLinkNameList(data.ParentLinks, context);
  }
  if (data.Parents != null) {
    contents.Parents = deserializeAws_restJson1ObjectIdentifierToLinkNameMap(data.Parents, context);
  }
  return contents;
};

const deserializeAws_restJson1ListObjectParentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "CannotListParentOfRootException":
    case "com.amazonaws.clouddirectory#CannotListParentOfRootException":
      throw await deserializeAws_restJson1CannotListParentOfRootExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListObjectPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AttachedPolicyIds != null) {
    contents.AttachedPolicyIds = deserializeAws_restJson1ObjectIdentifierList(data.AttachedPolicyIds, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListObjectPoliciesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListOutgoingTypedLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOutgoingTypedLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TypedLinkSpecifiers != null) {
    contents.TypedLinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(data.TypedLinkSpecifiers, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOutgoingTypedLinksCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPolicyAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPolicyAttachmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ObjectIdentifiers != null) {
    contents.ObjectIdentifiers = deserializeAws_restJson1ObjectIdentifierList(data.ObjectIdentifiers, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPolicyAttachmentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      throw await deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPublishedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPublishedSchemaArnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SchemaArns != null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPublishedSchemaArnsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      throw await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTypedLinkFacetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1TypedLinkAttributeDefinitionList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTypedLinkFacetNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypedLinkFacetNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FacetNames != null) {
    contents.FacetNames = deserializeAws_restJson1TypedLinkNameList(data.FacetNames, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListTypedLinkFacetNamesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1LookupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1LookupPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PolicyToPathList != null) {
    contents.PolicyToPathList = deserializeAws_restJson1PolicyToPathList(data.PolicyToPathList, context);
  }
  return contents;
};

const deserializeAws_restJson1LookupPolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PublishSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishSchemaCommandError(output, context);
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

const deserializeAws_restJson1PublishSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "SchemaAlreadyPublishedException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyPublishedException":
      throw await deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutSchemaFromJsonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSchemaFromJsonCommandError(output, context);
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

const deserializeAws_restJson1PutSchemaFromJsonCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context);
    case "InvalidSchemaDocException":
    case "com.amazonaws.clouddirectory#InvalidSchemaDocException":
      throw await deserializeAws_restJson1InvalidSchemaDocExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveFacetFromObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFacetFromObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveFacetFromObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      throw await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      throw await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      throw await deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLinkAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLinkAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateLinkAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateObjectAttributesCommandError(output, context);
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

const deserializeAws_restJson1UpdateObjectAttributesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      throw await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      throw await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSchemaCommandError(output, context);
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

const deserializeAws_restJson1UpdateSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTypedLinkFacetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateTypedLinkFacetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      throw await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context);
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      throw await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      throw await deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(parsedOutput, context);
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      throw await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpgradeAppliedSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradeAppliedSchemaCommandError(output, context);
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

const deserializeAws_restJson1UpgradeAppliedSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      throw await deserializeAws_restJson1IncompatibleSchemaExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      throw await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpgradePublishedSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradePublishedSchemaCommandError(output, context);
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

const deserializeAws_restJson1UpgradePublishedSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      throw await deserializeAws_restJson1IncompatibleSchemaExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      throw await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      throw await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      throw await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1BatchWriteExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchWriteException> => {
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

const deserializeAws_restJson1CannotListParentOfRootExceptionResponse = async (
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

const deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1DirectoryDeletedExceptionResponse = async (
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

const deserializeAws_restJson1DirectoryNotDisabledExceptionResponse = async (
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

const deserializeAws_restJson1DirectoryNotEnabledExceptionResponse = async (
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

const deserializeAws_restJson1FacetAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1FacetInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetInUseException> => {
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

const deserializeAws_restJson1FacetNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1FacetValidationExceptionResponse = async (
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

const deserializeAws_restJson1IncompatibleSchemaExceptionResponse = async (
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

const deserializeAws_restJson1IndexedAttributeMissingExceptionResponse = async (
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

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
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

const deserializeAws_restJson1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
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

const deserializeAws_restJson1InvalidAttachmentExceptionResponse = async (
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

const deserializeAws_restJson1InvalidFacetUpdateExceptionResponse = async (
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

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRuleExceptionResponse = async (
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

const deserializeAws_restJson1InvalidSchemaDocExceptionResponse = async (
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

const deserializeAws_restJson1InvalidTaggingRequestExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse = async (
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

const deserializeAws_restJson1NotIndexExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotIndexException> => {
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

const deserializeAws_restJson1NotNodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotNodeException> => {
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

const deserializeAws_restJson1NotPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotPolicyException> => {
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

const deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse = async (
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

const deserializeAws_restJson1ObjectNotDetachedExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1RetryableConflictExceptionResponse = async (
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

const deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse = async (
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

const deserializeAws_restJson1StillContainsLinksExceptionResponse = async (
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

const deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1AttributeKey = (input: AttributeKey, context: __SerdeContext): any => {
  return {
    ...(input.FacetName != null && { FacetName: input.FacetName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  };
};

const serializeAws_restJson1AttributeKeyAndValue = (input: AttributeKeyAndValue, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: serializeAws_restJson1AttributeKey(input.Key, context) }),
    ...(input.Value != null && { Value: serializeAws_restJson1TypedAttributeValue(input.Value, context) }),
  };
};

const serializeAws_restJson1AttributeKeyAndValueList = (
  input: AttributeKeyAndValue[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AttributeKeyAndValue(entry, context);
    });
};

const serializeAws_restJson1AttributeKeyList = (input: AttributeKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AttributeKey(entry, context);
    });
};

const serializeAws_restJson1AttributeNameAndValue = (input: AttributeNameAndValue, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Value != null && { Value: serializeAws_restJson1TypedAttributeValue(input.Value, context) }),
  };
};

const serializeAws_restJson1AttributeNameAndValueList = (
  input: AttributeNameAndValue[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AttributeNameAndValue(entry, context);
    });
};

const serializeAws_restJson1AttributeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1BatchAddFacetToObject = (input: BatchAddFacetToObject, context: __SerdeContext): any => {
  return {
    ...(input.ObjectAttributeList != null && {
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.SchemaFacet != null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
  };
};

const serializeAws_restJson1BatchAttachObject = (input: BatchAttachObject, context: __SerdeContext): any => {
  return {
    ...(input.ChildReference != null && {
      ChildReference: serializeAws_restJson1ObjectReference(input.ChildReference, context),
    }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
    }),
  };
};

const serializeAws_restJson1BatchAttachPolicy = (input: BatchAttachPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.PolicyReference != null && {
      PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
    }),
  };
};

const serializeAws_restJson1BatchAttachToIndex = (input: BatchAttachToIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexReference != null && {
      IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
    }),
    ...(input.TargetReference != null && {
      TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
    }),
  };
};

const serializeAws_restJson1BatchAttachTypedLink = (input: BatchAttachTypedLink, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1AttributeNameAndValueList(input.Attributes, context),
    }),
    ...(input.SourceObjectReference != null && {
      SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
    }),
    ...(input.TargetObjectReference != null && {
      TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
    }),
    ...(input.TypedLinkFacet != null && {
      TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
    }),
  };
};

const serializeAws_restJson1BatchCreateIndex = (input: BatchCreateIndex, context: __SerdeContext): any => {
  return {
    ...(input.BatchReferenceName != null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.IsUnique != null && { IsUnique: input.IsUnique }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList != null && {
      OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(input.OrderedIndexedAttributeList, context),
    }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
    }),
  };
};

const serializeAws_restJson1BatchCreateObject = (input: BatchCreateObject, context: __SerdeContext): any => {
  return {
    ...(input.BatchReferenceName != null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList != null && {
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
    }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
    }),
    ...(input.SchemaFacet != null && {
      SchemaFacet: serializeAws_restJson1SchemaFacetList(input.SchemaFacet, context),
    }),
  };
};

const serializeAws_restJson1BatchDeleteObject = (input: BatchDeleteObject, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchDetachFromIndex = (input: BatchDetachFromIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexReference != null && {
      IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
    }),
    ...(input.TargetReference != null && {
      TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
    }),
  };
};

const serializeAws_restJson1BatchDetachObject = (input: BatchDetachObject, context: __SerdeContext): any => {
  return {
    ...(input.BatchReferenceName != null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
    ...(input.ParentReference != null && {
      ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
    }),
  };
};

const serializeAws_restJson1BatchDetachPolicy = (input: BatchDetachPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.PolicyReference != null && {
      PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
    }),
  };
};

const serializeAws_restJson1BatchDetachTypedLink = (input: BatchDetachTypedLink, context: __SerdeContext): any => {
  return {
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  };
};

const serializeAws_restJson1BatchGetLinkAttributes = (input: BatchGetLinkAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributeNames != null && {
      AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
    }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  };
};

const serializeAws_restJson1BatchGetObjectAttributes = (
  input: BatchGetObjectAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeNames != null && {
      AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
    }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.SchemaFacet != null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
  };
};

const serializeAws_restJson1BatchGetObjectInformation = (
  input: BatchGetObjectInformation,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListAttachedIndices = (
  input: BatchListAttachedIndices,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TargetReference != null && {
      TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListIncomingTypedLinks = (
  input: BatchListIncomingTypedLinks,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterAttributeRanges != null && {
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListIndex = (input: BatchListIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexReference != null && {
      IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues != null && {
      RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
    }),
  };
};

const serializeAws_restJson1BatchListObjectAttributes = (
  input: BatchListObjectAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.FacetFilter != null && { FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListObjectChildren = (
  input: BatchListObjectChildren,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListObjectParentPaths = (
  input: BatchListObjectParentPaths,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListObjectParents = (input: BatchListObjectParents, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListObjectPolicies = (
  input: BatchListObjectPolicies,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListOutgoingTypedLinks = (
  input: BatchListOutgoingTypedLinks,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterAttributeRanges != null && {
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
    }),
    ...(input.FilterTypedLink != null && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchListPolicyAttachments = (
  input: BatchListPolicyAttachments,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyReference != null && {
      PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
    }),
  };
};

const serializeAws_restJson1BatchLookupPolicy = (input: BatchLookupPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchReadOperation = (input: BatchReadOperation, context: __SerdeContext): any => {
  return {
    ...(input.GetLinkAttributes != null && {
      GetLinkAttributes: serializeAws_restJson1BatchGetLinkAttributes(input.GetLinkAttributes, context),
    }),
    ...(input.GetObjectAttributes != null && {
      GetObjectAttributes: serializeAws_restJson1BatchGetObjectAttributes(input.GetObjectAttributes, context),
    }),
    ...(input.GetObjectInformation != null && {
      GetObjectInformation: serializeAws_restJson1BatchGetObjectInformation(input.GetObjectInformation, context),
    }),
    ...(input.ListAttachedIndices != null && {
      ListAttachedIndices: serializeAws_restJson1BatchListAttachedIndices(input.ListAttachedIndices, context),
    }),
    ...(input.ListIncomingTypedLinks != null && {
      ListIncomingTypedLinks: serializeAws_restJson1BatchListIncomingTypedLinks(input.ListIncomingTypedLinks, context),
    }),
    ...(input.ListIndex != null && { ListIndex: serializeAws_restJson1BatchListIndex(input.ListIndex, context) }),
    ...(input.ListObjectAttributes != null && {
      ListObjectAttributes: serializeAws_restJson1BatchListObjectAttributes(input.ListObjectAttributes, context),
    }),
    ...(input.ListObjectChildren != null && {
      ListObjectChildren: serializeAws_restJson1BatchListObjectChildren(input.ListObjectChildren, context),
    }),
    ...(input.ListObjectParentPaths != null && {
      ListObjectParentPaths: serializeAws_restJson1BatchListObjectParentPaths(input.ListObjectParentPaths, context),
    }),
    ...(input.ListObjectParents != null && {
      ListObjectParents: serializeAws_restJson1BatchListObjectParents(input.ListObjectParents, context),
    }),
    ...(input.ListObjectPolicies != null && {
      ListObjectPolicies: serializeAws_restJson1BatchListObjectPolicies(input.ListObjectPolicies, context),
    }),
    ...(input.ListOutgoingTypedLinks != null && {
      ListOutgoingTypedLinks: serializeAws_restJson1BatchListOutgoingTypedLinks(input.ListOutgoingTypedLinks, context),
    }),
    ...(input.ListPolicyAttachments != null && {
      ListPolicyAttachments: serializeAws_restJson1BatchListPolicyAttachments(input.ListPolicyAttachments, context),
    }),
    ...(input.LookupPolicy != null && {
      LookupPolicy: serializeAws_restJson1BatchLookupPolicy(input.LookupPolicy, context),
    }),
  };
};

const serializeAws_restJson1BatchReadOperationList = (input: BatchReadOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchReadOperation(entry, context);
    });
};

const serializeAws_restJson1BatchRemoveFacetFromObject = (
  input: BatchRemoveFacetFromObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
    ...(input.SchemaFacet != null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
  };
};

const serializeAws_restJson1BatchUpdateLinkAttributes = (
  input: BatchUpdateLinkAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.TypedLinkSpecifier != null && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
    }),
  };
};

const serializeAws_restJson1BatchUpdateObjectAttributes = (
  input: BatchUpdateObjectAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(input.AttributeUpdates, context),
    }),
    ...(input.ObjectReference != null && {
      ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
    }),
  };
};

const serializeAws_restJson1BatchWriteOperation = (input: BatchWriteOperation, context: __SerdeContext): any => {
  return {
    ...(input.AddFacetToObject != null && {
      AddFacetToObject: serializeAws_restJson1BatchAddFacetToObject(input.AddFacetToObject, context),
    }),
    ...(input.AttachObject != null && {
      AttachObject: serializeAws_restJson1BatchAttachObject(input.AttachObject, context),
    }),
    ...(input.AttachPolicy != null && {
      AttachPolicy: serializeAws_restJson1BatchAttachPolicy(input.AttachPolicy, context),
    }),
    ...(input.AttachToIndex != null && {
      AttachToIndex: serializeAws_restJson1BatchAttachToIndex(input.AttachToIndex, context),
    }),
    ...(input.AttachTypedLink != null && {
      AttachTypedLink: serializeAws_restJson1BatchAttachTypedLink(input.AttachTypedLink, context),
    }),
    ...(input.CreateIndex != null && {
      CreateIndex: serializeAws_restJson1BatchCreateIndex(input.CreateIndex, context),
    }),
    ...(input.CreateObject != null && {
      CreateObject: serializeAws_restJson1BatchCreateObject(input.CreateObject, context),
    }),
    ...(input.DeleteObject != null && {
      DeleteObject: serializeAws_restJson1BatchDeleteObject(input.DeleteObject, context),
    }),
    ...(input.DetachFromIndex != null && {
      DetachFromIndex: serializeAws_restJson1BatchDetachFromIndex(input.DetachFromIndex, context),
    }),
    ...(input.DetachObject != null && {
      DetachObject: serializeAws_restJson1BatchDetachObject(input.DetachObject, context),
    }),
    ...(input.DetachPolicy != null && {
      DetachPolicy: serializeAws_restJson1BatchDetachPolicy(input.DetachPolicy, context),
    }),
    ...(input.DetachTypedLink != null && {
      DetachTypedLink: serializeAws_restJson1BatchDetachTypedLink(input.DetachTypedLink, context),
    }),
    ...(input.RemoveFacetFromObject != null && {
      RemoveFacetFromObject: serializeAws_restJson1BatchRemoveFacetFromObject(input.RemoveFacetFromObject, context),
    }),
    ...(input.UpdateLinkAttributes != null && {
      UpdateLinkAttributes: serializeAws_restJson1BatchUpdateLinkAttributes(input.UpdateLinkAttributes, context),
    }),
    ...(input.UpdateObjectAttributes != null && {
      UpdateObjectAttributes: serializeAws_restJson1BatchUpdateObjectAttributes(input.UpdateObjectAttributes, context),
    }),
  };
};

const serializeAws_restJson1BatchWriteOperationList = (input: BatchWriteOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchWriteOperation(entry, context);
    });
};

const serializeAws_restJson1FacetAttribute = (input: FacetAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinition != null && {
      AttributeDefinition: serializeAws_restJson1FacetAttributeDefinition(input.AttributeDefinition, context),
    }),
    ...(input.AttributeReference != null && {
      AttributeReference: serializeAws_restJson1FacetAttributeReference(input.AttributeReference, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequiredBehavior != null && { RequiredBehavior: input.RequiredBehavior }),
  };
};

const serializeAws_restJson1FacetAttributeDefinition = (
  input: FacetAttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue != null && {
      DefaultValue: serializeAws_restJson1TypedAttributeValue(input.DefaultValue, context),
    }),
    ...(input.IsImmutable != null && { IsImmutable: input.IsImmutable }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1RuleMap(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1FacetAttributeList = (input: FacetAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FacetAttribute(entry, context);
    });
};

const serializeAws_restJson1FacetAttributeReference = (
  input: FacetAttributeReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetAttributeName != null && { TargetAttributeName: input.TargetAttributeName }),
    ...(input.TargetFacetName != null && { TargetFacetName: input.TargetFacetName }),
  };
};

const serializeAws_restJson1FacetAttributeUpdate = (input: FacetAttributeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Attribute != null && { Attribute: serializeAws_restJson1FacetAttribute(input.Attribute, context) }),
  };
};

const serializeAws_restJson1FacetAttributeUpdateList = (
  input: FacetAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FacetAttributeUpdate(entry, context);
    });
};

const serializeAws_restJson1LinkAttributeAction = (input: LinkAttributeAction, context: __SerdeContext): any => {
  return {
    ...(input.AttributeActionType != null && { AttributeActionType: input.AttributeActionType }),
    ...(input.AttributeUpdateValue != null && {
      AttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(input.AttributeUpdateValue, context),
    }),
  };
};

const serializeAws_restJson1LinkAttributeUpdate = (input: LinkAttributeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.AttributeAction != null && {
      AttributeAction: serializeAws_restJson1LinkAttributeAction(input.AttributeAction, context),
    }),
    ...(input.AttributeKey != null && {
      AttributeKey: serializeAws_restJson1AttributeKey(input.AttributeKey, context),
    }),
  };
};

const serializeAws_restJson1LinkAttributeUpdateList = (input: LinkAttributeUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LinkAttributeUpdate(entry, context);
    });
};

const serializeAws_restJson1ObjectAttributeAction = (input: ObjectAttributeAction, context: __SerdeContext): any => {
  return {
    ...(input.ObjectAttributeActionType != null && { ObjectAttributeActionType: input.ObjectAttributeActionType }),
    ...(input.ObjectAttributeUpdateValue != null && {
      ObjectAttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(input.ObjectAttributeUpdateValue, context),
    }),
  };
};

const serializeAws_restJson1ObjectAttributeRange = (input: ObjectAttributeRange, context: __SerdeContext): any => {
  return {
    ...(input.AttributeKey != null && {
      AttributeKey: serializeAws_restJson1AttributeKey(input.AttributeKey, context),
    }),
    ...(input.Range != null && { Range: serializeAws_restJson1TypedAttributeValueRange(input.Range, context) }),
  };
};

const serializeAws_restJson1ObjectAttributeRangeList = (
  input: ObjectAttributeRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ObjectAttributeRange(entry, context);
    });
};

const serializeAws_restJson1ObjectAttributeUpdate = (input: ObjectAttributeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ObjectAttributeAction != null && {
      ObjectAttributeAction: serializeAws_restJson1ObjectAttributeAction(input.ObjectAttributeAction, context),
    }),
    ...(input.ObjectAttributeKey != null && {
      ObjectAttributeKey: serializeAws_restJson1AttributeKey(input.ObjectAttributeKey, context),
    }),
  };
};

const serializeAws_restJson1ObjectAttributeUpdateList = (
  input: ObjectAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ObjectAttributeUpdate(entry, context);
    });
};

const serializeAws_restJson1ObjectReference = (input: ObjectReference, context: __SerdeContext): any => {
  return {
    ...(input.Selector != null && { Selector: input.Selector }),
  };
};

const serializeAws_restJson1Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1RuleParameterMap(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1RuleMap = (input: Record<string, Rule>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Rule(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RuleParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SchemaFacet = (input: SchemaFacet, context: __SerdeContext): any => {
  return {
    ...(input.FacetName != null && { FacetName: input.FacetName }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
  };
};

const serializeAws_restJson1SchemaFacetList = (input: SchemaFacet[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SchemaFacet(entry, context);
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TypedAttributeValue = (input: TypedAttributeValue, context: __SerdeContext): any => {
  return TypedAttributeValue.visit(input, {
    BinaryValue: (value) => ({ BinaryValue: context.base64Encoder(value) }),
    BooleanValue: (value) => ({ BooleanValue: value }),
    DatetimeValue: (value) => ({ DatetimeValue: Math.round(value.getTime() / 1000) }),
    NumberValue: (value) => ({ NumberValue: value }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1TypedAttributeValueRange = (
  input: TypedAttributeValueRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndMode != null && { EndMode: input.EndMode }),
    ...(input.EndValue != null && { EndValue: serializeAws_restJson1TypedAttributeValue(input.EndValue, context) }),
    ...(input.StartMode != null && { StartMode: input.StartMode }),
    ...(input.StartValue != null && {
      StartValue: serializeAws_restJson1TypedAttributeValue(input.StartValue, context),
    }),
  };
};

const serializeAws_restJson1TypedLinkAttributeDefinition = (
  input: TypedLinkAttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue != null && {
      DefaultValue: serializeAws_restJson1TypedAttributeValue(input.DefaultValue, context),
    }),
    ...(input.IsImmutable != null && { IsImmutable: input.IsImmutable }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequiredBehavior != null && { RequiredBehavior: input.RequiredBehavior }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1RuleMap(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1TypedLinkAttributeDefinitionList = (
  input: TypedLinkAttributeDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TypedLinkAttributeDefinition(entry, context);
    });
};

const serializeAws_restJson1TypedLinkAttributeRange = (
  input: TypedLinkAttributeRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Range != null && { Range: serializeAws_restJson1TypedAttributeValueRange(input.Range, context) }),
  };
};

const serializeAws_restJson1TypedLinkAttributeRangeList = (
  input: TypedLinkAttributeRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TypedLinkAttributeRange(entry, context);
    });
};

const serializeAws_restJson1TypedLinkFacet = (input: TypedLinkFacet, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1TypedLinkAttributeDefinitionList(input.Attributes, context),
    }),
    ...(input.IdentityAttributeOrder != null && {
      IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(input.IdentityAttributeOrder, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1TypedLinkFacetAttributeUpdate = (
  input: TypedLinkFacetAttributeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Attribute != null && {
      Attribute: serializeAws_restJson1TypedLinkAttributeDefinition(input.Attribute, context),
    }),
  };
};

const serializeAws_restJson1TypedLinkFacetAttributeUpdateList = (
  input: TypedLinkFacetAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TypedLinkFacetAttributeUpdate(entry, context);
    });
};

const serializeAws_restJson1TypedLinkSchemaAndFacetName = (
  input: TypedLinkSchemaAndFacetName,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
    ...(input.TypedLinkName != null && { TypedLinkName: input.TypedLinkName }),
  };
};

const serializeAws_restJson1TypedLinkSpecifier = (input: TypedLinkSpecifier, context: __SerdeContext): any => {
  return {
    ...(input.IdentityAttributeValues != null && {
      IdentityAttributeValues: serializeAws_restJson1AttributeNameAndValueList(input.IdentityAttributeValues, context),
    }),
    ...(input.SourceObjectReference != null && {
      SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
    }),
    ...(input.TargetObjectReference != null && {
      TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
    }),
    ...(input.TypedLinkFacet != null && {
      TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
    }),
  };
};

const deserializeAws_restJson1Arns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AttributeKey = (output: any, context: __SerdeContext): AttributeKey => {
  return {
    FacetName: __expectString(output.FacetName),
    Name: __expectString(output.Name),
    SchemaArn: __expectString(output.SchemaArn),
  } as any;
};

const deserializeAws_restJson1AttributeKeyAndValue = (output: any, context: __SerdeContext): AttributeKeyAndValue => {
  return {
    Key: output.Key != null ? deserializeAws_restJson1AttributeKey(output.Key, context) : undefined,
    Value:
      output.Value != null
        ? deserializeAws_restJson1TypedAttributeValue(__expectUnion(output.Value), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AttributeKeyAndValueList = (
  output: any,
  context: __SerdeContext
): AttributeKeyAndValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AttributeKeyAndValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AttributeNameAndValue = (output: any, context: __SerdeContext): AttributeNameAndValue => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Value:
      output.Value != null
        ? deserializeAws_restJson1TypedAttributeValue(__expectUnion(output.Value), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AttributeNameAndValueList = (
  output: any,
  context: __SerdeContext
): AttributeNameAndValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AttributeNameAndValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AttributeNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BatchAddFacetToObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchAddFacetToObjectResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchAttachObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachObjectResponse => {
  return {
    attachedObjectIdentifier: __expectString(output.attachedObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchAttachPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachPolicyResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchAttachToIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachToIndexResponse => {
  return {
    AttachedObjectIdentifier: __expectString(output.AttachedObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchAttachTypedLinkResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachTypedLinkResponse => {
  return {
    TypedLinkSpecifier:
      output.TypedLinkSpecifier != null
        ? deserializeAws_restJson1TypedLinkSpecifier(output.TypedLinkSpecifier, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchCreateIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateIndexResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchCreateObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateObjectResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchDeleteObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteObjectResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchDetachFromIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachFromIndexResponse => {
  return {
    DetachedObjectIdentifier: __expectString(output.DetachedObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchDetachObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachObjectResponse => {
  return {
    detachedObjectIdentifier: __expectString(output.detachedObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchDetachPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachPolicyResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchDetachTypedLinkResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachTypedLinkResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchGetLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetLinkAttributesResponse => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchGetObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectAttributesResponse => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchGetObjectInformationResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectInformationResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
    SchemaFacets:
      output.SchemaFacets != null ? deserializeAws_restJson1SchemaFacetList(output.SchemaFacets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchListAttachedIndicesResponse = (
  output: any,
  context: __SerdeContext
): BatchListAttachedIndicesResponse => {
  return {
    IndexAttachments:
      output.IndexAttachments != null
        ? deserializeAws_restJson1IndexAttachmentList(output.IndexAttachments, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1BatchListIncomingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListIncomingTypedLinksResponse => {
  return {
    LinkSpecifiers:
      output.LinkSpecifiers != null
        ? deserializeAws_restJson1TypedLinkSpecifierList(output.LinkSpecifiers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1BatchListIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchListIndexResponse => {
  return {
    IndexAttachments:
      output.IndexAttachments != null
        ? deserializeAws_restJson1IndexAttachmentList(output.IndexAttachments, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1BatchListObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectAttributesResponse => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1BatchListObjectChildrenResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectChildrenResponse => {
  return {
    Children:
      output.Children != null
        ? deserializeAws_restJson1LinkNameToObjectIdentifierMap(output.Children, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1BatchListObjectParentPathsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentPathsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PathToObjectIdentifiersList:
      output.PathToObjectIdentifiersList != null
        ? deserializeAws_restJson1PathToObjectIdentifiersList(output.PathToObjectIdentifiersList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchListObjectParentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParentLinks:
      output.ParentLinks != null
        ? deserializeAws_restJson1ObjectIdentifierAndLinkNameList(output.ParentLinks, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchListObjectPoliciesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectPoliciesResponse => {
  return {
    AttachedPolicyIds:
      output.AttachedPolicyIds != null
        ? deserializeAws_restJson1ObjectIdentifierList(output.AttachedPolicyIds, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1BatchListOutgoingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListOutgoingTypedLinksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TypedLinkSpecifiers:
      output.TypedLinkSpecifiers != null
        ? deserializeAws_restJson1TypedLinkSpecifierList(output.TypedLinkSpecifiers, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchListPolicyAttachmentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListPolicyAttachmentsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ObjectIdentifiers:
      output.ObjectIdentifiers != null
        ? deserializeAws_restJson1ObjectIdentifierList(output.ObjectIdentifiers, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchLookupPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchLookupPolicyResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PolicyToPathList:
      output.PolicyToPathList != null
        ? deserializeAws_restJson1PolicyToPathList(output.PolicyToPathList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchReadException = (output: any, context: __SerdeContext): BatchReadException => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1BatchReadOperationResponse = (
  output: any,
  context: __SerdeContext
): BatchReadOperationResponse => {
  return {
    ExceptionResponse:
      output.ExceptionResponse != null
        ? deserializeAws_restJson1BatchReadException(output.ExceptionResponse, context)
        : undefined,
    SuccessfulResponse:
      output.SuccessfulResponse != null
        ? deserializeAws_restJson1BatchReadSuccessfulResponse(output.SuccessfulResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchReadOperationResponseList = (
  output: any,
  context: __SerdeContext
): BatchReadOperationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchReadOperationResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchReadSuccessfulResponse = (
  output: any,
  context: __SerdeContext
): BatchReadSuccessfulResponse => {
  return {
    GetLinkAttributes:
      output.GetLinkAttributes != null
        ? deserializeAws_restJson1BatchGetLinkAttributesResponse(output.GetLinkAttributes, context)
        : undefined,
    GetObjectAttributes:
      output.GetObjectAttributes != null
        ? deserializeAws_restJson1BatchGetObjectAttributesResponse(output.GetObjectAttributes, context)
        : undefined,
    GetObjectInformation:
      output.GetObjectInformation != null
        ? deserializeAws_restJson1BatchGetObjectInformationResponse(output.GetObjectInformation, context)
        : undefined,
    ListAttachedIndices:
      output.ListAttachedIndices != null
        ? deserializeAws_restJson1BatchListAttachedIndicesResponse(output.ListAttachedIndices, context)
        : undefined,
    ListIncomingTypedLinks:
      output.ListIncomingTypedLinks != null
        ? deserializeAws_restJson1BatchListIncomingTypedLinksResponse(output.ListIncomingTypedLinks, context)
        : undefined,
    ListIndex:
      output.ListIndex != null ? deserializeAws_restJson1BatchListIndexResponse(output.ListIndex, context) : undefined,
    ListObjectAttributes:
      output.ListObjectAttributes != null
        ? deserializeAws_restJson1BatchListObjectAttributesResponse(output.ListObjectAttributes, context)
        : undefined,
    ListObjectChildren:
      output.ListObjectChildren != null
        ? deserializeAws_restJson1BatchListObjectChildrenResponse(output.ListObjectChildren, context)
        : undefined,
    ListObjectParentPaths:
      output.ListObjectParentPaths != null
        ? deserializeAws_restJson1BatchListObjectParentPathsResponse(output.ListObjectParentPaths, context)
        : undefined,
    ListObjectParents:
      output.ListObjectParents != null
        ? deserializeAws_restJson1BatchListObjectParentsResponse(output.ListObjectParents, context)
        : undefined,
    ListObjectPolicies:
      output.ListObjectPolicies != null
        ? deserializeAws_restJson1BatchListObjectPoliciesResponse(output.ListObjectPolicies, context)
        : undefined,
    ListOutgoingTypedLinks:
      output.ListOutgoingTypedLinks != null
        ? deserializeAws_restJson1BatchListOutgoingTypedLinksResponse(output.ListOutgoingTypedLinks, context)
        : undefined,
    ListPolicyAttachments:
      output.ListPolicyAttachments != null
        ? deserializeAws_restJson1BatchListPolicyAttachmentsResponse(output.ListPolicyAttachments, context)
        : undefined,
    LookupPolicy:
      output.LookupPolicy != null
        ? deserializeAws_restJson1BatchLookupPolicyResponse(output.LookupPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchRemoveFacetFromObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchRemoveFacetFromObjectResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchUpdateLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateLinkAttributesResponse => {
  return {} as any;
};

const deserializeAws_restJson1BatchUpdateObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateObjectAttributesResponse => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1BatchWriteOperationResponse = (
  output: any,
  context: __SerdeContext
): BatchWriteOperationResponse => {
  return {
    AddFacetToObject:
      output.AddFacetToObject != null
        ? deserializeAws_restJson1BatchAddFacetToObjectResponse(output.AddFacetToObject, context)
        : undefined,
    AttachObject:
      output.AttachObject != null
        ? deserializeAws_restJson1BatchAttachObjectResponse(output.AttachObject, context)
        : undefined,
    AttachPolicy:
      output.AttachPolicy != null
        ? deserializeAws_restJson1BatchAttachPolicyResponse(output.AttachPolicy, context)
        : undefined,
    AttachToIndex:
      output.AttachToIndex != null
        ? deserializeAws_restJson1BatchAttachToIndexResponse(output.AttachToIndex, context)
        : undefined,
    AttachTypedLink:
      output.AttachTypedLink != null
        ? deserializeAws_restJson1BatchAttachTypedLinkResponse(output.AttachTypedLink, context)
        : undefined,
    CreateIndex:
      output.CreateIndex != null
        ? deserializeAws_restJson1BatchCreateIndexResponse(output.CreateIndex, context)
        : undefined,
    CreateObject:
      output.CreateObject != null
        ? deserializeAws_restJson1BatchCreateObjectResponse(output.CreateObject, context)
        : undefined,
    DeleteObject:
      output.DeleteObject != null
        ? deserializeAws_restJson1BatchDeleteObjectResponse(output.DeleteObject, context)
        : undefined,
    DetachFromIndex:
      output.DetachFromIndex != null
        ? deserializeAws_restJson1BatchDetachFromIndexResponse(output.DetachFromIndex, context)
        : undefined,
    DetachObject:
      output.DetachObject != null
        ? deserializeAws_restJson1BatchDetachObjectResponse(output.DetachObject, context)
        : undefined,
    DetachPolicy:
      output.DetachPolicy != null
        ? deserializeAws_restJson1BatchDetachPolicyResponse(output.DetachPolicy, context)
        : undefined,
    DetachTypedLink:
      output.DetachTypedLink != null
        ? deserializeAws_restJson1BatchDetachTypedLinkResponse(output.DetachTypedLink, context)
        : undefined,
    RemoveFacetFromObject:
      output.RemoveFacetFromObject != null
        ? deserializeAws_restJson1BatchRemoveFacetFromObjectResponse(output.RemoveFacetFromObject, context)
        : undefined,
    UpdateLinkAttributes:
      output.UpdateLinkAttributes != null
        ? deserializeAws_restJson1BatchUpdateLinkAttributesResponse(output.UpdateLinkAttributes, context)
        : undefined,
    UpdateObjectAttributes:
      output.UpdateObjectAttributes != null
        ? deserializeAws_restJson1BatchUpdateObjectAttributesResponse(output.UpdateObjectAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchWriteOperationResponseList = (
  output: any,
  context: __SerdeContext
): BatchWriteOperationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchWriteOperationResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Directory = (output: any, context: __SerdeContext): Directory => {
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

const deserializeAws_restJson1DirectoryList = (output: any, context: __SerdeContext): Directory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Directory(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Facet = (output: any, context: __SerdeContext): Facet => {
  return {
    FacetStyle: __expectString(output.FacetStyle),
    Name: __expectString(output.Name),
    ObjectType: __expectString(output.ObjectType),
  } as any;
};

const deserializeAws_restJson1FacetAttribute = (output: any, context: __SerdeContext): FacetAttribute => {
  return {
    AttributeDefinition:
      output.AttributeDefinition != null
        ? deserializeAws_restJson1FacetAttributeDefinition(output.AttributeDefinition, context)
        : undefined,
    AttributeReference:
      output.AttributeReference != null
        ? deserializeAws_restJson1FacetAttributeReference(output.AttributeReference, context)
        : undefined,
    Name: __expectString(output.Name),
    RequiredBehavior: __expectString(output.RequiredBehavior),
  } as any;
};

const deserializeAws_restJson1FacetAttributeDefinition = (
  output: any,
  context: __SerdeContext
): FacetAttributeDefinition => {
  return {
    DefaultValue:
      output.DefaultValue != null
        ? deserializeAws_restJson1TypedAttributeValue(__expectUnion(output.DefaultValue), context)
        : undefined,
    IsImmutable: __expectBoolean(output.IsImmutable),
    Rules: output.Rules != null ? deserializeAws_restJson1RuleMap(output.Rules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1FacetAttributeList = (output: any, context: __SerdeContext): FacetAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FacetAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FacetAttributeReference = (
  output: any,
  context: __SerdeContext
): FacetAttributeReference => {
  return {
    TargetAttributeName: __expectString(output.TargetAttributeName),
    TargetFacetName: __expectString(output.TargetFacetName),
  } as any;
};

const deserializeAws_restJson1FacetNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1IndexAttachment = (output: any, context: __SerdeContext): IndexAttachment => {
  return {
    IndexedAttributes:
      output.IndexedAttributes != null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.IndexedAttributes, context)
        : undefined,
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1IndexAttachmentList = (output: any, context: __SerdeContext): IndexAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IndexAttachment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LinkNameToObjectIdentifierMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ObjectIdentifierAndLinkNameList = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple => {
  return {
    LinkName: __expectString(output.LinkName),
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
  } as any;
};

const deserializeAws_restJson1ObjectIdentifierList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ObjectIdentifierToLinkNameMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ObjectReference = (output: any, context: __SerdeContext): ObjectReference => {
  return {
    Selector: __expectString(output.Selector),
  } as any;
};

const deserializeAws_restJson1PathToObjectIdentifiers = (
  output: any,
  context: __SerdeContext
): PathToObjectIdentifiers => {
  return {
    ObjectIdentifiers:
      output.ObjectIdentifiers != null
        ? deserializeAws_restJson1ObjectIdentifierList(output.ObjectIdentifiers, context)
        : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_restJson1PathToObjectIdentifiersList = (
  output: any,
  context: __SerdeContext
): PathToObjectIdentifiers[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PathToObjectIdentifiers(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PolicyAttachment = (output: any, context: __SerdeContext): PolicyAttachment => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
    PolicyId: __expectString(output.PolicyId),
    PolicyType: __expectString(output.PolicyType),
  } as any;
};

const deserializeAws_restJson1PolicyAttachmentList = (output: any, context: __SerdeContext): PolicyAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PolicyAttachment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PolicyToPath = (output: any, context: __SerdeContext): PolicyToPath => {
  return {
    Path: __expectString(output.Path),
    Policies:
      output.Policies != null ? deserializeAws_restJson1PolicyAttachmentList(output.Policies, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PolicyToPathList = (output: any, context: __SerdeContext): PolicyToPath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PolicyToPath(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1RuleParameterMap(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1RuleMap = (output: any, context: __SerdeContext): Record<string, Rule> => {
  return Object.entries(output).reduce((acc: Record<string, Rule>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Rule(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1RuleParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SchemaFacet = (output: any, context: __SerdeContext): SchemaFacet => {
  return {
    FacetName: __expectString(output.FacetName),
    SchemaArn: __expectString(output.SchemaArn),
  } as any;
};

const deserializeAws_restJson1SchemaFacetList = (output: any, context: __SerdeContext): SchemaFacet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SchemaFacet(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TypedAttributeValue = (output: any, context: __SerdeContext): TypedAttributeValue => {
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

const deserializeAws_restJson1TypedLinkAttributeDefinition = (
  output: any,
  context: __SerdeContext
): TypedLinkAttributeDefinition => {
  return {
    DefaultValue:
      output.DefaultValue != null
        ? deserializeAws_restJson1TypedAttributeValue(__expectUnion(output.DefaultValue), context)
        : undefined,
    IsImmutable: __expectBoolean(output.IsImmutable),
    Name: __expectString(output.Name),
    RequiredBehavior: __expectString(output.RequiredBehavior),
    Rules: output.Rules != null ? deserializeAws_restJson1RuleMap(output.Rules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1TypedLinkAttributeDefinitionList = (
  output: any,
  context: __SerdeContext
): TypedLinkAttributeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TypedLinkAttributeDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TypedLinkNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TypedLinkSchemaAndFacetName = (
  output: any,
  context: __SerdeContext
): TypedLinkSchemaAndFacetName => {
  return {
    SchemaArn: __expectString(output.SchemaArn),
    TypedLinkName: __expectString(output.TypedLinkName),
  } as any;
};

const deserializeAws_restJson1TypedLinkSpecifier = (output: any, context: __SerdeContext): TypedLinkSpecifier => {
  return {
    IdentityAttributeValues:
      output.IdentityAttributeValues != null
        ? deserializeAws_restJson1AttributeNameAndValueList(output.IdentityAttributeValues, context)
        : undefined,
    SourceObjectReference:
      output.SourceObjectReference != null
        ? deserializeAws_restJson1ObjectReference(output.SourceObjectReference, context)
        : undefined,
    TargetObjectReference:
      output.TargetObjectReference != null
        ? deserializeAws_restJson1ObjectReference(output.TargetObjectReference, context)
        : undefined,
    TypedLinkFacet:
      output.TypedLinkFacet != null
        ? deserializeAws_restJson1TypedLinkSchemaAndFacetName(output.TypedLinkFacet, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TypedLinkSpecifierList = (output: any, context: __SerdeContext): TypedLinkSpecifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TypedLinkSpecifier(entry, context);
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
