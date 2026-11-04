// smithy-typescript generated code
import type {
  ControlBehavior,
  ControlParameterRequirement,
  ControlRelationType,
  ControlScope,
  ControlSeverity,
  MappingType,
  ParameterRequirementSummary,
} from "./enums";

/**
 * A summary of the domain that a common control or an objective belongs to.
 *
 * @public
 */
export interface AssociatedDomainSummary {
  /**
   * The Amazon Resource Name (ARN) of the related domain.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the related domain.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A summary of the objective that a common control supports.
 *
 * @public
 */
export interface AssociatedObjectiveSummary {
  /**
   * The Amazon Resource Name (ARN) of the related objective.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the related objective.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The objective resource that's being used as a filter.
 *
 * @public
 */
export interface ObjectiveResourceFilter {
  /**
   * The Amazon Resource Name (ARN) of the objective.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * An optional filter that narrows the results to a specific objective.
 *
 * @public
 */
export interface CommonControlFilter {
  /**
   * The objective that's used as filter criteria.
   *
   * You can use this parameter to specify one objective ARN at a time. Passing multiple ARNs in the `CommonControlFilter` isn’t supported.
   *
   * @public
   */
  Objectives?: ObjectiveResourceFilter[] | undefined;
}

/**
 * A structure that contains details about a common control mapping. In particular, it returns the Amazon Resource Name (ARN) of the common control.
 *
 * @public
 */
export interface CommonControlMappingDetails {
  /**
   * The Amazon Resource Name (ARN) that identifies the common control in the mapping.
   *
   * @public
   */
  CommonControlArn: string | undefined;
}

/**
 * @public
 */
export interface ListCommonControlsRequest {
  /**
   * The maximum number of results on a page or for an API request call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional filter that narrows the results to a specific objective.
   *
   * This filter allows you to specify one objective ARN at a time. Passing multiple ARNs in the `CommonControlFilter` isn’t supported.
   *
   * @public
   */
  CommonControlFilter?: CommonControlFilter | undefined;
}

/**
 * A summary of metadata for a common control.
 *
 * @public
 */
export interface CommonControlSummary {
  /**
   * The Amazon Resource Name (ARN) that identifies the common control.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the common control.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the common control.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The domain that the common control belongs to.
   *
   * @public
   */
  Domain: AssociatedDomainSummary | undefined;

  /**
   * The objective that the common control belongs to.
   *
   * @public
   */
  Objective: AssociatedObjectiveSummary | undefined;

