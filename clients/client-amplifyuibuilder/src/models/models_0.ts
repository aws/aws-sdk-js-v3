// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AmplifyUIBuilderServiceException as __BaseException } from "./AmplifyUIBuilderServiceException";

/**
 * @public
 * <p>Associates a component property to a binding property. This enables exposed properties on
 *       the top level component to propagate data to the component's property values.</p>
 */
export interface ComponentPropertyBindingProperties {
  /**
   * @public
   * <p>The component property to bind to the data field.</p>
   */
  property: string | undefined;

  /**
   * @public
   * <p>The data field to bind the property to.</p>
   */
  field?: string;
}

/**
 * @public
 * <p>Describes how to bind a component property to form data.</p>
 */
export interface FormBindingElement {
  /**
   * @public
   * <p>The name of the component to retrieve a value from.</p>
   */
  element: string | undefined;

  /**
   * @public
   * <p>The property to retrieve a value from.</p>
   */
  property: string | undefined;
}

/**
 * @public
 */
export interface GetCodegenJobRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the code generation job.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app associated with the code generation job.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the code generation job.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Describes an asset for a code generation job.</p>
 */
export interface CodegenJobAsset {
  /**
   * @public
   * <p>The URL to use to access the asset.</p>
   */
  downloadUrl?: string;
}

/**
 * @public
 * <p>Describes the feature flags that you can specify for a code generation job.</p>
 */
export interface CodegenFeatureFlags {
  /**
   * @public
   * <p>Specifes whether a code generation job supports data relationships.</p>
   */
  isRelationshipSupported?: boolean;

  /**
   * @public
   * <p>Specifies whether a code generation job supports non models.</p>
   */
  isNonModelSupported?: boolean;
}

/**
 * @public
 * @enum
 */
export const CodegenJobGenericDataSourceType = {
  DATA_STORE: "DataStore",
} as const;

/**
 * @public
 */
export type CodegenJobGenericDataSourceType =
  (typeof CodegenJobGenericDataSourceType)[keyof typeof CodegenJobGenericDataSourceType];

/**
 * @public
 * <p>Describes the enums in a generic data schema.</p>
 */
export interface CodegenGenericDataEnum {
  /**
   * @public
   * <p>The list of enum values in the generic data schema.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CodegenGenericDataFieldDataType = {
  AWS_DATE: "AWSDate",
  AWS_DATE_TIME: "AWSDateTime",
  AWS_EMAIL: "AWSEmail",
  AWS_IP_ADDRESS: "AWSIPAddress",
  AWS_JSON: "AWSJSON",
  AWS_PHONE: "AWSPhone",
  AWS_TIME: "AWSTime",
  AWS_TIMESTAMP: "AWSTimestamp",
  AWS_URL: "AWSURL",
  BOOLEAN: "Boolean",
  ENUM: "Enum",
  FLOAT: "Float",
  ID: "ID",
  INT: "Int",
  MODEL: "Model",
  NON_MODEL: "NonModel",
  STRING: "String",
} as const;

/**
 * @public
 */
export type CodegenGenericDataFieldDataType =
  (typeof CodegenGenericDataFieldDataType)[keyof typeof CodegenGenericDataFieldDataType];

/**
 * @public
 * @enum
 */
export const GenericDataRelationshipType = {
  BELONGS_TO: "BELONGS_TO",
  HAS_MANY: "HAS_MANY",
  HAS_ONE: "HAS_ONE",
} as const;

/**
 * @public
 */
export type GenericDataRelationshipType =
  (typeof GenericDataRelationshipType)[keyof typeof GenericDataRelationshipType];

/**
 * @public
 * <p>Describes the relationship between generic data models.</p>
 */
export interface CodegenGenericDataRelationshipType {
  /**
   * @public
   * <p>The data relationship type.</p>
   */
  type: GenericDataRelationshipType | string | undefined;

  /**
   * @public
   * <p>The name of the related model in the data relationship.</p>
   */
  relatedModelName: string | undefined;

  /**
   * @public
   * <p>The related model fields in the data relationship.</p>
   */
  relatedModelFields?: string[];

  /**
   * @public
   * <p>Specifies whether the relationship can unlink the associated model.</p>
   */
  canUnlinkAssociatedModel?: boolean;

  /**
   * @public
   * <p>The name of the related join field in the data relationship.</p>
   */
  relatedJoinFieldName?: string;

  /**
   * @public
   * <p>The name of the related join table in the data relationship.</p>
   */
  relatedJoinTableName?: string;

  /**
   * @public
   * <p>The value of the <code>belongsTo</code> field on the related data model. </p>
   */
  belongsToFieldOnRelatedModel?: string;

  /**
   * @public
   * <p>The associated fields of the data relationship.</p>
   */
  associatedFields?: string[];

  /**
   * @public
   * <p>Specifies whether the <code>@index</code> directive is supported for a <code>hasMany</code> data relationship.</p>
   */
  isHasManyIndex?: boolean;
}

/**
 * @public
 * <p>Describes a field in a generic data schema.</p>
 */
export interface CodegenGenericDataField {
  /**
   * @public
   * <p>The data type for the generic data field.</p>
   */
  dataType: CodegenGenericDataFieldDataType | string | undefined;

  /**
   * @public
   * <p>The value of the data type for the generic data field.</p>
   */
  dataTypeValue: string | undefined;

  /**
   * @public
   * <p>Specifies whether the generic data field is required.</p>
   */
  required: boolean | undefined;

  /**
   * @public
   * <p>Specifies whether the generic data field is read-only.</p>
   */
  readOnly: boolean | undefined;

  /**
   * @public
   * <p>Specifies whether the generic data field is an array.</p>
   */
  isArray: boolean | undefined;

  /**
   * @public
   * <p>The relationship of the generic data schema.</p>
   */
  relationship?: CodegenGenericDataRelationshipType;
}

/**
 * @public
 * <p>Describes a model in a generic data schema.</p>
 */
export interface CodegenGenericDataModel {
  /**
   * @public
   * <p>The fields in the generic data model.</p>
   */
  fields: Record<string, CodegenGenericDataField> | undefined;

  /**
   * @public
   * <p>Specifies whether the generic data model is a join table.</p>
   */
  isJoinTable?: boolean;

  /**
   * @public
   * <p>The primary keys of the generic data model.</p>
   */
  primaryKeys: string[] | undefined;
}

/**
 * @public
 * <p>Describes a non-model in a generic data schema.</p>
 */
export interface CodegenGenericDataNonModel {
  /**
   * @public
   * <p>The fields in a generic data schema non model.</p>
   */
  fields: Record<string, CodegenGenericDataField> | undefined;
}

/**
 * @public
 * <p>Describes the data schema for a code generation job.</p>
 */
export interface CodegenJobGenericDataSchema {
  /**
   * @public
   * <p>The type of the data source for the schema. Currently, the only valid value is an Amplify <code>DataStore</code>.</p>
   */
  dataSourceType: CodegenJobGenericDataSourceType | string | undefined;

  /**
   * @public
   * <p>The name of a <code>CodegenGenericDataModel</code>.</p>
   */
  models: Record<string, CodegenGenericDataModel> | undefined;

  /**
   * @public
   * <p>The name of a <code>CodegenGenericDataEnum</code>.</p>
   */
  enums: Record<string, CodegenGenericDataEnum> | undefined;

