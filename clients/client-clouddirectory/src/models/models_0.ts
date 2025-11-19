// smithy-typescript generated code
import {
  BatchReadExceptionType,
  ConsistencyLevel,
  DirectoryState,
  FacetAttributeType,
  FacetStyle,
  ObjectType,
  RangeMode,
  RequiredAttributeBehavior,
  RuleType,
  UpdateActionType,
} from "./enums";

/**
 * <p>A unique identifier for an attribute.</p>
 * @public
 */
export interface AttributeKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema that contains the facet and
   *       attribute.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet that the attribute exists within.</p>
   * @public
   */
  FacetName: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Represents the data for a typed attribute. You can set one, and only one, of the
 *       elements. Each attribute in an item is a name-value pair. Attributes have a single
 *       value.</p>
 * @public
 */
export type TypedAttributeValue =
  | TypedAttributeValue.BinaryValueMember
  | TypedAttributeValue.BooleanValueMember
  | TypedAttributeValue.DatetimeValueMember
  | TypedAttributeValue.NumberValueMember
  | TypedAttributeValue.StringValueMember
  | TypedAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace TypedAttributeValue {
  /**
   * <p>A string data value.</p>
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A binary data value.</p>
   * @public
   */
  export interface BinaryValueMember {
    StringValue?: never;
    BinaryValue: Uint8Array;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A Boolean data value.</p>
   * @public
   */
  export interface BooleanValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue: boolean;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A number data value.</p>
   * @public
   */
  export interface NumberValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue: string;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A date and time value.</p>
   * @public
   */
  export interface DatetimeValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    BinaryValue: (value: Uint8Array) => T;
    BooleanValue: (value: boolean) => T;
    NumberValue: (value: string) => T;
    DatetimeValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The combination of an attribute key and an attribute value.</p>
 * @public
 */
export interface AttributeKeyAndValue {
  /**
   * <p>The key of the attribute.</p>
   * @public
   */
  Key: AttributeKey | undefined;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * <p>The reference that identifies an object.</p>
 * @public
 */
export interface ObjectReference {
  /**
   * <p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p>
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
   * @public
   */
  Selector?: string | undefined;
}

/**
 * <p>A facet.</p>
 * @public
 */
export interface SchemaFacet {
  /**
   * <p>The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions.
   *      If this value is set, FacetName must also be set.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the facet. If this value is set, SchemaArn must also be set.</p>
   * @public
   */
  FacetName?: string | undefined;
}

/**
 * @public
 */
export interface AddFacetToObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.</p>
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>Attributes on the facet that you are adding to the object.</p>
   * @public
   */
  ObjectAttributeList?: AttributeKeyAndValue[] | undefined;

  /**
   * <p>A reference to the object you are adding the specified facet to.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AddFacetToObjectResponse {}

/**
 * @public
 */
export interface ApplySchemaRequest {
  /**
   * <p>Published schema Amazon Resource Name (ARN) that needs to be copied. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  PublishedSchemaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       into which the schema is copied. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface ApplySchemaResponse {
  /**
   * <p>The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on
   *       this directory. For more information, see <a>arns</a>.</p>
   * @public
   */
  AppliedSchemaArn?: string | undefined;

  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn?: string | undefined;
}

/**
 * @public
 */
export interface AttachObjectRequest {
  /**
   * <p>Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The parent object reference.</p>
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The child object reference to be attached to the object.</p>
   * @public
   */
  ChildReference: ObjectReference | undefined;

  /**
   * <p>The link name with which the child object is attached to the parent.</p>
   * @public
   */
  LinkName: string | undefined;
}

/**
 * @public
 */
export interface AttachObjectResponse {
  /**
   * <p>The attached <code>ObjectIdentifier</code>, which is the child
   *         <code>ObjectIdentifier</code>.</p>
   * @public
   */
  AttachedObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that is associated with the policy object.</p>
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The reference that identifies the object to which the policy will be
   *       attached.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AttachPolicyResponse {}

/**
 * @public
 */
export interface AttachToIndexRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where the object and index
   *       exist.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AttachToIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   * @public
   */
  AttachedObjectIdentifier?: string | undefined;
}

/**
 * <p>Identifies the attribute name and value for a typed link.</p>
 * @public
 */
export interface AttributeNameAndValue {
  /**
   * <p>The attribute name of the typed link.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value for the typed link.</p>
   * @public
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * <p>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed
 *       link.</p>
 * @public
 */
export interface TypedLinkSchemaAndFacetName {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   * @public
   */
  TypedLinkName: string | undefined;
}

/**
 * @public
 */
export interface AttachTypedLinkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to attach the typed
   *       link.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   * @public
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   * @public
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   * @public
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   * @public
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * <p>Contains all the information that is used to uniquely identify a typed link. The
 *       parameters discussed in this topic are used to uniquely specify the typed link being operated
 *       on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API
 *       operations provide typed link specifiers as output. You can also construct a typed link
 *       specifier from scratch.</p>
 * @public
 */
export interface TypedLinkSpecifier {
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   * @public
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   * @public
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   * @public
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the attribute value to update.</p>
   * @public
   */
  IdentityAttributeValues: AttributeNameAndValue[] | undefined;
}

/**
 * @public
 */
export interface AttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   * @public
   */
  TypedLinkSpecifier?: TypedLinkSpecifier | undefined;
}

/**
 * <p>Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchGetLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * <p>Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchGetObjectAttributes {
  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * <p>Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchGetObjectInformation {
  /**
   * <p>A reference to the object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListAttachedIndices {
  /**
   * <p>A reference to the object that has indices attached.</p>
   * @public
   */
  TargetReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.</p>
 * @public
 */
export interface TypedAttributeValueRange {
  /**
   * <p>The inclusive or exclusive range start.</p>
   * @public
   */
  StartMode: RangeMode | undefined;

  /**
   * <p>The value to start the range at.</p>
   * @public
   */
  StartValue?: TypedAttributeValue | undefined;

  /**
   * <p>The inclusive or exclusive range end.</p>
   * @public
   */
  EndMode: RangeMode | undefined;

  /**
   * <p>The attribute value to terminate the range at.</p>
   * @public
   */
  EndValue?: TypedAttributeValue | undefined;
}

/**
 * <p>Identifies the range of attributes that are used by a specified filter.</p>
 * @public
 */
export interface TypedLinkAttributeRange {
  /**
   * <p>The unique name of the typed link attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The range of attribute values that are being selected.</p>
   * @public
   */
  Range: TypedAttributeValueRange | undefined;
}

/**
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListIncomingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *        order in which they are supplied to any API calls.</p>
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A range of attributes.</p>
 * @public
 */
export interface ObjectAttributeRange {
  /**
   * <p>The key of the attribute that the attribute range covers.</p>
   * @public
   */
  AttributeKey?: AttributeKey | undefined;

  /**
   * <p>The range of attribute values being selected.</p>
   * @public
   */
  Range?: TypedAttributeValueRange | undefined;
}

/**
 * <p>Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListIndex {
  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   * @public
   */
  RangesOnIndexedValues?: ObjectAttributeRange[] | undefined;

  /**
   * <p>The reference to the index to list.</p>
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> operation.</p>
 * @public
 */
export interface BatchListObjectAttributes {
  /**
   * <p>Reference of the object whose attributes need to be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   * @public
   */
  FacetFilter?: SchemaFacet | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> operation.</p>
 * @public
 */
export interface BatchListObjectChildren {
  /**
   * <p>Reference of the object for which child objects are being listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of items to be retrieved in a single call. This is an approximate
   *        number.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListObjectParentPaths {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Lists parent objects that are associated with a given object in pagination
 *       fashion.</p>
 * @public
 */
export interface BatchListObjectParents {
  /**
   * <p>The reference that identifies an object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListObjectPolicies {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListOutgoingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *        not the order they are supplied to any API calls.</p>
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchListPolicyAttachments {
  /**
   * <p>The reference that identifies the policy object.</p>
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchLookupPolicy {
  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Represents the output of a <code>BatchRead</code> operation.</p>
 * @public
 */
export interface BatchReadOperation {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   * @public
   */
  ListObjectAttributes?: BatchListObjectAttributes | undefined;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   * @public
   */
  ListObjectChildren?: BatchListObjectChildren | undefined;

  /**
   * <p>Lists indices attached to an object.</p>
   * @public
   */
  ListAttachedIndices?: BatchListAttachedIndices | undefined;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   * @public
   */
  ListObjectParentPaths?: BatchListObjectParentPaths | undefined;

  /**
   * <p>Retrieves metadata about an object.</p>
   * @public
   */
  GetObjectInformation?: BatchGetObjectInformation | undefined;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   * @public
   */
  GetObjectAttributes?: BatchGetObjectAttributes | undefined;

  /**
   * <p>Lists parent objects that are associated with a given object in pagination
   *       fashion.</p>
   * @public
   */
  ListObjectParents?: BatchListObjectParents | undefined;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   * @public
   */
  ListObjectPolicies?: BatchListObjectPolicies | undefined;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   * @public
   */
  ListPolicyAttachments?: BatchListPolicyAttachments | undefined;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   * @public
   */
  LookupPolicy?: BatchLookupPolicy | undefined;

  /**
   * <p>Lists objects attached to the specified index.</p>
   * @public
   */
  ListIndex?: BatchListIndex | undefined;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks | undefined;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks | undefined;

  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   * @public
   */
  GetLinkAttributes?: BatchGetLinkAttributes | undefined;
}

/**
 * @public
 */
export interface BatchReadRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of operations that are part of the batch.</p>
   * @public
   */
  Operations: BatchReadOperation[] | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * <p>The batch read exception structure, which contains the exception type and
 *       message.</p>
 * @public
 */
export interface BatchReadException {
  /**
   * <p>A type of exception, such as <code>InvalidArnException</code>.</p>
   * @public
   */
  Type?: BatchReadExceptionType | undefined;

  /**
   * <p>An exception message that is associated with the failure.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Represents the output of a <a>GetLinkAttributes</a> response operation.</p>
 * @public
 */
export interface BatchGetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * <p>Represents the output of a <a>GetObjectAttributes</a> response operation.</p>
 * @public
 */
export interface BatchGetObjectAttributesResponse {
  /**
   * <p>The attribute values that are associated with an object.</p>
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * <p>Represents the output of a <a>GetObjectInformation</a> response operation.</p>
 * @public
 */
export interface BatchGetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object.</p>
   * @public
   */
  SchemaFacets?: SchemaFacet[] | undefined;

  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents an index and an attached object.</p>
 * @public
 */
export interface IndexAttachment {
  /**
   * <p>The indexed attribute values.</p>
   * @public
   */
  IndexedAttributes?: AttributeKeyAndValue[] | undefined;

  /**
   * <p>In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListAttachedIndices</a> response operation.</p>
 * @public
 */
export interface BatchListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListIncomingTypedLinks</a> response operation.</p>
 * @public
 */
export interface BatchListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   * @public
   */
  LinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListIndex</a> response operation.</p>
 * @public
 */
export interface BatchListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> response operation.</p>
 * @public
 */
export interface BatchListObjectAttributesResponse {
  /**
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key; attribute value is the value.</p>
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> response operation.</p>
 * @public
 */
export interface BatchListObjectChildrenResponse {
  /**
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   * @public
   */
  Children?: Record<string, string> | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Returns the path to the <code>ObjectIdentifiers</code> that is associated with the
 *       directory.</p>
 * @public
 */
export interface PathToObjectIdentifiers {
  /**
   * <p>The path that is used to identify the object starting from directory root.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the
   *       request.</p>
   * @public
   */
  ObjectIdentifiers?: string[] | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectParentPaths</a> response operation.</p>
 * @public
 */
export interface BatchListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *        directory.</p>
   * @public
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A pair of ObjectIdentifier and LinkName.</p>
 * @public
 */
export interface ObjectIdentifierAndLinkNameTuple {
  /**
   * <p>The ID that is associated with the object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * <p>The name of the link between the parent and the child object.</p>
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectParents</a> response operation.</p>
 * @public
 */
export interface BatchListObjectParentsResponse {
  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   * @public
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListObjectPolicies</a> response operation.</p>
 * @public
 */
export interface BatchListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *        object.</p>
   * @public
   */
  AttachedPolicyIds?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.</p>
 * @public
 */
export interface BatchListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   * @public
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <a>ListPolicyAttachments</a> response operation.</p>
 * @public
 */
export interface BatchListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   * @public
   */
  ObjectIdentifiers?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is
 *       attached. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 * @public
 */
export interface PolicyAttachment {
  /**
   * <p>The ID of <code>PolicyAttachment</code>.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The <code>ObjectIdentifier</code> that is associated with
   *       <code>PolicyAttachment</code>.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * <p>The type of policy that can be associated with <code>PolicyAttachment</code>.</p>
   * @public
   */
  PolicyType?: string | undefined;
}

/**
 * <p>Used when a regular object exists in a <a>Directory</a> and you want to find
 *       all of the policies that are associated with that object and the parent to that
 *       object.</p>
 * @public
 */
export interface PolicyToPath {
  /**
   * <p>The path that is referenced from the root.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>List of policy objects.</p>
   * @public
   */
  Policies?: PolicyAttachment[] | undefined;
}

/**
 * <p>Represents the output of a <a>LookupPolicy</a> response operation.</p>
 * @public
 */
export interface BatchLookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *        <code>PolicyType</code>. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   * @public
   */
  PolicyToPathList?: PolicyToPath[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>BatchRead</code> success response operation.</p>
 * @public
 */
export interface BatchReadSuccessfulResponse {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   * @public
   */
  ListObjectAttributes?: BatchListObjectAttributesResponse | undefined;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   * @public
   */
  ListObjectChildren?: BatchListObjectChildrenResponse | undefined;

  /**
   * <p>Retrieves metadata about an object.</p>
   * @public
   */
  GetObjectInformation?: BatchGetObjectInformationResponse | undefined;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   * @public
   */
  GetObjectAttributes?: BatchGetObjectAttributesResponse | undefined;

  /**
   * <p>Lists indices attached to an object.</p>
   * @public
   */
  ListAttachedIndices?: BatchListAttachedIndicesResponse | undefined;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   * @public
   */
  ListObjectParentPaths?: BatchListObjectParentPathsResponse | undefined;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   * @public
   */
  ListObjectPolicies?: BatchListObjectPoliciesResponse | undefined;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   * @public
   */
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse | undefined;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   * @public
   */
  LookupPolicy?: BatchLookupPolicyResponse | undefined;

  /**
   * <p>Lists objects attached to the specified index.</p>
   * @public
   */
  ListIndex?: BatchListIndexResponse | undefined;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse | undefined;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse | undefined;

  /**
   * <p>The list of attributes to retrieve from the typed link.</p>
   * @public
   */
  GetLinkAttributes?: BatchGetLinkAttributesResponse | undefined;

  /**
   * <p>The list of parent objects to retrieve.</p>
   * @public
   */
  ListObjectParents?: BatchListObjectParentsResponse | undefined;
}

/**
 * <p>Represents the output of a <code>BatchRead</code> response operation.</p>
 * @public
 */
export interface BatchReadOperationResponse {
  /**
   * <p>Identifies which operation in a batch has succeeded.</p>
   * @public
   */
  SuccessfulResponse?: BatchReadSuccessfulResponse | undefined;

  /**
   * <p>Identifies which operation in a batch has failed.</p>
   * @public
   */
  ExceptionResponse?: BatchReadException | undefined;
}

/**
 * @public
 */
export interface BatchReadResponse {
  /**
   * <p>A list of all the responses for each batch read.</p>
   * @public
   */
  Responses?: BatchReadOperationResponse[] | undefined;
}

/**
 * <p>Represents the output of a batch add facet to object operation.</p>
 * @public
 */
export interface BatchAddFacetToObject {
  /**
   * <p>Represents the facet being added to the object.</p>
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>The attributes to set on the object.</p>
   * @public
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * <p>A reference to the object being mutated.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Represents the output of an <a>AttachObject</a> operation.</p>
 * @public
 */
export interface BatchAttachObject {
  /**
   * <p>The parent object reference.</p>
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The child object reference that is to be attached to the object.</p>
   * @public
   */
  ChildReference: ObjectReference | undefined;

  /**
   * <p>The name of the link.</p>
   * @public
   */
  LinkName: string | undefined;
}

/**
 * <p>Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchAttachPolicy {
  /**
   * <p>The reference that is associated with the policy object.</p>
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The reference that identifies the object to which the policy will be
   *        attached.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchAttachToIndex {
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * <p>Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchAttachTypedLink {
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   * @public
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   * @public
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   * @public
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   * @public
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * <p>Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchCreateIndex {
  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *        is supported.</p>
   * @public
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *        not.</p>
   * @public
   */
  IsUnique: boolean | undefined;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   * @public
   */
  LinkName?: string | undefined;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   * @public
   */
  BatchReferenceName?: string | undefined;
}

/**
 * <p>Represents the output of a <a>CreateObject</a> operation.</p>
 * @public
 */
export interface BatchCreateObject {
  /**
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaFacet: SchemaFacet[] | undefined;

  /**
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as
   *       the map value.</p>
   * @public
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * <p>The name of the link.</p>
   * @public
   */
  LinkName?: string | undefined;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   * @public
   */
  BatchReferenceName?: string | undefined;
}

/**
 * <p>Represents the output of a <a>DeleteObject</a> operation.</p>
 * @public
 */
export interface BatchDeleteObject {
  /**
   * <p>The reference that identifies the object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchDetachFromIndex {
  /**
   * <p>A reference to the index object.</p>
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object being detached from the index.</p>
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * <p>Represents the output of a <a>DetachObject</a> operation.</p>
 * @public
 */
export interface BatchDetachObject {
  /**
   * <p>Parent reference from which the object with the specified link name is
   *       detached.</p>
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The name of the link.</p>
   * @public
   */
  LinkName: string | undefined;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   * @public
   */
  BatchReferenceName?: string | undefined;
}

/**
 * <p>Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.</p>
 * @public
 */
export interface BatchDetachPolicy {
  /**
   * <p>Reference that identifies the policy object.</p>
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchDetachTypedLink {
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * <p>A batch operation to remove a facet from an object.</p>
 * @public
 */
export interface BatchRemoveFacetFromObject {
  /**
   * <p>The facet to remove from the object.</p>
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>A reference to the object whose facet will be removed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.</p>
 * @public
 */
export interface LinkAttributeAction {
  /**
   * <p>A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.</p>
   * @public
   */
  AttributeActionType?: UpdateActionType | undefined;

  /**
   * <p>The value that you want to update to.</p>
   * @public
   */
  AttributeUpdateValue?: TypedAttributeValue | undefined;
}

/**
 * <p>Structure that contains attribute update information.</p>
 * @public
 */
export interface LinkAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   * @public
   */
  AttributeKey?: AttributeKey | undefined;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   * @public
   */
  AttributeAction?: LinkAttributeAction | undefined;
}

/**
 * <p>Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 * @public
 */
export interface BatchUpdateLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>The attributes update structure.</p>
   * @public
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

/**
 * <p>The action to take on the object attribute.</p>
 * @public
 */
export interface ObjectAttributeAction {
  /**
   * <p>A type that can be either <code>Update</code> or <code>Delete</code>.</p>
   * @public
   */
  ObjectAttributeActionType?: UpdateActionType | undefined;

  /**
   * <p>The value that you want to update to.</p>
   * @public
   */
  ObjectAttributeUpdateValue?: TypedAttributeValue | undefined;
}

/**
 * <p>Structure that contains attribute update information.</p>
 * @public
 */
export interface ObjectAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   * @public
   */
  ObjectAttributeKey?: AttributeKey | undefined;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   * @public
   */
  ObjectAttributeAction?: ObjectAttributeAction | undefined;
}

/**
 * <p>Represents the output of a <code>BatchUpdate</code> operation. </p>
 * @public
 */
export interface BatchUpdateObjectAttributes {
  /**
   * <p>Reference that identifies the object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Attributes update structure.</p>
   * @public
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * <p>Represents the output of a <code>BatchWrite</code> operation. </p>
 * @public
 */
export interface BatchWriteOperation {
  /**
   * <p>Creates an object.</p>
   * @public
   */
  CreateObject?: BatchCreateObject | undefined;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   * @public
   */
  AttachObject?: BatchAttachObject | undefined;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   * @public
   */
  DetachObject?: BatchDetachObject | undefined;

  /**
   * <p>Updates a given object's attributes.</p>
   * @public
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributes | undefined;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   * @public
   */
  DeleteObject?: BatchDeleteObject | undefined;

  /**
   * <p>A batch operation that adds a facet to an object.</p>
   * @public
   */
  AddFacetToObject?: BatchAddFacetToObject | undefined;

  /**
   * <p>A batch operation that removes a facet from an object.</p>
   * @public
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObject | undefined;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   * @public
   */
  AttachPolicy?: BatchAttachPolicy | undefined;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   * @public
   */
  DetachPolicy?: BatchDetachPolicy | undefined;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   * @public
   */
  CreateIndex?: BatchCreateIndex | undefined;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   * @public
   */
  AttachToIndex?: BatchAttachToIndex | undefined;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   * @public
   */
  DetachFromIndex?: BatchDetachFromIndex | undefined;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  AttachTypedLink?: BatchAttachTypedLink | undefined;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  DetachTypedLink?: BatchDetachTypedLink | undefined;

  /**
   * <p>Updates a given object's attributes.</p>
   * @public
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributes | undefined;
}

/**
 * @public
 */
export interface BatchWriteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of operations that are part of the batch.</p>
   * @public
   */
  Operations: BatchWriteOperation[] | undefined;
}

/**
 * <p>The result of a batch add facet to object operation.</p>
 * @public
 */
export interface BatchAddFacetToObjectResponse {}

/**
 * <p>Represents the output batch <a>AttachObject</a> response operation.</p>
 * @public
 */
export interface BatchAttachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that has been attached.</p>
   * @public
   */
  attachedObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of an <a>AttachPolicy</a> response
 *       operation.</p>
 * @public
 */
export interface BatchAttachPolicyResponse {}

/**
 * <p>Represents the output of a <a>AttachToIndex</a> response operation.</p>
 * @public
 */
export interface BatchAttachToIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   * @public
   */
  AttachedObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <a>AttachTypedLink</a> response operation.</p>
 * @public
 */
export interface BatchAttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   * @public
   */
  TypedLinkSpecifier?: TypedLinkSpecifier | undefined;
}

/**
 * <p>Represents the output of a <a>CreateIndex</a> response operation.</p>
 * @public
 */
export interface BatchCreateIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <a>CreateObject</a> response operation.</p>
 * @public
 */
export interface BatchCreateObjectResponse {
  /**
   * <p>The ID that is associated with the object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <a>DeleteObject</a> response operation.</p>
 * @public
 */
export interface BatchDeleteObjectResponse {}

/**
 * <p>Represents the output of a <a>DetachFromIndex</a> response operation.</p>
 * @public
 */
export interface BatchDetachFromIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   * @public
   */
  DetachedObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <a>DetachObject</a> response operation.</p>
 * @public
 */
export interface BatchDetachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the detached object.</p>
   * @public
   */
  detachedObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <a>DetachPolicy</a> response operation.</p>
 * @public
 */
export interface BatchDetachPolicyResponse {}

/**
 * <p>Represents the output of a <a>DetachTypedLink</a> response operation.</p>
 * @public
 */
export interface BatchDetachTypedLinkResponse {}

/**
 * <p>An empty result that represents success.</p>
 * @public
 */
export interface BatchRemoveFacetFromObjectResponse {}

/**
 * <p>Represents the output of a <a>UpdateLinkAttributes</a> response operation.</p>
 * @public
 */
export interface BatchUpdateLinkAttributesResponse {}

/**
 * <p>Represents the output of a <code>BatchUpdate</code> response operation.</p>
 * @public
 */
export interface BatchUpdateObjectAttributesResponse {
  /**
   * <p>ID that is associated with the object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
 * @public
 */
export interface BatchWriteOperationResponse {
  /**
   * <p>Creates an object in a <a>Directory</a>.</p>
   * @public
   */
  CreateObject?: BatchCreateObjectResponse | undefined;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   * @public
   */
  AttachObject?: BatchAttachObjectResponse | undefined;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   * @public
   */
  DetachObject?: BatchDetachObjectResponse | undefined;

  /**
   * <p>Updates a given object’s attributes.</p>
   * @public
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse | undefined;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   * @public
   */
  DeleteObject?: BatchDeleteObjectResponse | undefined;

  /**
   * <p>The result of an add facet to object batch operation.</p>
   * @public
   */
  AddFacetToObject?: BatchAddFacetToObjectResponse | undefined;

  /**
   * <p>The result of a batch remove facet from object operation.</p>
   * @public
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse | undefined;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   * @public
   */
  AttachPolicy?: BatchAttachPolicyResponse | undefined;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   * @public
   */
  DetachPolicy?: BatchDetachPolicyResponse | undefined;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   * @public
   */
  CreateIndex?: BatchCreateIndexResponse | undefined;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   * @public
   */
  AttachToIndex?: BatchAttachToIndexResponse | undefined;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   * @public
   */
  DetachFromIndex?: BatchDetachFromIndexResponse | undefined;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  AttachTypedLink?: BatchAttachTypedLinkResponse | undefined;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  DetachTypedLink?: BatchDetachTypedLinkResponse | undefined;

  /**
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   * @public
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse | undefined;
}

/**
 * @public
 */
export interface BatchWriteResponse {
  /**
   * <p>A list of all the responses for each batch write.</p>
   * @public
   */
  Responses?: BatchWriteOperationResponse[] | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryRequest {
  /**
   * <p>The name of the <a>Directory</a>. Should be unique per account, per
   *       region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the published schema that will be copied into the
   *       data <a>Directory</a>. For more information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryResponse {
  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The name of the <a>Directory</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The root object node of the created directory.</p>
   * @public
   */
  ObjectIdentifier: string | undefined;

  /**
   * <p>The ARN of the published schema in the <a>Directory</a>. Once a published
   *       schema is copied into the directory, it has its own ARN, which is referred to applied schema
   *       ARN. For more information, see <a>arns</a>.</p>
   * @public
   */
  AppliedSchemaArn: string | undefined;
}

/**
 * <p>Contains an Amazon Resource Name (ARN) and parameters that are associated with the
 *       rule.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The type of attribute validation rule.</p>
   * @public
   */
  Type?: RuleType | undefined;

  /**
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * <p>A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
 * @public
 */
export interface FacetAttributeDefinition {
  /**
   * <p>The type of the attribute.</p>
   * @public
   */
  Type: FacetAttributeType | undefined;

  /**
   * <p>The default value of the attribute (if configured).</p>
   * @public
   */
  DefaultValue?: TypedAttributeValue | undefined;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   * @public
   */
  IsImmutable?: boolean | undefined;

  /**
   * <p>Validation rules attached to the attribute definition.</p>
   * @public
   */
  Rules?: Record<string, Rule> | undefined;
}

/**
 * <p>The facet attribute reference that specifies the attribute definition that contains the
 *       attribute facet name and attribute name.</p>
 * @public
 */
export interface FacetAttributeReference {
  /**
   * <p>The target facet name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   * @public
   */
  TargetFacetName: string | undefined;

  /**
   * <p>The target attribute name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   * @public
   */
  TargetAttributeName: string | undefined;
}

/**
 * <p>An attribute that is associated with the <a>Facet</a>.</p>
 * @public
 */
export interface FacetAttribute {
  /**
   * <p>The name of the facet attribute.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A facet attribute consists of either a definition or a reference. This structure
   *       contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   * @public
   */
  AttributeDefinition?: FacetAttributeDefinition | undefined;

  /**
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   * @public
   */
  AttributeReference?: FacetAttributeReference | undefined;

  /**
   * <p>The required behavior of the <code>FacetAttribute</code>.</p>
   * @public
   */
  RequiredBehavior?: RequiredAttributeBehavior | undefined;
}

/**
 * @public
 */
export interface CreateFacetRequest {
  /**
   * <p>The schema ARN in which the new <a>Facet</a> will be created. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the <a>Facet</a>, which is unique for a given schema.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The attributes that are associated with the <a>Facet</a>.</p>
   * @public
   */
  Attributes?: FacetAttribute[] | undefined;

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
   * @public
   */
  ObjectType?: ObjectType | undefined;

  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   * @public
   */
  FacetStyle?: FacetStyle | undefined;
}

/**
 * @public
 */
export interface CreateFacetResponse {}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * <p>The ARN of the directory where the index should be created.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *       is supported.</p>
   * @public
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *       not.</p>
   * @public
   */
  IsUnique: boolean | undefined;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       in which the object will be created. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.</p>
   * @public
   */
  SchemaFacets: SchemaFacet[] | undefined;

  /**
   * <p>The attribute map whose attribute ARN contains the key and attribute value as the map
   *       value.</p>
   * @public
   */
  ObjectAttributeList?: AttributeKeyAndValue[] | undefined;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * <p>The name of link that is used to attach this object to a parent.</p>
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * @public
 */
export interface CreateObjectResponse {
  /**
   * <p>The identifier that is associated with the object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * <p>The name that is associated with the schema. This is unique to each account and in each
   *       region.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn?: string | undefined;
}

/**
 * <p>A typed link attribute definition.</p>
 * @public
 */
export interface TypedLinkAttributeDefinition {
  /**
   * <p>The unique name of the typed link attribute.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the attribute.</p>
   * @public
   */
  Type: FacetAttributeType | undefined;

  /**
   * <p>The default value of the attribute (if configured).</p>
   * @public
   */
  DefaultValue?: TypedAttributeValue | undefined;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   * @public
   */
  IsImmutable?: boolean | undefined;

  /**
   * <p>Validation rules that are attached to the attribute definition.</p>
   * @public
   */
  Rules?: Record<string, Rule> | undefined;

  /**
   * <p>The required behavior of the <code>TypedLinkAttributeDefinition</code>.</p>
   * @public
   */
  RequiredBehavior: RequiredAttributeBehavior | undefined;
}

/**
 * <p>Defines the typed links structure and its attributes. To create a typed link facet, use
 *       the <a>CreateTypedLinkFacet</a> API.</p>
 * @public
 */
export interface TypedLinkFacet {
  /**
   * <p>The unique name of the typed link facet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   * @public
   */
  Attributes: TypedLinkAttributeDefinition[] | undefined;

  /**
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   * @public
   */
  IdentityAttributeOrder: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>
   *             <a>Facet</a> structure that is associated with the typed link
   *       facet.</p>
   * @public
   */
  Facet: TypedLinkFacet | undefined;
}

/**
 * @public
 */
export interface CreateTypedLinkFacetResponse {}

/**
 * @public
 */
export interface DeleteDirectoryRequest {
  /**
   * <p>The ARN of the directory to delete.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectoryResponse {
  /**
   * <p>The ARN of the deleted directory.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteFacetResponse {}

/**
 * @public
 */
export interface DeleteObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference that identifies the object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DeleteObjectResponse {}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaResponse {
  /**
   * <p>The input ARN that is returned as part of the response. For more information, see
   *         <a>arns</a>.</p>
   * @public
   */
  SchemaArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypedLinkFacetResponse {}

/**
 * @public
 */
export interface DetachFromIndexRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory the index and object exist
   *       in.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the index object.</p>
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object being detached from the index.</p>
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DetachFromIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   * @public
   */
  DetachedObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DetachObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The parent reference from which the object with the specified link name is
   *       detached.</p>
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The link name associated with the object that needs to be detached.</p>
   * @public
   */
  LinkName: string | undefined;
}

/**
 * @public
 */
export interface DetachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> that was detached from the object.</p>
   * @public
   */
  DetachedObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the policy object.</p>
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DetachPolicyResponse {}

/**
 * @public
 */
export interface DetachTypedLinkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to detach the typed
   *       link.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used to accept a typed link specifier as input.</p>
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryRequest {
  /**
   * <p>The ARN of the directory to disable.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryResponse {
  /**
   * <p>The ARN of the directory that has been disabled.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryRequest {
  /**
   * <p>The ARN of the directory to enable.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryResponse {
  /**
   * <p>The ARN of the enabled directory.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppliedSchemaVersionRequest {
  /**
   * <p>The ARN of the applied schema.</p>
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppliedSchemaVersionResponse {
  /**
   * <p>Current applied schema ARN, including the minor version in use if one was provided.</p>
   * @public
   */
  AppliedSchemaArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRequest {
  /**
   * <p>The ARN of the directory.</p>
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * <p>Directory structure that includes the directory name and directory ARN.</p>
 * @public
 */
export interface Directory {
  /**
   * <p>The name of the directory.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the directory. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn?: string | undefined;

  /**
   * <p>The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.</p>
   * @public
   */
  State?: DirectoryState | undefined;

  /**
   * <p>The date and time when the directory was created.</p>
   * @public
   */
  CreationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDirectoryResponse {
  /**
   * <p>Metadata about the directory.</p>
   * @public
   */
  Directory: Directory | undefined;
}

/**
 * @public
 */
export interface GetFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code>
 *                <a>Rule</a>s</code>, and
 *       <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.</p>
 * @public
 */
export interface Facet {
  /**
   * <p>The name of the <a>Facet</a>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   * @public
   */
  ObjectType?: ObjectType | undefined;

  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   * @public
   */
  FacetStyle?: FacetStyle | undefined;
}

/**
 * @public
 */
export interface GetFacetResponse {
  /**
   * <p>The <a>Facet</a> structure that is associated with the facet.</p>
   * @public
   */
  Facet?: Facet | undefined;
}

/**
 * @public
 */
export interface GetLinkAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   * @public
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The consistency level at which to retrieve the attributes on a typed link.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface GetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The consistency level at which to retrieve the attributes on an object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesResponse {
  /**
   * <p>The attributes that are associated with the object.</p>
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * @public
 */
export interface GetObjectInformationRequest {
  /**
   * <p>The ARN of the directory being retrieved.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The consistency level at which to retrieve the object information.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface GetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.</p>
   * @public
   */
  SchemaFacets?: SchemaFacet[] | undefined;

  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaAsJsonRequest {
  /**
   * <p>The ARN of the schema to retrieve.</p>
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaAsJsonResponse {
  /**
   * <p>The name of the retrieved schema.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The JSON representation of the schema document.</p>
   * @public
   */
  Document?: string | undefined;
}

/**
 * @public
 */
export interface GetTypedLinkFacetInformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTypedLinkFacetInformationResponse {
  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet. When
   *       providing ranges to typed link selection, any inexact ranges must be specified at the end. Any
   *       attributes that do not have a range specified are presumed to match the entire range. Filters
   *       are interpreted in the order of the attributes on the typed link facet, not the order in which
   *       they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  IdentityAttributeOrder?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAppliedSchemaArnsRequest {
  /**
   * <p>The ARN of the directory you are listing.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppliedSchemaArnsResponse {
  /**
   * <p>The ARNs of schemas that are applied to the directory.</p>
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedIndicesRequest {
  /**
   * <p>The ARN of the directory.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the object that has indices attached.</p>
   * @public
   */
  TargetReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The consistency level to use for this operation.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevelopmentSchemaArnsRequest {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDevelopmentSchemaArnsResponse {
  /**
   * <p>The ARNs of retrieved development schemas.</p>
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDirectoriesRequest {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The state of the directories in the list. Can be either Enabled, Disabled, or
   *       Deleted.</p>
   * @public
   */
  state?: DirectoryState | undefined;
}

/**
 * @public
 */
export interface ListDirectoriesResponse {
  /**
   * <p>Lists all directories that are associated with your account in pagination
   *       fashion.</p>
   * @public
   */
  Directories: Directory[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFacetAttributesRequest {
  /**
   * <p>The ARN of the schema where the facet resides.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet whose attributes will be retrieved.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFacetAttributesResponse {
  /**
   * <p>The attributes attached to the facet.</p>
   * @public
   */
  Attributes?: FacetAttribute[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFacetNamesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to retrieve facet names from.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFacetNamesResponse {
  /**
   * <p>The names of facets that exist within the schema.</p>
   * @public
   */
  FacetNames?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncomingTypedLinksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *       order in which they are supplied to any API calls.</p>
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The consistency level to execute the request at.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   * @public
   */
  LinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIndexRequest {
  /**
   * <p>The ARN of the directory that the index exists in.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   * @public
   */
  RangesOnIndexedValues?: ObjectAttributeRange[] | undefined;

  /**
   * <p>The reference to the index to list.</p>
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The consistency level to execute the request at.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedSchemaArnsRequest {
  /**
   * <p>The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListManagedSchemaArnsResponse {
  /**
   * <p>The ARNs for all AWS managed schemas.</p>
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   * @public
   */
  FacetFilter?: SchemaFacet | undefined;
}

/**
 * @public
 */
export interface ListObjectAttributesResponse {
  /**
   * <p>Attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key, and attribute value is the value.</p>
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectChildrenRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object for which child objects are being
   *       listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListObjectChildrenResponse {
  /**
   * <p>Children structure, which is a map with key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   * @public
   */
  Children?: Record<string, string> | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectParentPathsRequest {
  /**
   * <p>The ARN of the directory to which the parent path applies.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object whose parent paths are listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *       directory.</p>
   * @public
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectParentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object for which parent objects are being
   *       listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;

  /**
   * <p>When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.</p>
   * @public
   */
  IncludeAllLinksToEachParent?: boolean | undefined;
}

/**
 * @public
 */
export interface ListObjectParentsResponse {
  /**
   * <p>The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and
   *       LinkName as the value.</p>
   * @public
   */
  Parents?: Record<string, string> | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   * @public
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[] | undefined;
}

/**
 * @public
 */
export interface ListObjectPoliciesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object for which policies will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *       object.</p>
   * @public
   */
  AttachedPolicyIds?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutgoingTypedLinksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference that identifies the object whose attributes will be listed.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *       not the order they are supplied to any API calls.</p>
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The consistency level to execute the request at.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   * @public
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyAttachmentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the policy object.</p>
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   * @public
   */
  ObjectIdentifiers?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublishedSchemaArnsRequest {
  /**
   * <p>The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPublishedSchemaArnsResponse {
  /**
   * <p>The ARNs of published schemas.</p>
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The pagination token. This is for future use. Currently pagination is not supported for
   *       tagging.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>MaxResults</code> parameter sets the maximum number of results returned in a
   *       single page. This is for future use and is not supported currently.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The tag structure that contains a tag key and value.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key that is associated with the tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value that is associated with the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key value pairs that are associated with the response.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetAttributesResponse {
  /**
   * <p>An ordered set of attributes associate with the typed link.</p>
   * @public
   */
  Attributes?: TypedLinkAttributeDefinition[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetNamesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetNamesResponse {
  /**
   * <p>The names of typed link facets that exist within the schema.</p>
   * @public
   */
  FacetNames?: string[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface LookupPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface LookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *       <code>PolicyType</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   * @public
   */
  PolicyToPathList?: PolicyToPath[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PublishSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the development schema. For
   *       more information, see <a>arns</a>.</p>
   * @public
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * <p>The major version under which the schema will be published. Schemas have both a major and minor version associated with them.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p>The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.</p>
   * @public
   */
  MinorVersion?: string | undefined;

  /**
   * <p>The new name under which the schema will be published. If this is not provided, the
   *       development schema is considered.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface PublishSchemaResponse {
  /**
   * <p>The ARN that is associated with the published schema. For more information, see <a>arns</a>.</p>
   * @public
   */
  PublishedSchemaArn?: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaFromJsonRequest {
  /**
   * <p>The ARN of the schema to update.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The replacement JSON schema.</p>
   * @public
   */
  Document: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaFromJsonResponse {
  /**
   * <p>The ARN of the schema to update.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFacetFromObjectRequest {
  /**
   * <p>The ARN of the directory in which the object resides.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The facet to remove. See <a>SchemaFacet</a> for details.</p>
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>A reference to the object to remove the facet from.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface RemoveFacetFromObjectResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of the tag that need to be removed from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A structure that contains information used to update an attribute.</p>
 * @public
 */
export interface FacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   * @public
   */
  Attribute?: FacetAttribute | undefined;

  /**
   * <p>The action to perform when updating the attribute.</p>
   * @public
   */
  Action?: UpdateActionType | undefined;
}

/**
 * @public
 */
export interface UpdateFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>List of attributes that need to be updated in a given schema <a>Facet</a>.
   *       Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update
   *       operation to perform. </p>
   * @public
   */
  AttributeUpdates?: FacetAttributeUpdate[] | undefined;

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   * @public
   */
  ObjectType?: ObjectType | undefined;
}

/**
 * @public
 */
export interface UpdateFacetResponse {}

/**
 * @public
 */
export interface UpdateLinkAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>The attributes update structure.</p>
   * @public
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateLinkAttributesResponse {}

/**
 * @public
 */
export interface UpdateObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object.</p>
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The attributes update structure.</p>
   * @public
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateObjectAttributesResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the updated object.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * <p>The ARN that is associated with the updated schema. For more information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn?: string | undefined;
}

/**
 * <p>A typed link facet attribute update.</p>
 * @public
 */
export interface TypedLinkFacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   * @public
   */
  Attribute: TypedLinkAttributeDefinition | undefined;

  /**
   * <p>The action to perform when updating the attribute.</p>
   * @public
   */
  Action: UpdateActionType | undefined;
}

/**
 * @public
 */
export interface UpdateTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Attributes update structure.</p>
   * @public
   */
  AttributeUpdates: TypedLinkFacetAttributeUpdate[] | undefined;

  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet.  When
   *       providing ranges to a typed link selection, any inexact ranges must be specified at the end.
   *       Any attributes that do not have a range specified are presumed to match the entire range.
   *       Filters are interpreted in the order of the attributes on the typed link facet, not the order
   *       in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   * @public
   */
  IdentityAttributeOrder: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateTypedLinkFacetResponse {}

/**
 * @public
 */
export interface UpgradeAppliedSchemaRequest {
  /**
   * <p>The revision of the published schema to upgrade the directory to.</p>
   * @public
   */
  PublishedSchemaArn: string | undefined;

  /**
   * <p>The ARN for the directory to which the upgraded schema will be applied.</p>
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpgradeAppliedSchemaResponse {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   * @public
   */
  UpgradedSchemaArn?: string | undefined;

  /**
   * <p>The ARN of the directory that is returned as part of the response.</p>
   * @public
   */
  DirectoryArn?: string | undefined;
}

/**
 * @public
 */
export interface UpgradePublishedSchemaRequest {
  /**
   * <p>The ARN of the development schema with the changes used for the upgrade.</p>
   * @public
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * <p>The ARN of the published schema to be upgraded.</p>
   * @public
   */
  PublishedSchemaArn: string | undefined;

  /**
   * <p>Identifies the minor version of the published schema that will be created. This parameter is NOT optional.</p>
   * @public
   */
  MinorVersion: string | undefined;

  /**
   * <p>Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpgradePublishedSchemaResponse {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   * @public
   */
  UpgradedSchemaArn?: string | undefined;
}