  /**
   * The time when the common control was created.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The time when the common control was most recently updated.
   *
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCommonControlsResponse {
  /**
   * The list of common controls that the `ListCommonControls` API returns.
   *
   * @public
   */
  CommonControls: CommonControlSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetControlRequest {
  /**
   * The Amazon Resource Name (ARN) of the control. It has one of the following formats:
   *
   * *Global format*
   *
   * `arn:\{PARTITION\}:controlcatalog:::control/\{CONTROL_CATALOG_OPAQUE_ID\}`
   *
   * *Or Regional format*
   *
   * `arn:\{PARTITION\}:controltower:\{REGION\}::control/\{CONTROL_TOWER_OPAQUE_ID\}`
   *
   * Here is a more general pattern that covers Amazon Web Services Control Tower and Control Catalog ARNs:
   *
   * `^arn:(aws(?:[-a-z]*)?):(controlcatalog|controltower):[a-zA-Z0-9-]*::control/[0-9a-zA-Z_\\-]+$`
   *
   * @public
   */
  ControlArn: string | undefined;
}

/**
 * An object that describes the implementation type for a control.
 *
 * Our `ImplementationDetails` `Type` format has three required segments:
 *
 * - `SERVICE-PROVIDER::SERVICE-NAME::RESOURCE-NAME`
 *
 * For example, `AWS::Config::ConfigRule` **or** `AWS::SecurityHub::SecurityControl` resources have the format with three required segments.
 *
 * Our `ImplementationDetails` `Type` format has an optional fourth segment, which is present for applicable implementation types. The format is as follows:
 *
 * - `SERVICE-PROVIDER::SERVICE-NAME::RESOURCE-NAME::RESOURCE-TYPE-DESCRIPTION`
 *
 * For example, `AWS::Organizations::Policy::SERVICE_CONTROL_POLICY` **or** `AWS::CloudFormation::Type::HOOK` have the format with four segments.
 *
 * Although the format is similar, the values for the `Type` field do not match any Amazon Web Services CloudFormation values.
 *
 * @public
 */
export interface ImplementationDetails {
  /**
   * A string that describes a control's implementation type.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * A service-specific identifier for the control, assigned by the service that implemented the control. For example, this identifier could be an Amazon Web Services Config Rule ID or a Security Hub Control ID.
   *
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * Five types of control parameters are supported.
 *
 * - **AllowedRegions**: List of Amazon Web Services Regions exempted from the control. Each string is expected to be an Amazon Web Services Region code. This parameter is mandatory for the **OU Region deny** control, **CT.MULTISERVICE.PV.1**.
 *
 *   Example: `["us-east-1","us-west-2"]`
 * - **ExemptedActions**: List of Amazon Web Services IAM actions exempted from the control. Each string is expected to be an IAM action.
 *
 *   Example: `["logs:DescribeLogGroups","logs:StartQuery","logs:GetQueryResults"]`
 * - **ExemptedPrincipalArns**: List of Amazon Web Services IAM principal ARNs exempted from the control. Each string is expected to be an IAM principal that follows the format `arn:partition:service::account:resource`
 *
 *   Example: `["arn:aws:iam::*:role/ReadOnly","arn:aws:sts::*:assumed-role/ReadOnly/*"]`
 * - **ExemptedResourceArns**: List of resource ARNs exempted from the control. Each string is expected to be a resource ARN.
 *
 *   Example: `["arn:aws:s3:::my-bucket-name"]`
 * - **ExemptAssumeRoot**: A parameter that lets you choose whether to exempt requests made with `AssumeRoot` from this control, for this OU. For member accounts, the `AssumeRoot` property is included in requests initiated by IAM centralized root access. This parameter applies only to the `AWS-GR_RESTRICT_ROOT_USER` control. If you add the parameter when enabling the control, the `AssumeRoot` exemption is allowed. If you omit the parameter, the `AssumeRoot` exception is not permitted. The parameter does not accept `False` as a value.
 *
 *   *Example: Enabling the control and allowing `AssumeRoot`*
 *
 *   `\{ "controlIdentifier": "arn:aws:controlcatalog:::control/5kvme4m5d2b4d7if2fs5yg2ui", "parameters": [ \{ "key": "ExemptAssumeRoot", "value": true \} ], "targetIdentifier": "arn:aws:organizations::8633900XXXXX:ou/o-6jmn81636m/ou-qsah-jtiihcla" \}`
 *
 * @public
 */
export interface ControlParameter {
  /**
   * The parameter name. This name is the parameter `key` when you call [`EnableControl`](https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html) or [`UpdateEnabledControl`](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Indicates whether the parameter is required or optional when you enable the control.
   *
   * @public
   */
  Requirement?: ControlParameterRequirement | undefined;
}

/**
 * Returns information about the control, including the scope of the control, if enabled, and the Regions in which the control is available for deployment. For more information about scope, see [Global services](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html).
 *
 * If you are applying controls through an Amazon Web Services Control Tower landing zone environment, remember that the values returned in the `RegionConfiguration` API operation are not related to the governed Regions in your landing zone. For example, if you are governing Regions `A`,`B`,and `C` while the control is available in Regions `A`, `B`, C`,` and `D`, you'd see a response with `DeployableRegions` of `A`, `B`, `C`, and `D` for a control with `REGIONAL` scope, even though you may not intend to deploy the control in Region `D`, because you do not govern it through your landing zone.
 *
 * @public
 */
export interface RegionConfiguration {
  /**
   * The coverage of the control, if deployed. Scope is an enumerated type, with value `Regional`, or `Global`. A control with Global scope is effective in all Amazon Web Services Regions, regardless of the Region from which it is enabled, or to which it is deployed. A control implemented by an SCP is usually Global in scope. A control with Regional scope has operations that are restricted specifically to the Region from which it is enabled and to which it is deployed. Controls implemented by Config rules and CloudFormation hooks usually are Regional in scope. Security Hub controls usually are Regional in scope.
   *
   * @public
   */
  Scope: ControlScope | undefined;

