import {
  AddFacetToObjectCommandInput,
  AddFacetToObjectCommandOutput
} from "../commands/AddFacetToObjectCommand";
import {
  ApplySchemaCommandInput,
  ApplySchemaCommandOutput
} from "../commands/ApplySchemaCommand";
import {
  AttachObjectCommandInput,
  AttachObjectCommandOutput
} from "../commands/AttachObjectCommand";
import {
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput
} from "../commands/AttachPolicyCommand";
import {
  AttachToIndexCommandInput,
  AttachToIndexCommandOutput
} from "../commands/AttachToIndexCommand";
import {
  AttachTypedLinkCommandInput,
  AttachTypedLinkCommandOutput
} from "../commands/AttachTypedLinkCommand";
import {
  BatchReadCommandInput,
  BatchReadCommandOutput
} from "../commands/BatchReadCommand";
import {
  BatchWriteCommandInput,
  BatchWriteCommandOutput
} from "../commands/BatchWriteCommand";
import {
  CreateDirectoryCommandInput,
  CreateDirectoryCommandOutput
} from "../commands/CreateDirectoryCommand";
import {
  CreateFacetCommandInput,
  CreateFacetCommandOutput
} from "../commands/CreateFacetCommand";
import {
  CreateIndexCommandInput,
  CreateIndexCommandOutput
} from "../commands/CreateIndexCommand";
import {
  CreateObjectCommandInput,
  CreateObjectCommandOutput
} from "../commands/CreateObjectCommand";
import {
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput
} from "../commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput
} from "../commands/CreateTypedLinkFacetCommand";
import {
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput
} from "../commands/DeleteDirectoryCommand";
import {
  DeleteFacetCommandInput,
  DeleteFacetCommandOutput
} from "../commands/DeleteFacetCommand";
import {
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput
} from "../commands/DeleteObjectCommand";
import {
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput
} from "../commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput
} from "../commands/DeleteTypedLinkFacetCommand";
import {
  DetachFromIndexCommandInput,
  DetachFromIndexCommandOutput
} from "../commands/DetachFromIndexCommand";
import {
  DetachObjectCommandInput,
  DetachObjectCommandOutput
} from "../commands/DetachObjectCommand";
import {
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput
} from "../commands/DetachPolicyCommand";
import {
  DetachTypedLinkCommandInput,
  DetachTypedLinkCommandOutput
} from "../commands/DetachTypedLinkCommand";
import {
  DisableDirectoryCommandInput,
  DisableDirectoryCommandOutput
} from "../commands/DisableDirectoryCommand";
import {
  EnableDirectoryCommandInput,
  EnableDirectoryCommandOutput
} from "../commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput
} from "../commands/GetAppliedSchemaVersionCommand";
import {
  GetDirectoryCommandInput,
  GetDirectoryCommandOutput
} from "../commands/GetDirectoryCommand";
import {
  GetFacetCommandInput,
  GetFacetCommandOutput
} from "../commands/GetFacetCommand";
import {
  GetLinkAttributesCommandInput,
  GetLinkAttributesCommandOutput
} from "../commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput
} from "../commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput
} from "../commands/GetObjectInformationCommand";
import {
  GetSchemaAsJsonCommandInput,
  GetSchemaAsJsonCommandOutput
} from "../commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput
} from "../commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput
} from "../commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput
} from "../commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput
} from "../commands/ListDevelopmentSchemaArnsCommand";
import {
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput
} from "../commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput
} from "../commands/ListFacetAttributesCommand";
import {
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput
} from "../commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput
} from "../commands/ListIncomingTypedLinksCommand";
import {
  ListIndexCommandInput,
  ListIndexCommandOutput
} from "../commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput
} from "../commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput
} from "../commands/ListObjectAttributesCommand";
import {
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput
} from "../commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput
} from "../commands/ListObjectParentPathsCommand";
import {
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput
} from "../commands/ListObjectParentsCommand";
import {
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput
} from "../commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput
} from "../commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput
} from "../commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput
} from "../commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput
} from "../commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput
} from "../commands/ListTypedLinkFacetNamesCommand";
import {
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput
} from "../commands/LookupPolicyCommand";
import {
  PublishSchemaCommandInput,
  PublishSchemaCommandOutput
} from "../commands/PublishSchemaCommand";
import {
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput
} from "../commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput
} from "../commands/RemoveFacetFromObjectCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateFacetCommandInput,
  UpdateFacetCommandOutput
} from "../commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput
} from "../commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput
} from "../commands/UpdateObjectAttributesCommand";
import {
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput
} from "../commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput
} from "../commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput
} from "../commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput
} from "../commands/UpgradePublishedSchemaCommand";
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
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1AddFacetToObjectCommand = async (
  input: AddFacetToObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets";
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectAttributeList !== undefined && {
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(
        input.ObjectAttributeList,
        context
      )
    }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ApplySchemaCommand = async (
  input: ApplySchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/apply";
  let body: any;
  body = JSON.stringify({
    ...(input.PublishedSchemaArn !== undefined && {
      PublishedSchemaArn: input.PublishedSchemaArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1AttachObjectCommand = async (
  input: AttachObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attach";
  let body: any;
  body = JSON.stringify({
    ...(input.ChildReference !== undefined && {
      ChildReference: serializeAws_restJson1ObjectReference(
        input.ChildReference,
        context
      )
    }),
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1AttachPolicyCommand = async (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attach";
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.PolicyReference !== undefined && {
      PolicyReference: serializeAws_restJson1ObjectReference(
        input.PolicyReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1AttachToIndexCommand = async (
  input: AttachToIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/attach";
  let body: any;
  body = JSON.stringify({
    ...(input.IndexReference !== undefined && {
      IndexReference: serializeAws_restJson1ObjectReference(
        input.IndexReference,
        context
      )
    }),
    ...(input.TargetReference !== undefined && {
      TargetReference: serializeAws_restJson1ObjectReference(
        input.TargetReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1AttachTypedLinkCommand = async (
  input: AttachTypedLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attach";
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1AttributeNameAndValueList(
        input.Attributes,
        context
      )
    }),
    ...(input.SourceObjectReference !== undefined && {
      SourceObjectReference: serializeAws_restJson1ObjectReference(
        input.SourceObjectReference,
        context
      )
    }),
    ...(input.TargetObjectReference !== undefined && {
      TargetObjectReference: serializeAws_restJson1ObjectReference(
        input.TargetObjectReference,
        context
      )
    }),
    ...(input.TypedLinkFacet !== undefined && {
      TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.TypedLinkFacet,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1BatchReadCommand = async (
  input: BatchReadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/batchread";
  let body: any;
  body = JSON.stringify({
    ...(input.Operations !== undefined && {
      Operations: serializeAws_restJson1BatchReadOperationList(
        input.Operations,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1BatchWriteCommand = async (
  input: BatchWriteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/batchwrite";
  let body: any;
  body = JSON.stringify({
    ...(input.Operations !== undefined && {
      Operations: serializeAws_restJson1BatchWriteOperationList(
        input.Operations,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateDirectoryCommand = async (
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/create";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateFacetCommand = async (
  input: CreateFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/create";
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1FacetAttributeList(
        input.Attributes,
        context
      )
    }),
    ...(input.FacetStyle !== undefined && { FacetStyle: input.FacetStyle }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ObjectType !== undefined && { ObjectType: input.ObjectType })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index";
  let body: any;
  body = JSON.stringify({
    ...(input.IsUnique !== undefined && { IsUnique: input.IsUnique }),
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList !== undefined && {
      OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(
        input.OrderedIndexedAttributeList,
        context
      )
    }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateObjectCommand = async (
  input: CreateObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object";
  let body: any;
  body = JSON.stringify({
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList !== undefined && {
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(
        input.ObjectAttributeList,
        context
      )
    }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    }),
    ...(input.SchemaFacets !== undefined && {
      SchemaFacets: serializeAws_restJson1SchemaFacetList(
        input.SchemaFacets,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/create";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateTypedLinkFacetCommand = async (
  input: CreateTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/create";
  let body: any;
  body = JSON.stringify({
    ...(input.Facet !== undefined && {
      Facet: serializeAws_restJson1TypedLinkFacet(input.Facet, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteDirectoryCommand = async (
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteFacetCommand = async (
  input: DeleteFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteTypedLinkFacetCommand = async (
  input: DeleteTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DetachFromIndexCommand = async (
  input: DetachFromIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/detach";
  let body: any;
  body = JSON.stringify({
    ...(input.IndexReference !== undefined && {
      IndexReference: serializeAws_restJson1ObjectReference(
        input.IndexReference,
        context
      )
    }),
    ...(input.TargetReference !== undefined && {
      TargetReference: serializeAws_restJson1ObjectReference(
        input.TargetReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DetachObjectCommand = async (
  input: DetachObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/detach";
  let body: any;
  body = JSON.stringify({
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DetachPolicyCommand = async (
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/detach";
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.PolicyReference !== undefined && {
      PolicyReference: serializeAws_restJson1ObjectReference(
        input.PolicyReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DetachTypedLinkCommand = async (
  input: DetachTypedLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/detach";
  let body: any;
  body = JSON.stringify({
    ...(input.TypedLinkSpecifier !== undefined && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(
        input.TypedLinkSpecifier,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DisableDirectoryCommand = async (
  input: DisableDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/disable";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1EnableDirectoryCommand = async (
  input: EnableDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/enable";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetAppliedSchemaVersionCommand = async (
  input: GetAppliedSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/getappliedschema";
  let body: any;
  body = JSON.stringify({
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetDirectoryCommand = async (
  input: GetDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/get";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetFacetCommand = async (
  input: GetFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetLinkAttributesCommand = async (
  input: GetLinkAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath =
    "/amazonclouddirectory/2017-01-11/typedlink/attributes/get";
  let body: any;
  body = JSON.stringify({
    ...(input.AttributeNames !== undefined && {
      AttributeNames: serializeAws_restJson1AttributeNameList(
        input.AttributeNames,
        context
      )
    }),
    ...(input.ConsistencyLevel !== undefined && {
      ConsistencyLevel: input.ConsistencyLevel
    }),
    ...(input.TypedLinkSpecifier !== undefined && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(
        input.TypedLinkSpecifier,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetObjectAttributesCommand = async (
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes/get";
  let body: any;
  body = JSON.stringify({
    ...(input.AttributeNames !== undefined && {
      AttributeNames: serializeAws_restJson1AttributeNameList(
        input.AttributeNames,
        context
      )
    }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetObjectInformationCommand = async (
  input: GetObjectInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/information";
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetSchemaAsJsonCommand = async (
  input: GetSchemaAsJsonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetTypedLinkFacetInformationCommand = async (
  input: GetTypedLinkFacetInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/get";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListAppliedSchemaArnsCommand = async (
  input: ListAppliedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/applied";
  let body: any;
  body = JSON.stringify({
    ...(input.DirectoryArn !== undefined && {
      DirectoryArn: input.DirectoryArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListAttachedIndicesCommand = async (
  input: ListAttachedIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/indices";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TargetReference !== undefined && {
      TargetReference: serializeAws_restJson1ObjectReference(
        input.TargetReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListDevelopmentSchemaArnsCommand = async (
  input: ListDevelopmentSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/development";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListDirectoriesCommand = async (
  input: ListDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/list";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.state !== undefined && { state: input.state })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListFacetAttributesCommand = async (
  input: ListFacetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/attributes";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListFacetNamesCommand = async (
  input: ListFacetNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/list";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListIncomingTypedLinksCommand = async (
  input: ListIncomingTypedLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/incoming";
  let body: any;
  body = JSON.stringify({
    ...(input.ConsistencyLevel !== undefined && {
      ConsistencyLevel: input.ConsistencyLevel
    }),
    ...(input.FilterAttributeRanges !== undefined && {
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
        input.FilterAttributeRanges,
        context
      )
    }),
    ...(input.FilterTypedLink !== undefined && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.FilterTypedLink,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListIndexCommand = async (
  input: ListIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/targets";
  let body: any;
  body = JSON.stringify({
    ...(input.IndexReference !== undefined && {
      IndexReference: serializeAws_restJson1ObjectReference(
        input.IndexReference,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues !== undefined && {
      RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(
        input.RangesOnIndexedValues,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListManagedSchemaArnsCommand = async (
  input: ListManagedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/managed";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListObjectAttributesCommand = async (
  input: ListObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes";
  let body: any;
  body = JSON.stringify({
    ...(input.FacetFilter !== undefined && {
      FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListObjectChildrenCommand = async (
  input: ListObjectChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/children";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListObjectParentPathsCommand = async (
  input: ListObjectParentPathsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/parentpaths";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListObjectParentsCommand = async (
  input: ListObjectParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/parent";
  let body: any;
  body = JSON.stringify({
    ...(input.IncludeAllLinksToEachParent !== undefined && {
      IncludeAllLinksToEachParent: input.IncludeAllLinksToEachParent
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListObjectPoliciesCommand = async (
  input: ListObjectPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/policy";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListOutgoingTypedLinksCommand = async (
  input: ListOutgoingTypedLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/outgoing";
  let body: any;
  body = JSON.stringify({
    ...(input.ConsistencyLevel !== undefined && {
      ConsistencyLevel: input.ConsistencyLevel
    }),
    ...(input.FilterAttributeRanges !== undefined && {
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
        input.FilterAttributeRanges,
        context
      )
    }),
    ...(input.FilterTypedLink !== undefined && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.FilterTypedLink,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListPolicyAttachmentsCommand = async (
  input: ListPolicyAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && {
      "x-amz-consistency-level": input.ConsistencyLevel!
    }),
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attachment";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PolicyReference !== undefined && {
      PolicyReference: serializeAws_restJson1ObjectReference(
        input.PolicyReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListPublishedSchemaArnsCommand = async (
  input: ListPublishedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/published";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListTypedLinkFacetAttributesCommand = async (
  input: ListTypedLinkFacetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath =
    "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListTypedLinkFacetNamesCommand = async (
  input: ListTypedLinkFacetNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/list";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1LookupPolicyCommand = async (
  input: LookupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/lookup";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1PublishSchemaCommand = async (
  input: PublishSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DevelopmentSchemaArn) && {
      "x-amz-data-partition": input.DevelopmentSchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/publish";
  let body: any;
  body = JSON.stringify({
    ...(input.MinorVersion !== undefined && {
      MinorVersion: input.MinorVersion
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Version !== undefined && { Version: input.Version })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1PutSchemaFromJsonCommand = async (
  input: PutSchemaFromJsonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
  let body: any;
  body = JSON.stringify({
    ...(input.Document !== undefined && { Document: input.Document })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RemoveFacetFromObjectCommand = async (
  input: RemoveFacetFromObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags/add";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1TagList(input.Tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags/remove";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateFacetCommand = async (
  input: UpdateFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
  let body: any;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_restJson1FacetAttributeUpdateList(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ObjectType !== undefined && { ObjectType: input.ObjectType })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateLinkAttributesCommand = async (
  input: UpdateLinkAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath =
    "/amazonclouddirectory/2017-01-11/typedlink/attributes/update";
  let body: any;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.TypedLinkSpecifier !== undefined && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(
        input.TypedLinkSpecifier,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateObjectAttributesCommand = async (
  input: UpdateObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && {
      "x-amz-data-partition": input.DirectoryArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/update";
  let body: any;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/update";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateTypedLinkFacetCommand = async (
  input: UpdateTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && {
      "x-amz-data-partition": input.SchemaArn!
    })
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet";
  let body: any;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_restJson1TypedLinkFacetAttributeUpdateList(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.IdentityAttributeOrder !== undefined && {
      IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(
        input.IdentityAttributeOrder,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpgradeAppliedSchemaCommand = async (
  input: UpgradeAppliedSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradeapplied";
  let body: any;
  body = JSON.stringify({
    ...(input.DirectoryArn !== undefined && {
      DirectoryArn: input.DirectoryArn
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.PublishedSchemaArn !== undefined && {
      PublishedSchemaArn: input.PublishedSchemaArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpgradePublishedSchemaCommand = async (
  input: UpgradePublishedSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradepublished";
  let body: any;
  body = JSON.stringify({
    ...(input.DevelopmentSchemaArn !== undefined && {
      DevelopmentSchemaArn: input.DevelopmentSchemaArn
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MinorVersion !== undefined && {
      MinorVersion: input.MinorVersion
    }),
    ...(input.PublishedSchemaArn !== undefined && {
      PublishedSchemaArn: input.PublishedSchemaArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1AddFacetToObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AddFacetToObjectCommandError(
      output,
      context
    );
  }
  const contents: AddFacetToObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddFacetToObjectResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddFacetToObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ApplySchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ApplySchemaCommandError(output, context);
  }
  const contents: ApplySchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplySchemaResponse",
    AppliedSchemaArn: undefined,
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ApplySchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AttachObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AttachObjectCommandError(output, context);
  }
  const contents: AttachObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachObjectResponse",
    AttachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AttachedObjectIdentifier !== undefined &&
    data.AttachedObjectIdentifier !== null
  ) {
    contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AttachObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AttachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AttachPolicyCommandError(output, context);
  }
  const contents: AttachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachPolicyResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AttachPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      response = {
        ...(await deserializeAws_restJson1NotPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AttachToIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AttachToIndexCommandError(output, context);
  }
  const contents: AttachToIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachToIndexResponse",
    AttachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AttachedObjectIdentifier !== undefined &&
    data.AttachedObjectIdentifier !== null
  ) {
    contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AttachToIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IndexedAttributeMissingException":
    case "com.amazonaws.clouddirectory#IndexedAttributeMissingException":
      response = {
        ...(await deserializeAws_restJson1IndexedAttributeMissingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      response = {
        ...(await deserializeAws_restJson1NotIndexExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AttachTypedLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AttachTypedLinkCommandError(output, context);
  }
  const contents: AttachTypedLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachTypedLinkResponse",
    TypedLinkSpecifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.TypedLinkSpecifier !== undefined &&
    data.TypedLinkSpecifier !== null
  ) {
    contents.TypedLinkSpecifier = deserializeAws_restJson1TypedLinkSpecifier(
      data.TypedLinkSpecifier,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AttachTypedLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchReadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchReadCommandError(output, context);
  }
  const contents: BatchReadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchReadResponse",
    Responses: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Responses !== undefined && data.Responses !== null) {
    contents.Responses = deserializeAws_restJson1BatchReadOperationResponseList(
      data.Responses,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchReadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchWriteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchWriteCommandError(output, context);
  }
  const contents: BatchWriteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchWriteResponse",
    Responses: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Responses !== undefined && data.Responses !== null) {
    contents.Responses = deserializeAws_restJson1BatchWriteOperationResponseList(
      data.Responses,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchWriteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BatchWriteException":
    case "com.amazonaws.clouddirectory#BatchWriteException":
      response = {
        ...(await deserializeAws_restJson1BatchWriteExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateDirectoryCommandError(output, context);
  }
  const contents: CreateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectoryResponse",
    AppliedSchemaArn: undefined,
    DirectoryArn: undefined,
    Name: undefined,
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryAlreadyExistsException":
    case "com.amazonaws.clouddirectory#DirectoryAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateFacetCommandError(output, context);
  }
  const contents: CreateFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFacetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateIndexCommandError(output, context);
  }
  const contents: CreateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIndexResponse",
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateObjectCommandError(output, context);
  }
  const contents: CreateObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateObjectResponse",
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSchemaCommandError(output, context);
  }
  const contents: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSchemaResponse",
    SchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateTypedLinkFacetCommandError(
      output,
      context
    );
  }
  const contents: CreateTypedLinkFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTypedLinkFacetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTypedLinkFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteDirectoryCommandError(output, context);
  }
  const contents: DeleteDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectoryResponse",
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      response = {
        ...(await deserializeAws_restJson1DirectoryDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotDisabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotDisabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFacetCommandError(output, context);
  }
  const contents: DeleteFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFacetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetInUseException":
    case "com.amazonaws.clouddirectory#FacetInUseException":
      response = {
        ...(await deserializeAws_restJson1FacetInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteObjectResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotDetachedException":
    case "com.amazonaws.clouddirectory#ObjectNotDetachedException":
      response = {
        ...(await deserializeAws_restJson1ObjectNotDetachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSchemaCommandError(output, context);
  }
  const contents: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSchemaResponse",
    SchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StillContainsLinksException":
    case "com.amazonaws.clouddirectory#StillContainsLinksException":
      response = {
        ...(await deserializeAws_restJson1StillContainsLinksExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteTypedLinkFacetCommandError(
      output,
      context
    );
  }
  const contents: DeleteTypedLinkFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTypedLinkFacetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTypedLinkFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DetachFromIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DetachFromIndexCommandError(output, context);
  }
  const contents: DetachFromIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachFromIndexResponse",
    DetachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DetachedObjectIdentifier !== undefined &&
    data.DetachedObjectIdentifier !== null
  ) {
    contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DetachFromIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      response = {
        ...(await deserializeAws_restJson1NotIndexExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectAlreadyDetachedException":
    case "com.amazonaws.clouddirectory#ObjectAlreadyDetachedException":
      response = {
        ...(await deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DetachObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DetachObjectCommandError(output, context);
  }
  const contents: DetachObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachObjectResponse",
    DetachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DetachedObjectIdentifier !== undefined &&
    data.DetachedObjectIdentifier !== null
  ) {
    contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DetachObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      response = {
        ...(await deserializeAws_restJson1NotNodeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DetachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DetachPolicyCommandError(output, context);
  }
  const contents: DetachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachPolicyResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DetachPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      response = {
        ...(await deserializeAws_restJson1NotPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DetachTypedLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DetachTypedLinkCommandError(output, context);
  }
  const contents: DetachTypedLinkCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DetachTypedLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisableDirectoryCommandError(
      output,
      context
    );
  }
  const contents: DisableDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableDirectoryResponse",
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      response = {
        ...(await deserializeAws_restJson1DirectoryDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1EnableDirectoryCommandError(output, context);
  }
  const contents: EnableDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableDirectoryResponse",
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      response = {
        ...(await deserializeAws_restJson1DirectoryDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppliedSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAppliedSchemaVersionCommandError(
      output,
      context
    );
  }
  const contents: GetAppliedSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppliedSchemaVersionResponse",
    AppliedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppliedSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDirectoryCommandError(output, context);
  }
  const contents: GetDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDirectoryResponse",
    Directory: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Directory !== undefined && data.Directory !== null) {
    contents.Directory = deserializeAws_restJson1Directory(
      data.Directory,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFacetCommandError(output, context);
  }
  const contents: GetFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFacetResponse",
    Facet: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Facet !== undefined && data.Facet !== null) {
    contents.Facet = deserializeAws_restJson1Facet(data.Facet, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetLinkAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetLinkAttributesCommandError(
      output,
      context
    );
  }
  const contents: GetLinkAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLinkAttributesResponse",
    Attributes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(
      data.Attributes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLinkAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetObjectAttributesCommandError(
      output,
      context
    );
  }
  const contents: GetObjectAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetObjectAttributesResponse",
    Attributes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(
      data.Attributes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetObjectInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetObjectInformationCommandError(
      output,
      context
    );
  }
  const contents: GetObjectInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetObjectInformationResponse",
    ObjectIdentifier: undefined,
    SchemaFacets: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  if (data.SchemaFacets !== undefined && data.SchemaFacets !== null) {
    contents.SchemaFacets = deserializeAws_restJson1SchemaFacetList(
      data.SchemaFacets,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetObjectInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSchemaAsJsonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSchemaAsJsonCommandError(output, context);
  }
  const contents: GetSchemaAsJsonCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSchemaAsJsonResponse",
    Document: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Document !== undefined && data.Document !== null) {
    contents.Document = data.Document;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSchemaAsJsonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTypedLinkFacetInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetTypedLinkFacetInformationCommandError(
      output,
      context
    );
  }
  const contents: GetTypedLinkFacetInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTypedLinkFacetInformationResponse",
    IdentityAttributeOrder: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.IdentityAttributeOrder !== undefined &&
    data.IdentityAttributeOrder !== null
  ) {
    contents.IdentityAttributeOrder = deserializeAws_restJson1AttributeNameList(
      data.IdentityAttributeOrder,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTypedLinkFacetInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAppliedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAppliedSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListAppliedSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAppliedSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAppliedSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAttachedIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAttachedIndicesCommandError(
      output,
      context
    );
  }
  const contents: ListAttachedIndicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttachedIndicesResponse",
    IndexAttachments: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IndexAttachments !== undefined && data.IndexAttachments !== null) {
    contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(
      data.IndexAttachments,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAttachedIndicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDevelopmentSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListDevelopmentSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDevelopmentSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDirectoriesCommandError(output, context);
  }
  const contents: ListDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDirectoriesResponse",
    Directories: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Directories !== undefined && data.Directories !== null) {
    contents.Directories = deserializeAws_restJson1DirectoryList(
      data.Directories,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFacetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFacetAttributesCommandError(
      output,
      context
    );
  }
  const contents: ListFacetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFacetAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1FacetAttributeList(
      data.Attributes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFacetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFacetNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFacetNamesCommandError(output, context);
  }
  const contents: ListFacetNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFacetNamesResponse",
    FacetNames: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FacetNames !== undefined && data.FacetNames !== null) {
    contents.FacetNames = deserializeAws_restJson1FacetNameList(
      data.FacetNames,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFacetNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIncomingTypedLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListIncomingTypedLinksCommandError(
      output,
      context
    );
  }
  const contents: ListIncomingTypedLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIncomingTypedLinksResponse",
    LinkSpecifiers: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LinkSpecifiers !== undefined && data.LinkSpecifiers !== null) {
    contents.LinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(
      data.LinkSpecifiers,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIncomingTypedLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListIndexCommandError(output, context);
  }
  const contents: ListIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIndexResponse",
    IndexAttachments: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IndexAttachments !== undefined && data.IndexAttachments !== null) {
    contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(
      data.IndexAttachments,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      response = {
        ...(await deserializeAws_restJson1NotIndexExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListManagedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListManagedSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListManagedSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListManagedSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListManagedSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListObjectAttributesCommandError(
      output,
      context
    );
  }
  const contents: ListObjectAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(
      data.Attributes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListObjectChildrenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListObjectChildrenCommandError(
      output,
      context
    );
  }
  const contents: ListObjectChildrenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectChildrenResponse",
    Children: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Children !== undefined && data.Children !== null) {
    contents.Children = deserializeAws_restJson1LinkNameToObjectIdentifierMap(
      data.Children,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListObjectChildrenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      response = {
        ...(await deserializeAws_restJson1NotNodeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListObjectParentPathsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListObjectParentPathsCommandError(
      output,
      context
    );
  }
  const contents: ListObjectParentPathsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectParentPathsResponse",
    NextToken: undefined,
    PathToObjectIdentifiersList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.PathToObjectIdentifiersList !== undefined &&
    data.PathToObjectIdentifiersList !== null
  ) {
    contents.PathToObjectIdentifiersList = deserializeAws_restJson1PathToObjectIdentifiersList(
      data.PathToObjectIdentifiersList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListObjectParentPathsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListObjectParentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListObjectParentsCommandError(
      output,
      context
    );
  }
  const contents: ListObjectParentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectParentsResponse",
    NextToken: undefined,
    ParentLinks: undefined,
    Parents: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ParentLinks !== undefined && data.ParentLinks !== null) {
    contents.ParentLinks = deserializeAws_restJson1ObjectIdentifierAndLinkNameList(
      data.ParentLinks,
      context
    );
  }
  if (data.Parents !== undefined && data.Parents !== null) {
    contents.Parents = deserializeAws_restJson1ObjectIdentifierToLinkNameMap(
      data.Parents,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListObjectParentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CannotListParentOfRootException":
    case "com.amazonaws.clouddirectory#CannotListParentOfRootException":
      response = {
        ...(await deserializeAws_restJson1CannotListParentOfRootExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListObjectPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListObjectPoliciesCommandError(
      output,
      context
    );
  }
  const contents: ListObjectPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectPoliciesResponse",
    AttachedPolicyIds: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AttachedPolicyIds !== undefined && data.AttachedPolicyIds !== null) {
    contents.AttachedPolicyIds = deserializeAws_restJson1ObjectIdentifierList(
      data.AttachedPolicyIds,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListObjectPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListOutgoingTypedLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListOutgoingTypedLinksCommandError(
      output,
      context
    );
  }
  const contents: ListOutgoingTypedLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOutgoingTypedLinksResponse",
    NextToken: undefined,
    TypedLinkSpecifiers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.TypedLinkSpecifiers !== undefined &&
    data.TypedLinkSpecifiers !== null
  ) {
    contents.TypedLinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(
      data.TypedLinkSpecifiers,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOutgoingTypedLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPolicyAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPolicyAttachmentsCommandError(
      output,
      context
    );
  }
  const contents: ListPolicyAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPolicyAttachmentsResponse",
    NextToken: undefined,
    ObjectIdentifiers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ObjectIdentifiers !== undefined && data.ObjectIdentifiers !== null) {
    contents.ObjectIdentifiers = deserializeAws_restJson1ObjectIdentifierList(
      data.ObjectIdentifiers,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPolicyAttachmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      response = {
        ...(await deserializeAws_restJson1NotPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPublishedSchemaArnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPublishedSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListPublishedSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPublishedSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPublishedSchemaArnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTypedLinkFacetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError(
      output,
      context
    );
  }
  const contents: ListTypedLinkFacetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypedLinkFacetAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1TypedLinkAttributeDefinitionList(
      data.Attributes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTypedLinkFacetNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTypedLinkFacetNamesCommandError(
      output,
      context
    );
  }
  const contents: ListTypedLinkFacetNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypedLinkFacetNamesResponse",
    FacetNames: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FacetNames !== undefined && data.FacetNames !== null) {
    contents.FacetNames = deserializeAws_restJson1TypedLinkNameList(
      data.FacetNames,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTypedLinkFacetNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1LookupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1LookupPolicyCommandError(output, context);
  }
  const contents: LookupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LookupPolicyResponse",
    NextToken: undefined,
    PolicyToPathList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.PolicyToPathList !== undefined && data.PolicyToPathList !== null) {
    contents.PolicyToPathList = deserializeAws_restJson1PolicyToPathList(
      data.PolicyToPathList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1LookupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PublishSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PublishSchemaCommandError(output, context);
  }
  const contents: PublishSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PublishSchemaResponse",
    PublishedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.PublishedSchemaArn !== undefined &&
    data.PublishedSchemaArn !== null
  ) {
    contents.PublishedSchemaArn = data.PublishedSchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PublishSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SchemaAlreadyPublishedException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyPublishedException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutSchemaFromJsonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutSchemaFromJsonCommandError(
      output,
      context
    );
  }
  const contents: PutSchemaFromJsonCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSchemaFromJsonResponse",
    Arn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutSchemaFromJsonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSchemaDocException":
    case "com.amazonaws.clouddirectory#InvalidSchemaDocException":
      response = {
        ...(await deserializeAws_restJson1InvalidSchemaDocExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveFacetFromObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemoveFacetFromObjectCommandError(
      output,
      context
    );
  }
  const contents: RemoveFacetFromObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveFacetFromObjectResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveFacetFromObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFacetCommandError(output, context);
  }
  const contents: UpdateFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFacetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      response = {
        ...(await deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateLinkAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateLinkAttributesCommandError(
      output,
      context
    );
  }
  const contents: UpdateLinkAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLinkAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLinkAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateObjectAttributesCommandError(
      output,
      context
    );
  }
  const contents: UpdateObjectAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateObjectAttributesResponse",
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSchemaCommandError(output, context);
  }
  const contents: UpdateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSchemaResponse",
    SchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTypedLinkFacetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateTypedLinkFacetCommandError(
      output,
      context
    );
  }
  const contents: UpdateTypedLinkFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTypedLinkFacetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTypedLinkFacetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      response = {
        ...(await deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpgradeAppliedSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpgradeAppliedSchemaCommandError(
      output,
      context
    );
  }
  const contents: UpgradeAppliedSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpgradeAppliedSchemaResponse",
    DirectoryArn: undefined,
    UpgradedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  if (data.UpgradedSchemaArn !== undefined && data.UpgradedSchemaArn !== null) {
    contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpgradeAppliedSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      response = {
        ...(await deserializeAws_restJson1IncompatibleSchemaExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpgradePublishedSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpgradePublishedSchemaCommandError(
      output,
      context
    );
  }
  const contents: UpgradePublishedSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpgradePublishedSchemaResponse",
    UpgradedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.UpgradedSchemaArn !== undefined && data.UpgradedSchemaArn !== null) {
    contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpgradePublishedSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      response = {
        ...(await deserializeAws_restJson1IncompatibleSchemaExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1BatchWriteExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchWriteException> => {
  const contents: BatchWriteException = {
    name: "BatchWriteException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Index: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Index !== undefined && data.Index !== null) {
    contents.Index = data.Index;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1CannotListParentOfRootExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotListParentOfRootException> => {
  const contents: CannotListParentOfRootException = {
    name: "CannotListParentOfRootException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryAlreadyExistsException> => {
  const contents: DirectoryAlreadyExistsException = {
    name: "DirectoryAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DirectoryDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryDeletedException> => {
  const contents: DirectoryDeletedException = {
    name: "DirectoryDeletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DirectoryNotDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNotDisabledException> => {
  const contents: DirectoryNotDisabledException = {
    name: "DirectoryNotDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DirectoryNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNotEnabledException> => {
  const contents: DirectoryNotEnabledException = {
    name: "DirectoryNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FacetAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetAlreadyExistsException> => {
  const contents: FacetAlreadyExistsException = {
    name: "FacetAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FacetInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetInUseException> => {
  const contents: FacetInUseException = {
    name: "FacetInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FacetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetNotFoundException> => {
  const contents: FacetNotFoundException = {
    name: "FacetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FacetValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FacetValidationException> => {
  const contents: FacetValidationException = {
    name: "FacetValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1IncompatibleSchemaExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleSchemaException> => {
  const contents: IncompatibleSchemaException = {
    name: "IncompatibleSchemaException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1IndexedAttributeMissingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IndexedAttributeMissingException> => {
  const contents: IndexedAttributeMissingException = {
    name: "IndexedAttributeMissingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidAttachmentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttachmentException> => {
  const contents: InvalidAttachmentException = {
    name: "InvalidAttachmentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidFacetUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFacetUpdateException> => {
  const contents: InvalidFacetUpdateException = {
    name: "InvalidFacetUpdateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuleException> => {
  const contents: InvalidRuleException = {
    name: "InvalidRuleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidSchemaDocExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemaDocException> => {
  const contents: InvalidSchemaDocException = {
    name: "InvalidSchemaDocException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidTaggingRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTaggingRequestException> => {
  const contents: InvalidTaggingRequestException = {
    name: "InvalidTaggingRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LinkNameAlreadyInUseException> => {
  const contents: LinkNameAlreadyInUseException = {
    name: "LinkNameAlreadyInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NotIndexExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotIndexException> => {
  const contents: NotIndexException = {
    name: "NotIndexException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NotNodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotNodeException> => {
  const contents: NotNodeException = {
    name: "NotNodeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NotPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotPolicyException> => {
  const contents: NotPolicyException = {
    name: "NotPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectAlreadyDetachedException> => {
  const contents: ObjectAlreadyDetachedException = {
    name: "ObjectAlreadyDetachedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ObjectNotDetachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotDetachedException> => {
  const contents: ObjectNotDetachedException = {
    name: "ObjectNotDetachedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1RetryableConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RetryableConflictException> => {
  const contents: RetryableConflictException = {
    name: "RetryableConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchemaAlreadyExistsException> => {
  const contents: SchemaAlreadyExistsException = {
    name: "SchemaAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchemaAlreadyPublishedException> => {
  const contents: SchemaAlreadyPublishedException = {
    name: "SchemaAlreadyPublishedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1StillContainsLinksExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StillContainsLinksException> => {
  const contents: StillContainsLinksException = {
    name: "StillContainsLinksException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedIndexTypeException> => {
  const contents: UnsupportedIndexTypeException = {
    name: "UnsupportedIndexTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1AttributeKey = (
  input: AttributeKey,
  context: __SerdeContext
): any => {
  return {
    ...(input.FacetName !== undefined && { FacetName: input.FacetName }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn })
  };
};

const serializeAws_restJson1AttributeKeyAndValue = (
  input: AttributeKeyAndValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && {
      Key: serializeAws_restJson1AttributeKey(input.Key, context)
    }),
    ...(input.Value !== undefined && {
      Value: serializeAws_restJson1TypedAttributeValue(input.Value, context)
    })
  };
};

const serializeAws_restJson1AttributeKeyAndValueList = (
  input: AttributeKeyAndValue[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1AttributeKeyAndValue(entry, context)
  );
};

const serializeAws_restJson1AttributeKeyList = (
  input: AttributeKey[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1AttributeKey(entry, context));
};

const serializeAws_restJson1AttributeNameAndValue = (
  input: AttributeNameAndValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.Value !== undefined && {
      Value: serializeAws_restJson1TypedAttributeValue(input.Value, context)
    })
  };
};

const serializeAws_restJson1AttributeNameAndValueList = (
  input: AttributeNameAndValue[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1AttributeNameAndValue(entry, context)
  );
};

const serializeAws_restJson1AttributeNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1BatchAddFacetToObject = (
  input: BatchAddFacetToObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectAttributeList !== undefined && {
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(
        input.ObjectAttributeList,
        context
      )
    }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context)
    })
  };
};

const serializeAws_restJson1BatchAttachObject = (
  input: BatchAttachObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChildReference !== undefined && {
      ChildReference: serializeAws_restJson1ObjectReference(
        input.ChildReference,
        context
      )
    }),
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchAttachPolicy = (
  input: BatchAttachPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.PolicyReference !== undefined && {
      PolicyReference: serializeAws_restJson1ObjectReference(
        input.PolicyReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchAttachToIndex = (
  input: BatchAttachToIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexReference !== undefined && {
      IndexReference: serializeAws_restJson1ObjectReference(
        input.IndexReference,
        context
      )
    }),
    ...(input.TargetReference !== undefined && {
      TargetReference: serializeAws_restJson1ObjectReference(
        input.TargetReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchAttachTypedLink = (
  input: BatchAttachTypedLink,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1AttributeNameAndValueList(
        input.Attributes,
        context
      )
    }),
    ...(input.SourceObjectReference !== undefined && {
      SourceObjectReference: serializeAws_restJson1ObjectReference(
        input.SourceObjectReference,
        context
      )
    }),
    ...(input.TargetObjectReference !== undefined && {
      TargetObjectReference: serializeAws_restJson1ObjectReference(
        input.TargetObjectReference,
        context
      )
    }),
    ...(input.TypedLinkFacet !== undefined && {
      TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.TypedLinkFacet,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchCreateIndex = (
  input: BatchCreateIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchReferenceName !== undefined && {
      BatchReferenceName: input.BatchReferenceName
    }),
    ...(input.IsUnique !== undefined && { IsUnique: input.IsUnique }),
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList !== undefined && {
      OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(
        input.OrderedIndexedAttributeList,
        context
      )
    }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchCreateObject = (
  input: BatchCreateObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchReferenceName !== undefined && {
      BatchReferenceName: input.BatchReferenceName
    }),
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList !== undefined && {
      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(
        input.ObjectAttributeList,
        context
      )
    }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacetList(
        input.SchemaFacet,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchDeleteObject = (
  input: BatchDeleteObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchDetachFromIndex = (
  input: BatchDetachFromIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexReference !== undefined && {
      IndexReference: serializeAws_restJson1ObjectReference(
        input.IndexReference,
        context
      )
    }),
    ...(input.TargetReference !== undefined && {
      TargetReference: serializeAws_restJson1ObjectReference(
        input.TargetReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchDetachObject = (
  input: BatchDetachObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchReferenceName !== undefined && {
      BatchReferenceName: input.BatchReferenceName
    }),
    ...(input.LinkName !== undefined && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined && {
      ParentReference: serializeAws_restJson1ObjectReference(
        input.ParentReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchDetachPolicy = (
  input: BatchDetachPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.PolicyReference !== undefined && {
      PolicyReference: serializeAws_restJson1ObjectReference(
        input.PolicyReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchDetachTypedLink = (
  input: BatchDetachTypedLink,
  context: __SerdeContext
): any => {
  return {
    ...(input.TypedLinkSpecifier !== undefined && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(
        input.TypedLinkSpecifier,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchGetLinkAttributes = (
  input: BatchGetLinkAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeNames !== undefined && {
      AttributeNames: serializeAws_restJson1AttributeNameList(
        input.AttributeNames,
        context
      )
    }),
    ...(input.TypedLinkSpecifier !== undefined && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(
        input.TypedLinkSpecifier,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchGetObjectAttributes = (
  input: BatchGetObjectAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeNames !== undefined && {
      AttributeNames: serializeAws_restJson1AttributeNameList(
        input.AttributeNames,
        context
      )
    }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context)
    })
  };
};

const serializeAws_restJson1BatchGetObjectInformation = (
  input: BatchGetObjectInformation,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListAttachedIndices = (
  input: BatchListAttachedIndices,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TargetReference !== undefined && {
      TargetReference: serializeAws_restJson1ObjectReference(
        input.TargetReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListIncomingTypedLinks = (
  input: BatchListIncomingTypedLinks,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterAttributeRanges !== undefined && {
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
        input.FilterAttributeRanges,
        context
      )
    }),
    ...(input.FilterTypedLink !== undefined && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.FilterTypedLink,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListIndex = (
  input: BatchListIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexReference !== undefined && {
      IndexReference: serializeAws_restJson1ObjectReference(
        input.IndexReference,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues !== undefined && {
      RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(
        input.RangesOnIndexedValues,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListObjectAttributes = (
  input: BatchListObjectAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.FacetFilter !== undefined && {
      FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListObjectChildren = (
  input: BatchListObjectChildren,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListObjectParentPaths = (
  input: BatchListObjectParentPaths,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListObjectParents = (
  input: BatchListObjectParents,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListObjectPolicies = (
  input: BatchListObjectPolicies,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListOutgoingTypedLinks = (
  input: BatchListOutgoingTypedLinks,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterAttributeRanges !== undefined && {
      FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
        input.FilterAttributeRanges,
        context
      )
    }),
    ...(input.FilterTypedLink !== undefined && {
      FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.FilterTypedLink,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchListPolicyAttachments = (
  input: BatchListPolicyAttachments,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PolicyReference !== undefined && {
      PolicyReference: serializeAws_restJson1ObjectReference(
        input.PolicyReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchLookupPolicy = (
  input: BatchLookupPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchReadOperation = (
  input: BatchReadOperation,
  context: __SerdeContext
): any => {
  return {
    ...(input.GetLinkAttributes !== undefined && {
      GetLinkAttributes: serializeAws_restJson1BatchGetLinkAttributes(
        input.GetLinkAttributes,
        context
      )
    }),
    ...(input.GetObjectAttributes !== undefined && {
      GetObjectAttributes: serializeAws_restJson1BatchGetObjectAttributes(
        input.GetObjectAttributes,
        context
      )
    }),
    ...(input.GetObjectInformation !== undefined && {
      GetObjectInformation: serializeAws_restJson1BatchGetObjectInformation(
        input.GetObjectInformation,
        context
      )
    }),
    ...(input.ListAttachedIndices !== undefined && {
      ListAttachedIndices: serializeAws_restJson1BatchListAttachedIndices(
        input.ListAttachedIndices,
        context
      )
    }),
    ...(input.ListIncomingTypedLinks !== undefined && {
      ListIncomingTypedLinks: serializeAws_restJson1BatchListIncomingTypedLinks(
        input.ListIncomingTypedLinks,
        context
      )
    }),
    ...(input.ListIndex !== undefined && {
      ListIndex: serializeAws_restJson1BatchListIndex(input.ListIndex, context)
    }),
    ...(input.ListObjectAttributes !== undefined && {
      ListObjectAttributes: serializeAws_restJson1BatchListObjectAttributes(
        input.ListObjectAttributes,
        context
      )
    }),
    ...(input.ListObjectChildren !== undefined && {
      ListObjectChildren: serializeAws_restJson1BatchListObjectChildren(
        input.ListObjectChildren,
        context
      )
    }),
    ...(input.ListObjectParentPaths !== undefined && {
      ListObjectParentPaths: serializeAws_restJson1BatchListObjectParentPaths(
        input.ListObjectParentPaths,
        context
      )
    }),
    ...(input.ListObjectParents !== undefined && {
      ListObjectParents: serializeAws_restJson1BatchListObjectParents(
        input.ListObjectParents,
        context
      )
    }),
    ...(input.ListObjectPolicies !== undefined && {
      ListObjectPolicies: serializeAws_restJson1BatchListObjectPolicies(
        input.ListObjectPolicies,
        context
      )
    }),
    ...(input.ListOutgoingTypedLinks !== undefined && {
      ListOutgoingTypedLinks: serializeAws_restJson1BatchListOutgoingTypedLinks(
        input.ListOutgoingTypedLinks,
        context
      )
    }),
    ...(input.ListPolicyAttachments !== undefined && {
      ListPolicyAttachments: serializeAws_restJson1BatchListPolicyAttachments(
        input.ListPolicyAttachments,
        context
      )
    }),
    ...(input.LookupPolicy !== undefined && {
      LookupPolicy: serializeAws_restJson1BatchLookupPolicy(
        input.LookupPolicy,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchReadOperationList = (
  input: BatchReadOperation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1BatchReadOperation(entry, context)
  );
};

const serializeAws_restJson1BatchRemoveFacetFromObject = (
  input: BatchRemoveFacetFromObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    }),
    ...(input.SchemaFacet !== undefined && {
      SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context)
    })
  };
};

const serializeAws_restJson1BatchUpdateLinkAttributes = (
  input: BatchUpdateLinkAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.TypedLinkSpecifier !== undefined && {
      TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(
        input.TypedLinkSpecifier,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchUpdateObjectAttributes = (
  input: BatchUpdateObjectAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.ObjectReference !== undefined && {
      ObjectReference: serializeAws_restJson1ObjectReference(
        input.ObjectReference,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchWriteOperation = (
  input: BatchWriteOperation,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddFacetToObject !== undefined && {
      AddFacetToObject: serializeAws_restJson1BatchAddFacetToObject(
        input.AddFacetToObject,
        context
      )
    }),
    ...(input.AttachObject !== undefined && {
      AttachObject: serializeAws_restJson1BatchAttachObject(
        input.AttachObject,
        context
      )
    }),
    ...(input.AttachPolicy !== undefined && {
      AttachPolicy: serializeAws_restJson1BatchAttachPolicy(
        input.AttachPolicy,
        context
      )
    }),
    ...(input.AttachToIndex !== undefined && {
      AttachToIndex: serializeAws_restJson1BatchAttachToIndex(
        input.AttachToIndex,
        context
      )
    }),
    ...(input.AttachTypedLink !== undefined && {
      AttachTypedLink: serializeAws_restJson1BatchAttachTypedLink(
        input.AttachTypedLink,
        context
      )
    }),
    ...(input.CreateIndex !== undefined && {
      CreateIndex: serializeAws_restJson1BatchCreateIndex(
        input.CreateIndex,
        context
      )
    }),
    ...(input.CreateObject !== undefined && {
      CreateObject: serializeAws_restJson1BatchCreateObject(
        input.CreateObject,
        context
      )
    }),
    ...(input.DeleteObject !== undefined && {
      DeleteObject: serializeAws_restJson1BatchDeleteObject(
        input.DeleteObject,
        context
      )
    }),
    ...(input.DetachFromIndex !== undefined && {
      DetachFromIndex: serializeAws_restJson1BatchDetachFromIndex(
        input.DetachFromIndex,
        context
      )
    }),
    ...(input.DetachObject !== undefined && {
      DetachObject: serializeAws_restJson1BatchDetachObject(
        input.DetachObject,
        context
      )
    }),
    ...(input.DetachPolicy !== undefined && {
      DetachPolicy: serializeAws_restJson1BatchDetachPolicy(
        input.DetachPolicy,
        context
      )
    }),
    ...(input.DetachTypedLink !== undefined && {
      DetachTypedLink: serializeAws_restJson1BatchDetachTypedLink(
        input.DetachTypedLink,
        context
      )
    }),
    ...(input.RemoveFacetFromObject !== undefined && {
      RemoveFacetFromObject: serializeAws_restJson1BatchRemoveFacetFromObject(
        input.RemoveFacetFromObject,
        context
      )
    }),
    ...(input.UpdateLinkAttributes !== undefined && {
      UpdateLinkAttributes: serializeAws_restJson1BatchUpdateLinkAttributes(
        input.UpdateLinkAttributes,
        context
      )
    }),
    ...(input.UpdateObjectAttributes !== undefined && {
      UpdateObjectAttributes: serializeAws_restJson1BatchUpdateObjectAttributes(
        input.UpdateObjectAttributes,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchWriteOperationList = (
  input: BatchWriteOperation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1BatchWriteOperation(entry, context)
  );
};

const serializeAws_restJson1FacetAttribute = (
  input: FacetAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeDefinition !== undefined && {
      AttributeDefinition: serializeAws_restJson1FacetAttributeDefinition(
        input.AttributeDefinition,
        context
      )
    }),
    ...(input.AttributeReference !== undefined && {
      AttributeReference: serializeAws_restJson1FacetAttributeReference(
        input.AttributeReference,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RequiredBehavior !== undefined && {
      RequiredBehavior: input.RequiredBehavior
    })
  };
};

const serializeAws_restJson1FacetAttributeDefinition = (
  input: FacetAttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue !== undefined && {
      DefaultValue: serializeAws_restJson1TypedAttributeValue(
        input.DefaultValue,
        context
      )
    }),
    ...(input.IsImmutable !== undefined && { IsImmutable: input.IsImmutable }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_restJson1RuleMap(input.Rules, context)
    }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_restJson1FacetAttributeList = (
  input: FacetAttribute[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1FacetAttribute(entry, context)
  );
};

const serializeAws_restJson1FacetAttributeReference = (
  input: FacetAttributeReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetAttributeName !== undefined && {
      TargetAttributeName: input.TargetAttributeName
    }),
    ...(input.TargetFacetName !== undefined && {
      TargetFacetName: input.TargetFacetName
    })
  };
};

const serializeAws_restJson1FacetAttributeUpdate = (
  input: FacetAttributeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Attribute !== undefined && {
      Attribute: serializeAws_restJson1FacetAttribute(input.Attribute, context)
    })
  };
};

const serializeAws_restJson1FacetAttributeUpdateList = (
  input: FacetAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1FacetAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1LinkAttributeAction = (
  input: LinkAttributeAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeActionType !== undefined && {
      AttributeActionType: input.AttributeActionType
    }),
    ...(input.AttributeUpdateValue !== undefined && {
      AttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(
        input.AttributeUpdateValue,
        context
      )
    })
  };
};

const serializeAws_restJson1LinkAttributeUpdate = (
  input: LinkAttributeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeAction !== undefined && {
      AttributeAction: serializeAws_restJson1LinkAttributeAction(
        input.AttributeAction,
        context
      )
    }),
    ...(input.AttributeKey !== undefined && {
      AttributeKey: serializeAws_restJson1AttributeKey(
        input.AttributeKey,
        context
      )
    })
  };
};

const serializeAws_restJson1LinkAttributeUpdateList = (
  input: LinkAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1LinkAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1ObjectAttributeAction = (
  input: ObjectAttributeAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectAttributeActionType !== undefined && {
      ObjectAttributeActionType: input.ObjectAttributeActionType
    }),
    ...(input.ObjectAttributeUpdateValue !== undefined && {
      ObjectAttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(
        input.ObjectAttributeUpdateValue,
        context
      )
    })
  };
};

const serializeAws_restJson1ObjectAttributeRange = (
  input: ObjectAttributeRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeKey !== undefined && {
      AttributeKey: serializeAws_restJson1AttributeKey(
        input.AttributeKey,
        context
      )
    }),
    ...(input.Range !== undefined && {
      Range: serializeAws_restJson1TypedAttributeValueRange(
        input.Range,
        context
      )
    })
  };
};

const serializeAws_restJson1ObjectAttributeRangeList = (
  input: ObjectAttributeRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ObjectAttributeRange(entry, context)
  );
};

const serializeAws_restJson1ObjectAttributeUpdate = (
  input: ObjectAttributeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObjectAttributeAction !== undefined && {
      ObjectAttributeAction: serializeAws_restJson1ObjectAttributeAction(
        input.ObjectAttributeAction,
        context
      )
    }),
    ...(input.ObjectAttributeKey !== undefined && {
      ObjectAttributeKey: serializeAws_restJson1AttributeKey(
        input.ObjectAttributeKey,
        context
      )
    })
  };
};

const serializeAws_restJson1ObjectAttributeUpdateList = (
  input: ObjectAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ObjectAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1ObjectReference = (
  input: ObjectReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.Selector !== undefined && { Selector: input.Selector })
  };
};

const serializeAws_restJson1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_restJson1RuleParameterMap(
        input.Parameters,
        context
      )
    }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_restJson1RuleMap = (
  input: { [key: string]: Rule },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: Rule }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1Rule(value, context)
    }),
    {}
  );
};

const serializeAws_restJson1RuleParameterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1SchemaFacet = (
  input: SchemaFacet,
  context: __SerdeContext
): any => {
  return {
    ...(input.FacetName !== undefined && { FacetName: input.FacetName }),
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn })
  };
};

const serializeAws_restJson1SchemaFacetList = (
  input: SchemaFacet[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1SchemaFacet(entry, context));
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1TypedAttributeValue = (
  input: TypedAttributeValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.BinaryValue !== undefined && {
      BinaryValue: context.base64Encoder(input.BinaryValue)
    }),
    ...(input.BooleanValue !== undefined && {
      BooleanValue: input.BooleanValue
    }),
    ...(input.DatetimeValue !== undefined && {
      DatetimeValue: Math.round(input.DatetimeValue.getTime() / 1000)
    }),
    ...(input.NumberValue !== undefined && { NumberValue: input.NumberValue }),
    ...(input.StringValue !== undefined && { StringValue: input.StringValue })
  };
};

const serializeAws_restJson1TypedAttributeValueRange = (
  input: TypedAttributeValueRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndMode !== undefined && { EndMode: input.EndMode }),
    ...(input.EndValue !== undefined && {
      EndValue: serializeAws_restJson1TypedAttributeValue(
        input.EndValue,
        context
      )
    }),
    ...(input.StartMode !== undefined && { StartMode: input.StartMode }),
    ...(input.StartValue !== undefined && {
      StartValue: serializeAws_restJson1TypedAttributeValue(
        input.StartValue,
        context
      )
    })
  };
};

const serializeAws_restJson1TypedLinkAttributeDefinition = (
  input: TypedLinkAttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue !== undefined && {
      DefaultValue: serializeAws_restJson1TypedAttributeValue(
        input.DefaultValue,
        context
      )
    }),
    ...(input.IsImmutable !== undefined && { IsImmutable: input.IsImmutable }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RequiredBehavior !== undefined && {
      RequiredBehavior: input.RequiredBehavior
    }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_restJson1RuleMap(input.Rules, context)
    }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_restJson1TypedLinkAttributeDefinitionList = (
  input: TypedLinkAttributeDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1TypedLinkAttributeDefinition(entry, context)
  );
};

const serializeAws_restJson1TypedLinkAttributeRange = (
  input: TypedLinkAttributeRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.Range !== undefined && {
      Range: serializeAws_restJson1TypedAttributeValueRange(
        input.Range,
        context
      )
    })
  };
};

const serializeAws_restJson1TypedLinkAttributeRangeList = (
  input: TypedLinkAttributeRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1TypedLinkAttributeRange(entry, context)
  );
};

const serializeAws_restJson1TypedLinkFacet = (
  input: TypedLinkFacet,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1TypedLinkAttributeDefinitionList(
        input.Attributes,
        context
      )
    }),
    ...(input.IdentityAttributeOrder !== undefined && {
      IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(
        input.IdentityAttributeOrder,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_restJson1TypedLinkFacetAttributeUpdate = (
  input: TypedLinkFacetAttributeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Attribute !== undefined && {
      Attribute: serializeAws_restJson1TypedLinkAttributeDefinition(
        input.Attribute,
        context
      )
    })
  };
};

const serializeAws_restJson1TypedLinkFacetAttributeUpdateList = (
  input: TypedLinkFacetAttributeUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1TypedLinkFacetAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1TypedLinkSchemaAndFacetName = (
  input: TypedLinkSchemaAndFacetName,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaArn !== undefined && { SchemaArn: input.SchemaArn }),
    ...(input.TypedLinkName !== undefined && {
      TypedLinkName: input.TypedLinkName
    })
  };
};

const serializeAws_restJson1TypedLinkSpecifier = (
  input: TypedLinkSpecifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityAttributeValues !== undefined && {
      IdentityAttributeValues: serializeAws_restJson1AttributeNameAndValueList(
        input.IdentityAttributeValues,
        context
      )
    }),
    ...(input.SourceObjectReference !== undefined && {
      SourceObjectReference: serializeAws_restJson1ObjectReference(
        input.SourceObjectReference,
        context
      )
    }),
    ...(input.TargetObjectReference !== undefined && {
      TargetObjectReference: serializeAws_restJson1ObjectReference(
        input.TargetObjectReference,
        context
      )
    }),
    ...(input.TypedLinkFacet !== undefined && {
      TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(
        input.TypedLinkFacet,
        context
      )
    })
  };
};

const deserializeAws_restJson1Arns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1AttributeKey = (
  output: any,
  context: __SerdeContext
): AttributeKey => {
  return {
    __type: "AttributeKey",
    FacetName:
      output.FacetName !== undefined && output.FacetName !== null
        ? output.FacetName
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    SchemaArn:
      output.SchemaArn !== undefined && output.SchemaArn !== null
        ? output.SchemaArn
        : undefined
  } as any;
};

const deserializeAws_restJson1AttributeKeyAndValue = (
  output: any,
  context: __SerdeContext
): AttributeKeyAndValue => {
  return {
    __type: "AttributeKeyAndValue",
    Key:
      output.Key !== undefined && output.Key !== null
        ? deserializeAws_restJson1AttributeKey(output.Key, context)
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.Value, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AttributeKeyAndValueList = (
  output: any,
  context: __SerdeContext
): AttributeKeyAndValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AttributeKeyAndValue(entry, context)
  );
};

const deserializeAws_restJson1AttributeNameAndValue = (
  output: any,
  context: __SerdeContext
): AttributeNameAndValue => {
  return {
    __type: "AttributeNameAndValue",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null
        ? output.AttributeName
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.Value, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AttributeNameAndValueList = (
  output: any,
  context: __SerdeContext
): AttributeNameAndValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AttributeNameAndValue(entry, context)
  );
};

const deserializeAws_restJson1AttributeNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1BatchAddFacetToObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchAddFacetToObjectResponse => {
  return {
    __type: "BatchAddFacetToObjectResponse"
  } as any;
};

const deserializeAws_restJson1BatchAttachObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachObjectResponse => {
  return {
    __type: "BatchAttachObjectResponse",
    attachedObjectIdentifier:
      output.attachedObjectIdentifier !== undefined &&
      output.attachedObjectIdentifier !== null
        ? output.attachedObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchAttachPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachPolicyResponse => {
  return {
    __type: "BatchAttachPolicyResponse"
  } as any;
};

const deserializeAws_restJson1BatchAttachToIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachToIndexResponse => {
  return {
    __type: "BatchAttachToIndexResponse",
    AttachedObjectIdentifier:
      output.AttachedObjectIdentifier !== undefined &&
      output.AttachedObjectIdentifier !== null
        ? output.AttachedObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchAttachTypedLinkResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachTypedLinkResponse => {
  return {
    __type: "BatchAttachTypedLinkResponse",
    TypedLinkSpecifier:
      output.TypedLinkSpecifier !== undefined &&
      output.TypedLinkSpecifier !== null
        ? deserializeAws_restJson1TypedLinkSpecifier(
            output.TypedLinkSpecifier,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchCreateIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateIndexResponse => {
  return {
    __type: "BatchCreateIndexResponse",
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchCreateObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateObjectResponse => {
  return {
    __type: "BatchCreateObjectResponse",
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchDeleteObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteObjectResponse => {
  return {
    __type: "BatchDeleteObjectResponse"
  } as any;
};

const deserializeAws_restJson1BatchDetachFromIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachFromIndexResponse => {
  return {
    __type: "BatchDetachFromIndexResponse",
    DetachedObjectIdentifier:
      output.DetachedObjectIdentifier !== undefined &&
      output.DetachedObjectIdentifier !== null
        ? output.DetachedObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchDetachObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachObjectResponse => {
  return {
    __type: "BatchDetachObjectResponse",
    detachedObjectIdentifier:
      output.detachedObjectIdentifier !== undefined &&
      output.detachedObjectIdentifier !== null
        ? output.detachedObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchDetachPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachPolicyResponse => {
  return {
    __type: "BatchDetachPolicyResponse"
  } as any;
};

const deserializeAws_restJson1BatchDetachTypedLinkResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachTypedLinkResponse => {
  return {
    __type: "BatchDetachTypedLinkResponse"
  } as any;
};

const deserializeAws_restJson1BatchGetLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetLinkAttributesResponse => {
  return {
    __type: "BatchGetLinkAttributesResponse",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(
            output.Attributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchGetObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectAttributesResponse => {
  return {
    __type: "BatchGetObjectAttributesResponse",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(
            output.Attributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchGetObjectInformationResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectInformationResponse => {
  return {
    __type: "BatchGetObjectInformationResponse",
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined,
    SchemaFacets:
      output.SchemaFacets !== undefined && output.SchemaFacets !== null
        ? deserializeAws_restJson1SchemaFacetList(output.SchemaFacets, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListAttachedIndicesResponse = (
  output: any,
  context: __SerdeContext
): BatchListAttachedIndicesResponse => {
  return {
    __type: "BatchListAttachedIndicesResponse",
    IndexAttachments:
      output.IndexAttachments !== undefined && output.IndexAttachments !== null
        ? deserializeAws_restJson1IndexAttachmentList(
            output.IndexAttachments,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListIncomingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListIncomingTypedLinksResponse => {
  return {
    __type: "BatchListIncomingTypedLinksResponse",
    LinkSpecifiers:
      output.LinkSpecifiers !== undefined && output.LinkSpecifiers !== null
        ? deserializeAws_restJson1TypedLinkSpecifierList(
            output.LinkSpecifiers,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchListIndexResponse => {
  return {
    __type: "BatchListIndexResponse",
    IndexAttachments:
      output.IndexAttachments !== undefined && output.IndexAttachments !== null
        ? deserializeAws_restJson1IndexAttachmentList(
            output.IndexAttachments,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectAttributesResponse => {
  return {
    __type: "BatchListObjectAttributesResponse",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(
            output.Attributes,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListObjectChildrenResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectChildrenResponse => {
  return {
    __type: "BatchListObjectChildrenResponse",
    Children:
      output.Children !== undefined && output.Children !== null
        ? deserializeAws_restJson1LinkNameToObjectIdentifierMap(
            output.Children,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListObjectParentPathsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentPathsResponse => {
  return {
    __type: "BatchListObjectParentPathsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    PathToObjectIdentifiersList:
      output.PathToObjectIdentifiersList !== undefined &&
      output.PathToObjectIdentifiersList !== null
        ? deserializeAws_restJson1PathToObjectIdentifiersList(
            output.PathToObjectIdentifiersList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListObjectParentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentsResponse => {
  return {
    __type: "BatchListObjectParentsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ParentLinks:
      output.ParentLinks !== undefined && output.ParentLinks !== null
        ? deserializeAws_restJson1ObjectIdentifierAndLinkNameList(
            output.ParentLinks,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListObjectPoliciesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectPoliciesResponse => {
  return {
    __type: "BatchListObjectPoliciesResponse",
    AttachedPolicyIds:
      output.AttachedPolicyIds !== undefined &&
      output.AttachedPolicyIds !== null
        ? deserializeAws_restJson1ObjectIdentifierList(
            output.AttachedPolicyIds,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListOutgoingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListOutgoingTypedLinksResponse => {
  return {
    __type: "BatchListOutgoingTypedLinksResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    TypedLinkSpecifiers:
      output.TypedLinkSpecifiers !== undefined &&
      output.TypedLinkSpecifiers !== null
        ? deserializeAws_restJson1TypedLinkSpecifierList(
            output.TypedLinkSpecifiers,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchListPolicyAttachmentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListPolicyAttachmentsResponse => {
  return {
    __type: "BatchListPolicyAttachmentsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ObjectIdentifiers:
      output.ObjectIdentifiers !== undefined &&
      output.ObjectIdentifiers !== null
        ? deserializeAws_restJson1ObjectIdentifierList(
            output.ObjectIdentifiers,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchLookupPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchLookupPolicyResponse => {
  return {
    __type: "BatchLookupPolicyResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    PolicyToPathList:
      output.PolicyToPathList !== undefined && output.PolicyToPathList !== null
        ? deserializeAws_restJson1PolicyToPathList(
            output.PolicyToPathList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchReadException = (
  output: any,
  context: __SerdeContext
): BatchReadException => {
  return {
    __type: "BatchReadException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchReadOperationResponse = (
  output: any,
  context: __SerdeContext
): BatchReadOperationResponse => {
  return {
    __type: "BatchReadOperationResponse",
    ExceptionResponse:
      output.ExceptionResponse !== undefined &&
      output.ExceptionResponse !== null
        ? deserializeAws_restJson1BatchReadException(
            output.ExceptionResponse,
            context
          )
        : undefined,
    SuccessfulResponse:
      output.SuccessfulResponse !== undefined &&
      output.SuccessfulResponse !== null
        ? deserializeAws_restJson1BatchReadSuccessfulResponse(
            output.SuccessfulResponse,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchReadOperationResponseList = (
  output: any,
  context: __SerdeContext
): BatchReadOperationResponse[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1BatchReadOperationResponse(entry, context)
  );
};

const deserializeAws_restJson1BatchReadSuccessfulResponse = (
  output: any,
  context: __SerdeContext
): BatchReadSuccessfulResponse => {
  return {
    __type: "BatchReadSuccessfulResponse",
    GetLinkAttributes:
      output.GetLinkAttributes !== undefined &&
      output.GetLinkAttributes !== null
        ? deserializeAws_restJson1BatchGetLinkAttributesResponse(
            output.GetLinkAttributes,
            context
          )
        : undefined,
    GetObjectAttributes:
      output.GetObjectAttributes !== undefined &&
      output.GetObjectAttributes !== null
        ? deserializeAws_restJson1BatchGetObjectAttributesResponse(
            output.GetObjectAttributes,
            context
          )
        : undefined,
    GetObjectInformation:
      output.GetObjectInformation !== undefined &&
      output.GetObjectInformation !== null
        ? deserializeAws_restJson1BatchGetObjectInformationResponse(
            output.GetObjectInformation,
            context
          )
        : undefined,
    ListAttachedIndices:
      output.ListAttachedIndices !== undefined &&
      output.ListAttachedIndices !== null
        ? deserializeAws_restJson1BatchListAttachedIndicesResponse(
            output.ListAttachedIndices,
            context
          )
        : undefined,
    ListIncomingTypedLinks:
      output.ListIncomingTypedLinks !== undefined &&
      output.ListIncomingTypedLinks !== null
        ? deserializeAws_restJson1BatchListIncomingTypedLinksResponse(
            output.ListIncomingTypedLinks,
            context
          )
        : undefined,
    ListIndex:
      output.ListIndex !== undefined && output.ListIndex !== null
        ? deserializeAws_restJson1BatchListIndexResponse(
            output.ListIndex,
            context
          )
        : undefined,
    ListObjectAttributes:
      output.ListObjectAttributes !== undefined &&
      output.ListObjectAttributes !== null
        ? deserializeAws_restJson1BatchListObjectAttributesResponse(
            output.ListObjectAttributes,
            context
          )
        : undefined,
    ListObjectChildren:
      output.ListObjectChildren !== undefined &&
      output.ListObjectChildren !== null
        ? deserializeAws_restJson1BatchListObjectChildrenResponse(
            output.ListObjectChildren,
            context
          )
        : undefined,
    ListObjectParentPaths:
      output.ListObjectParentPaths !== undefined &&
      output.ListObjectParentPaths !== null
        ? deserializeAws_restJson1BatchListObjectParentPathsResponse(
            output.ListObjectParentPaths,
            context
          )
        : undefined,
    ListObjectParents:
      output.ListObjectParents !== undefined &&
      output.ListObjectParents !== null
        ? deserializeAws_restJson1BatchListObjectParentsResponse(
            output.ListObjectParents,
            context
          )
        : undefined,
    ListObjectPolicies:
      output.ListObjectPolicies !== undefined &&
      output.ListObjectPolicies !== null
        ? deserializeAws_restJson1BatchListObjectPoliciesResponse(
            output.ListObjectPolicies,
            context
          )
        : undefined,
    ListOutgoingTypedLinks:
      output.ListOutgoingTypedLinks !== undefined &&
      output.ListOutgoingTypedLinks !== null
        ? deserializeAws_restJson1BatchListOutgoingTypedLinksResponse(
            output.ListOutgoingTypedLinks,
            context
          )
        : undefined,
    ListPolicyAttachments:
      output.ListPolicyAttachments !== undefined &&
      output.ListPolicyAttachments !== null
        ? deserializeAws_restJson1BatchListPolicyAttachmentsResponse(
            output.ListPolicyAttachments,
            context
          )
        : undefined,
    LookupPolicy:
      output.LookupPolicy !== undefined && output.LookupPolicy !== null
        ? deserializeAws_restJson1BatchLookupPolicyResponse(
            output.LookupPolicy,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchRemoveFacetFromObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchRemoveFacetFromObjectResponse => {
  return {
    __type: "BatchRemoveFacetFromObjectResponse"
  } as any;
};

const deserializeAws_restJson1BatchUpdateLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateLinkAttributesResponse => {
  return {
    __type: "BatchUpdateLinkAttributesResponse"
  } as any;
};

const deserializeAws_restJson1BatchUpdateObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateObjectAttributesResponse => {
  return {
    __type: "BatchUpdateObjectAttributesResponse",
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchWriteOperationResponse = (
  output: any,
  context: __SerdeContext
): BatchWriteOperationResponse => {
  return {
    __type: "BatchWriteOperationResponse",
    AddFacetToObject:
      output.AddFacetToObject !== undefined && output.AddFacetToObject !== null
        ? deserializeAws_restJson1BatchAddFacetToObjectResponse(
            output.AddFacetToObject,
            context
          )
        : undefined,
    AttachObject:
      output.AttachObject !== undefined && output.AttachObject !== null
        ? deserializeAws_restJson1BatchAttachObjectResponse(
            output.AttachObject,
            context
          )
        : undefined,
    AttachPolicy:
      output.AttachPolicy !== undefined && output.AttachPolicy !== null
        ? deserializeAws_restJson1BatchAttachPolicyResponse(
            output.AttachPolicy,
            context
          )
        : undefined,
    AttachToIndex:
      output.AttachToIndex !== undefined && output.AttachToIndex !== null
        ? deserializeAws_restJson1BatchAttachToIndexResponse(
            output.AttachToIndex,
            context
          )
        : undefined,
    AttachTypedLink:
      output.AttachTypedLink !== undefined && output.AttachTypedLink !== null
        ? deserializeAws_restJson1BatchAttachTypedLinkResponse(
            output.AttachTypedLink,
            context
          )
        : undefined,
    CreateIndex:
      output.CreateIndex !== undefined && output.CreateIndex !== null
        ? deserializeAws_restJson1BatchCreateIndexResponse(
            output.CreateIndex,
            context
          )
        : undefined,
    CreateObject:
      output.CreateObject !== undefined && output.CreateObject !== null
        ? deserializeAws_restJson1BatchCreateObjectResponse(
            output.CreateObject,
            context
          )
        : undefined,
    DeleteObject:
      output.DeleteObject !== undefined && output.DeleteObject !== null
        ? deserializeAws_restJson1BatchDeleteObjectResponse(
            output.DeleteObject,
            context
          )
        : undefined,
    DetachFromIndex:
      output.DetachFromIndex !== undefined && output.DetachFromIndex !== null
        ? deserializeAws_restJson1BatchDetachFromIndexResponse(
            output.DetachFromIndex,
            context
          )
        : undefined,
    DetachObject:
      output.DetachObject !== undefined && output.DetachObject !== null
        ? deserializeAws_restJson1BatchDetachObjectResponse(
            output.DetachObject,
            context
          )
        : undefined,
    DetachPolicy:
      output.DetachPolicy !== undefined && output.DetachPolicy !== null
        ? deserializeAws_restJson1BatchDetachPolicyResponse(
            output.DetachPolicy,
            context
          )
        : undefined,
    DetachTypedLink:
      output.DetachTypedLink !== undefined && output.DetachTypedLink !== null
        ? deserializeAws_restJson1BatchDetachTypedLinkResponse(
            output.DetachTypedLink,
            context
          )
        : undefined,
    RemoveFacetFromObject:
      output.RemoveFacetFromObject !== undefined &&
      output.RemoveFacetFromObject !== null
        ? deserializeAws_restJson1BatchRemoveFacetFromObjectResponse(
            output.RemoveFacetFromObject,
            context
          )
        : undefined,
    UpdateLinkAttributes:
      output.UpdateLinkAttributes !== undefined &&
      output.UpdateLinkAttributes !== null
        ? deserializeAws_restJson1BatchUpdateLinkAttributesResponse(
            output.UpdateLinkAttributes,
            context
          )
        : undefined,
    UpdateObjectAttributes:
      output.UpdateObjectAttributes !== undefined &&
      output.UpdateObjectAttributes !== null
        ? deserializeAws_restJson1BatchUpdateObjectAttributesResponse(
            output.UpdateObjectAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchWriteOperationResponseList = (
  output: any,
  context: __SerdeContext
): BatchWriteOperationResponse[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1BatchWriteOperationResponse(entry, context)
  );
};

const deserializeAws_restJson1Directory = (
  output: any,
  context: __SerdeContext
): Directory => {
  return {
    __type: "Directory",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    DirectoryArn:
      output.DirectoryArn !== undefined && output.DirectoryArn !== null
        ? output.DirectoryArn
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_restJson1DirectoryList = (
  output: any,
  context: __SerdeContext
): Directory[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Directory(entry, context)
  );
};

const deserializeAws_restJson1Facet = (
  output: any,
  context: __SerdeContext
): Facet => {
  return {
    __type: "Facet",
    FacetStyle:
      output.FacetStyle !== undefined && output.FacetStyle !== null
        ? output.FacetStyle
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ObjectType:
      output.ObjectType !== undefined && output.ObjectType !== null
        ? output.ObjectType
        : undefined
  } as any;
};

const deserializeAws_restJson1FacetAttribute = (
  output: any,
  context: __SerdeContext
): FacetAttribute => {
  return {
    __type: "FacetAttribute",
    AttributeDefinition:
      output.AttributeDefinition !== undefined &&
      output.AttributeDefinition !== null
        ? deserializeAws_restJson1FacetAttributeDefinition(
            output.AttributeDefinition,
            context
          )
        : undefined,
    AttributeReference:
      output.AttributeReference !== undefined &&
      output.AttributeReference !== null
        ? deserializeAws_restJson1FacetAttributeReference(
            output.AttributeReference,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RequiredBehavior:
      output.RequiredBehavior !== undefined && output.RequiredBehavior !== null
        ? output.RequiredBehavior
        : undefined
  } as any;
};

const deserializeAws_restJson1FacetAttributeDefinition = (
  output: any,
  context: __SerdeContext
): FacetAttributeDefinition => {
  return {
    __type: "FacetAttributeDefinition",
    DefaultValue:
      output.DefaultValue !== undefined && output.DefaultValue !== null
        ? deserializeAws_restJson1TypedAttributeValue(
            output.DefaultValue,
            context
          )
        : undefined,
    IsImmutable:
      output.IsImmutable !== undefined && output.IsImmutable !== null
        ? output.IsImmutable
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1RuleMap(output.Rules, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1FacetAttributeList = (
  output: any,
  context: __SerdeContext
): FacetAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FacetAttribute(entry, context)
  );
};

const deserializeAws_restJson1FacetAttributeReference = (
  output: any,
  context: __SerdeContext
): FacetAttributeReference => {
  return {
    __type: "FacetAttributeReference",
    TargetAttributeName:
      output.TargetAttributeName !== undefined &&
      output.TargetAttributeName !== null
        ? output.TargetAttributeName
        : undefined,
    TargetFacetName:
      output.TargetFacetName !== undefined && output.TargetFacetName !== null
        ? output.TargetFacetName
        : undefined
  } as any;
};

const deserializeAws_restJson1FacetNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1IndexAttachment = (
  output: any,
  context: __SerdeContext
): IndexAttachment => {
  return {
    __type: "IndexAttachment",
    IndexedAttributes:
      output.IndexedAttributes !== undefined &&
      output.IndexedAttributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(
            output.IndexedAttributes,
            context
          )
        : undefined,
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1IndexAttachmentList = (
  output: any,
  context: __SerdeContext
): IndexAttachment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1IndexAttachment(entry, context)
  );
};

const deserializeAws_restJson1LinkNameToObjectIdentifierMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1ObjectIdentifierAndLinkNameList = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple(entry, context)
  );
};

const deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple => {
  return {
    __type: "ObjectIdentifierAndLinkNameTuple",
    LinkName:
      output.LinkName !== undefined && output.LinkName !== null
        ? output.LinkName
        : undefined,
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined
  } as any;
};

const deserializeAws_restJson1ObjectIdentifierList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ObjectIdentifierToLinkNameMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1ObjectReference = (
  output: any,
  context: __SerdeContext
): ObjectReference => {
  return {
    __type: "ObjectReference",
    Selector:
      output.Selector !== undefined && output.Selector !== null
        ? output.Selector
        : undefined
  } as any;
};

const deserializeAws_restJson1PathToObjectIdentifiers = (
  output: any,
  context: __SerdeContext
): PathToObjectIdentifiers => {
  return {
    __type: "PathToObjectIdentifiers",
    ObjectIdentifiers:
      output.ObjectIdentifiers !== undefined &&
      output.ObjectIdentifiers !== null
        ? deserializeAws_restJson1ObjectIdentifierList(
            output.ObjectIdentifiers,
            context
          )
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined
  } as any;
};

const deserializeAws_restJson1PathToObjectIdentifiersList = (
  output: any,
  context: __SerdeContext
): PathToObjectIdentifiers[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PathToObjectIdentifiers(entry, context)
  );
};

const deserializeAws_restJson1PolicyAttachment = (
  output: any,
  context: __SerdeContext
): PolicyAttachment => {
  return {
    __type: "PolicyAttachment",
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null
        ? output.ObjectIdentifier
        : undefined,
    PolicyId:
      output.PolicyId !== undefined && output.PolicyId !== null
        ? output.PolicyId
        : undefined,
    PolicyType:
      output.PolicyType !== undefined && output.PolicyType !== null
        ? output.PolicyType
        : undefined
  } as any;
};

const deserializeAws_restJson1PolicyAttachmentList = (
  output: any,
  context: __SerdeContext
): PolicyAttachment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PolicyAttachment(entry, context)
  );
};

const deserializeAws_restJson1PolicyToPath = (
  output: any,
  context: __SerdeContext
): PolicyToPath => {
  return {
    __type: "PolicyToPath",
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined,
    Policies:
      output.Policies !== undefined && output.Policies !== null
        ? deserializeAws_restJson1PolicyAttachmentList(output.Policies, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1PolicyToPathList = (
  output: any,
  context: __SerdeContext
): PolicyToPath[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PolicyToPath(entry, context)
  );
};

const deserializeAws_restJson1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  return {
    __type: "Rule",
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1RuleParameterMap(output.Parameters, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1RuleMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Rule } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: Rule }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1Rule(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1RuleParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1SchemaFacet = (
  output: any,
  context: __SerdeContext
): SchemaFacet => {
  return {
    __type: "SchemaFacet",
    FacetName:
      output.FacetName !== undefined && output.FacetName !== null
        ? output.FacetName
        : undefined,
    SchemaArn:
      output.SchemaArn !== undefined && output.SchemaArn !== null
        ? output.SchemaArn
        : undefined
  } as any;
};

const deserializeAws_restJson1SchemaFacetList = (
  output: any,
  context: __SerdeContext
): SchemaFacet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SchemaFacet(entry, context)
  );
};

const deserializeAws_restJson1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
};

const deserializeAws_restJson1TypedAttributeValue = (
  output: any,
  context: __SerdeContext
): TypedAttributeValue => {
  return {
    __type: "TypedAttributeValue",
    BinaryValue:
      output.BinaryValue !== undefined && output.BinaryValue !== null
        ? context.base64Decoder(output.BinaryValue)
        : undefined,
    BooleanValue:
      output.BooleanValue !== undefined && output.BooleanValue !== null
        ? output.BooleanValue
        : undefined,
    DatetimeValue:
      output.DatetimeValue !== undefined && output.DatetimeValue !== null
        ? new Date(Math.round(output.DatetimeValue * 1000))
        : undefined,
    NumberValue:
      output.NumberValue !== undefined && output.NumberValue !== null
        ? output.NumberValue
        : undefined,
    StringValue:
      output.StringValue !== undefined && output.StringValue !== null
        ? output.StringValue
        : undefined
  } as any;
};

const deserializeAws_restJson1TypedLinkAttributeDefinition = (
  output: any,
  context: __SerdeContext
): TypedLinkAttributeDefinition => {
  return {
    __type: "TypedLinkAttributeDefinition",
    DefaultValue:
      output.DefaultValue !== undefined && output.DefaultValue !== null
        ? deserializeAws_restJson1TypedAttributeValue(
            output.DefaultValue,
            context
          )
        : undefined,
    IsImmutable:
      output.IsImmutable !== undefined && output.IsImmutable !== null
        ? output.IsImmutable
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RequiredBehavior:
      output.RequiredBehavior !== undefined && output.RequiredBehavior !== null
        ? output.RequiredBehavior
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1RuleMap(output.Rules, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1TypedLinkAttributeDefinitionList = (
  output: any,
  context: __SerdeContext
): TypedLinkAttributeDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1TypedLinkAttributeDefinition(entry, context)
  );
};

const deserializeAws_restJson1TypedLinkNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1TypedLinkSchemaAndFacetName = (
  output: any,
  context: __SerdeContext
): TypedLinkSchemaAndFacetName => {
  return {
    __type: "TypedLinkSchemaAndFacetName",
    SchemaArn:
      output.SchemaArn !== undefined && output.SchemaArn !== null
        ? output.SchemaArn
        : undefined,
    TypedLinkName:
      output.TypedLinkName !== undefined && output.TypedLinkName !== null
        ? output.TypedLinkName
        : undefined
  } as any;
};

const deserializeAws_restJson1TypedLinkSpecifier = (
  output: any,
  context: __SerdeContext
): TypedLinkSpecifier => {
  return {
    __type: "TypedLinkSpecifier",
    IdentityAttributeValues:
      output.IdentityAttributeValues !== undefined &&
      output.IdentityAttributeValues !== null
        ? deserializeAws_restJson1AttributeNameAndValueList(
            output.IdentityAttributeValues,
            context
          )
        : undefined,
    SourceObjectReference:
      output.SourceObjectReference !== undefined &&
      output.SourceObjectReference !== null
        ? deserializeAws_restJson1ObjectReference(
            output.SourceObjectReference,
            context
          )
        : undefined,
    TargetObjectReference:
      output.TargetObjectReference !== undefined &&
      output.TargetObjectReference !== null
        ? deserializeAws_restJson1ObjectReference(
            output.TargetObjectReference,
            context
          )
        : undefined,
    TypedLinkFacet:
      output.TypedLinkFacet !== undefined && output.TypedLinkFacet !== null
        ? deserializeAws_restJson1TypedLinkSchemaAndFacetName(
            output.TypedLinkFacet,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1TypedLinkSpecifierList = (
  output: any,
  context: __SerdeContext
): TypedLinkSpecifier[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1TypedLinkSpecifier(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
