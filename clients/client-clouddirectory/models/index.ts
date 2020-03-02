import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access denied. Check your permissions.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

export interface AddFacetToObjectRequest {
  __type?: "AddFacetToObjectRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Attributes on the facet that you are adding to the object.</p>
   */
  ObjectAttributeList?: Array<AttributeKeyAndValue>;

  /**
   * <p>A reference to the object you are adding the specified facet to.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
}

export namespace AddFacetToObjectRequest {
  export function isa(o: any): o is AddFacetToObjectRequest {
    return __isa(o, "AddFacetToObjectRequest");
  }
}

export interface AddFacetToObjectResponse {
  __type?: "AddFacetToObjectResponse";
}

export namespace AddFacetToObjectResponse {
  export function isa(o: any): o is AddFacetToObjectResponse {
    return __isa(o, "AddFacetToObjectResponse");
  }
}

export interface ApplySchemaRequest {
  __type?: "ApplySchemaRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       into which the schema is copied. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Published schema Amazon Resource Name (ARN) that needs to be copied. For more
   *       information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn: string | undefined;
}

export namespace ApplySchemaRequest {
  export function isa(o: any): o is ApplySchemaRequest {
    return __isa(o, "ApplySchemaRequest");
  }
}

export interface ApplySchemaResponse {
  __type?: "ApplySchemaResponse";
  /**
   * <p>The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on
   *       this directory. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn?: string;

  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn?: string;
}

export namespace ApplySchemaResponse {
  export function isa(o: any): o is ApplySchemaResponse {
    return __isa(o, "ApplySchemaResponse");
  }
}

export interface AttachObjectRequest {
  __type?: "AttachObjectRequest";
  /**
   * <p>The child object reference to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;

  /**
   * <p>Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The link name with which the child object is attached to the parent.</p>
   */
  LinkName: string | undefined;

  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;
}

export namespace AttachObjectRequest {
  export function isa(o: any): o is AttachObjectRequest {
    return __isa(o, "AttachObjectRequest");
  }
}

export interface AttachObjectResponse {
  __type?: "AttachObjectResponse";
  /**
   * <p>The attached <code>ObjectIdentifier</code>, which is the child
   *         <code>ObjectIdentifier</code>.</p>
   */
  AttachedObjectIdentifier?: string;
}

export namespace AttachObjectResponse {
  export function isa(o: any): o is AttachObjectResponse {
    return __isa(o, "AttachObjectResponse");
  }
}

export interface AttachPolicyRequest {
  __type?: "AttachPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object to which the policy will be
   *       attached.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
}

export namespace AttachPolicyRequest {
  export function isa(o: any): o is AttachPolicyRequest {
    return __isa(o, "AttachPolicyRequest");
  }
}

export interface AttachPolicyResponse {
  __type?: "AttachPolicyResponse";
}

export namespace AttachPolicyResponse {
  export function isa(o: any): o is AttachPolicyResponse {
    return __isa(o, "AttachPolicyResponse");
  }
}

export interface AttachToIndexRequest {
  __type?: "AttachToIndexRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where the object and index
   *       exist.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export namespace AttachToIndexRequest {
  export function isa(o: any): o is AttachToIndexRequest {
    return __isa(o, "AttachToIndexRequest");
  }
}

export interface AttachToIndexResponse {
  __type?: "AttachToIndexResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}

export namespace AttachToIndexResponse {
  export function isa(o: any): o is AttachToIndexResponse {
    return __isa(o, "AttachToIndexResponse");
  }
}

export interface AttachTypedLinkRequest {
  __type?: "AttachTypedLinkRequest";
  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: Array<AttributeNameAndValue> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to attach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;
}

export namespace AttachTypedLinkRequest {
  export function isa(o: any): o is AttachTypedLinkRequest {
    return __isa(o, "AttachTypedLinkRequest");
  }
}

export interface AttachTypedLinkResponse {
  __type?: "AttachTypedLinkResponse";
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}

export namespace AttachTypedLinkResponse {
  export function isa(o: any): o is AttachTypedLinkResponse {
    return __isa(o, "AttachTypedLinkResponse");
  }
}

/**
 * <p>A unique identifier for an attribute.</p>
 */
export interface AttributeKey {
  __type?: "AttributeKey";
  /**
   * <p>The name of the facet that the attribute exists within.</p>
   */
  FacetName: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema that contains the facet and
   *       attribute.</p>
   */
  SchemaArn: string | undefined;
}

export namespace AttributeKey {
  export function isa(o: any): o is AttributeKey {
    return __isa(o, "AttributeKey");
  }
}

/**
 * <p>The combination of an attribute key and an attribute value.</p>
 */
export interface AttributeKeyAndValue {
  __type?: "AttributeKeyAndValue";
  /**
   * <p>The key of the attribute.</p>
   */
  Key: AttributeKey | undefined;

  /**
   * <p>The value of the attribute.</p>
   */
  Value: TypedAttributeValue | undefined;
}

export namespace AttributeKeyAndValue {
  export function isa(o: any): o is AttributeKeyAndValue {
    return __isa(o, "AttributeKeyAndValue");
  }
}

/**
 * <p>Identifies the attribute name and value for a typed link.</p>
 */
export interface AttributeNameAndValue {
  __type?: "AttributeNameAndValue";
  /**
   * <p>The attribute name of the typed link.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The value for the typed link.</p>
   */
  Value: TypedAttributeValue | undefined;
}

export namespace AttributeNameAndValue {
  export function isa(o: any): o is AttributeNameAndValue {
    return __isa(o, "AttributeNameAndValue");
  }
}

/**
 * <p>Represents the output of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObject {
  __type?: "BatchAddFacetToObject";
  /**
   * <p>The attributes to set on the object.</p>
   */
  ObjectAttributeList: Array<AttributeKeyAndValue> | undefined;

  /**
   * <p>A reference to the object being mutated.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Represents the facet being added to the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
}

export namespace BatchAddFacetToObject {
  export function isa(o: any): o is BatchAddFacetToObject {
    return __isa(o, "BatchAddFacetToObject");
  }
}

/**
 * <p>The result of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObjectResponse {
  __type?: "BatchAddFacetToObjectResponse";
}

export namespace BatchAddFacetToObjectResponse {
  export function isa(o: any): o is BatchAddFacetToObjectResponse {
    return __isa(o, "BatchAddFacetToObjectResponse");
  }
}

/**
 * <p>Represents the output of an <a>AttachObject</a> operation.</p>
 */
export interface BatchAttachObject {
  __type?: "BatchAttachObject";
  /**
   * <p>The child object reference that is to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;

  /**
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;

  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;
}

export namespace BatchAttachObject {
  export function isa(o: any): o is BatchAttachObject {
    return __isa(o, "BatchAttachObject");
  }
}

/**
 * <p>Represents the output batch <a>AttachObject</a> response operation.</p>
 */
export interface BatchAttachObjectResponse {
  __type?: "BatchAttachObjectResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that has been attached.</p>
   */
  attachedObjectIdentifier?: string;
}

export namespace BatchAttachObjectResponse {
  export function isa(o: any): o is BatchAttachObjectResponse {
    return __isa(o, "BatchAttachObjectResponse");
  }
}

/**
 * <p>Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachPolicy {
  __type?: "BatchAttachPolicy";
  /**
   * <p>The reference that identifies the object to which the policy will be
   *        attached.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
}

export namespace BatchAttachPolicy {
  export function isa(o: any): o is BatchAttachPolicy {
    return __isa(o, "BatchAttachPolicy");
  }
}

/**
 * <p>Represents the output of an <a>AttachPolicy</a> response
 *       operation.</p>
 */
export interface BatchAttachPolicyResponse {
  __type?: "BatchAttachPolicyResponse";
}

export namespace BatchAttachPolicyResponse {
  export function isa(o: any): o is BatchAttachPolicyResponse {
    return __isa(o, "BatchAttachPolicyResponse");
  }
}

/**
 * <p>Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachToIndex {
  __type?: "BatchAttachToIndex";
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export namespace BatchAttachToIndex {
  export function isa(o: any): o is BatchAttachToIndex {
    return __isa(o, "BatchAttachToIndex");
  }
}

/**
 * <p>Represents the output of a <a>AttachToIndex</a> response operation.</p>
 */
export interface BatchAttachToIndexResponse {
  __type?: "BatchAttachToIndexResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}

export namespace BatchAttachToIndexResponse {
  export function isa(o: any): o is BatchAttachToIndexResponse {
    return __isa(o, "BatchAttachToIndexResponse");
  }
}

/**
 * <p>Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachTypedLink {
  __type?: "BatchAttachTypedLink";
  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: Array<AttributeNameAndValue> | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;
}

export namespace BatchAttachTypedLink {
  export function isa(o: any): o is BatchAttachTypedLink {
    return __isa(o, "BatchAttachTypedLink");
  }
}

/**
 * <p>Represents the output of a <a>AttachTypedLink</a> response operation.</p>
 */
export interface BatchAttachTypedLinkResponse {
  __type?: "BatchAttachTypedLinkResponse";
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}

export namespace BatchAttachTypedLinkResponse {
  export function isa(o: any): o is BatchAttachTypedLinkResponse {
    return __isa(o, "BatchAttachTypedLinkResponse");
  }
}

/**
 * <p>Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchCreateIndex {
  __type?: "BatchCreateIndex";
  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *        not.</p>
   */
  IsUnique: boolean | undefined;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;

  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *        is supported.</p>
   */
  OrderedIndexedAttributeList: Array<AttributeKey> | undefined;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;
}

export namespace BatchCreateIndex {
  export function isa(o: any): o is BatchCreateIndex {
    return __isa(o, "BatchCreateIndex");
  }
}

/**
 * <p>Represents the output of a <a>CreateIndex</a> response operation.</p>
 */
export interface BatchCreateIndexResponse {
  __type?: "BatchCreateIndexResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}

export namespace BatchCreateIndexResponse {
  export function isa(o: any): o is BatchCreateIndexResponse {
    return __isa(o, "BatchCreateIndexResponse");
  }
}

/**
 * <p>Represents the output of a <a>CreateObject</a> operation.</p>
 */
export interface BatchCreateObject {
  __type?: "BatchCreateObject";
  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;

  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;

  /**
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as
   *       the map value.</p>
   */
  ObjectAttributeList: Array<AttributeKeyAndValue> | undefined;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaFacet: Array<SchemaFacet> | undefined;
}

export namespace BatchCreateObject {
  export function isa(o: any): o is BatchCreateObject {
    return __isa(o, "BatchCreateObject");
  }
}

/**
 * <p>Represents the output of a <a>CreateObject</a> response operation.</p>
 */
export interface BatchCreateObjectResponse {
  __type?: "BatchCreateObjectResponse";
  /**
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

export namespace BatchCreateObjectResponse {
  export function isa(o: any): o is BatchCreateObjectResponse {
    return __isa(o, "BatchCreateObjectResponse");
  }
}

/**
 * <p>Represents the output of a <a>DeleteObject</a> operation.</p>
 */
export interface BatchDeleteObject {
  __type?: "BatchDeleteObject";
  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchDeleteObject {
  export function isa(o: any): o is BatchDeleteObject {
    return __isa(o, "BatchDeleteObject");
  }
}

/**
 * <p>Represents the output of a <a>DeleteObject</a> response operation.</p>
 */
export interface BatchDeleteObjectResponse {
  __type?: "BatchDeleteObjectResponse";
}

export namespace BatchDeleteObjectResponse {
  export function isa(o: any): o is BatchDeleteObjectResponse {
    return __isa(o, "BatchDeleteObjectResponse");
  }
}

/**
 * <p>Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachFromIndex {
  __type?: "BatchDetachFromIndex";
  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export namespace BatchDetachFromIndex {
  export function isa(o: any): o is BatchDetachFromIndex {
    return __isa(o, "BatchDetachFromIndex");
  }
}

/**
 * <p>Represents the output of a <a>DetachFromIndex</a> response operation.</p>
 */
export interface BatchDetachFromIndexResponse {
  __type?: "BatchDetachFromIndexResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}

export namespace BatchDetachFromIndexResponse {
  export function isa(o: any): o is BatchDetachFromIndexResponse {
    return __isa(o, "BatchDetachFromIndexResponse");
  }
}

/**
 * <p>Represents the output of a <a>DetachObject</a> operation.</p>
 */
export interface BatchDetachObject {
  __type?: "BatchDetachObject";
  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;