  /**
   * Regions in which the control is available to be deployed.
   *
   * @public
   */
  DeployableRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetControlResponse {
  /**
   * The Amazon Resource Name (ARN) of the control.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of alternative identifiers for the control. These are human-readable designators, such as `SH.S3.1`. Several aliases can refer to the same control across different Amazon Web Services services or compliance frameworks.
   *
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * The display name of the control.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of what the control does.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A term that identifies the control's functional behavior. One of `Preventive`, `Detective`, `Proactive`
   *
   * @public
   */
  Behavior: ControlBehavior | undefined;

  /**
   * An enumerated type, with the following possible values:
   *
   * @public
   */
  Severity?: ControlSeverity | undefined;

  /**
   * Returns information about the control, including the scope of the control, if enabled, and the Regions in which the control is available for deployment. For more information about scope, see [Global services](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html).
   *
   * If you are applying controls through an Amazon Web Services Control Tower landing zone environment, remember that the values returned in the `RegionConfiguration` API operation are not related to the governed Regions in your landing zone. For example, if you are governing Regions `A`,`B`,and `C` while the control is available in Regions `A`, `B`, C`,` and `D`, you'd see a response with `DeployableRegions` of `A`, `B`, `C`, and `D` for a control with `REGIONAL` scope, even though you may not intend to deploy the control in Region `D`, because you do not govern it through your landing zone.
   *
   * @public
   */
  RegionConfiguration: RegionConfiguration | undefined;

  /**
   * Returns information about the control, as an `ImplementationDetails` object that shows the underlying implementation type for a control.
   *
   * @public
   */
  Implementation?: ImplementationDetails | undefined;

  /**
   * A summary that indicates whether the control requires parameters, accepts optional parameters, or does not support parameters. Use this field to determine whether you need to supply parameter values when you enable the control.
   *
   * @public
   */
  ParameterRequirementSummary?: ParameterRequirementSummary | undefined;

  /**
   * Returns an array of `ControlParameter` objects that specify the parameters a control supports. An empty list is returned for controls that don’t support parameters.
   *
   * @public
   */
  Parameters?: ControlParameter[] | undefined;

  /**
   * A timestamp that notes the time when the control was released (start of its life) as a governance capability in Amazon Web Services.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * A list of resource types that are governed by this control. This information helps you understand which controls can govern certain types of resources, and conversely, which resources are affected when the control is implemented. For Amazon Web Services controls, the resources are represented as CloudFormation resource types. For non-Amazon Web Services controls, the resources are represented in a provider-specific format. If `GovernedResources` cannot be represented by available resource types, it’s returned as an empty list.
   *
   * @public
   */
  GovernedResources?: string[] | undefined;

  /**
   * A list of providers whose resources are governed by this control. For example, a value of `AWS` indicates that the control governs Amazon Web Services resources.
   *
   * @public
   */
  GovernedProviders?: string[] | undefined;
}

/**
 * A structure that defines filtering criteria for control implementations. You can use this filter to find controls that are implemented by specific Amazon Web Services services or with specific service identifiers.
 *
 * @public
 */
export interface ImplementationFilter {
  /**
   * A list of implementation types that can serve as filters. For example, you can filter for controls implemented as Amazon Web Services Config Rules by specifying AWS::Config::ConfigRule as a type.
   *
   * @public
   */
  Types?: string[] | undefined;

  /**
   * A list of service-specific identifiers that can serve as filters. For example, you can filter for controls with specific Amazon Web Services Config Rule IDs or Security Hub Control IDs.
   *
   * @public
   */
  Identifiers?: string[] | undefined;
}

/**
 * A structure that defines filtering criteria for the ListControls operation. You can use this filter to narrow down the list of controls based on their implementation details.
 *
 * @public
 */
export interface ControlFilter {
  /**
   * A filter that narrows the results to controls with specific implementation types or identifiers. This field allows you to find controls that are implemented by specific Amazon Web Services services or with specific service identifiers.
   *
   * @public
   */
  Implementations?: ImplementationFilter | undefined;

