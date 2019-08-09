import { _FacetAttribute } from "./_FacetAttribute";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFacetInput shape
 */
export interface CreateFacetInput {
  /**
   * <p>The schema ARN in which the new <a>Facet</a> will be created. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string;

  /**
   * <p>The name of the <a>Facet</a>, which is unique for a given schema.</p>
   */
  Name: string;

  /**
   * <p>The attributes that are associated with the <a>Facet</a>.</p>
   */
  Attributes?: Array<_FacetAttribute> | Iterable<_FacetAttribute>;

  /**
   * <p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul>
   */
  ObjectType?: "NODE" | "LEAF_NODE" | "POLICY" | "INDEX" | string;

  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: "STATIC" | "DYNAMIC" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