  /**
   * @public
   * <p>The name of a <code>CodegenGenericDataNonModel</code>.</p>
   */
  nonModels: Record<string, CodegenGenericDataNonModel> | undefined;
}

/**
 * @public
 * <p>Describes the DataStore configuration for an API for a code generation job.</p>
 */
export interface DataStoreRenderConfig {}

/**
 * @public
 * <p>Describes the GraphQL configuration for an API for a code generation job.</p>
 */
export interface GraphQLRenderConfig {
  /**
   * @public
   * <p>The path to the GraphQL types file, relative to the component output directory.</p>
   */
  typesFilePath: string | undefined;

  /**
   * @public
   * <p>The path to the GraphQL queries file, relative to the component output directory.</p>
   */
  queriesFilePath: string | undefined;

  /**
   * @public
   * <p>The path to the GraphQL mutations file, relative to the component output directory.</p>
   */
  mutationsFilePath: string | undefined;

  /**
   * @public
   * <p>The path to the GraphQL subscriptions file, relative to the component output directory.</p>
   */
  subscriptionsFilePath: string | undefined;

  /**
   * @public
   * <p>The path to the GraphQL fragments file, relative to the component output directory.</p>
   */
  fragmentsFilePath: string | undefined;
}

/**
 * @public
 * <p>Describes the configuration for an application with no API being used.</p>
 */
export interface NoApiRenderConfig {}

/**
 * @public
 * <p>Describes the API configuration for a code generation job.</p>
 */
export type ApiConfiguration =
  | ApiConfiguration.DataStoreConfigMember
  | ApiConfiguration.GraphQLConfigMember
  | ApiConfiguration.NoApiConfigMember
  | ApiConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ApiConfiguration {
  /**
   * @public
   * <p>The configuration for an application using GraphQL APIs.</p>
   */
  export interface GraphQLConfigMember {
    graphQLConfig: GraphQLRenderConfig;
    dataStoreConfig?: never;
    noApiConfig?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The configuration for an application using DataStore APIs.</p>
   */
  export interface DataStoreConfigMember {
    graphQLConfig?: never;
    dataStoreConfig: DataStoreRenderConfig;
    noApiConfig?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The configuration for an application with no API being used.</p>
   */
  export interface NoApiConfigMember {
    graphQLConfig?: never;
    dataStoreConfig?: never;
    noApiConfig: NoApiRenderConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    graphQLConfig?: never;
    dataStoreConfig?: never;
    noApiConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    graphQLConfig: (value: GraphQLRenderConfig) => T;
    dataStoreConfig: (value: DataStoreRenderConfig) => T;
    noApiConfig: (value: NoApiRenderConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ApiConfiguration, visitor: Visitor<T>): T => {
    if (value.graphQLConfig !== undefined) return visitor.graphQLConfig(value.graphQLConfig);
    if (value.dataStoreConfig !== undefined) return visitor.dataStoreConfig(value.dataStoreConfig);
    if (value.noApiConfig !== undefined) return visitor.noApiConfig(value.noApiConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const JSModule = {
  ES2020: "es2020",
  ESNEXT: "esnext",
} as const;

/**
 * @public
 */
export type JSModule = (typeof JSModule)[keyof typeof JSModule];

/**
 * @public
 * @enum
 */
export const JSScript = {
  JS: "js",
  JSX: "jsx",
  TSX: "tsx",
} as const;

/**
 * @public
 */
export type JSScript = (typeof JSScript)[keyof typeof JSScript];

/**
 * @public
 * @enum
 */
export const JSTarget = {
  ES2015: "es2015",
  ES2020: "es2020",
} as const;

/**
 * @public
 */
export type JSTarget = (typeof JSTarget)[keyof typeof JSTarget];

/**
 * @public
 * <p>Describes the code generation job configuration for a React project.</p>
 */
export interface ReactStartCodegenJobData {
  /**
   * @public
   * <p>The JavaScript module type.</p>
   */
  module?: JSModule | string;

  /**
   * @public
   * <p>The ECMAScript specification to use.</p>
   */
  target?: JSTarget | string;

  /**
   * @public
   * <p>The file type to use for a JavaScript project.</p>
   */
  script?: JSScript | string;

  /**
   * @public
   * <p>Specifies whether the code generation job should render type declaration files.</p>
   */
  renderTypeDeclarations?: boolean;

  /**
   * @public
   * <p>Specifies whether the code generation job should render inline source maps.</p>
   */
  inlineSourceMap?: boolean;

  /**
   * @public
   * <p>The API configuration for the code generation job.</p>
   */
  apiConfiguration?: ApiConfiguration;
}

/**
 * @public
 * <p>Describes the configuration information for rendering the UI component associated with the code generation job.</p>
 */
export type CodegenJobRenderConfig = CodegenJobRenderConfig.ReactMember | CodegenJobRenderConfig.$UnknownMember;

/**
 * @public
 */
export namespace CodegenJobRenderConfig {
  /**
   * @public
   * <p>The name of the <code>ReactStartCodegenJobData</code> object.</p>
   */
  export interface ReactMember {
    react: ReactStartCodegenJobData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    react?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    react: (value: ReactStartCodegenJobData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CodegenJobRenderConfig, visitor: Visitor<T>): T => {
    if (value.react !== undefined) return visitor.react(value.react);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const CodegenJobStatus = {
  FAILED: "failed",
  IN_PROGRESS: "in_progress",
  SUCCEEDED: "succeeded",
} as const;

/**
 * @public
 */
export type CodegenJobStatus = (typeof CodegenJobStatus)[keyof typeof CodegenJobStatus];

/**
 * @public
 * <p>Describes the configuration for a code generation job that is associated with an Amplify app.</p>
 */
export interface CodegenJob {
  /**
   * @public
   * <p>The unique ID for the code generation job.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ID of the Amplify app associated with the code generation job.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment associated with the code generation job.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>Describes the configuration information for rendering the UI component associated with the code generation job.</p>
   */
  renderConfig?: CodegenJobRenderConfig;

  /**
   * @public
   * <p>Describes the data schema for a code generation job.</p>
   */
  genericDataSchema?: CodegenJobGenericDataSchema;

  /**
   * @public
   * <p>Specifies whether to autogenerate forms in the code generation job.</p>
   */
  autoGenerateForms?: boolean;

  /**
   * @public
   * <p>Describes the feature flags that you can specify for a code generation job.</p>
   */
  features?: CodegenFeatureFlags;

  /**
   * @public
   * <p>The status of the code generation job.</p>
   */
  status?: CodegenJobStatus | string;

  /**
   * @public
   * <p>The customized status message for the code generation job.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The <code>CodegenJobAsset</code> to use for the code generation job.</p>
   */
  asset?: CodegenJobAsset;

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the code generation job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The time that the code generation job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time that the code generation job was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface GetCodegenJobResponse {
  /**
   * @public
   * <p>The configuration settings for the code generation job.</p>
   */
  job?: CodegenJob;
}

/**
 * @public
 * <p>An internal error has occurred. Please retry your request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * @public
 * <p>The requested resource does not exist, or access was denied.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 */
export interface ListCodegenJobsRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to retrieve.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of the basic information about the code generation job.</p>
 */
export interface CodegenJobSummary {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the code generation job.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment associated with the code generation job.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID for the code generation job summary.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The time that the code generation job summary was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time that the code generation job summary was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListCodegenJobsResponse {
  /**
   * @public
   * <p>The list of code generation jobs for the Amplify app.</p>
   */
  entities: CodegenJobSummary[] | undefined;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The code generation job resource configuration.</p>
 */
export interface StartCodegenJobData {
  /**
   * @public
   * <p>The code generation configuration for the codegen job.</p>
   */
  renderConfig: CodegenJobRenderConfig | undefined;

  /**
   * @public
   * <p>The data schema to use for a code generation job.</p>
   */
  genericDataSchema?: CodegenJobGenericDataSchema;

  /**
   * @public
   * <p>Specifies whether to autogenerate forms in the code generation job.</p>
   */
  autoGenerateForms?: boolean;

  /**
   * @public
   * <p>The feature flags for a code generation job.</p>
   */
  features?: CodegenFeatureFlags;

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the code generation job data.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartCodegenJobRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The idempotency token used to ensure that the code generation job request completes only once.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The code generation job resource configuration.</p>
   */
  codegenJobToCreate: StartCodegenJobData | undefined;
}

/**
 * @public
 */
export interface StartCodegenJobResponse {
  /**
   * @public
   * <p>The code generation job for a UI component that is associated with an Amplify app.</p>
   */
  entity?: CodegenJob;
}

/**
 * @public
 */
export type SortDirection = "ASC" | "DESC";

/**
 * @public
 * <p>Describes how to sort the data that you bind to a component.</p>
 */
export interface SortProperty {
  /**
   * @public
   * <p>The field to perform the sort on.</p>
   */
  field: string | undefined;

  /**
   * @public
   * <p>The direction of the sort, either ascending or descending.</p>
   */
  direction: SortDirection | string | undefined;
}

/**
 * @public
 * <p>Describes the style configuration of a unique variation of a main component.</p>
 */
export interface ComponentVariant {
  /**
   * @public
   * <p>The combination of variants that comprise this variant. You can't specify
   *         <code>tags</code> as a valid property for <code>variantValues</code>.</p>
   */
  variantValues?: Record<string, string>;

  /**
   * @public
   * <p>The properties of the component variant that can be overriden when customizing an instance
   *       of the component. You can't specify <code>tags</code> as a valid property for
   *         <code>overrides</code>.</p>
   */
  overrides?: Record<string, Record<string, string>>;
}

/**
 * @public
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
  }
}

/**
 * @public
 * <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *       maximum number of service resources or operations for your Amazon Web Services account. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the component to
   *       delete.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the component to delete.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportComponentsRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app to export components to.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the component.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of components to retrieve.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a summary of a component. This is a read-only data type that is returned by
 *         <code>ListComponents</code>.</p>
 */
export interface ComponentSummary {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the component.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the component.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The component type.</p>
   */
  componentType: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * @public
   * <p>The list of components for the Amplify app.</p>
   */
  entities: ComponentSummary[] | undefined;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TokenProviders = {
  /**
   * The figma token provider.
   */
  FIGMA: "figma",
} as const;

/**
 * @public
 */
export type TokenProviders = (typeof TokenProviders)[keyof typeof TokenProviders];

/**
 * @public
 * <p>Describes the configuration of a request to exchange an access code for a token.</p>
 */
export interface ExchangeCodeForTokenRequestBody {
  /**
   * @public
   * <p>The access code to send in the request.</p>
   */
  code: string | undefined;

  /**
   * @public
   * <p>The location of the application that will receive the access code.</p>
   */
  redirectUri: string | undefined;

  /**
   * @public
   * <p>The ID of the client to request the token from.</p>
   */
  clientId?: string;
}

/**
 * @public
 */
export interface ExchangeCodeForTokenRequest {
  /**
   * @public
   * <p>The third-party provider for the token. The only valid value is <code>figma</code>.</p>
   */
  provider: TokenProviders | string | undefined;

  /**
   * @public
   * <p>Describes the configuration of the request.</p>
   */
  request: ExchangeCodeForTokenRequestBody | undefined;
}

/**
 * @public
 */
export interface ExchangeCodeForTokenResponse {
  /**
   * @public
   * <p>The access token.</p>
   */
  accessToken: string | undefined;

  /**
   * @public
   * <p>The date and time when the new access token expires.</p>
   */
  expiresIn: number | undefined;

  /**
   * @public
   * <p>The token to use to refresh a previously issued access token that might have
   *       expired.</p>
   */
  refreshToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FixedPosition = {
  FIRST: "first",
} as const;

/**
 * @public
 */
export type FixedPosition = (typeof FixedPosition)[keyof typeof FixedPosition];

/**
 * @public
 * <p>Describes the field position.</p>
 */
export type FieldPosition =
  | FieldPosition.BelowMember
  | FieldPosition.FixedMember
  | FieldPosition.RightOfMember
  | FieldPosition.$UnknownMember;

/**
 * @public
 */
export namespace FieldPosition {
  /**
   * @public
   * <p>The field position is fixed and doesn't change in relation to other fields.</p>
   */
  export interface FixedMember {
    fixed: FixedPosition | string;
    rightOf?: never;
    below?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The field position is to the right of the field specified by the string.</p>
   */
  export interface RightOfMember {
    fixed?: never;
    rightOf: string;
    below?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The field position is below the field specified by the string.</p>
   */
  export interface BelowMember {
    fixed?: never;
    rightOf?: never;
    below: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fixed?: never;
    rightOf?: never;
    below?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fixed: (value: FixedPosition | string) => T;
    rightOf: (value: string) => T;
    below: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FieldPosition, visitor: Visitor<T>): T => {
    if (value.fixed !== undefined) return visitor.fixed(value.fixed);
    if (value.rightOf !== undefined) return visitor.rightOf(value.rightOf);
    if (value.below !== undefined) return visitor.below(value.below);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Describes the configuration for a button UI element that is a part of a form.</p>
 */
export interface FormButton {
  /**
   * @public
   * <p>Specifies whether the button is visible on the form.</p>
   */
  excluded?: boolean;

  /**
   * @public
   * <p>Describes the button's properties.</p>
   */
  children?: string;

  /**
   * @public
   * <p>The position of the button.</p>
   */
  position?: FieldPosition;
}

/**
 * @public
 * @enum
 */
export const FormButtonsPosition = {
  BOTTOM: "bottom",
  TOP: "top",
  TOP_AND_BOTTOM: "top_and_bottom",
} as const;

/**
 * @public
 */
export type FormButtonsPosition = (typeof FormButtonsPosition)[keyof typeof FormButtonsPosition];

/**
 * @public
 * <p>Describes the call to action button configuration for the form.</p>
 */
export interface FormCTA {
  /**
   * @public
   * <p>The position of the button.</p>
   */
  position?: FormButtonsPosition | string;

  /**
   * @public
   * <p>Displays a clear button.</p>
   */
  clear?: FormButton;

  /**
   * @public
   * <p>Displays a cancel button.</p>
   */
  cancel?: FormButton;

  /**
   * @public
   * <p>Displays a submit button.</p>
   */
  submit?: FormButton;
}

/**
 * @public
 * @enum
 */
export const FormDataSourceType = {
  /**
   * Will use passed in hooks to use when creating a form from scratch
   */
  CUSTOM: "Custom",
  /**
   * Will use a provided Amplify DataStore enabled API
   */
  DATASTORE: "DataStore",
} as const;

/**
 * @public
 */
export type FormDataSourceType = (typeof FormDataSourceType)[keyof typeof FormDataSourceType];

/**
 * @public
 * <p>Describes the data type configuration for the data source associated with a form.</p>
 */
export interface FormDataTypeConfig {
  /**
   * @public
   * <p>The data source type, either an Amplify DataStore model or a custom data type.</p>
   */
  dataSourceType: FormDataSourceType | string | undefined;

  /**
   * @public
   * <p>The unique name of the data type you are using as the data source for the form.</p>
   */
  dataTypeName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageAccessLevel = {
  PRIVATE: "private",
  PROTECTED: "protected",
  PUBLIC: "public",
} as const;

/**
 * @public
 */
export type StorageAccessLevel = (typeof StorageAccessLevel)[keyof typeof StorageAccessLevel];

/**
 * @public
 * <p>Describes the configuration for the file uploader field.</p>
 */
export interface FileUploaderFieldConfig {
  /**
   * @public
   * <p>The access level to assign to the uploaded files in the Amazon S3 bucket where
   *       they are stored. The valid values for this property are <code>private</code>,
   *         <code>protected</code>, or <code>public</code>. For detailed information about the
   *       permissions associated with each access level, see <a href="https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js/">File access
   *         levels</a> in the <i>Amplify documentation</i>.</p>
   */
  accessLevel: StorageAccessLevel | string | undefined;

  /**
   * @public
   * <p>The file types that are allowed to be uploaded by the file uploader. Provide this
   *       information in an array of strings specifying the valid file extensions.</p>
   */
  acceptedFileTypes: string[] | undefined;

  /**
   * @public
   * <p>Specifies whether to display or hide the image preview after selecting a file for upload.
   *       The default value is <code>true</code> to display the image preview.</p>
   */
  showThumbnails?: boolean;

  /**
   * @public
   * <p>Allows the file upload operation to be paused and resumed. The default value is
   *         <code>false</code>.</p>
   *          <p>When <code>isResumable</code> is set to <code>true</code>, the file uploader uses a
   *       multipart upload to break the files into chunks before upload. The progress of the upload
   *       isn't continuous, because the file uploader uploads a chunk at a time.</p>
   */
  isResumable?: boolean;

  /**
   * @public
   * <p>Specifies the maximum number of files that can be selected to upload. The default value is
   *       an unlimited number of files.</p>
   */
  maxFileCount?: number;

  /**
   * @public
   * <p>The maximum file size in bytes that the file uploader will accept. The default value is an
   *       unlimited file size.</p>
   */
  maxSize?: number;
}

/**
 * @public
 * <p>Represents the data binding configuration for a specific property using data stored in
 *         Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to
 *       data stored in an Amplify DataStore model.</p>
 */
export interface FormInputBindingPropertiesValueProperties {
  /**
   * @public
   * <p>An Amplify DataStore model.</p>
   */
  model?: string;
}

/**
 * @public
 * <p>Represents the data binding configuration for a form's input fields at runtime.You can use
 *         <code>FormInputBindingPropertiesValue</code> to add exposed properties to a form to allow
 *       different values to be entered when a form is reused in different places in an app.</p>
 */
export interface FormInputBindingPropertiesValue {
  /**
   * @public
   * <p>The property type.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Describes the properties to customize with data at runtime.</p>
   */
  bindingProperties?: FormInputBindingPropertiesValueProperties;
}

/**
 * @public
 * <p>Associates a form property to a binding property. This enables exposed properties on the
 *       top level form to propagate data to the form's property values.</p>
 */
export interface FormInputValuePropertyBindingProperties {
  /**
   * @public
   * <p>The form property to bind to the data field.</p>
   */
  property: string | undefined;

  /**
   * @public
   * <p>The data field to bind the property to.</p>
   */
  field?: string;
}

/**
 * @public
 * <p>Describes the validation configuration for a field.</p>
 */
export interface FieldValidationConfiguration {
  /**
   * @public
   * <p>The validation to perform on an object type.<code/>
   *          </p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The validation to perform on a string value.</p>
   */
  strValues?: string[];

  /**
   * @public
   * <p>The validation to perform on a number value.</p>
   */
  numValues?: number[];

  /**
   * @public
   * <p>The validation message to display.</p>
   */
  validationMessage?: string;
}

/**
 * @public
 * @enum
 */
export const FormActionType = {
  CREATE: "create",
  UPDATE: "update",
} as const;

/**
 * @public
 */
export type FormActionType = (typeof FormActionType)[keyof typeof FormActionType];

/**
 * @public
 * @enum
 */
export const LabelDecorator = {
  NONE: "none",
  OPTIONAL: "optional",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type LabelDecorator = (typeof LabelDecorator)[keyof typeof LabelDecorator];

/**
 * @public
 * <p>Stores the configuration information for a visual helper element for a form. A sectional
 *       element can be a header, a text block, or a divider. These elements are static and not
 *       associated with any data.</p>
 */
export interface SectionalElement {
  /**
   * @public
   * <p>The type of sectional element. Valid values are <code>Heading</code>, <code>Text</code>,
   *       and <code>Divider</code>.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Specifies the position of the text in a field for a <code>Text</code> sectional
   *       element.</p>
   */
  position?: FieldPosition;

  /**
   * @public
   * <p>The text for a <code>Text</code> sectional element.</p>
   */
  text?: string;

  /**
   * @public
   * <p>Specifies the size of the font for a <code>Heading</code> sectional element. Valid values
   *       are <code>1 | 2 | 3 | 4 | 5 | 6</code>.</p>
   */
  level?: number;

  /**
   * @public
   * <p>Specifies the orientation for a <code>Divider</code> sectional element. Valid values are
   *         <code>horizontal</code> or <code>vertical</code>.</p>
   */
  orientation?: string;

  /**
   * @public
   * <p>Excludes a sectional element that was generated by default for a specified data
   *       model.</p>
   */
  excluded?: boolean;
}

/**
 * @public
 * <p>Describes the configuration settings for the form's style properties.</p>
 */
export type FormStyleConfig =
  | FormStyleConfig.TokenReferenceMember
  | FormStyleConfig.ValueMember
  | FormStyleConfig.$UnknownMember;

/**
 * @public
 */
export namespace FormStyleConfig {
  /**
   * @public
   * <p>A reference to a design token to use to bind the form's style properties to an existing
   *       theme.</p>
   */
  export interface TokenReferenceMember {
    tokenReference: string;
    value?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The value of the style setting.</p>
   */
  export interface ValueMember {
    tokenReference?: never;
    value: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tokenReference?: never;
    value?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tokenReference: (value: string) => T;
    value: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FormStyleConfig, visitor: Visitor<T>): T => {
    if (value.tokenReference !== undefined) return visitor.tokenReference(value.tokenReference);
    if (value.value !== undefined) return visitor.value(value.value);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Describes the configuration for the form's style.</p>
 */
export interface FormStyle {
  /**
   * @public
   * <p>The spacing for the horizontal gap.</p>
   */
  horizontalGap?: FormStyleConfig;

  /**
   * @public
   * <p>The spacing for the vertical gap.</p>
   */
  verticalGap?: FormStyleConfig;

  /**
   * @public
   * <p>The size of the outer padding for the form.</p>
   */
  outerPadding?: FormStyleConfig;
}

/**
 * @public
 */
export interface DeleteFormRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the form to delete.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the form to delete.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportFormsRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app to export forms to.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetFormRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the form.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListFormsRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of forms to retrieve.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Describes the basic information about a form.</p>
 */
export interface FormSummary {
  /**
   * @public
   * <p>The unique ID for the app associated with the form summary.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The form's data source type.</p>
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The type of operation to perform on the form.</p>
   */
  formActionType: FormActionType | string | undefined;

  /**
   * @public
   * <p>The ID of the form.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the form.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListFormsResponse {
  /**
   * @public
   * <p>The list of forms for the Amplify app.</p>
   */
  entities: FormSummary[] | undefined;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetMetadataRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataResponse {
  /**
   * @public
   * <p>Represents the configuration settings for the features metadata.</p>
   */
  features: Record<string, string> | undefined;
}

/**
 * @public
 * <p>You don't have permission to perform this operation.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * @public
 * <p>Stores the metadata information about a feature on a form.</p>
 */
export interface PutMetadataFlagBody {
  /**
   * @public
   * <p>The new information to store.</p>
   */
  newValue: string | undefined;
}

/**
 * @public
 */
export interface PutMetadataFlagRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the feature associated with the metadata.</p>
   */
  featureName: string | undefined;

  /**
   * @public
   * <p>The metadata information to store.</p>
   */
  body: PutMetadataFlagBody | undefined;
}

/**
 * @public
 * <p>Describes a refresh token.</p>
 */
export interface RefreshTokenRequestBody {
  /**
   * @public
   * <p>The token to use to refresh a previously issued access token that might have
   *       expired.</p>
   */
  token: string | undefined;

  /**
   * @public
   * <p>The ID of the client to request the token from.</p>
   */
  clientId?: string;
}

/**
 * @public
 */
export interface RefreshTokenRequest {
  /**
   * @public
   * <p>The third-party provider for the token. The only valid value is <code>figma</code>.</p>
   */
  provider: TokenProviders | string | undefined;

  /**
   * @public
   * <p>Information about the refresh token request.</p>
   */
  refreshTokenBody: RefreshTokenRequestBody | undefined;
}

/**
 * @public
 */
export interface RefreshTokenResponse {
  /**
   * @public
   * <p>The access token.</p>
   */
  accessToken: string | undefined;

  /**
   * @public
   * <p>The date and time when the new access token expires.</p>
   */
  expiresIn: number | undefined;
}

/**
 * @public
 */
export interface DeleteThemeRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the theme to
   *       delete.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the theme to delete.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportThemesRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app to export the themes to.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetThemeRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID for the theme.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of theme results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Describes the basic information about a theme.</p>
 */
export interface ThemeSummary {
  /**
   * @public
   * <p>The unique ID for the app associated with the theme summary.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The ID of the theme.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the theme.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * @public
   * <p>The list of themes for the Amplify app.</p>
   */
  entities: ThemeSummary[] | undefined;

  /**
   * @public
   * <p>The pagination token that's returned if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Describes the configuration for an input field on a form. Use
 *         <code>FormInputValueProperty</code> to specify the values to render or bind by
 *       default.</p>
 */
export interface FormInputValueProperty {
  /**
   * @public
   * <p>The value to assign to the input field.</p>
   */
  value?: string;

  /**
   * @public
   * <p>The information to bind fields to data at runtime.</p>
   */
  bindingProperties?: FormInputValuePropertyBindingProperties;

  /**
   * @public
   * <p>A list of form properties to concatenate to create the value to assign to this field
   *       property.</p>
   */
  concat?: FormInputValueProperty[];
}

/**
 * @public
 * <p>Describes the configuration of a theme's properties.</p>
 */
export interface ThemeValue {
  /**
   * @public
   * <p>The value of a theme property.</p>
   */
  value?: string;

  /**
   * @public
   * <p>A list of key-value pairs that define the theme's properties.</p>
   */
  children?: ThemeValues[];
}

/**
 * @public
 * <p>A key-value pair that defines a property of a theme.</p>
 */
export interface ThemeValues {
  /**
   * @public
   * <p>The name of the property.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The value of the property.</p>
   */
  value?: ThemeValue;
}

/**
 * @public
 * <p>Stores information for generating Amplify DataStore queries. Use a
 *         <code>Predicate</code> to retrieve a subset of the data in a collection.</p>
 */
export interface Predicate {
  /**
   * @public
   * <p>A list of predicates to combine logically.</p>
   */
  or?: Predicate[];

  /**
   * @public
   * <p>A list of predicates to combine logically.</p>
   */
  and?: Predicate[];

  /**
   * @public
   * <p>The field to query.</p>
   */
  field?: string;

  /**
   * @public
   * <p>The operator to use to perform the evaluation.</p>
   */
  operator?: string;

  /**
   * @public
   * <p>The value to use when performing the evaluation.</p>
   */
  operand?: string;

  /**
   * @public
   * <p>The type of value to use when performing the evaluation.</p>
   */
  operandType?: string;
}

/**
 * @public
 * <p>Represents the data binding configuration for a specific property using data stored in
 *         Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to
 *       data stored in an Amazon S3 bucket, an Amplify DataStore model or an
 *       authenticated user attribute.</p>
 */
export interface ComponentBindingPropertiesValueProperties {
  /**
   * @public
   * <p>An Amplify DataStore model.</p>
   */
  model?: string;

  /**
   * @public
   * <p>The field to bind the data to.</p>
   */
  field?: string;

  /**
   * @public
   * <p>A list of predicates for binding a component's properties to data.</p>
   */
  predicates?: Predicate[];

  /**
   * @public
   * <p>An authenticated user attribute.</p>
   */
  userAttribute?: string;

  /**
   * @public
   * <p>An Amazon S3 bucket.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The storage key for an Amazon S3 bucket.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The default value to assign to the property.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>The name of a component slot.</p>
   */
  slotName?: string;
}

/**
 * @public
 * <p>Describes the configuration for binding a component's properties to data.</p>
 */
export interface ComponentDataConfiguration {
  /**
   * @public
   * <p>The name of the data model to use to bind data to a component.</p>
   */
  model: string | undefined;

  /**
   * @public
   * <p>Describes how to sort the component's properties.</p>
   */
  sort?: SortProperty[];

  /**
   * @public
   * <p>Represents the conditional logic to use when binding data to a component. Use this
   *       property to retrieve only a subset of the data in a collection.</p>
   */
  predicate?: Predicate;

  /**
   * @public
   * <p>A list of IDs to use to bind data to a component. Use this property to bind specifically
   *       chosen data, rather than data retrieved from a query.</p>
   */
  identifiers?: string[];
}

/**
 * @public
 * <p>Describes the configuration for all of a component's properties. Use
 *         <code>ComponentProperty</code> to specify the values to render or bind by default.</p>
 */
export interface ComponentProperty {
  /**
   * @public
   * <p>The value to assign to the component property.</p>
   */
  value?: string;

  /**
   * @public
   * <p>The information to bind the component property to data at runtime.</p>
   */
  bindingProperties?: ComponentPropertyBindingProperties;

  /**
   * @public
   * <p>The information to bind the component property to data at runtime. Use this for collection
   *       components.</p>
   */
  collectionBindingProperties?: ComponentPropertyBindingProperties;

  /**
   * @public
   * <p>The default value to assign to the component property.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>The data model to use to assign a value to the component property.</p>
   */
  model?: string;

  /**
   * @public
   * <p>The information to bind the component property to form data.</p>
   */
  bindings?: Record<string, FormBindingElement>;

  /**
   * @public
   * <p>An event that occurs in your app. Use this for workflow data binding.</p>
   */
  event?: string;

  /**
   * @public
   * <p>An authenticated user attribute to use to assign a value to the component property.</p>
   */
  userAttribute?: string;

  /**
   * @public
   * <p>A list of component properties to concatenate to create the value to assign to this
   *       component property.</p>
   */
  concat?: ComponentProperty[];

  /**
   * @public
   * <p>The conditional expression to use to assign a value to the component property.</p>
   */
  condition?: ComponentConditionProperty;

  /**
   * @public
   * <p>Specifies whether the user configured the property in Amplify Studio after
   *       importing it.</p>
   */
  configured?: boolean;

  /**
   * @public
   * <p>The component type.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The default value assigned to the property when the component is imported into an
   *       app.</p>
   */
  importedValue?: string;

  /**
   * @public
   * <p>The name of the component that is affected by an event.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The name of the component's property that is affected by an event.</p>
   */
  property?: string;
}

/**
 * @public
 * <p>Associates a complex object with a display value. Use <code>ValueMapping</code> to store
 *       how to represent complex objects when they are displayed.</p>
 */
export interface ValueMapping {
  /**
   * @public
   * <p>The value to display for the complex object.</p>
   */
  displayValue?: FormInputValueProperty;

  /**
   * @public
   * <p>The complex object.</p>
   */
  value: FormInputValueProperty | undefined;
}

/**
 * @public
 * <p>Represents the data binding configuration for a component at runtime. You can use
 *         <code>ComponentBindingPropertiesValue</code> to add exposed properties to a component to
 *       allow different values to be entered when a component is reused in different places in an
 *       app.</p>
 */
export interface ComponentBindingPropertiesValue {
  /**
   * @public
   * <p>The property type.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Describes the properties to customize with data at runtime.</p>
   */
  bindingProperties?: ComponentBindingPropertiesValueProperties;

  /**
   * @public
   * <p>The default value of the property.</p>
   */
  defaultValue?: string;
}

/**
 * @public
 * <p>Represents all of the information that is required to create a theme.</p>
 */
export interface CreateThemeData {
  /**
   * @public
   * <p>The name of the theme.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that deﬁnes the properties of the theme.</p>
   */
  values: ThemeValues[] | undefined;

  /**
   * @public
   * <p>Describes the properties that can be overriden to customize an instance of the
   *       theme.</p>
   */
  overrides?: ThemeValues[];

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the theme data.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A theme is a collection of style settings that apply globally to the components associated
 *       with an Amplify application.</p>
 */
export interface Theme {
  /**
   * @public
   * <p>The unique ID for the Amplify app associated with the theme.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the theme.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time that the theme was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time that the theme was modified.</p>
   */
  modifiedAt?: Date;

  /**
   * @public
   * <p>A list of key-value pairs that defines the properties of the theme.</p>
   */
  values: ThemeValues[] | undefined;

  /**
   * @public
   * <p>Describes the properties that can be overriden to customize a theme.</p>
   */
  overrides?: ThemeValues[];

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the theme.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Saves the data binding information for a theme.</p>
 */
export interface UpdateThemeData {
  /**
   * @public
   * <p>The unique ID of the theme to update.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the theme to update.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A list of key-value pairs that define the theme's properties.</p>
   */
  values: ThemeValues[] | undefined;

  /**
   * @public
   * <p>Describes the properties that can be overriden to customize the theme.</p>
   */
  overrides?: ThemeValues[];
}

/**
 * @public
 * <p>Represents the state configuration when an action modifies a property of another element
 *       within the same component.</p>
 */
export interface MutationActionSetStateParameter {
  /**
   * @public
   * <p>The name of the component that is being modified.</p>
   */
  componentName: string | undefined;

  /**
   * @public
   * <p>The name of the component property to apply the state configuration to.</p>
   */
  property: string | undefined;

  /**
   * @public
   * <p>The state configuration to assign to the property.</p>
   */
  set: ComponentProperty | undefined;
}

/**
 * @public
 * <p>Represents a conditional expression to set a component property. Use
 *         <code>ComponentConditionProperty</code> to set a property to different values conditionally,
 *       based on the value of another property.</p>
 */
export interface ComponentConditionProperty {
  /**
   * @public
   * <p>The name of the conditional property.</p>
   */
  property?: string;

  /**
   * @public
   * <p>The name of a field. Specify this when the property is a data model.</p>
   */
  field?: string;

  /**
   * @public
   * <p>The operator to use to perform the evaluation, such as <code>eq</code> to represent
   *       equals.</p>
   */
  operator?: string;

  /**
   * @public
   * <p>The value of the property to evaluate.</p>
   */
  operand?: string;

  /**
   * @public
   * <p>The value to assign to the property if the condition is met.</p>
   */
  then?: ComponentProperty;

  /**
   * @public
   * <p>The value to assign to the property if the condition is not met.</p>
   */
  else?: ComponentProperty;

  /**
   * @public
   * <p>The type of the property to evaluate.</p>
   */
  operandType?: string;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the theme.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Represents the configuration of the theme to create.</p>
   */
  themeToCreate: CreateThemeData | undefined;
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * @public
   * <p>Describes the configuration of the new theme.</p>
   */
  entity?: Theme;
}

/**
 * @public
 */
export interface GetThemeResponse {
  /**
   * @public
   * <p>Represents the configuration settings for the theme.</p>
   */
  theme?: Theme;
}

/**
 * @public
 */
export interface UpdateThemeRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID for the theme.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The configuration of the updated theme.</p>
   */
  updatedTheme: UpdateThemeData | undefined;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * @public
   * <p>Describes the configuration of the updated theme.</p>
   */
  entity?: Theme;
}

/**
 * @public
 * <p>Represents the data binding configuration for a value map.</p>
 */
export interface ValueMappings {
  /**
   * @public
   * <p>The value and display value pairs.</p>
   */
  values: ValueMapping[] | undefined;

  /**
   * @public
   * <p>The information to bind fields to data at runtime.</p>
   */
  bindingProperties?: Record<string, FormInputBindingPropertiesValue>;
}

/**
 * @public
 */
export interface ExportThemesResponse {
  /**
   * @public
   * <p>Represents the configuration of the exported themes.</p>
   */
  entities: Theme[] | undefined;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Describes the configuration for the default input values to display for a field.</p>
 */
export interface FieldInputConfig {
  /**
   * @public
   * <p>The input type for the field. </p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Specifies a field that requires input.</p>
   */
  required?: boolean;

  /**
   * @public
   * <p>Specifies a read only field.</p>
   */
  readOnly?: boolean;

  /**
   * @public
   * <p>The text to display as a placeholder for the field.</p>
   */
  placeholder?: string;

  /**
   * @public
   * <p>The default value for the field.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>The text to display to describe the field.</p>
   */
  descriptiveText?: string;

  /**
   * @public
   * <p>Specifies whether a field has a default value.</p>
   */
  defaultChecked?: boolean;

  /**
   * @public
   * <p>The default country code for a phone number.</p>
   */
  defaultCountryCode?: string;

  /**
   * @public
   * <p>The information to use to customize the input fields with data at runtime.</p>
   */
  valueMappings?: ValueMappings;

  /**
   * @public
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The minimum value to display for the field.</p>
   */
  minValue?: number;

  /**
   * @public
   * <p>The maximum value to display for the field.</p>
   */
  maxValue?: number;

  /**
   * @public
   * <p>The stepping increment for a numeric value in a field.</p>
   */
  step?: number;

  /**
   * @public
   * <p>The value for the field.</p>
   */
  value?: string;

  /**
   * @public
   * <p>Specifies whether to render the field as an array. This property is ignored if the
   *         <code>dataSourceType</code> for the form is a Data Store.</p>
   */
  isArray?: boolean;

  /**
   * @public
   * <p>The configuration for the file uploader field.</p>
   */
  fileUploaderConfig?: FileUploaderFieldConfig;
}

/**
 * @public
 * <p>Describes the configuration information for a field in a table.</p>
 */
export interface FieldConfig {
  /**
   * @public
   * <p>The label for the field.</p>
   */
  label?: string;

  /**
   * @public
   * <p>Specifies the field position.</p>
   */
  position?: FieldPosition;

  /**
   * @public
   * <p>Specifies whether to hide a field.</p>
   */
  excluded?: boolean;

  /**
   * @public
   * <p>Describes the configuration for the default input value to display for a field.</p>
   */
  inputType?: FieldInputConfig;

  /**
   * @public
   * <p>The validations to perform on the value in the field.</p>
   */
  validations?: FieldValidationConfiguration[];
}

/**
 * @public
 * <p>Represents all of the information that is required to create a form.</p>
 */
export interface CreateFormData {
  /**
   * @public
   * <p>The name of the form.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of data source to use to create the form.</p>
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * @public
   * <p>Specifies whether to perform a create or update action on the form.</p>
   */
  formActionType: FormActionType | string | undefined;

  /**
   * @public
   * <p>The configuration information for the form's fields.</p>
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * @public
   * <p>The configuration for the form's style.</p>
   */
  style: FormStyle | undefined;

  /**
   * @public
   * <p>The configuration information for the visual helper elements for the form. These elements
   *       are not associated with any data.</p>
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * @public
   * <p>The schema version of the form.</p>
   */
  schemaVersion: string | undefined;

  /**
   * @public
   * <p>The <code>FormCTA</code> object that stores the call to action configuration for the
   *       form.</p>
   */
  cta?: FormCTA;

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the form data.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies an icon or decoration to display on the form.</p>
   */
  labelDecorator?: LabelDecorator | string;
}

/**
 * @public
 * <p>Contains the configuration settings for a <code>Form</code> user interface (UI) element
 *       for an Amplify app. A form is a component you can add to your project by specifying a data
 *       source as the default configuration for the form.</p>
 */
export interface Form {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the form.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the form.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the form.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The operation to perform on the specified form.</p>
   */
  formActionType: FormActionType | string | undefined;

  /**
   * @public
   * <p>Stores the configuration for the form's style.</p>
   */
  style: FormStyle | undefined;

  /**
   * @public
   * <p>The type of data source to use to create the form.</p>
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * @public
   * <p>Stores the information about the form's fields.</p>
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * @public
   * <p>Stores the visual helper elements for the form that are not associated with any
   *       data.</p>
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * @public
   * <p>The schema version of the form when it was imported.</p>
   */
  schemaVersion: string | undefined;

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the form.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Stores the call to action configuration for the form.</p>
   */
  cta?: FormCTA;

  /**
   * @public
   * <p>Specifies an icon or decoration to display on the form.</p>
   */
  labelDecorator?: LabelDecorator | string;
}

/**
 * @public
 * <p>Updates and saves all of the information about a form, based on form ID.</p>
 */
export interface UpdateFormData {
  /**
   * @public
   * <p>The name of the form.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type of data source to use to create the form.</p>
   */
  dataType?: FormDataTypeConfig;

  /**
   * @public
   * <p>Specifies whether to perform a create or update action on the form.</p>
   */
  formActionType?: FormActionType | string;

  /**
   * @public
   * <p>The configuration information for the form's fields.</p>
   */
  fields?: Record<string, FieldConfig>;

  /**
   * @public
   * <p>The configuration for the form's style.</p>
   */
  style?: FormStyle;

  /**
   * @public
   * <p>The configuration information for the visual helper elements for the form. These elements
   *       are not associated with any data.</p>
   */
  sectionalElements?: Record<string, SectionalElement>;

  /**
   * @public
   * <p>The schema version of the form.</p>
   */
  schemaVersion?: string;

  /**
   * @public
   * <p>The <code>FormCTA</code> object that stores the call to action configuration for the
   *       form.</p>
   */
  cta?: FormCTA;

  /**
   * @public
   * <p>Specifies an icon or decoration to display on the form.</p>
   */
  labelDecorator?: LabelDecorator | string;
}

/**
 * @public
 */
export interface CreateFormRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app to associate with the form.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Represents the configuration of the form to create.</p>
   */
  formToCreate: CreateFormData | undefined;
}

/**
 * @public
 */
export interface CreateFormResponse {
  /**
   * @public
   * <p>Describes the configuration of the new form.</p>
   */
  entity?: Form;
}

/**
 * @public
 */
export interface GetFormResponse {
  /**
   * @public
   * <p>Represents the configuration settings for the form.</p>
   */
  form?: Form;
}

/**
 * @public
 */
export interface UpdateFormRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID for the form.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The request accepts the following data in JSON format.</p>
   */
  updatedForm: UpdateFormData | undefined;
}

/**
 * @public
 */
export interface UpdateFormResponse {
  /**
   * @public
   * <p>Describes the configuration of the updated form.</p>
   */
  entity?: Form;
}

/**
 * @public
 */
export interface ExportFormsResponse {
  /**
   * @public
   * <p>Represents the configuration of the exported forms.</p>
   */
  entities: Form[] | undefined;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the event action configuration for an element of a <code>Component</code> or
 *         <code>ComponentChild</code>. Use for the workflow feature in Amplify Studio
 *       that allows you to bind events and actions to components. <code>ActionParameters</code>
 *       defines the action that is performed when an event occurs on the component.</p>
 */
export interface ActionParameters {
  /**
   * @public
   * <p>The type of navigation action. Valid values are <code>url</code> and <code>anchor</code>.
   *       This value is required for a navigation action.</p>
   */
  type?: ComponentProperty;

  /**
   * @public
   * <p>The URL to the location to open. Specify this value for a navigation action.</p>
   */
  url?: ComponentProperty;

  /**
   * @public
   * <p>The HTML anchor link to the location to open. Specify this value for a navigation
   *       action.</p>
   */
  anchor?: ComponentProperty;

  /**
   * @public
   * <p>The element within the same component to modify when the action occurs.</p>
   */
  target?: ComponentProperty;

  /**
   * @public
   * <p>Specifies whether the user should be signed out globally. Specify this value for an auth
   *       sign out action.</p>
   */
  global?: ComponentProperty;

  /**
   * @public
   * <p>The name of the data model. Use when the action performs an operation on an Amplify DataStore model.</p>
   */
  model?: string;

  /**
   * @public
   * <p>The unique ID of the component that the <code>ActionParameters</code> apply to.</p>
   */
  id?: ComponentProperty;

  /**
   * @public
   * <p>A dictionary of key-value pairs mapping Amplify Studio properties to fields
   *       in a data model. Use when the action performs an operation on an Amplify
   *       DataStore model.</p>
   */
  fields?: Record<string, ComponentProperty>;

  /**
   * @public
   * <p>A key-value pair that specifies the state property name and its initial value.</p>
   */
  state?: MutationActionSetStateParameter;
}

/**
 * @public
 * <p>Describes the configuration of an event. You can bind an event and a corresponding action
 *       to a <code>Component</code> or a <code>ComponentChild</code>. A button click is an example of
 *       an event. </p>
 */
export interface ComponentEvent {
  /**
   * @public
   * <p>The action to perform when a specific event is raised.</p>
   */
  action?: string;

  /**
   * @public
   * <p>Describes information about the action.</p>
   */
  parameters?: ActionParameters;

  /**
   * @public
   * <p>Binds an event to an action on a component. When you specify a <code>bindingEvent</code>,
   *       the event is called when the action is performed.</p>
   */
  bindingEvent?: string;
}

/**
 * @public
 * <p>A nested UI configuration within a parent <code>Component</code>.</p>
 */
export interface ComponentChild {
  /**
   * @public
   * <p>The type of the child component. </p>
   */
  componentType: string | undefined;

  /**
   * @public
   * <p>The name of the child component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Describes the properties of the child component. You can't specify <code>tags</code> as a
   *       valid property for <code>properties</code>.</p>
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * @public
   * <p>The list of <code>ComponentChild</code> instances for this component.</p>
   */
  children?: ComponentChild[];

  /**
   * @public
   * <p>Describes the events that can be raised on the child component. Use for the workflow
   *       feature in Amplify Studio that allows you to bind events and actions to
   *       components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * @public
   * <p>The unique ID of the child component in its original source system, such as Figma.</p>
   */
  sourceId?: string;
}

/**
 * @public
 * <p>Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use
 *         <code>ComponentChild</code> to configure an instance of a <code>Component</code>. A
 *         <code>ComponentChild</code> instance inherits the configuration of the main
 *         <code>Component</code>.</p>
 */
export interface Component {
  /**
   * @public
   * <p>The unique ID of the Amplify app associated with the component.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   */
  sourceId?: string;

  /**
   * @public
   * <p>The unique ID of the component.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the component. This can be an Amplify custom UI component or
   *       another custom component.</p>
   */
  componentType: string | undefined;

  /**
   * @public
   * <p>Describes the component's properties. You can't specify <code>tags</code> as a valid
   *       property for <code>properties</code>.</p>
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * @public
   * <p>A list of the component's <code>ComponentChild</code> instances.</p>
   */
  children?: ComponentChild[];

  /**
   * @public
   * <p>A list of the component's variants. A variant is a unique style configuration of a main
   *       component.</p>
   */
  variants: ComponentVariant[] | undefined;

  /**
   * @public
   * <p>Describes the component's properties that can be overriden in a customized instance of the
   *       component. You can't specify <code>tags</code> as a valid property for
   *       <code>overrides</code>.</p>
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * @public
   * <p>The information to connect a component's properties to data at runtime. You can't specify
   *         <code>tags</code> as a valid property for <code>bindingProperties</code>.</p>
   *          <p/>
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * @public
   * <p>The data binding configuration for the component's properties. Use this for a collection
   *       component. You can't specify <code>tags</code> as a valid property for
   *         <code>collectionProperties</code>.</p>
   */
  collectionProperties?: Record<string, ComponentDataConfiguration>;

  /**
   * @public
   * <p>The time that the component was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time that the component was modified.</p>
   */
  modifiedAt?: Date;

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Describes the events that can be raised on the component. Use for the workflow feature in
   *         Amplify Studio that allows you to bind events and actions to
   *       components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * @public
   * <p>The schema version of the component when it was imported.</p>
   */
  schemaVersion?: string;
}

/**
 * @public
 * <p>Represents all of the information that is required to create a component.</p>
 */
export interface CreateComponentData {
  /**
   * @public
   * <p>The name of the component</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   */
  sourceId?: string;

  /**
   * @public
   * <p>The component type. This can be an Amplify custom UI component or another
   *       custom component.</p>
   */
  componentType: string | undefined;

  /**
   * @public
   * <p>Describes the component's properties.</p>
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * @public
   * <p>A list of child components that are instances of the main component.</p>
   */
  children?: ComponentChild[];

  /**
   * @public
   * <p>A list of the unique variants of this component.</p>
   */
  variants: ComponentVariant[] | undefined;

  /**
   * @public
   * <p>Describes the component properties that can be overriden to customize an instance of the
   *       component.</p>
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * @public
   * <p>The data binding information for the component's properties.</p>
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * @public
   * <p>The data binding configuration for customizing a component's properties. Use this for a
   *       collection component.</p>
   */
  collectionProperties?: Record<string, ComponentDataConfiguration>;

  /**
   * @public
   * <p>One or more key-value pairs to use when tagging the component data.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * @public
   * <p>The schema version of the component when it was imported.</p>
   */
  schemaVersion?: string;
}

/**
 * @public
 * <p>Updates and saves all of the information about a component, based on component ID.</p>
 */
export interface UpdateComponentData {
  /**
   * @public
   * <p>The unique ID of the component to update.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the component to update.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   */
  sourceId?: string;

  /**
   * @public
   * <p>The type of the component. This can be an Amplify custom UI component or
   *       another custom component.</p>
   */
  componentType?: string;

  /**
   * @public
   * <p>Describes the component's properties.</p>
   */
  properties?: Record<string, ComponentProperty>;

  /**
   * @public
   * <p>The components that are instances of the main component.</p>
   */
  children?: ComponentChild[];

  /**
   * @public
   * <p>A list of the unique variants of the main component being updated.</p>
   */
  variants?: ComponentVariant[];

  /**
   * @public
   * <p>Describes the properties that can be overriden to customize the component.</p>
   */
  overrides?: Record<string, Record<string, string>>;

  /**
   * @public
   * <p>The data binding information for the component's properties.</p>
   */
  bindingProperties?: Record<string, ComponentBindingPropertiesValue>;

  /**
   * @public
   * <p>The configuration for binding a component's properties to a data model. Use this for a
   *       collection component.</p>
   */
  collectionProperties?: Record<string, ComponentDataConfiguration>;

  /**
   * @public
   * <p>The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * @public
   * <p>The schema version of the component when it was imported.</p>
   */
  schemaVersion?: string;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * @public
   * <p>The unique ID of the Amplify app to associate with the component.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Represents the configuration of the component to create.</p>
   */
  componentToCreate: CreateComponentData | undefined;
}

/**
 * @public
 */
export interface CreateComponentResponse {
  /**
   * @public
   * <p>Describes the configuration of the new component.</p>
   */
  entity?: Component;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * @public
   * <p>Represents the configuration settings for the component.</p>
   */
  component?: Component;
}

/**
 * @public
 */
export interface UpdateComponentRequest {
  /**
   * @public
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The unique ID for the component.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The configuration of the updated component.</p>
   */
  updatedComponent: UpdateComponentData | undefined;
}

/**
 * @public
 */
export interface UpdateComponentResponse {
  /**
   * @public
   * <p>Describes the configuration of the updated component.</p>
   */
  entity?: Component;
}

/**
 * @public
 */
export interface ExportComponentsResponse {
  /**
   * @public
   * <p>Represents the configuration of the exported components.</p>
   */
  entities: Component[] | undefined;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const ExchangeCodeForTokenRequestBodyFilterSensitiveLog = (obj: ExchangeCodeForTokenRequestBody): any => ({
  ...obj,
  ...(obj.code && { code: SENSITIVE_STRING }),
  ...(obj.clientId && { clientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExchangeCodeForTokenRequestFilterSensitiveLog = (obj: ExchangeCodeForTokenRequest): any => ({
  ...obj,
  ...(obj.request && { request: ExchangeCodeForTokenRequestBodyFilterSensitiveLog(obj.request) }),
});

/**
 * @internal
 */
export const ExchangeCodeForTokenResponseFilterSensitiveLog = (obj: ExchangeCodeForTokenResponse): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RefreshTokenRequestBodyFilterSensitiveLog = (obj: RefreshTokenRequestBody): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
  ...(obj.clientId && { clientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RefreshTokenRequestFilterSensitiveLog = (obj: RefreshTokenRequest): any => ({
  ...obj,
  ...(obj.refreshTokenBody && { refreshTokenBody: RefreshTokenRequestBodyFilterSensitiveLog(obj.refreshTokenBody) }),
});

/**
 * @internal
 */
export const RefreshTokenResponseFilterSensitiveLog = (obj: RefreshTokenResponse): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