  /**
   * A filter that narrows the results to controls that govern a specific provider's resources.
   *
   * @public
   */
  GovernedProviders?: string[] | undefined;
}

/**
 * @public
 */
export interface ListControlsRequest {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results on a page or for an API request call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional filter that narrows the results to controls with specific implementation types or identifiers. If you don't provide a filter, the operation returns all available controls.
   *
   * @public
   */
  Filter?: ControlFilter | undefined;
}

/**
 * A summary of how the control is implemented, including the Amazon Web Services service that enforces the control and its service-specific identifier. For example, the value of this field could indicate that the control is implemented as an Amazon Web Services Config Rule or an Amazon Web Services Security Hub control.
 *
 * @public
 */
export interface ImplementationSummary {
  /**
   * A string that represents the Amazon Web Services service that implements this control. For example, a value of `AWS::Config::ConfigRule` indicates that the control is implemented by Amazon Web Services Config, and `AWS::SecurityHub::SecurityControl` indicates implementation by Amazon Web Services Security Hub.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The identifier originally assigned by the Amazon Web Services service that implements the control. For example, `CODEPIPELINE_DEPLOYMENT_COUNT_CHECK`.
   *
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * Overview of information about a control.
 *
 * @public
 */
export interface ControlSummary {
  /**
   * The Amazon Resource Name (ARN) of the control.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of alternative identifiers for the control. These are human-readable designators, such as `SH.S3.1`. Several aliases can refer to the same control across different Amazon Web Services services or compliance frameworks.
   *
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * The display name of the control.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the control, as it may appear in the console. Describes the functionality of the control.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * An enumerated type, with the following possible values:
   *
   * @public
   */
  Behavior?: ControlBehavior | undefined;

  /**
   * An enumerated type, with the following possible values:
   *
   * @public
   */
  Severity?: ControlSeverity | undefined;

  /**
   * A summary that indicates whether the control requires parameters, accepts optional parameters, or does not support parameters. Use this field to determine whether you need to supply parameter values when you enable the control.
   *
   * @public
   */
  ParameterRequirementSummary?: ParameterRequirementSummary | undefined;

  /**
   * An object of type `ImplementationSummary` that describes how the control is implemented.
   *
   * @public
   */
  Implementation?: ImplementationSummary | undefined;

  /**
   * A timestamp that notes the time when the control was released (start of its life) as a governance capability in Amazon Web Services.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * A list of resource types that are governed by this control. This information helps you understand which controls can govern certain types of resources, and conversely, which resources are affected when the control is implemented. For Amazon Web Services controls, the resources are represented as CloudFormation resource types. For non-Amazon Web Services controls, the resources are represented in a provider-specific format. If `GovernedResources` cannot be represented by available resource types, it’s returned as an empty list.
   *
   * @public
   */
  GovernedResources?: string[] | undefined;

  /**
   * A list of providers whose resources are governed by this control. For example, a value of `AWS` indicates that the control governs Amazon Web Services resources.
   *
   * @public
   */
  GovernedProviders?: string[] | undefined;
}

/**
 * @public
 */
export interface ListControlsResponse {
  /**
   * Returns a list of controls, given as structures of type *controlSummary*.
   *
   * @public
   */
  Controls: ControlSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * The maximum number of results on a page or for an API request call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of metadata for a domain.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The Amazon Resource Name (ARN) that identifies the domain.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the domain.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The time when the domain was created.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The time when the domain was most recently updated.
   *
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * The list of domains that the `ListDomains` API returns.
   *
   * @public
   */
  Domains: DomainSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that defines filtering criteria for the ListControlMappings operation. You can use this filter to narrow down the list of control mappings based on control ARNs, common control ARNs, or mapping types.
 *
 * @public
 */
export interface ControlMappingFilter {
  /**
   * A list of control ARNs to filter the mappings. When specified, only mappings associated with these controls are returned.
   *
   * @public
   */
  ControlArns?: string[] | undefined;

  /**
   * A list of common control ARNs to filter the mappings. When specified, only mappings associated with these common controls are returned.
   *
   * @public
   */
  CommonControlArns?: string[] | undefined;

  /**
   * A list of mapping types to filter the mappings. When specified, only mappings of these types are returned.
   *
   * @public
   */
  MappingTypes?: MappingType[] | undefined;
}

/**
 * @public
 */
export interface ListControlMappingsRequest {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results on a page or for an API request call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional filter that narrows the results to specific control mappings based on control ARNs, common control ARNs, or mapping types.
   *
   * @public
   */
  Filter?: ControlMappingFilter | undefined;
}

/**
 * A structure that contains details about a framework mapping, including the framework name and specific item within the framework that the control maps to.
 *
 * @public
 */
export interface FrameworkMappingDetails {
  /**
   * The name of the compliance framework that the control maps to.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The specific item or requirement within the framework that the control maps to.
   *
   * @public
   */
  Item: string | undefined;
}

/**
 * A structure that describes a control's relationship status with other controls.
 *
 * @public
 */
export interface RelatedControlMappingDetails {
  /**
   * The unique identifier of a control.
   *
   * @public
   */
  ControlArn?: string | undefined;