  /**
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;

  /**
   * <p>Parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;
}

export namespace BatchDetachObject {
  export function isa(o: any): o is BatchDetachObject {
    return __isa(o, "BatchDetachObject");
  }
}

/**
 * <p>Represents the output of a <a>DetachObject</a> response operation.</p>
 */
export interface BatchDetachObjectResponse {
  __type?: "BatchDetachObjectResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the detached object.</p>
   */
  detachedObjectIdentifier?: string;
}

export namespace BatchDetachObjectResponse {
  export function isa(o: any): o is BatchDetachObjectResponse {
    return __isa(o, "BatchDetachObjectResponse");
  }
}

/**
 * <p>Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.</p>
 */
export interface BatchDetachPolicy {
  __type?: "BatchDetachPolicy";
  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
}

export namespace BatchDetachPolicy {
  export function isa(o: any): o is BatchDetachPolicy {
    return __isa(o, "BatchDetachPolicy");
  }
}

/**
 * <p>Represents the output of a <a>DetachPolicy</a> response operation.</p>
 */
export interface BatchDetachPolicyResponse {
  __type?: "BatchDetachPolicyResponse";
}

export namespace BatchDetachPolicyResponse {
  export function isa(o: any): o is BatchDetachPolicyResponse {
    return __isa(o, "BatchDetachPolicyResponse");
  }
}

/**
 * <p>Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachTypedLink {
  __type?: "BatchDetachTypedLink";
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export namespace BatchDetachTypedLink {
  export function isa(o: any): o is BatchDetachTypedLink {
    return __isa(o, "BatchDetachTypedLink");
  }
}

/**
 * <p>Represents the output of a <a>DetachTypedLink</a> response operation.</p>
 */
export interface BatchDetachTypedLinkResponse {
  __type?: "BatchDetachTypedLinkResponse";
}

export namespace BatchDetachTypedLinkResponse {
  export function isa(o: any): o is BatchDetachTypedLinkResponse {
    return __isa(o, "BatchDetachTypedLinkResponse");
  }
}

/**
 * <p>Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetLinkAttributes {
  __type?: "BatchGetLinkAttributes";
  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export namespace BatchGetLinkAttributes {
  export function isa(o: any): o is BatchGetLinkAttributes {
    return __isa(o, "BatchGetLinkAttributes");
  }
}

/**
 * <p>Represents the output of a <a>GetLinkAttributes</a> response operation.</p>
 */
export interface BatchGetLinkAttributesResponse {
  __type?: "BatchGetLinkAttributesResponse";
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: Array<AttributeKeyAndValue>;
}

export namespace BatchGetLinkAttributesResponse {
  export function isa(o: any): o is BatchGetLinkAttributesResponse {
    return __isa(o, "BatchGetLinkAttributesResponse");
  }
}

/**
 * <p>Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectAttributes {
  __type?: "BatchGetObjectAttributes";
  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | undefined;

  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
}

export namespace BatchGetObjectAttributes {
  export function isa(o: any): o is BatchGetObjectAttributes {
    return __isa(o, "BatchGetObjectAttributes");
  }
}

/**
 * <p>Represents the output of a <a>GetObjectAttributes</a> response operation.</p>
 */
export interface BatchGetObjectAttributesResponse {
  __type?: "BatchGetObjectAttributesResponse";
  /**
   * <p>The attribute values that are associated with an object.</p>
   */
  Attributes?: Array<AttributeKeyAndValue>;
}

export namespace BatchGetObjectAttributesResponse {
  export function isa(o: any): o is BatchGetObjectAttributesResponse {
    return __isa(o, "BatchGetObjectAttributesResponse");
  }
}

/**
 * <p>Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectInformation {
  __type?: "BatchGetObjectInformation";
  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchGetObjectInformation {
  export function isa(o: any): o is BatchGetObjectInformation {
    return __isa(o, "BatchGetObjectInformation");
  }
}

/**
 * <p>Represents the output of a <a>GetObjectInformation</a> response operation.</p>
 */
export interface BatchGetObjectInformationResponse {
  __type?: "BatchGetObjectInformationResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * <p>The facets attached to the specified object.</p>
   */
  SchemaFacets?: Array<SchemaFacet>;
}

export namespace BatchGetObjectInformationResponse {
  export function isa(o: any): o is BatchGetObjectInformationResponse {
    return __isa(o, "BatchGetObjectInformationResponse");
  }
}

/**
 * <p>Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListAttachedIndices {
  __type?: "BatchListAttachedIndices";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export namespace BatchListAttachedIndices {
  export function isa(o: any): o is BatchListAttachedIndices {
    return __isa(o, "BatchListAttachedIndices");
  }
}

/**
 * <p>Represents the output of a <a>ListAttachedIndices</a> response operation.</p>
 */
export interface BatchListAttachedIndicesResponse {
  __type?: "BatchListAttachedIndicesResponse";
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: Array<IndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace BatchListAttachedIndicesResponse {
  export function isa(o: any): o is BatchListAttachedIndicesResponse {
    return __isa(o, "BatchListAttachedIndicesResponse");
  }
}

/**
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIncomingTypedLinks {
  __type?: "BatchListIncomingTypedLinks";
  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *        order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListIncomingTypedLinks {
  export function isa(o: any): o is BatchListIncomingTypedLinks {
    return __isa(o, "BatchListIncomingTypedLinks");
  }
}

/**
 * <p>Represents the output of a <a>ListIncomingTypedLinks</a> response operation.</p>
 */
export interface BatchListIncomingTypedLinksResponse {
  __type?: "BatchListIncomingTypedLinksResponse";
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: Array<TypedLinkSpecifier>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace BatchListIncomingTypedLinksResponse {
  export function isa(o: any): o is BatchListIncomingTypedLinksResponse {
    return __isa(o, "BatchListIncomingTypedLinksResponse");
  }
}

/**
 * <p>Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIndex {
  __type?: "BatchListIndex";
  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: Array<ObjectAttributeRange>;
}

export namespace BatchListIndex {
  export function isa(o: any): o is BatchListIndex {
    return __isa(o, "BatchListIndex");
  }
}

/**
 * <p>Represents the output of a <a>ListIndex</a> response operation.</p>
 */
export interface BatchListIndexResponse {
  __type?: "BatchListIndexResponse";
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: Array<IndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace BatchListIndexResponse {
  export function isa(o: any): o is BatchListIndexResponse {
    return __isa(o, "BatchListIndexResponse");
  }
}

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> operation.</p>
 */
export interface BatchListObjectAttributes {
  __type?: "BatchListObjectAttributes";
  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Reference of the object whose attributes need to be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListObjectAttributes {
  export function isa(o: any): o is BatchListObjectAttributes {
    return __isa(o, "BatchListObjectAttributes");
  }
}

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> response operation.</p>
 */
export interface BatchListObjectAttributesResponse {
  __type?: "BatchListObjectAttributesResponse";
  /**
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key; attribute value is the value.</p>
   */
  Attributes?: Array<AttributeKeyAndValue>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace BatchListObjectAttributesResponse {
  export function isa(o: any): o is BatchListObjectAttributesResponse {
    return __isa(o, "BatchListObjectAttributesResponse");
  }
}

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> operation.</p>
 */
export interface BatchListObjectChildren {
  __type?: "BatchListObjectChildren";
  /**
   * <p>Maximum number of items to be retrieved in a single call. This is an approximate
   *        number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Reference of the object for which child objects are being listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListObjectChildren {
  export function isa(o: any): o is BatchListObjectChildren {
    return __isa(o, "BatchListObjectChildren");
  }
}

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> response operation.</p>
 */
export interface BatchListObjectChildrenResponse {
  __type?: "BatchListObjectChildrenResponse";
  /**
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: { [key: string]: string };

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace BatchListObjectChildrenResponse {
  export function isa(o: any): o is BatchListObjectChildrenResponse {
    return __isa(o, "BatchListObjectChildrenResponse");
  }
}

/**
 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectParentPaths {
  __type?: "BatchListObjectParentPaths";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListObjectParentPaths {
  export function isa(o: any): o is BatchListObjectParentPaths {
    return __isa(o, "BatchListObjectParentPaths");
  }
}

/**
 * <p>Represents the output of a <a>ListObjectParentPaths</a> response operation.</p>
 */
export interface BatchListObjectParentPathsResponse {
  __type?: "BatchListObjectParentPathsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *        directory.</p>
   */
  PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
}

export namespace BatchListObjectParentPathsResponse {
  export function isa(o: any): o is BatchListObjectParentPathsResponse {
    return __isa(o, "BatchListObjectParentPathsResponse");
  }
}

export interface BatchListObjectParents {
  __type?: "BatchListObjectParents";
  MaxResults?: number;
  NextToken?: string;
  /**
   * <p>The reference that identifies an object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListObjectParents {
  export function isa(o: any): o is BatchListObjectParents {
    return __isa(o, "BatchListObjectParents");
  }
}

export interface BatchListObjectParentsResponse {
  __type?: "BatchListObjectParentsResponse";
  NextToken?: string;
  ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
}

export namespace BatchListObjectParentsResponse {
  export function isa(o: any): o is BatchListObjectParentsResponse {
    return __isa(o, "BatchListObjectParentsResponse");
  }
}

/**
 * <p>Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectPolicies {
  __type?: "BatchListObjectPolicies";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListObjectPolicies {
  export function isa(o: any): o is BatchListObjectPolicies {
    return __isa(o, "BatchListObjectPolicies");
  }
}

/**
 * <p>Represents the output of a <a>ListObjectPolicies</a> response operation.</p>
 */
export interface BatchListObjectPoliciesResponse {
  __type?: "BatchListObjectPoliciesResponse";
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *        object.</p>
   */
  AttachedPolicyIds?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace BatchListObjectPoliciesResponse {
  export function isa(o: any): o is BatchListObjectPoliciesResponse {
    return __isa(o, "BatchListObjectPoliciesResponse");
  }
}

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListOutgoingTypedLinks {
  __type?: "BatchListOutgoingTypedLinks";
  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *        not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchListOutgoingTypedLinks {
  export function isa(o: any): o is BatchListOutgoingTypedLinks {
    return __isa(o, "BatchListOutgoingTypedLinks");
  }
}

/**
 * <p>Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.</p>
 */
export interface BatchListOutgoingTypedLinksResponse {
  __type?: "BatchListOutgoingTypedLinksResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
}

export namespace BatchListOutgoingTypedLinksResponse {
  export function isa(o: any): o is BatchListOutgoingTypedLinksResponse {
    return __isa(o, "BatchListOutgoingTypedLinksResponse");
  }
}

/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListPolicyAttachments {
  __type?: "BatchListPolicyAttachments";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
}

export namespace BatchListPolicyAttachments {
  export function isa(o: any): o is BatchListPolicyAttachments {
    return __isa(o, "BatchListPolicyAttachments");
  }
}

/**
 * <p>Represents the output of a <a>ListPolicyAttachments</a> response operation.</p>
 */
export interface BatchListPolicyAttachmentsResponse {
  __type?: "BatchListPolicyAttachmentsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: Array<string>;
}

export namespace BatchListPolicyAttachmentsResponse {
  export function isa(o: any): o is BatchListPolicyAttachmentsResponse {
    return __isa(o, "BatchListPolicyAttachmentsResponse");
  }
}

/**
 * <p>Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchLookupPolicy {
  __type?: "BatchLookupPolicy";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchLookupPolicy {
  export function isa(o: any): o is BatchLookupPolicy {
    return __isa(o, "BatchLookupPolicy");
  }
}

/**
 * <p>Represents the output of a <a>LookupPolicy</a> response operation.</p>
 */
export interface BatchLookupPolicyResponse {
  __type?: "BatchLookupPolicyResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *        <code>PolicyType</code>. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: Array<PolicyToPath>;
}

export namespace BatchLookupPolicyResponse {
  export function isa(o: any): o is BatchLookupPolicyResponse {
    return __isa(o, "BatchLookupPolicyResponse");
  }
}

/**
 * <p>The batch read exception structure, which contains the exception type and
 *       message.</p>
 */
export interface BatchReadException {
  __type?: "BatchReadException";
  /**
   * <p>An exception message that is associated with the failure.</p>
   */
  Message?: string;

  /**
   * <p>A type of exception, such as <code>InvalidArnException</code>.</p>
   */
  Type?: BatchReadExceptionType | string;
}

export namespace BatchReadException {
  export function isa(o: any): o is BatchReadException {
    return __isa(o, "BatchReadException");
  }
}

export enum BatchReadExceptionType {
  AccessDeniedException = "AccessDeniedException",
  CannotListParentOfRootException = "CannotListParentOfRootException",
  DirectoryNotEnabledException = "DirectoryNotEnabledException",
  FacetValidationException = "FacetValidationException",
  InternalServiceException = "InternalServiceException",
  InvalidArnException = "InvalidArnException",
  InvalidNextTokenException = "InvalidNextTokenException",
  LimitExceededException = "LimitExceededException",
  NotIndexException = "NotIndexException",
  NotNodeException = "NotNodeException",
  NotPolicyException = "NotPolicyException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ValidationException = "ValidationException"
}

/**
 * <p>Represents the output of a <code>BatchRead</code> operation.</p>
 */
export interface BatchReadOperation {
  __type?: "BatchReadOperation";
  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributes;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributes;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformation;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndices;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndex;

  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributes;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildren;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPaths;

  ListObjectParents?: BatchListObjectParents;
  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPolicies;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachments;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicy;
}

export namespace BatchReadOperation {
  export function isa(o: any): o is BatchReadOperation {
    return __isa(o, "BatchReadOperation");
  }
}

/**
 * <p>Represents the output of a <code>BatchRead</code> response operation.</p>
 */
export interface BatchReadOperationResponse {
  __type?: "BatchReadOperationResponse";
  /**
   * <p>Identifies which operation in a batch has failed.</p>
   */
  ExceptionResponse?: BatchReadException;

  /**
   * <p>Identifies which operation in a batch has succeeded.</p>
   */
  SuccessfulResponse?: BatchReadSuccessfulResponse;
}

export namespace BatchReadOperationResponse {
  export function isa(o: any): o is BatchReadOperationResponse {
    return __isa(o, "BatchReadOperationResponse");
  }
}

export interface BatchReadRequest {
  __type?: "BatchReadRequest";
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: Array<BatchReadOperation> | undefined;
}

export namespace BatchReadRequest {
  export function isa(o: any): o is BatchReadRequest {
    return __isa(o, "BatchReadRequest");
  }
}

export interface BatchReadResponse {
  __type?: "BatchReadResponse";
  /**
   * <p>A list of all the responses for each batch read.</p>
   */
  Responses?: Array<BatchReadOperationResponse>;
}

export namespace BatchReadResponse {
  export function isa(o: any): o is BatchReadResponse {
    return __isa(o, "BatchReadResponse");
  }
}

/**
 * <p>Represents the output of a <code>BatchRead</code> success response operation.</p>
 */
export interface BatchReadSuccessfulResponse {
  __type?: "BatchReadSuccessfulResponse";
  /**
   * <p>The list of attributes to retrieve from the typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributesResponse;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributesResponse;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformationResponse;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndicesResponse;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndexResponse;

  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributesResponse;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildrenResponse;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPathsResponse;

  ListObjectParents?: BatchListObjectParentsResponse;
  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPoliciesResponse;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicyResponse;
}

export namespace BatchReadSuccessfulResponse {
  export function isa(o: any): o is BatchReadSuccessfulResponse {
    return __isa(o, "BatchReadSuccessfulResponse");
  }
}

/**
 * <p>A batch operation to remove a facet from an object.</p>
 */
export interface BatchRemoveFacetFromObject {
  __type?: "BatchRemoveFacetFromObject";
  /**
   * <p>A reference to the object whose facet will be removed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The facet to remove from the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
}

export namespace BatchRemoveFacetFromObject {
  export function isa(o: any): o is BatchRemoveFacetFromObject {
    return __isa(o, "BatchRemoveFacetFromObject");
  }
}

/**
 * <p>An empty result that represents success.</p>
 */
export interface BatchRemoveFacetFromObjectResponse {
  __type?: "BatchRemoveFacetFromObjectResponse";
}

export namespace BatchRemoveFacetFromObjectResponse {
  export function isa(o: any): o is BatchRemoveFacetFromObjectResponse {
    return __isa(o, "BatchRemoveFacetFromObjectResponse");
  }
}

/**
 * <p>Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchUpdateLinkAttributes {
  __type?: "BatchUpdateLinkAttributes";
  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: Array<LinkAttributeUpdate> | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export namespace BatchUpdateLinkAttributes {
  export function isa(o: any): o is BatchUpdateLinkAttributes {
    return __isa(o, "BatchUpdateLinkAttributes");
  }
}

/**
 * <p>Represents the output of a <a>UpdateLinkAttributes</a> response operation.</p>
 */
export interface BatchUpdateLinkAttributesResponse {
  __type?: "BatchUpdateLinkAttributesResponse";
}

export namespace BatchUpdateLinkAttributesResponse {
  export function isa(o: any): o is BatchUpdateLinkAttributesResponse {
    return __isa(o, "BatchUpdateLinkAttributesResponse");
  }
}

/**
 * <p>Represents the output of a <code>BatchUpdate</code> operation. </p>
 */
export interface BatchUpdateObjectAttributes {
  __type?: "BatchUpdateObjectAttributes";
  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: Array<ObjectAttributeUpdate> | undefined;

  /**
   * <p>Reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace BatchUpdateObjectAttributes {
  export function isa(o: any): o is BatchUpdateObjectAttributes {
    return __isa(o, "BatchUpdateObjectAttributes");
  }
}

/**
 * <p>Represents the output of a <code>BatchUpdate</code> response operation.</p>
 */
export interface BatchUpdateObjectAttributesResponse {
  __type?: "BatchUpdateObjectAttributesResponse";
  /**
   * <p>ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

export namespace BatchUpdateObjectAttributesResponse {
  export function isa(o: any): o is BatchUpdateObjectAttributesResponse {
    return __isa(o, "BatchUpdateObjectAttributesResponse");
  }
}

/**
 * <p>A <code>BatchWrite</code> exception has occurred.</p>
 */
export interface BatchWriteException
  extends __SmithyException,
    $MetadataBearer {
  name: "BatchWriteException";
  $fault: "client";
  Index?: number;
  Message?: string;
  Type?: BatchWriteExceptionType | string;
}

export namespace BatchWriteException {
  export function isa(o: any): o is BatchWriteException {
    return __isa(o, "BatchWriteException");
  }
}

export enum BatchWriteExceptionType {
  AccessDeniedException = "AccessDeniedException",
  DirectoryNotEnabledException = "DirectoryNotEnabledException",
  FacetValidationException = "FacetValidationException",
  IndexedAttributeMissingException = "IndexedAttributeMissingException",
  InternalServiceException = "InternalServiceException",
  InvalidArnException = "InvalidArnException",
  InvalidAttachmentException = "InvalidAttachmentException",
  LimitExceededException = "LimitExceededException",
  LinkNameAlreadyInUseException = "LinkNameAlreadyInUseException",
  NotIndexException = "NotIndexException",
  NotNodeException = "NotNodeException",
  NotPolicyException = "NotPolicyException",
  ObjectAlreadyDetachedException = "ObjectAlreadyDetachedException",
  ObjectNotDetachedException = "ObjectNotDetachedException",
  ResourceNotFoundException = "ResourceNotFoundException",
  StillContainsLinksException = "StillContainsLinksException",
  UnsupportedIndexTypeException = "UnsupportedIndexTypeException",
  ValidationException = "ValidationException"
}

/**
 * <p>Represents the output of a <code>BatchWrite</code> operation. </p>
 */
export interface BatchWriteOperation {
  __type?: "BatchWriteOperation";
  /**
   * <p>A batch operation that adds a facet to an object.</p>
   */
  AddFacetToObject?: BatchAddFacetToObject;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObject;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicy;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndex;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLink;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndex;

  /**
   * <p>Creates an object.</p>
   */
  CreateObject?: BatchCreateObject;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObject;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndex;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObject;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicy;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLink;

  /**
   * <p>A batch operation that removes a facet from an object.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObject;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributes;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributes;
}

export namespace BatchWriteOperation {
  export function isa(o: any): o is BatchWriteOperation {
    return __isa(o, "BatchWriteOperation");
  }
}

/**
 * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
 */
export interface BatchWriteOperationResponse {
  __type?: "BatchWriteOperationResponse";
  /**
   * <p>The result of an add facet to object batch operation.</p>
   */
  AddFacetToObject?: BatchAddFacetToObjectResponse;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObjectResponse;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicyResponse;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndexResponse;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLinkResponse;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndexResponse;

  /**
   * <p>Creates an object in a <a>Directory</a>.</p>
   */
  CreateObject?: BatchCreateObjectResponse;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObjectResponse;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndexResponse;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObjectResponse;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicyResponse;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLinkResponse;

  /**
   * <p>The result of a batch remove facet from object operation.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;

  /**
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;

  /**
   * <p>Updates a given object’s attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
}

export namespace BatchWriteOperationResponse {
  export function isa(o: any): o is BatchWriteOperationResponse {
    return __isa(o, "BatchWriteOperationResponse");
  }
}

export interface BatchWriteRequest {
  __type?: "BatchWriteRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: Array<BatchWriteOperation> | undefined;
}

export namespace BatchWriteRequest {
  export function isa(o: any): o is BatchWriteRequest {
    return __isa(o, "BatchWriteRequest");
  }
}

export interface BatchWriteResponse {
  __type?: "BatchWriteResponse";
  /**
   * <p>A list of all the responses for each batch write.</p>
   */
  Responses?: Array<BatchWriteOperationResponse>;
}

export namespace BatchWriteResponse {
  export function isa(o: any): o is BatchWriteResponse {
    return __isa(o, "BatchWriteResponse");
  }
}

/**
 * <p>Cannot list the parents of a <a>Directory</a> root.</p>
 */
export interface CannotListParentOfRootException
  extends __SmithyException,
    $MetadataBearer {
  name: "CannotListParentOfRootException";
  $fault: "client";
  Message?: string;
}

export namespace CannotListParentOfRootException {
  export function isa(o: any): o is CannotListParentOfRootException {
    return __isa(o, "CannotListParentOfRootException");
  }
}

export enum ConsistencyLevel {
  EVENTUAL = "EVENTUAL",
  SERIALIZABLE = "SERIALIZABLE"
}

export interface CreateDirectoryRequest {
  __type?: "CreateDirectoryRequest";
  /**
   * <p>The name of the <a>Directory</a>. Should be unique per account, per
   *       region.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the published schema that will be copied into the
   *       data <a>Directory</a>. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace CreateDirectoryRequest {
  export function isa(o: any): o is CreateDirectoryRequest {
    return __isa(o, "CreateDirectoryRequest");
  }
}

export interface CreateDirectoryResponse {
  __type?: "CreateDirectoryResponse";
  /**
   * <p>The ARN of the published schema in the <a>Directory</a>. Once a published
   *       schema is copied into the directory, it has its own ARN, which is referred to applied schema
   *       ARN. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn: string | undefined;

  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The name of the <a>Directory</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The root object node of the created directory.</p>
   */
  ObjectIdentifier: string | undefined;
}

export namespace CreateDirectoryResponse {
  export function isa(o: any): o is CreateDirectoryResponse {
    return __isa(o, "CreateDirectoryResponse");
  }
}

export interface CreateFacetRequest {
  __type?: "CreateFacetRequest";
  /**
   * <p>The attributes that are associated with the <a>Facet</a>.</p>
   */
  Attributes?: Array<FacetAttribute>;

  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle | string;

  /**
   * <p>The name of the <a>Facet</a>, which is unique for a given schema.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether a given object created from this facet is of type node, leaf node,
   *       policy or index.</p>
   *          <ul>
   *             <li>
   *                <p>Node: Can have multiple children but one parent.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Leaf node: Cannot have children but can have multiple parents.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Policy: Allows you to store a policy document and policy type. For more
   *         information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Index: Can be created with the Index API.</p>
   *             </li>
   *          </ul>
   */
  ObjectType?: ObjectType | string;

  /**
   * <p>The schema ARN in which the new <a>Facet</a> will be created. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace CreateFacetRequest {
  export function isa(o: any): o is CreateFacetRequest {
    return __isa(o, "CreateFacetRequest");
  }
}

export interface CreateFacetResponse {
  __type?: "CreateFacetResponse";
}

export namespace CreateFacetResponse {
  export function isa(o: any): o is CreateFacetResponse {
    return __isa(o, "CreateFacetResponse");
  }
}

export interface CreateIndexRequest {
  __type?: "CreateIndexRequest";
  /**
   * <p>The ARN of the directory where the index should be created.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *       not.</p>
   */
  IsUnique: boolean | undefined;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;

  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *       is supported.</p>
   */
  OrderedIndexedAttributeList: Array<AttributeKey> | undefined;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;
}

export namespace CreateIndexRequest {
  export function isa(o: any): o is CreateIndexRequest {
    return __isa(o, "CreateIndexRequest");
  }
}

export interface CreateIndexResponse {
  __type?: "CreateIndexResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}

export namespace CreateIndexResponse {
  export function isa(o: any): o is CreateIndexResponse {
    return __isa(o, "CreateIndexResponse");
  }
}

export interface CreateObjectRequest {
  __type?: "CreateObjectRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       in which the object will be created. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The name of link that is used to attach this object to a parent.</p>
   */
  LinkName?: string;

  /**
   * <p>The attribute map whose attribute ARN contains the key and attribute value as the map
   *       value.</p>
   */
  ObjectAttributeList?: Array<AttributeKeyAndValue>;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * <p>A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacets: Array<SchemaFacet> | undefined;
}

export namespace CreateObjectRequest {
  export function isa(o: any): o is CreateObjectRequest {
    return __isa(o, "CreateObjectRequest");
  }
}

export interface CreateObjectResponse {
  __type?: "CreateObjectResponse";
  /**
   * <p>The identifier that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

export namespace CreateObjectResponse {
  export function isa(o: any): o is CreateObjectResponse {
    return __isa(o, "CreateObjectResponse");
  }
}

export interface CreateSchemaRequest {
  __type?: "CreateSchemaRequest";
  /**
   * <p>The name that is associated with the schema. This is unique to each account and in each
   *       region.</p>
   */
  Name: string | undefined;
}

export namespace CreateSchemaRequest {
  export function isa(o: any): o is CreateSchemaRequest {
    return __isa(o, "CreateSchemaRequest");
  }
}

export interface CreateSchemaResponse {
  __type?: "CreateSchemaResponse";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

export namespace CreateSchemaResponse {
  export function isa(o: any): o is CreateSchemaResponse {
    return __isa(o, "CreateSchemaResponse");
  }
}

export interface CreateTypedLinkFacetRequest {
  __type?: "CreateTypedLinkFacetRequest";
  /**
   * <p>
   *             <a>Facet</a> structure that is associated with the typed link
   *       facet.</p>
   */
  Facet: TypedLinkFacet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace CreateTypedLinkFacetRequest {
  export function isa(o: any): o is CreateTypedLinkFacetRequest {
    return __isa(o, "CreateTypedLinkFacetRequest");
  }
}

export interface CreateTypedLinkFacetResponse {
  __type?: "CreateTypedLinkFacetResponse";
}

export namespace CreateTypedLinkFacetResponse {
  export function isa(o: any): o is CreateTypedLinkFacetResponse {
    return __isa(o, "CreateTypedLinkFacetResponse");
  }
}

export interface DeleteDirectoryRequest {
  __type?: "DeleteDirectoryRequest";
  /**
   * <p>The ARN of the directory to delete.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace DeleteDirectoryRequest {
  export function isa(o: any): o is DeleteDirectoryRequest {
    return __isa(o, "DeleteDirectoryRequest");
  }
}

export interface DeleteDirectoryResponse {
  __type?: "DeleteDirectoryResponse";
  /**
   * <p>The ARN of the deleted directory.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace DeleteDirectoryResponse {
  export function isa(o: any): o is DeleteDirectoryResponse {
    return __isa(o, "DeleteDirectoryResponse");
  }
}

export interface DeleteFacetRequest {
  __type?: "DeleteFacetRequest";
  /**
   * <p>The name of the facet to delete.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace DeleteFacetRequest {
  export function isa(o: any): o is DeleteFacetRequest {
    return __isa(o, "DeleteFacetRequest");
  }
}

export interface DeleteFacetResponse {
  __type?: "DeleteFacetResponse";
}

export namespace DeleteFacetResponse {
  export function isa(o: any): o is DeleteFacetResponse {
    return __isa(o, "DeleteFacetResponse");
  }
}

export interface DeleteObjectRequest {
  __type?: "DeleteObjectRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace DeleteObjectRequest {
  export function isa(o: any): o is DeleteObjectRequest {
    return __isa(o, "DeleteObjectRequest");
  }
}

export interface DeleteObjectResponse {
  __type?: "DeleteObjectResponse";
}

export namespace DeleteObjectResponse {
  export function isa(o: any): o is DeleteObjectResponse {
    return __isa(o, "DeleteObjectResponse");
  }
}

export interface DeleteSchemaRequest {
  __type?: "DeleteSchemaRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace DeleteSchemaRequest {
  export function isa(o: any): o is DeleteSchemaRequest {
    return __isa(o, "DeleteSchemaRequest");
  }
}

export interface DeleteSchemaResponse {
  __type?: "DeleteSchemaResponse";
  /**
   * <p>The input ARN that is returned as part of the response. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

export namespace DeleteSchemaResponse {
  export function isa(o: any): o is DeleteSchemaResponse {
    return __isa(o, "DeleteSchemaResponse");
  }
}

export interface DeleteTypedLinkFacetRequest {
  __type?: "DeleteTypedLinkFacetRequest";
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace DeleteTypedLinkFacetRequest {
  export function isa(o: any): o is DeleteTypedLinkFacetRequest {
    return __isa(o, "DeleteTypedLinkFacetRequest");
  }
}

export interface DeleteTypedLinkFacetResponse {
  __type?: "DeleteTypedLinkFacetResponse";
}

export namespace DeleteTypedLinkFacetResponse {
  export function isa(o: any): o is DeleteTypedLinkFacetResponse {
    return __isa(o, "DeleteTypedLinkFacetResponse");
  }
}

export interface DetachFromIndexRequest {
  __type?: "DetachFromIndexRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the directory the index and object exist
   *       in.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export namespace DetachFromIndexRequest {
  export function isa(o: any): o is DetachFromIndexRequest {
    return __isa(o, "DetachFromIndexRequest");
  }
}

export interface DetachFromIndexResponse {
  __type?: "DetachFromIndexResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}

export namespace DetachFromIndexResponse {
  export function isa(o: any): o is DetachFromIndexResponse {
    return __isa(o, "DetachFromIndexResponse");
  }
}

export interface DetachObjectRequest {
  __type?: "DetachObjectRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The link name associated with the object that needs to be detached.</p>
   */
  LinkName: string | undefined;

  /**
   * <p>The parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;
}

export namespace DetachObjectRequest {
  export function isa(o: any): o is DetachObjectRequest {
    return __isa(o, "DetachObjectRequest");
  }
}

export interface DetachObjectResponse {
  __type?: "DetachObjectResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> that was detached from the object.</p>
   */
  DetachedObjectIdentifier?: string;
}

export namespace DetachObjectResponse {
  export function isa(o: any): o is DetachObjectResponse {
    return __isa(o, "DetachObjectResponse");
  }
}

export interface DetachPolicyRequest {
  __type?: "DetachPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
}

export namespace DetachPolicyRequest {
  export function isa(o: any): o is DetachPolicyRequest {
    return __isa(o, "DetachPolicyRequest");
  }
}

export interface DetachPolicyResponse {
  __type?: "DetachPolicyResponse";
}

export namespace DetachPolicyResponse {
  export function isa(o: any): o is DetachPolicyResponse {
    return __isa(o, "DetachPolicyResponse");
  }
}

export interface DetachTypedLinkRequest {
  __type?: "DetachTypedLinkRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to detach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export namespace DetachTypedLinkRequest {
  export function isa(o: any): o is DetachTypedLinkRequest {
    return __isa(o, "DetachTypedLinkRequest");
  }
}

/**
 * <p>Directory structure that includes the directory name and directory ARN.</p>
 */
export interface Directory {
  __type?: "Directory";
  /**
   * <p>The date and time when the directory was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the directory. For more
   *       information, see <a>arns</a>.</p>
   */
  DirectoryArn?: string;

  /**
   * <p>The name of the directory.</p>
   */
  Name?: string;

  /**
   * <p>The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.</p>
   */
  State?: DirectoryState | string;
}

export namespace Directory {
  export function isa(o: any): o is Directory {
    return __isa(o, "Directory");
  }
}

/**
 * <p>Indicates that a <a>Directory</a> could not be created due to a naming
 *       conflict. Choose a different name and try again.</p>
 */
export interface DirectoryAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryAlreadyExistsException {
  export function isa(o: any): o is DirectoryAlreadyExistsException {
    return __isa(o, "DirectoryAlreadyExistsException");
  }
}

/**
 * <p>A directory that has been deleted and to which access has been attempted. Note: The
 *       requested resource will eventually cease to exist.</p>
 */
export interface DirectoryDeletedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryDeletedException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryDeletedException {
  export function isa(o: any): o is DirectoryDeletedException {
    return __isa(o, "DirectoryDeletedException");
  }
}

/**
 * <p>An operation can only operate on a disabled directory.</p>
 */
export interface DirectoryNotDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryNotDisabledException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryNotDisabledException {
  export function isa(o: any): o is DirectoryNotDisabledException {
    return __isa(o, "DirectoryNotDisabledException");
  }
}

/**
 * <p>Operations are only permitted on enabled directories.</p>
 */
export interface DirectoryNotEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryNotEnabledException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryNotEnabledException {
  export function isa(o: any): o is DirectoryNotEnabledException {
    return __isa(o, "DirectoryNotEnabledException");
  }
}

export enum DirectoryState {
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export interface DisableDirectoryRequest {
  __type?: "DisableDirectoryRequest";
  /**
   * <p>The ARN of the directory to disable.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace DisableDirectoryRequest {
  export function isa(o: any): o is DisableDirectoryRequest {
    return __isa(o, "DisableDirectoryRequest");
  }
}

export interface DisableDirectoryResponse {
  __type?: "DisableDirectoryResponse";
  /**
   * <p>The ARN of the directory that has been disabled.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace DisableDirectoryResponse {
  export function isa(o: any): o is DisableDirectoryResponse {
    return __isa(o, "DisableDirectoryResponse");
  }
}

export interface EnableDirectoryRequest {
  __type?: "EnableDirectoryRequest";
  /**
   * <p>The ARN of the directory to enable.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace EnableDirectoryRequest {
  export function isa(o: any): o is EnableDirectoryRequest {
    return __isa(o, "EnableDirectoryRequest");
  }
}

export interface EnableDirectoryResponse {
  __type?: "EnableDirectoryResponse";
  /**
   * <p>The ARN of the enabled directory.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace EnableDirectoryResponse {
  export function isa(o: any): o is EnableDirectoryResponse {
    return __isa(o, "EnableDirectoryResponse");
  }
}

/**
 * <p>A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code>
 *                <a>Rule</a>s</code>, and
 *       <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.</p>
 */
export interface Facet {
  __type?: "Facet";
  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle | string;

  /**
   * <p>The name of the <a>Facet</a>.</p>
   */
  Name?: string;

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType | string;
}

export namespace Facet {
  export function isa(o: any): o is Facet {
    return __isa(o, "Facet");
  }
}

/**
 * <p>A facet with the same name already exists.</p>
 */
export interface FacetAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "FacetAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace FacetAlreadyExistsException {
  export function isa(o: any): o is FacetAlreadyExistsException {
    return __isa(o, "FacetAlreadyExistsException");
  }
}

/**
 * <p>An attribute that is associated with the <a>Facet</a>.</p>
 */
export interface FacetAttribute {
  __type?: "FacetAttribute";
  /**
   * <p>A facet attribute consists of either a definition or a reference. This structure
   *       contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeDefinition?: FacetAttributeDefinition;

  /**
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeReference?: FacetAttributeReference;

  /**
   * <p>The name of the facet attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>The required behavior of the <code>FacetAttribute</code>.</p>
   */
  RequiredBehavior?: RequiredAttributeBehavior | string;
}

export namespace FacetAttribute {
  export function isa(o: any): o is FacetAttribute {
    return __isa(o, "FacetAttribute");
  }
}

/**
 * <p>A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
 */
export interface FacetAttributeDefinition {
  __type?: "FacetAttributeDefinition";
  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * <p>Validation rules attached to the attribute definition.</p>
   */
  Rules?: { [key: string]: Rule };

  /**
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | string | undefined;
}

export namespace FacetAttributeDefinition {
  export function isa(o: any): o is FacetAttributeDefinition {
    return __isa(o, "FacetAttributeDefinition");
  }
}

/**
 * <p>The facet attribute reference that specifies the attribute definition that contains the
 *       attribute facet name and attribute name.</p>
 */
export interface FacetAttributeReference {
  __type?: "FacetAttributeReference";
  /**
   * <p>The target attribute name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>The target facet name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetFacetName: string | undefined;
}

export namespace FacetAttributeReference {
  export function isa(o: any): o is FacetAttributeReference {
    return __isa(o, "FacetAttributeReference");
  }
}

export enum FacetAttributeType {
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  NUMBER = "NUMBER",
  STRING = "STRING",
  VARIANT = "VARIANT"
}

/**
 * <p>A structure that contains information used to update an attribute.</p>
 */
export interface FacetAttributeUpdate {
  __type?: "FacetAttributeUpdate";
  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action?: UpdateActionType | string;

  /**
   * <p>The attribute to update.</p>
   */
  Attribute?: FacetAttribute;
}

export namespace FacetAttributeUpdate {
  export function isa(o: any): o is FacetAttributeUpdate {
    return __isa(o, "FacetAttributeUpdate");
  }
}

/**
 * <p>Occurs when deleting a facet that contains an attribute that is a target to an
 *       attribute reference in a different facet.</p>
 */
export interface FacetInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "FacetInUseException";
  $fault: "client";
  Message?: string;
}

export namespace FacetInUseException {
  export function isa(o: any): o is FacetInUseException {
    return __isa(o, "FacetInUseException");
  }
}

/**
 * <p>The specified <a>Facet</a> could not be found.</p>
 */
export interface FacetNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "FacetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace FacetNotFoundException {
  export function isa(o: any): o is FacetNotFoundException {
    return __isa(o, "FacetNotFoundException");
  }
}

export enum FacetStyle {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC"
}

/**
 * <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 */
export interface FacetValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "FacetValidationException";
  $fault: "client";
  Message?: string;
}

export namespace FacetValidationException {
  export function isa(o: any): o is FacetValidationException {
    return __isa(o, "FacetValidationException");
  }
}

export interface GetAppliedSchemaVersionRequest {
  __type?: "GetAppliedSchemaVersionRequest";
  /**
   * <p>The ARN of the applied schema.</p>
   */
  SchemaArn: string | undefined;
}

export namespace GetAppliedSchemaVersionRequest {
  export function isa(o: any): o is GetAppliedSchemaVersionRequest {
    return __isa(o, "GetAppliedSchemaVersionRequest");
  }
}

export interface GetAppliedSchemaVersionResponse {
  __type?: "GetAppliedSchemaVersionResponse";
  /**
   * <p>Current applied schema ARN, including the minor version in use if one was provided.</p>
   */
  AppliedSchemaArn?: string;
}

export namespace GetAppliedSchemaVersionResponse {
  export function isa(o: any): o is GetAppliedSchemaVersionResponse {
    return __isa(o, "GetAppliedSchemaVersionResponse");
  }
}

export interface GetDirectoryRequest {
  __type?: "GetDirectoryRequest";
  /**
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;
}

export namespace GetDirectoryRequest {
  export function isa(o: any): o is GetDirectoryRequest {
    return __isa(o, "GetDirectoryRequest");
  }
}

export interface GetDirectoryResponse {
  __type?: "GetDirectoryResponse";
  /**
   * <p>Metadata about the directory.</p>
   */
  Directory: Directory | undefined;
}

export namespace GetDirectoryResponse {
  export function isa(o: any): o is GetDirectoryResponse {
    return __isa(o, "GetDirectoryResponse");
  }
}

export interface GetFacetRequest {
  __type?: "GetFacetRequest";
  /**
   * <p>The name of the facet to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace GetFacetRequest {
  export function isa(o: any): o is GetFacetRequest {
    return __isa(o, "GetFacetRequest");
  }
}

export interface GetFacetResponse {
  __type?: "GetFacetResponse";
  /**
   * <p>The <a>Facet</a> structure that is associated with the facet.</p>
   */
  Facet?: Facet;
}

export namespace GetFacetResponse {
  export function isa(o: any): o is GetFacetResponse {
    return __isa(o, "GetFacetResponse");
  }
}

export interface GetLinkAttributesRequest {
  __type?: "GetLinkAttributesRequest";
  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | undefined;

  /**
   * <p>The consistency level at which to retrieve the attributes on a typed link.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export namespace GetLinkAttributesRequest {
  export function isa(o: any): o is GetLinkAttributesRequest {
    return __isa(o, "GetLinkAttributesRequest");
  }
}

export interface GetLinkAttributesResponse {
  __type?: "GetLinkAttributesResponse";
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: Array<AttributeKeyAndValue>;
}

export namespace GetLinkAttributesResponse {
  export function isa(o: any): o is GetLinkAttributesResponse {
    return __isa(o, "GetLinkAttributesResponse");
  }
}

export interface GetObjectAttributesRequest {
  __type?: "GetObjectAttributesRequest";
  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | undefined;

  /**
   * <p>The consistency level at which to retrieve the attributes on an object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
}

export namespace GetObjectAttributesRequest {
  export function isa(o: any): o is GetObjectAttributesRequest {
    return __isa(o, "GetObjectAttributesRequest");
  }
}

export interface GetObjectAttributesResponse {
  __type?: "GetObjectAttributesResponse";
  /**
   * <p>The attributes that are associated with the object.</p>
   */
  Attributes?: Array<AttributeKeyAndValue>;
}

export namespace GetObjectAttributesResponse {
  export function isa(o: any): o is GetObjectAttributesResponse {
    return __isa(o, "GetObjectAttributesResponse");
  }
}

export interface GetObjectInformationRequest {
  __type?: "GetObjectInformationRequest";
  /**
   * <p>The consistency level at which to retrieve the object information.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The ARN of the directory being retrieved.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace GetObjectInformationRequest {
  export function isa(o: any): o is GetObjectInformationRequest {
    return __isa(o, "GetObjectInformationRequest");
  }
}

export interface GetObjectInformationResponse {
  __type?: "GetObjectInformationResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * <p>The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.</p>
   */
  SchemaFacets?: Array<SchemaFacet>;
}

export namespace GetObjectInformationResponse {
  export function isa(o: any): o is GetObjectInformationResponse {
    return __isa(o, "GetObjectInformationResponse");
  }
}

export interface GetSchemaAsJsonRequest {
  __type?: "GetSchemaAsJsonRequest";
  /**
   * <p>The ARN of the schema to retrieve.</p>
   */
  SchemaArn: string | undefined;
}

export namespace GetSchemaAsJsonRequest {
  export function isa(o: any): o is GetSchemaAsJsonRequest {
    return __isa(o, "GetSchemaAsJsonRequest");
  }
}

export interface GetSchemaAsJsonResponse {
  __type?: "GetSchemaAsJsonResponse";
  /**
   * <p>The JSON representation of the schema document.</p>
   */
  Document?: string;

  /**
   * <p>The name of the retrieved schema.</p>
   */
  Name?: string;
}

export namespace GetSchemaAsJsonResponse {
  export function isa(o: any): o is GetSchemaAsJsonResponse {
    return __isa(o, "GetSchemaAsJsonResponse");
  }
}

export interface GetTypedLinkFacetInformationRequest {
  __type?: "GetTypedLinkFacetInformationRequest";
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace GetTypedLinkFacetInformationRequest {
  export function isa(o: any): o is GetTypedLinkFacetInformationRequest {
    return __isa(o, "GetTypedLinkFacetInformationRequest");
  }
}

export interface GetTypedLinkFacetInformationResponse {
  __type?: "GetTypedLinkFacetInformationResponse";
  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet. When
   *       providing ranges to typed link selection, any inexact ranges must be specified at the end. Any
   *       attributes that do not have a range specified are presumed to match the entire range. Filters
   *       are interpreted in the order of the attributes on the typed link facet, not the order in which
   *       they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder?: Array<string>;
}

export namespace GetTypedLinkFacetInformationResponse {
  export function isa(o: any): o is GetTypedLinkFacetInformationResponse {
    return __isa(o, "GetTypedLinkFacetInformationResponse");
  }
}

/**
 * <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
 */
export interface IncompatibleSchemaException
  extends __SmithyException,
    $MetadataBearer {
  name: "IncompatibleSchemaException";
  $fault: "client";
  Message?: string;
}

export namespace IncompatibleSchemaException {
  export function isa(o: any): o is IncompatibleSchemaException {
    return __isa(o, "IncompatibleSchemaException");
  }
}

/**
 * <p>Represents an index and an attached object.</p>
 */
export interface IndexAttachment {
  __type?: "IndexAttachment";
  /**
   * <p>The indexed attribute values.</p>
   */
  IndexedAttributes?: Array<AttributeKeyAndValue>;

  /**
   * <p>In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.</p>
   */
  ObjectIdentifier?: string;
}

export namespace IndexAttachment {
  export function isa(o: any): o is IndexAttachment {
    return __isa(o, "IndexAttachment");
  }
}

/**
 * <p>An object has been attempted to be attached to an object that does not have the appropriate attribute value.</p>
 */
export interface IndexedAttributeMissingException
  extends __SmithyException,
    $MetadataBearer {
  name: "IndexedAttributeMissingException";
  $fault: "client";
  Message?: string;
}

export namespace IndexedAttributeMissingException {
  export function isa(o: any): o is IndexedAttributeMissingException {
    return __isa(o, "IndexedAttributeMissingException");
  }
}

/**
 * <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export function isa(o: any): o is InternalServiceException {
    return __isa(o, "InternalServiceException");
  }
}

/**
 * <p>Indicates that the provided ARN value is not valid.</p>
 */
export interface InvalidArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArnException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArnException {
  export function isa(o: any): o is InvalidArnException {
    return __isa(o, "InvalidArnException");
  }
}

/**
 * <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 */
export interface InvalidAttachmentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAttachmentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAttachmentException {
  export function isa(o: any): o is InvalidAttachmentException {
    return __isa(o, "InvalidAttachmentException");
  }
}

/**
 * <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema
 *       exception.</p>
 */
export interface InvalidFacetUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidFacetUpdateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFacetUpdateException {
  export function isa(o: any): o is InvalidFacetUpdateException {
    return __isa(o, "InvalidFacetUpdateException");
  }
}

/**
 * <p>Indicates that the <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>Occurs when any of the rule parameter keys or values are invalid.</p>
 */
export interface InvalidRuleException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRuleException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRuleException {
  export function isa(o: any): o is InvalidRuleException {
    return __isa(o, "InvalidRuleException");
  }
}

/**
 * <p>Indicates that the provided <code>SchemaDoc</code> value is not valid.</p>
 */
export interface InvalidSchemaDocException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSchemaDocException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSchemaDocException {
  export function isa(o: any): o is InvalidSchemaDocException {
    return __isa(o, "InvalidSchemaDocException");
  }
}

/**
 * <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
 */
export interface InvalidTaggingRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTaggingRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTaggingRequestException {
  export function isa(o: any): o is InvalidTaggingRequestException {
    return __isa(o, "InvalidTaggingRequestException");
  }
}

/**
 * <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

/**
 * <p>The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.</p>
 */
export interface LinkAttributeAction {
  __type?: "LinkAttributeAction";
  /**
   * <p>A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.</p>
   */
  AttributeActionType?: UpdateActionType | string;

  /**
   * <p>The value that you want to update to.</p>
   */
  AttributeUpdateValue?: TypedAttributeValue;
}

export namespace LinkAttributeAction {
  export function isa(o: any): o is LinkAttributeAction {
    return __isa(o, "LinkAttributeAction");
  }
}

/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface LinkAttributeUpdate {
  __type?: "LinkAttributeUpdate";
  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  AttributeAction?: LinkAttributeAction;

  /**
   * <p>The key of the attribute being updated.</p>
   */
  AttributeKey?: AttributeKey;
}

export namespace LinkAttributeUpdate {
  export function isa(o: any): o is LinkAttributeUpdate {
    return __isa(o, "LinkAttributeUpdate");
  }
}

/**
 * <p>Indicates that a link could not be created due to a naming conflict. Choose a different
 *       name and then try again.</p>
 */
export interface LinkNameAlreadyInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "LinkNameAlreadyInUseException";
  $fault: "client";
  Message?: string;
}

export namespace LinkNameAlreadyInUseException {
  export function isa(o: any): o is LinkNameAlreadyInUseException {
    return __isa(o, "LinkNameAlreadyInUseException");
  }
}

export interface ListAppliedSchemaArnsRequest {
  __type?: "ListAppliedSchemaArnsRequest";
  /**
   * <p>The ARN of the directory you are listing.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;
}

export namespace ListAppliedSchemaArnsRequest {
  export function isa(o: any): o is ListAppliedSchemaArnsRequest {
    return __isa(o, "ListAppliedSchemaArnsRequest");
  }
}

export interface ListAppliedSchemaArnsResponse {
  __type?: "ListAppliedSchemaArnsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARNs of schemas that are applied to the directory.</p>
   */
  SchemaArns?: Array<string>;
}

export namespace ListAppliedSchemaArnsResponse {
  export function isa(o: any): o is ListAppliedSchemaArnsResponse {
    return __isa(o, "ListAppliedSchemaArnsResponse");
  }
}

export interface ListAttachedIndicesRequest {
  __type?: "ListAttachedIndicesRequest";
  /**
   * <p>The consistency level to use for this operation.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export namespace ListAttachedIndicesRequest {
  export function isa(o: any): o is ListAttachedIndicesRequest {
    return __isa(o, "ListAttachedIndicesRequest");
  }
}

export interface ListAttachedIndicesResponse {
  __type?: "ListAttachedIndicesResponse";
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: Array<IndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListAttachedIndicesResponse {
  export function isa(o: any): o is ListAttachedIndicesResponse {
    return __isa(o, "ListAttachedIndicesResponse");
  }
}

export interface ListDevelopmentSchemaArnsRequest {
  __type?: "ListDevelopmentSchemaArnsRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListDevelopmentSchemaArnsRequest {
  export function isa(o: any): o is ListDevelopmentSchemaArnsRequest {
    return __isa(o, "ListDevelopmentSchemaArnsRequest");
  }
}

export interface ListDevelopmentSchemaArnsResponse {
  __type?: "ListDevelopmentSchemaArnsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARNs of retrieved development schemas.</p>
   */
  SchemaArns?: Array<string>;
}

export namespace ListDevelopmentSchemaArnsResponse {
  export function isa(o: any): o is ListDevelopmentSchemaArnsResponse {
    return __isa(o, "ListDevelopmentSchemaArnsResponse");
  }
}

export interface ListDirectoriesRequest {
  __type?: "ListDirectoriesRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The state of the directories in the list. Can be either Enabled, Disabled, or
   *       Deleted.</p>
   */
  state?: DirectoryState | string;
}

export namespace ListDirectoriesRequest {
  export function isa(o: any): o is ListDirectoriesRequest {
    return __isa(o, "ListDirectoriesRequest");
  }
}

export interface ListDirectoriesResponse {
  __type?: "ListDirectoriesResponse";
  /**
   * <p>Lists all directories that are associated with your account in pagination
   *       fashion.</p>
   */
  Directories: Array<Directory> | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListDirectoriesResponse {
  export function isa(o: any): o is ListDirectoriesResponse {
    return __isa(o, "ListDirectoriesResponse");
  }
}

export interface ListFacetAttributesRequest {
  __type?: "ListFacetAttributesRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the facet whose attributes will be retrieved.</p>
   */
  Name: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the schema where the facet resides.</p>
   */
  SchemaArn: string | undefined;
}

export namespace ListFacetAttributesRequest {
  export function isa(o: any): o is ListFacetAttributesRequest {
    return __isa(o, "ListFacetAttributesRequest");
  }
}

export interface ListFacetAttributesResponse {
  __type?: "ListFacetAttributesResponse";
  /**
   * <p>The attributes attached to the facet.</p>
   */
  Attributes?: Array<FacetAttribute>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListFacetAttributesResponse {
  export function isa(o: any): o is ListFacetAttributesResponse {
    return __isa(o, "ListFacetAttributesResponse");
  }
}

export interface ListFacetNamesRequest {
  __type?: "ListFacetNamesRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) to retrieve facet names from.</p>
   */
  SchemaArn: string | undefined;
}

export namespace ListFacetNamesRequest {
  export function isa(o: any): o is ListFacetNamesRequest {
    return __isa(o, "ListFacetNamesRequest");
  }
}

export interface ListFacetNamesResponse {
  __type?: "ListFacetNamesResponse";
  /**
   * <p>The names of facets that exist within the schema.</p>
   */
  FacetNames?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListFacetNamesResponse {
  export function isa(o: any): o is ListFacetNamesResponse {
    return __isa(o, "ListFacetNamesResponse");
  }
}

export interface ListIncomingTypedLinksRequest {
  __type?: "ListIncomingTypedLinksRequest";
  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *       order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListIncomingTypedLinksRequest {
  export function isa(o: any): o is ListIncomingTypedLinksRequest {
    return __isa(o, "ListIncomingTypedLinksRequest");
  }
}

export interface ListIncomingTypedLinksResponse {
  __type?: "ListIncomingTypedLinksResponse";
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: Array<TypedLinkSpecifier>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIncomingTypedLinksResponse {
  export function isa(o: any): o is ListIncomingTypedLinksResponse {
    return __isa(o, "ListIncomingTypedLinksResponse");
  }
}

export interface ListIndexRequest {
  __type?: "ListIndexRequest";
  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The ARN of the directory that the index exists in.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: Array<ObjectAttributeRange>;
}

export namespace ListIndexRequest {
  export function isa(o: any): o is ListIndexRequest {
    return __isa(o, "ListIndexRequest");
  }
}

export interface ListIndexResponse {
  __type?: "ListIndexResponse";
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: Array<IndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIndexResponse {
  export function isa(o: any): o is ListIndexResponse {
    return __isa(o, "ListIndexResponse");
  }
}

export interface ListManagedSchemaArnsRequest {
  __type?: "ListManagedSchemaArnsRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.</p>
   */
  SchemaArn?: string;
}

export namespace ListManagedSchemaArnsRequest {
  export function isa(o: any): o is ListManagedSchemaArnsRequest {
    return __isa(o, "ListManagedSchemaArnsRequest");
  }
}

export interface ListManagedSchemaArnsResponse {
  __type?: "ListManagedSchemaArnsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARNs for all AWS managed schemas.</p>
   */
  SchemaArns?: Array<string>;
}

export namespace ListManagedSchemaArnsResponse {
  export function isa(o: any): o is ListManagedSchemaArnsResponse {
    return __isa(o, "ListManagedSchemaArnsResponse");
  }
}

export interface ListObjectAttributesRequest {
  __type?: "ListObjectAttributesRequest";
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListObjectAttributesRequest {
  export function isa(o: any): o is ListObjectAttributesRequest {
    return __isa(o, "ListObjectAttributesRequest");
  }
}

export interface ListObjectAttributesResponse {
  __type?: "ListObjectAttributesResponse";
  /**
   * <p>Attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key, and attribute value is the value.</p>
   */
  Attributes?: Array<AttributeKeyAndValue>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListObjectAttributesResponse {
  export function isa(o: any): o is ListObjectAttributesResponse {
    return __isa(o, "ListObjectAttributesResponse");
  }
}

export interface ListObjectChildrenRequest {
  __type?: "ListObjectChildrenRequest";
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object for which child objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListObjectChildrenRequest {
  export function isa(o: any): o is ListObjectChildrenRequest {
    return __isa(o, "ListObjectChildrenRequest");
  }
}

export interface ListObjectChildrenResponse {
  __type?: "ListObjectChildrenResponse";
  /**
   * <p>Children structure, which is a map with key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: { [key: string]: string };

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListObjectChildrenResponse {
  export function isa(o: any): o is ListObjectChildrenResponse {
    return __isa(o, "ListObjectChildrenResponse");
  }
}

export interface ListObjectParentPathsRequest {
  __type?: "ListObjectParentPathsRequest";
  /**
   * <p>The ARN of the directory to which the parent path applies.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object whose parent paths are listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListObjectParentPathsRequest {
  export function isa(o: any): o is ListObjectParentPathsRequest {
    return __isa(o, "ListObjectParentPathsRequest");
  }
}

export interface ListObjectParentPathsResponse {
  __type?: "ListObjectParentPathsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *       directory.</p>
   */
  PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
}

export namespace ListObjectParentPathsResponse {
  export function isa(o: any): o is ListObjectParentPathsResponse {
    return __isa(o, "ListObjectParentPathsResponse");
  }
}

export interface ListObjectParentsRequest {
  __type?: "ListObjectParentsRequest";
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.</p>
   */
  IncludeAllLinksToEachParent?: boolean;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the object for which parent objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListObjectParentsRequest {
  export function isa(o: any): o is ListObjectParentsRequest {
    return __isa(o, "ListObjectParentsRequest");
  }
}

export interface ListObjectParentsResponse {
  __type?: "ListObjectParentsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;

  /**
   * <p>The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and
   *       LinkName as the value.</p>
   */
  Parents?: { [key: string]: string };
}

export namespace ListObjectParentsResponse {
  export function isa(o: any): o is ListObjectParentsResponse {
    return __isa(o, "ListObjectParentsResponse");
  }
}

export interface ListObjectPoliciesRequest {
  __type?: "ListObjectPoliciesRequest";
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Reference that identifies the object for which policies will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListObjectPoliciesRequest {
  export function isa(o: any): o is ListObjectPoliciesRequest {
    return __isa(o, "ListObjectPoliciesRequest");
  }
}

export interface ListObjectPoliciesResponse {
  __type?: "ListObjectPoliciesResponse";
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *       object.</p>
   */
  AttachedPolicyIds?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListObjectPoliciesResponse {
  export function isa(o: any): o is ListObjectPoliciesResponse {
    return __isa(o, "ListObjectPoliciesResponse");
  }
}

export interface ListOutgoingTypedLinksRequest {
  __type?: "ListOutgoingTypedLinksRequest";
  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *       not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>A reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace ListOutgoingTypedLinksRequest {
  export function isa(o: any): o is ListOutgoingTypedLinksRequest {
    return __isa(o, "ListOutgoingTypedLinksRequest");
  }
}

export interface ListOutgoingTypedLinksResponse {
  __type?: "ListOutgoingTypedLinksResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
}

export namespace ListOutgoingTypedLinksResponse {
  export function isa(o: any): o is ListOutgoingTypedLinksResponse {
    return __isa(o, "ListOutgoingTypedLinksResponse");
  }
}

export interface ListPolicyAttachmentsRequest {
  __type?: "ListPolicyAttachmentsRequest";
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
}

export namespace ListPolicyAttachmentsRequest {
  export function isa(o: any): o is ListPolicyAttachmentsRequest {
    return __isa(o, "ListPolicyAttachmentsRequest");
  }
}

export interface ListPolicyAttachmentsResponse {
  __type?: "ListPolicyAttachmentsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: Array<string>;
}

export namespace ListPolicyAttachmentsResponse {
  export function isa(o: any): o is ListPolicyAttachmentsResponse {
    return __isa(o, "ListPolicyAttachmentsResponse");
  }
}

export interface ListPublishedSchemaArnsRequest {
  __type?: "ListPublishedSchemaArnsRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;
}

export namespace ListPublishedSchemaArnsRequest {
  export function isa(o: any): o is ListPublishedSchemaArnsRequest {
    return __isa(o, "ListPublishedSchemaArnsRequest");
  }
}

export interface ListPublishedSchemaArnsResponse {
  __type?: "ListPublishedSchemaArnsResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARNs of published schemas.</p>
   */
  SchemaArns?: Array<string>;
}

export namespace ListPublishedSchemaArnsResponse {
  export function isa(o: any): o is ListPublishedSchemaArnsResponse {
    return __isa(o, "ListPublishedSchemaArnsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The <code>MaxResults</code> parameter sets the maximum number of results returned in a
   *       single page. This is for future use and is not supported currently.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token. This is for future use. Currently pagination is not supported for
   *       tagging.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of tag key value pairs that are associated with the response.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface ListTypedLinkFacetAttributesRequest {
  __type?: "ListTypedLinkFacetAttributesRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace ListTypedLinkFacetAttributesRequest {
  export function isa(o: any): o is ListTypedLinkFacetAttributesRequest {
    return __isa(o, "ListTypedLinkFacetAttributesRequest");
  }
}

export interface ListTypedLinkFacetAttributesResponse {
  __type?: "ListTypedLinkFacetAttributesResponse";
  /**
   * <p>An ordered set of attributes associate with the typed link.</p>
   */
  Attributes?: Array<TypedLinkAttributeDefinition>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListTypedLinkFacetAttributesResponse {
  export function isa(o: any): o is ListTypedLinkFacetAttributesResponse {
    return __isa(o, "ListTypedLinkFacetAttributesResponse");
  }
}

export interface ListTypedLinkFacetNamesRequest {
  __type?: "ListTypedLinkFacetNamesRequest";
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace ListTypedLinkFacetNamesRequest {
  export function isa(o: any): o is ListTypedLinkFacetNamesRequest {
    return __isa(o, "ListTypedLinkFacetNamesRequest");
  }
}

export interface ListTypedLinkFacetNamesResponse {
  __type?: "ListTypedLinkFacetNamesResponse";
  /**
   * <p>The names of typed link facets that exist within the schema.</p>
   */
  FacetNames?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListTypedLinkFacetNamesResponse {
  export function isa(o: any): o is ListTypedLinkFacetNamesResponse {
    return __isa(o, "ListTypedLinkFacetNamesResponse");
  }
}

export interface LookupPolicyRequest {
  __type?: "LookupPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace LookupPolicyRequest {
  export function isa(o: any): o is LookupPolicyRequest {
    return __isa(o, "LookupPolicyRequest");
  }
}

export interface LookupPolicyResponse {
  __type?: "LookupPolicyResponse";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *       <code>PolicyType</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: Array<PolicyToPath>;
}

export namespace LookupPolicyResponse {
  export function isa(o: any): o is LookupPolicyResponse {
    return __isa(o, "LookupPolicyResponse");
  }
}

/**
 * <p>Indicates that the requested operation can only operate on index objects.</p>
 */
export interface NotIndexException extends __SmithyException, $MetadataBearer {
  name: "NotIndexException";
  $fault: "client";
  Message?: string;
}

export namespace NotIndexException {
  export function isa(o: any): o is NotIndexException {
    return __isa(o, "NotIndexException");
  }
}

/**
 * <p>Occurs when any invalid operations are performed on an object that is not a node, such
 *       as calling <code>ListObjectChildren</code> for a leaf node object.</p>
 */
export interface NotNodeException extends __SmithyException, $MetadataBearer {
  name: "NotNodeException";
  $fault: "client";
  Message?: string;
}

export namespace NotNodeException {
  export function isa(o: any): o is NotNodeException {
    return __isa(o, "NotNodeException");
  }
}

/**
 * <p>Indicates that the requested operation can only operate on policy objects.</p>
 */
export interface NotPolicyException extends __SmithyException, $MetadataBearer {
  name: "NotPolicyException";
  $fault: "client";
  Message?: string;
}

export namespace NotPolicyException {
  export function isa(o: any): o is NotPolicyException {
    return __isa(o, "NotPolicyException");
  }
}

/**
 * <p>Indicates that the object is not attached to the index.</p>
 */
export interface ObjectAlreadyDetachedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ObjectAlreadyDetachedException";
  $fault: "client";
  Message?: string;
}

export namespace ObjectAlreadyDetachedException {
  export function isa(o: any): o is ObjectAlreadyDetachedException {
    return __isa(o, "ObjectAlreadyDetachedException");
  }
}

/**
 * <p>The action to take on the object attribute.</p>
 */
export interface ObjectAttributeAction {
  __type?: "ObjectAttributeAction";
  /**
   * <p>A type that can be either <code>Update</code> or <code>Delete</code>.</p>
   */
  ObjectAttributeActionType?: UpdateActionType | string;

  /**
   * <p>The value that you want to update to.</p>
   */
  ObjectAttributeUpdateValue?: TypedAttributeValue;
}

export namespace ObjectAttributeAction {
  export function isa(o: any): o is ObjectAttributeAction {
    return __isa(o, "ObjectAttributeAction");
  }
}

/**
 * <p>A range of attributes.</p>
 */
export interface ObjectAttributeRange {
  __type?: "ObjectAttributeRange";
  /**
   * <p>The key of the attribute that the attribute range covers.</p>
   */
  AttributeKey?: AttributeKey;

  /**
   * <p>The range of attribute values being selected.</p>
   */
  Range?: TypedAttributeValueRange;
}

export namespace ObjectAttributeRange {
  export function isa(o: any): o is ObjectAttributeRange {
    return __isa(o, "ObjectAttributeRange");
  }
}

/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface ObjectAttributeUpdate {
  __type?: "ObjectAttributeUpdate";
  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  ObjectAttributeAction?: ObjectAttributeAction;

  /**
   * <p>The key of the attribute being updated.</p>
   */
  ObjectAttributeKey?: AttributeKey;
}

export namespace ObjectAttributeUpdate {
  export function isa(o: any): o is ObjectAttributeUpdate {
    return __isa(o, "ObjectAttributeUpdate");
  }
}

/**
 * <p>A pair of ObjectIdentifier and LinkName.</p>
 */
export interface ObjectIdentifierAndLinkNameTuple {
  __type?: "ObjectIdentifierAndLinkNameTuple";
  /**
   * <p>The name of the link between the parent and the child object.</p>
   */
  LinkName?: string;

  /**
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

export namespace ObjectIdentifierAndLinkNameTuple {
  export function isa(o: any): o is ObjectIdentifierAndLinkNameTuple {
    return __isa(o, "ObjectIdentifierAndLinkNameTuple");
  }
}

/**
 * <p>Indicates that the requested operation cannot be completed because the object has not
 *       been detached from the tree.</p>
 */
export interface ObjectNotDetachedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ObjectNotDetachedException";
  $fault: "client";
  Message?: string;
}

export namespace ObjectNotDetachedException {
  export function isa(o: any): o is ObjectNotDetachedException {
    return __isa(o, "ObjectNotDetachedException");
  }
}

/**
 * <p>The reference that identifies an object.</p>
 */
export interface ObjectReference {
  __type?: "ObjectReference";
  /**
   * <p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>/some/path</i> - Identifies the object based on path</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>#SomeBatchReference</i> - Identifies the object in a batch call</p>
   *             </li>
   *          </ul>
   */
  Selector?: string;
}

export namespace ObjectReference {
  export function isa(o: any): o is ObjectReference {
    return __isa(o, "ObjectReference");
  }
}

export enum ObjectType {
  INDEX = "INDEX",
  LEAF_NODE = "LEAF_NODE",
  NODE = "NODE",
  POLICY = "POLICY"
}

/**
 * <p>Returns the path to the <code>ObjectIdentifiers</code> that is associated with the
 *       directory.</p>
 */
export interface PathToObjectIdentifiers {
  __type?: "PathToObjectIdentifiers";
  /**
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the
   *       request.</p>
   */
  ObjectIdentifiers?: Array<string>;

  /**
   * <p>The path that is used to identify the object starting from directory root.</p>
   */
  Path?: string;
}

export namespace PathToObjectIdentifiers {
  export function isa(o: any): o is PathToObjectIdentifiers {
    return __isa(o, "PathToObjectIdentifiers");
  }
}

/**
 * <p>Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is
 *       attached. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 */
export interface PolicyAttachment {
  __type?: "PolicyAttachment";
  /**
   * <p>The <code>ObjectIdentifier</code> that is associated with
   *       <code>PolicyAttachment</code>.</p>
   */
  ObjectIdentifier?: string;

  /**
   * <p>The ID of <code>PolicyAttachment</code>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The type of policy that can be associated with <code>PolicyAttachment</code>.</p>
   */
  PolicyType?: string;
}

export namespace PolicyAttachment {
  export function isa(o: any): o is PolicyAttachment {
    return __isa(o, "PolicyAttachment");
  }
}

/**
 * <p>Used when a regular object exists in a <a>Directory</a> and you want to find
 *       all of the policies that are associated with that object and the parent to that
 *       object.</p>
 */
export interface PolicyToPath {
  __type?: "PolicyToPath";
  /**
   * <p>The path that is referenced from the root.</p>
   */
  Path?: string;

  /**
   * <p>List of policy objects.</p>
   */
  Policies?: Array<PolicyAttachment>;
}

export namespace PolicyToPath {
  export function isa(o: any): o is PolicyToPath {
    return __isa(o, "PolicyToPath");
  }
}

export interface PublishSchemaRequest {
  __type?: "PublishSchemaRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the development schema. For
   *       more information, see <a>arns</a>.</p>
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * <p>The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.</p>
   */
  MinorVersion?: string;

  /**
   * <p>The new name under which the schema will be published. If this is not provided, the
   *       development schema is considered.</p>
   */
  Name?: string;

  /**
   * <p>The major version under which the schema will be published. Schemas have both a major and minor version associated with them.</p>
   */
  Version: string | undefined;
}

export namespace PublishSchemaRequest {
  export function isa(o: any): o is PublishSchemaRequest {
    return __isa(o, "PublishSchemaRequest");
  }
}

export interface PublishSchemaResponse {
  __type?: "PublishSchemaResponse";
  /**
   * <p>The ARN that is associated with the published schema. For more information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn?: string;
}

export namespace PublishSchemaResponse {
  export function isa(o: any): o is PublishSchemaResponse {
    return __isa(o, "PublishSchemaResponse");
  }
}

export interface PutSchemaFromJsonRequest {
  __type?: "PutSchemaFromJsonRequest";
  /**
   * <p>The replacement JSON schema.</p>
   */
  Document: string | undefined;

  /**
   * <p>The ARN of the schema to update.</p>
   */
  SchemaArn: string | undefined;
}

export namespace PutSchemaFromJsonRequest {
  export function isa(o: any): o is PutSchemaFromJsonRequest {
    return __isa(o, "PutSchemaFromJsonRequest");
  }
}

export interface PutSchemaFromJsonResponse {
  __type?: "PutSchemaFromJsonResponse";
  /**
   * <p>The ARN of the schema to update.</p>
   */
  Arn?: string;
}

export namespace PutSchemaFromJsonResponse {
  export function isa(o: any): o is PutSchemaFromJsonResponse {
    return __isa(o, "PutSchemaFromJsonResponse");
  }
}

export enum RangeMode {
  EXCLUSIVE = "EXCLUSIVE",
  FIRST = "FIRST",
  INCLUSIVE = "INCLUSIVE",
  LAST = "LAST",
  LAST_BEFORE_MISSING_VALUES = "LAST_BEFORE_MISSING_VALUES"
}

export interface RemoveFacetFromObjectRequest {
  __type?: "RemoveFacetFromObjectRequest";
  /**
   * <p>The ARN of the directory in which the object resides.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the object to remove the facet from.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The facet to remove. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
}

export namespace RemoveFacetFromObjectRequest {
  export function isa(o: any): o is RemoveFacetFromObjectRequest {
    return __isa(o, "RemoveFacetFromObjectRequest");
  }
}

export interface RemoveFacetFromObjectResponse {
  __type?: "RemoveFacetFromObjectResponse";
}

export namespace RemoveFacetFromObjectResponse {
  export function isa(o: any): o is RemoveFacetFromObjectResponse {
    return __isa(o, "RemoveFacetFromObjectResponse");
  }
}

export enum RequiredAttributeBehavior {
  NOT_REQUIRED = "NOT_REQUIRED",
  REQUIRED_ALWAYS = "REQUIRED_ALWAYS"
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 */
export interface RetryableConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "RetryableConflictException";
  $fault: "client";
  Message?: string;
}

export namespace RetryableConflictException {
  export function isa(o: any): o is RetryableConflictException {
    return __isa(o, "RetryableConflictException");
  }
}

/**
 * <p>Contains an Amazon Resource Name (ARN) and parameters that are associated with the
 *       rule.</p>
 */
export interface Rule {
  __type?: "Rule";
  /**
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The type of attribute validation rule.</p>
   */
  Type?: RuleType | string;
}

export namespace Rule {
  export function isa(o: any): o is Rule {
    return __isa(o, "Rule");
  }
}

export enum RuleType {
  BINARY_LENGTH = "BINARY_LENGTH",
  NUMBER_COMPARISON = "NUMBER_COMPARISON",
  STRING_FROM_SET = "STRING_FROM_SET",
  STRING_LENGTH = "STRING_LENGTH"
}

/**
 * <p>Indicates that a schema could not be created due to a naming conflict. Please select a
 *       different name and then try again.</p>
 */
export interface SchemaAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "SchemaAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace SchemaAlreadyExistsException {
  export function isa(o: any): o is SchemaAlreadyExistsException {
    return __isa(o, "SchemaAlreadyExistsException");
  }
}

/**
 * <p>Indicates that a schema is already published.</p>
 */
export interface SchemaAlreadyPublishedException
  extends __SmithyException,
    $MetadataBearer {
  name: "SchemaAlreadyPublishedException";
  $fault: "client";
  Message?: string;
}

export namespace SchemaAlreadyPublishedException {
  export function isa(o: any): o is SchemaAlreadyPublishedException {
    return __isa(o, "SchemaAlreadyPublishedException");
  }
}

/**
 * <p>A facet.</p>
 */
export interface SchemaFacet {
  __type?: "SchemaFacet";
  /**
   * <p>The name of the facet.</p>
   */
  FacetName?: string;

  /**
   * <p>The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions.</p>
   */
  SchemaArn?: string;
}

export namespace SchemaFacet {
  export function isa(o: any): o is SchemaFacet {
    return __isa(o, "SchemaFacet");
  }
}

/**
 * <p>The object could not be deleted because links still exist. Remove the links and then
 *       try the operation again.</p>
 */
export interface StillContainsLinksException
  extends __SmithyException,
    $MetadataBearer {
  name: "StillContainsLinksException";
  $fault: "client";
  Message?: string;
}

export namespace StillContainsLinksException {
  export function isa(o: any): o is StillContainsLinksException {
    return __isa(o, "StillContainsLinksException");
  }
}

/**
 * <p>The tag structure that contains a tag key and value.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key that is associated with the tag.</p>
   */
  Key?: string;

  /**
   * <p>The value that is associated with the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>Represents the data for a typed attribute. You can set one, and only one, of the
 *       elements. Each attribute in an item is a name-value pair. Attributes have a single
 *       value.</p>
 */
export interface TypedAttributeValue {
  __type?: "TypedAttributeValue";
  /**
   * <p>A binary data value.</p>
   */
  BinaryValue?: Uint8Array;

  /**
   * <p>A Boolean data value.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>A date and time value.</p>
   */
  DatetimeValue?: Date;

  /**
   * <p>A number data value.</p>
   */
  NumberValue?: string;

  /**
   * <p>A string data value.</p>
   */
  StringValue?: string;
}

export namespace TypedAttributeValue {
  export function isa(o: any): o is TypedAttributeValue {
    return __isa(o, "TypedAttributeValue");
  }
}

/**
 * <p>A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.</p>
 */
export interface TypedAttributeValueRange {
  __type?: "TypedAttributeValueRange";
  /**
   * <p>The inclusive or exclusive range end.</p>
   */
  EndMode: RangeMode | string | undefined;

  /**
   * <p>The attribute value to terminate the range at.</p>
   */
  EndValue?: TypedAttributeValue;

  /**
   * <p>The inclusive or exclusive range start.</p>
   */
  StartMode: RangeMode | string | undefined;

  /**
   * <p>The value to start the range at.</p>
   */
  StartValue?: TypedAttributeValue;
}

export namespace TypedAttributeValueRange {
  export function isa(o: any): o is TypedAttributeValueRange {
    return __isa(o, "TypedAttributeValueRange");
  }
}

/**
 * <p>A typed link attribute definition.</p>
 */
export interface TypedLinkAttributeDefinition {
  __type?: "TypedLinkAttributeDefinition";
  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>The required behavior of the <code>TypedLinkAttributeDefinition</code>.</p>
   */
  RequiredBehavior: RequiredAttributeBehavior | string | undefined;

  /**
   * <p>Validation rules that are attached to the attribute definition.</p>
   */
  Rules?: { [key: string]: Rule };

  /**
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | string | undefined;
}

export namespace TypedLinkAttributeDefinition {
  export function isa(o: any): o is TypedLinkAttributeDefinition {
    return __isa(o, "TypedLinkAttributeDefinition");
  }
}

/**
 * <p>Identifies the range of attributes that are used by a specified filter.</p>
 */
export interface TypedLinkAttributeRange {
  __type?: "TypedLinkAttributeRange";
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The range of attribute values that are being selected.</p>
   */
  Range: TypedAttributeValueRange | undefined;
}

export namespace TypedLinkAttributeRange {
  export function isa(o: any): o is TypedLinkAttributeRange {
    return __isa(o, "TypedLinkAttributeRange");
  }
}

/**
 * <p>Defines the typed links structure and its attributes. To create a typed link facet, use
 *       the <a>CreateTypedLinkFacet</a> API.</p>
 */
export interface TypedLinkFacet {
  __type?: "TypedLinkFacet";
  /**
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   */
  Attributes: Array<TypedLinkAttributeDefinition> | undefined;

  /**
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   */
  IdentityAttributeOrder: Array<string> | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}

export namespace TypedLinkFacet {
  export function isa(o: any): o is TypedLinkFacet {
    return __isa(o, "TypedLinkFacet");
  }
}

/**
 * <p>A typed link facet attribute update.</p>
 */
export interface TypedLinkFacetAttributeUpdate {
  __type?: "TypedLinkFacetAttributeUpdate";
  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action: UpdateActionType | string | undefined;

  /**
   * <p>The attribute to update.</p>
   */
  Attribute: TypedLinkAttributeDefinition | undefined;
}

export namespace TypedLinkFacetAttributeUpdate {
  export function isa(o: any): o is TypedLinkFacetAttributeUpdate {
    return __isa(o, "TypedLinkFacetAttributeUpdate");
  }
}

/**
 * <p>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed
 *       link.</p>
 */
export interface TypedLinkSchemaAndFacetName {
  __type?: "TypedLinkSchemaAndFacetName";
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  TypedLinkName: string | undefined;
}

export namespace TypedLinkSchemaAndFacetName {
  export function isa(o: any): o is TypedLinkSchemaAndFacetName {
    return __isa(o, "TypedLinkSchemaAndFacetName");
  }
}

/**
 * <p>Contains all the information that is used to uniquely identify a typed link. The
 *       parameters discussed in this topic are used to uniquely specify the typed link being operated
 *       on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API
 *       operations provide typed link specifiers as output. You can also construct a typed link
 *       specifier from scratch.</p>
 */
export interface TypedLinkSpecifier {
  __type?: "TypedLinkSpecifier";
  /**
   * <p>Identifies the attribute value to update.</p>
   */
  IdentityAttributeValues: Array<AttributeNameAndValue> | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;
}

export namespace TypedLinkSpecifier {
  export function isa(o: any): o is TypedLinkSpecifier {
    return __isa(o, "TypedLinkSpecifier");
  }
}

/**
 * <p>Indicates that the requested index type is not supported.</p>
 */
export interface UnsupportedIndexTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedIndexTypeException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedIndexTypeException {
  export function isa(o: any): o is UnsupportedIndexTypeException {
    return __isa(o, "UnsupportedIndexTypeException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of the tag that need to be removed from the resource.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export enum UpdateActionType {
  CREATE_OR_UPDATE = "CREATE_OR_UPDATE",
  DELETE = "DELETE"
}

export interface UpdateFacetRequest {
  __type?: "UpdateFacetRequest";
  /**
   * <p>List of attributes that need to be updated in a given schema <a>Facet</a>.
   *       Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update
   *       operation to perform. </p>
   */
  AttributeUpdates?: Array<FacetAttributeUpdate>;

  /**
   * <p>The name of the facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType | string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace UpdateFacetRequest {
  export function isa(o: any): o is UpdateFacetRequest {
    return __isa(o, "UpdateFacetRequest");
  }
}

export interface UpdateFacetResponse {
  __type?: "UpdateFacetResponse";
}

export namespace UpdateFacetResponse {
  export function isa(o: any): o is UpdateFacetResponse {
    return __isa(o, "UpdateFacetResponse");
  }
}

export interface UpdateLinkAttributesRequest {
  __type?: "UpdateLinkAttributesRequest";
  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: Array<LinkAttributeUpdate> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export namespace UpdateLinkAttributesRequest {
  export function isa(o: any): o is UpdateLinkAttributesRequest {
    return __isa(o, "UpdateLinkAttributesRequest");
  }
}

export interface UpdateLinkAttributesResponse {
  __type?: "UpdateLinkAttributesResponse";
}

export namespace UpdateLinkAttributesResponse {
  export function isa(o: any): o is UpdateLinkAttributesResponse {
    return __isa(o, "UpdateLinkAttributesResponse");
  }
}

export interface UpdateObjectAttributesRequest {
  __type?: "UpdateObjectAttributesRequest";
  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: Array<ObjectAttributeUpdate> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export namespace UpdateObjectAttributesRequest {
  export function isa(o: any): o is UpdateObjectAttributesRequest {
    return __isa(o, "UpdateObjectAttributesRequest");
  }
}

export interface UpdateObjectAttributesResponse {
  __type?: "UpdateObjectAttributesResponse";
  /**
   * <p>The <code>ObjectIdentifier</code> of the updated object.</p>
   */
  ObjectIdentifier?: string;
}

export namespace UpdateObjectAttributesResponse {
  export function isa(o: any): o is UpdateObjectAttributesResponse {
    return __isa(o, "UpdateObjectAttributesResponse");
  }
}

export interface UpdateSchemaRequest {
  __type?: "UpdateSchemaRequest";
  /**
   * <p>The name of the schema.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace UpdateSchemaRequest {
  export function isa(o: any): o is UpdateSchemaRequest {
    return __isa(o, "UpdateSchemaRequest");
  }
}

export interface UpdateSchemaResponse {
  __type?: "UpdateSchemaResponse";
  /**
   * <p>The ARN that is associated with the updated schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

export namespace UpdateSchemaResponse {
  export function isa(o: any): o is UpdateSchemaResponse {
    return __isa(o, "UpdateSchemaResponse");
  }
}

export interface UpdateTypedLinkFacetRequest {
  __type?: "UpdateTypedLinkFacetRequest";
  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: Array<TypedLinkFacetAttributeUpdate> | undefined;

  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet.  When
   *       providing ranges to a typed link selection, any inexact ranges must be specified at the end.
   *       Any attributes that do not have a range specified are presumed to match the entire range.
   *       Filters are interpreted in the order of the attributes on the typed link facet, not the order
   *       in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder: Array<string> | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export namespace UpdateTypedLinkFacetRequest {
  export function isa(o: any): o is UpdateTypedLinkFacetRequest {
    return __isa(o, "UpdateTypedLinkFacetRequest");
  }
}

export interface UpdateTypedLinkFacetResponse {
  __type?: "UpdateTypedLinkFacetResponse";
}

export namespace UpdateTypedLinkFacetResponse {
  export function isa(o: any): o is UpdateTypedLinkFacetResponse {
    return __isa(o, "UpdateTypedLinkFacetResponse");
  }
}

export interface UpgradeAppliedSchemaRequest {
  __type?: "UpgradeAppliedSchemaRequest";
  /**
   * <p>The ARN for the directory to which the upgraded schema will be applied.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The revision of the published schema to upgrade the directory to.</p>
   */
  PublishedSchemaArn: string | undefined;
}

export namespace UpgradeAppliedSchemaRequest {
  export function isa(o: any): o is UpgradeAppliedSchemaRequest {
    return __isa(o, "UpgradeAppliedSchemaRequest");
  }
}

export interface UpgradeAppliedSchemaResponse {
  __type?: "UpgradeAppliedSchemaResponse";
  /**
   * <p>The ARN of the directory that is returned as part of the response.</p>
   */
  DirectoryArn?: string;

  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;
}

export namespace UpgradeAppliedSchemaResponse {
  export function isa(o: any): o is UpgradeAppliedSchemaResponse {
    return __isa(o, "UpgradeAppliedSchemaResponse");
  }
}

export interface UpgradePublishedSchemaRequest {
  __type?: "UpgradePublishedSchemaRequest";
  /**
   * <p>The ARN of the development schema with the changes used for the upgrade.</p>
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * <p>Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Identifies the minor version of the published schema that will be created. This parameter is NOT optional.</p>
   */
  MinorVersion: string | undefined;

  /**
   * <p>The ARN of the published schema to be upgraded.</p>
   */
  PublishedSchemaArn: string | undefined;
}

export namespace UpgradePublishedSchemaRequest {
  export function isa(o: any): o is UpgradePublishedSchemaRequest {
    return __isa(o, "UpgradePublishedSchemaRequest");
  }
}

export interface UpgradePublishedSchemaResponse {
  __type?: "UpgradePublishedSchemaResponse";
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;
}

export namespace UpgradePublishedSchemaResponse {
  export function isa(o: any): o is UpgradePublishedSchemaResponse {
    return __isa(o, "UpgradePublishedSchemaResponse");
  }
}

/**
 * <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