  /**
   * Returns an enumerated value that represents the relationship between two or more controls.
   *
   * @public
   */
  RelationType: ControlRelationType | undefined;
}

/**
 * A structure that contains the details of a mapping relationship, which can be either to a framework or to a common control.
 *
 * @public
 */
export type Mapping =
  | Mapping.CommonControlMember
  | Mapping.FrameworkMember
  | Mapping.RelatedControlMember
  | Mapping.$UnknownMember;

/**
 * @public
 */
export namespace Mapping {
  /**
   * The framework mapping details when the mapping type relates to a compliance framework.
   *
   * @public
   */
  export interface FrameworkMember {
    Framework: FrameworkMappingDetails;
    CommonControl?: never;
    RelatedControl?: never;
    $unknown?: never;
  }

  /**
   * The common control mapping details when the mapping type relates to a common control.
   *
   * @public
   */
  export interface CommonControlMember {
    Framework?: never;
    CommonControl: CommonControlMappingDetails;
    RelatedControl?: never;
    $unknown?: never;
  }

  /**
   * Returns information about controls that are related to the specified control.
   *
   * @public
   */
  export interface RelatedControlMember {
    Framework?: never;
    CommonControl?: never;
    RelatedControl: RelatedControlMappingDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Framework?: never;
    CommonControl?: never;
    RelatedControl?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Framework: (value: FrameworkMappingDetails) => T;
    CommonControl: (value: CommonControlMappingDetails) => T;
    RelatedControl: (value: RelatedControlMappingDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that contains information about a control mapping, including the control ARN, mapping type, and mapping details.
 *
 * @public
 */
export interface ControlMapping {
  /**
   * The Amazon Resource Name (ARN) that identifies the control in the mapping.
   *
   * @public
   */
  ControlArn: string | undefined;

  /**
   * The type of mapping relationship between the control and other entities.
   *
   * @public
   */
  MappingType: MappingType | undefined;

  /**
   * The details of the mapping relationship, for example, containing framework, common control, or related control information.
   *
   * @public
   */
  Mapping: Mapping | undefined;
}

/**
 * @public
 */
export interface ListControlMappingsResponse {
  /**
   * The list of control mappings that the ListControlMappings API returns.
   *
   * @public
   */
  ControlMappings: ControlMapping[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The domain resource that's being used as a filter.
 *
 * @public
 */
export interface DomainResourceFilter {
  /**
   * The Amazon Resource Name (ARN) of the domain.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * An optional filter that narrows the list of objectives to a specific domain.
 *
 * @public
 */
export interface ObjectiveFilter {
  /**
   * The domain that's used as filter criteria.
   *
   * You can use this parameter to specify one domain ARN at a time. Passing multiple ARNs in the `ObjectiveFilter` isn’t supported.
   *
   * @public
   */
  Domains?: DomainResourceFilter[] | undefined;
}

/**
 * @public
 */
export interface ListObjectivesRequest {
  /**
   * The maximum number of results on a page or for an API request call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional filter that narrows the results to a specific domain.
   *
   * This filter allows you to specify one domain ARN at a time. Passing multiple ARNs in the `ObjectiveFilter` isn’t supported.
   *
   * @public
   */
  ObjectiveFilter?: ObjectiveFilter | undefined;
}

/**
 * A summary of metadata for an objective.
 *
 * @public
 */
export interface ObjectiveSummary {
  /**
   * The Amazon Resource Name (ARN) that identifies the objective.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the objective.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the objective.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The domain that the objective belongs to.
   *
   * @public
   */
  Domain: AssociatedDomainSummary | undefined;

  /**
   * The time when the objective was created.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The time when the objective was most recently updated.
   *
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListObjectivesResponse {
  /**
   * The list of objectives that the `ListObjectives` API returns.
   *
   * @public
   */
  Objectives: ObjectiveSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}
