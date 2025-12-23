// smithy-typescript generated code
import {
  CodegenGenericDataFieldDataType,
  CodegenJobGenericDataSourceType,
  CodegenJobStatus,
  FixedPosition,
  FormActionType,
  FormButtonsPosition,
  FormDataSourceType,
  GenericDataRelationshipType,
  JSModule,
  JSScript,
  JSTarget,
  LabelDecorator,
  SortDirection,
  StorageAccessLevel,
  TokenProviders,
} from "./enums";

/**
 * <p>Associates a component property to a binding property. This enables exposed properties on
 *       the top level component to propagate data to the component's property values.</p>
 * @public
 */
export interface ComponentPropertyBindingProperties {
  /**
   * <p>The component property to bind to the data field.</p>
   * @public
   */
  property: string | undefined;

  /**
   * <p>The data field to bind the property to.</p>
   * @public
   */
  field?: string | undefined;
}

/**
 * <p>Describes how to bind a component property to form data.</p>
 * @public
 */
export interface FormBindingElement {
  /**
   * <p>The name of the component to retrieve a value from.</p>
   * @public
   */
  element: string | undefined;

  /**
   * <p>The property to retrieve a value from.</p>
   * @public
   */
  property: string | undefined;
}

/**
 * @public
 */
export interface GetCodegenJobRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the code generation job.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app associated with the code generation job.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the code generation job.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Describes an asset for a code generation job.</p>
 * @public
 */
export interface CodegenJobAsset {
  /**
   * <p>The URL to use to access the asset.</p>
   * @public
   */
  downloadUrl?: string | undefined;
}

/**
 * <p>Dependency package that may be required for the project code to run.</p>
 * @public
 */
export interface CodegenDependency {
  /**
   * <p>Name of the dependency package.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates the version of the supported dependency package.</p>
   * @public
   */
  supportedVersion?: string | undefined;

  /**
   * <p>Determines if the dependency package is using Semantic versioning. If set to true, it indicates that the dependency package uses Semantic versioning.</p>
   * @public
   */
  isSemVer?: boolean | undefined;

  /**
   * <p>Indicates the reason to include the dependency package in your project code.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Describes the feature flags that you can specify for a code generation job.</p>
 * @public
 */
export interface CodegenFeatureFlags {
  /**
   * <p>Specifes whether a code generation job supports data relationships.</p>
   * @public
   */
  isRelationshipSupported?: boolean | undefined;

  /**
   * <p>Specifies whether a code generation job supports non models.</p>
   * @public
   */
  isNonModelSupported?: boolean | undefined;
}

/**
 * <p>Describes the enums in a generic data schema.</p>
 * @public
 */
export interface CodegenGenericDataEnum {
  /**
   * <p>The list of enum values in the generic data schema.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Describes the relationship between generic data models.</p>
 * @public
 */
export interface CodegenGenericDataRelationshipType {
  /**
   * <p>The data relationship type.</p>
   * @public
   */
  type: GenericDataRelationshipType | undefined;

  /**
   * <p>The name of the related model in the data relationship.</p>
   * @public
   */
  relatedModelName: string | undefined;

  /**
   * <p>The related model fields in the data relationship.</p>
   * @public
   */
  relatedModelFields?: string[] | undefined;

  /**
   * <p>Specifies whether the relationship can unlink the associated model.</p>
   * @public
   */
  canUnlinkAssociatedModel?: boolean | undefined;

  /**
   * <p>The name of the related join field in the data relationship.</p>
   * @public
   */
  relatedJoinFieldName?: string | undefined;

  /**
   * <p>The name of the related join table in the data relationship.</p>
   * @public
   */
  relatedJoinTableName?: string | undefined;

  /**
   * <p>The value of the <code>belongsTo</code> field on the related data model. </p>
   * @public
   */
  belongsToFieldOnRelatedModel?: string | undefined;

  /**
   * <p>The associated fields of the data relationship.</p>
   * @public
   */
  associatedFields?: string[] | undefined;

  /**
   * <p>Specifies whether the <code>@index</code> directive is supported for a <code>hasMany</code> data relationship.</p>
   * @public
   */
  isHasManyIndex?: boolean | undefined;
}

/**
 * <p>Describes a field in a generic data schema.</p>
 * @public
 */
export interface CodegenGenericDataField {
  /**
   * <p>The data type for the generic data field.</p>
   * @public
   */
  dataType: CodegenGenericDataFieldDataType | undefined;

  /**
   * <p>The value of the data type for the generic data field.</p>
   * @public
   */
  dataTypeValue: string | undefined;

  /**
   * <p>Specifies whether the generic data field is required.</p>
   * @public
   */
  required: boolean | undefined;

  /**
   * <p>Specifies whether the generic data field is read-only.</p>
   * @public
   */
  readOnly: boolean | undefined;

  /**
   * <p>Specifies whether the generic data field is an array.</p>
   * @public
   */
  isArray: boolean | undefined;

  /**
   * <p>The relationship of the generic data schema.</p>
   * @public
   */
  relationship?: CodegenGenericDataRelationshipType | undefined;
}

/**
 * <p>Describes a model in a generic data schema.</p>
 * @public
 */
export interface CodegenGenericDataModel {
  /**
   * <p>The fields in the generic data model.</p>
   * @public
   */
  fields: Record<string, CodegenGenericDataField> | undefined;

  /**
   * <p>Specifies whether the generic data model is a join table.</p>
   * @public
   */
  isJoinTable?: boolean | undefined;

  /**
   * <p>The primary keys of the generic data model.</p>
   * @public
   */
  primaryKeys: string[] | undefined;
}

/**
 * <p>Describes a non-model in a generic data schema.</p>
 * @public
 */
export interface CodegenGenericDataNonModel {
  /**
   * <p>The fields in a generic data schema non model.</p>
   * @public
   */
  fields: Record<string, CodegenGenericDataField> | undefined;
}

/**
 * <p>Describes the data schema for a code generation job.</p>
 * @public
 */
export interface CodegenJobGenericDataSchema {
  /**
   * <p>The type of the data source for the schema. Currently, the only valid value is an Amplify <code>DataStore</code>.</p>
   * @public
   */
  dataSourceType: CodegenJobGenericDataSourceType | undefined;

  /**
   * <p>The name of a <code>CodegenGenericDataModel</code>.</p>
   * @public
   */
  models: Record<string, CodegenGenericDataModel> | undefined;

  /**
   * <p>The name of a <code>CodegenGenericDataEnum</code>.</p>
   * @public
   */
  enums: Record<string, CodegenGenericDataEnum> | undefined;

  /**
   * <p>The name of a <code>CodegenGenericDataNonModel</code>.</p>
   * @public
   */
  nonModels: Record<string, CodegenGenericDataNonModel> | undefined;
}

/**
 * <p>Describes the DataStore configuration for an API for a code generation job.</p>
 * @public
 */
export interface DataStoreRenderConfig {}

/**
 * <p>Describes the GraphQL configuration for an API for a code generation job.</p>
 * @public
 */
export interface GraphQLRenderConfig {
  /**
   * <p>The path to the GraphQL types file, relative to the component output directory.</p>
   * @public
   */
  typesFilePath: string | undefined;

  /**
   * <p>The path to the GraphQL queries file, relative to the component output directory.</p>
   * @public
   */
  queriesFilePath: string | undefined;

  /**
   * <p>The path to the GraphQL mutations file, relative to the component output directory.</p>
   * @public
   */
  mutationsFilePath: string | undefined;

  /**
   * <p>The path to the GraphQL subscriptions file, relative to the component output directory.</p>
   * @public
   */
  subscriptionsFilePath: string | undefined;

  /**
   * <p>The path to the GraphQL fragments file, relative to the component output directory.</p>
   * @public
   */
  fragmentsFilePath: string | undefined;
}

/**
 * <p>Describes the configuration for an application with no API being used.</p>
 * @public
 */
export interface NoApiRenderConfig {}

/**
 * <p>Describes the API configuration for a code generation job.</p>
 * @public
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
   * <p>The configuration for an application using GraphQL APIs.</p>
   * @public
   */
  export interface GraphQLConfigMember {
    graphQLConfig: GraphQLRenderConfig;
    dataStoreConfig?: never;
    noApiConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for an application using DataStore APIs.</p>
   * @public
   */
  export interface DataStoreConfigMember {
    graphQLConfig?: never;
    dataStoreConfig: DataStoreRenderConfig;
    noApiConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for an application with no API being used.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    graphQLConfig: (value: GraphQLRenderConfig) => T;
    dataStoreConfig: (value: DataStoreRenderConfig) => T;
    noApiConfig: (value: NoApiRenderConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the code generation job configuration for a React project.</p>
 * @public
 */
export interface ReactStartCodegenJobData {
  /**
   * <p>The JavaScript module type.</p>
   * @public
   */
  module?: JSModule | undefined;

  /**
   * <p>The ECMAScript specification to use.</p>
   * @public
   */
  target?: JSTarget | undefined;

  /**
   * <p>The file type to use for a JavaScript project.</p>
   * @public
   */
  script?: JSScript | undefined;

  /**
   * <p>Specifies whether the code generation job should render type declaration files.</p>
   * @public
   */
  renderTypeDeclarations?: boolean | undefined;

  /**
   * <p>Specifies whether the code generation job should render inline source maps.</p>
   * @public
   */
  inlineSourceMap?: boolean | undefined;

  /**
   * <p>The API configuration for the code generation job.</p>
   * @public
   */
  apiConfiguration?: ApiConfiguration | undefined;

  /**
   * <p>Lists the dependency packages that may be required for the project code to run.</p>
   * @public
   */
  dependencies?: Record<string, string> | undefined;
}

/**
 * <p>Describes the configuration information for rendering the UI component associated with the code generation job.</p>
 * @public
 */
export type CodegenJobRenderConfig =
  | CodegenJobRenderConfig.ReactMember
  | CodegenJobRenderConfig.$UnknownMember;

/**
 * @public
 */
export namespace CodegenJobRenderConfig {
  /**
   * <p>The name of the <code>ReactStartCodegenJobData</code> object.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    react: (value: ReactStartCodegenJobData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the configuration for a code generation job that is associated with an Amplify app.</p>
 * @public
 */
export interface CodegenJob {
  /**
   * <p>The unique ID for the code generation job.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amplify app associated with the code generation job.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment associated with the code generation job.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>Describes the configuration information for rendering the UI component associated with the code generation job.</p>
   * @public
   */
  renderConfig?: CodegenJobRenderConfig | undefined;

  /**
   * <p>Describes the data schema for a code generation job.</p>
   * @public
   */
  genericDataSchema?: CodegenJobGenericDataSchema | undefined;

  /**
   * <p>Specifies whether to autogenerate forms in the code generation job.</p>
   * @public
   */
  autoGenerateForms?: boolean | undefined;

  /**
   * <p>Describes the feature flags that you can specify for a code generation job.</p>
   * @public
   */
  features?: CodegenFeatureFlags | undefined;

  /**
   * <p>The status of the code generation job.</p>
   * @public
   */
  status?: CodegenJobStatus | undefined;

  /**
   * <p>The customized status message for the code generation job.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The <code>CodegenJobAsset</code> to use for the code generation job.</p>
   * @public
   */
  asset?: CodegenJobAsset | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the code generation job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The time that the code generation job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time that the code generation job was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>Lists the dependency packages that may be required for the project code to run.</p>
   * @public
   */
  dependencies?: CodegenDependency[] | undefined;
}

/**
 * @public
 */
export interface GetCodegenJobResponse {
  /**
   * <p>The configuration settings for the code generation job.</p>
   * @public
   */
  job?: CodegenJob | undefined;
}

/**
 * @public
 */
export interface ListCodegenJobsRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of jobs to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the basic information about the code generation job.</p>
 * @public
 */
export interface CodegenJobSummary {
  /**
   * <p>The unique ID of the Amplify app associated with the code generation job.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment associated with the code generation job.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the code generation job summary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The time that the code generation job summary was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time that the code generation job summary was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCodegenJobsResponse {
  /**
   * <p>The list of code generation jobs for the Amplify app.</p>
   * @public
   */
  entities: CodegenJobSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The code generation job resource configuration.</p>
 * @public
 */
export interface StartCodegenJobData {
  /**
   * <p>The code generation configuration for the codegen job.</p>
   * @public
   */
  renderConfig: CodegenJobRenderConfig | undefined;

  /**
   * <p>The data schema to use for a code generation job.</p>
   * @public
   */
  genericDataSchema?: CodegenJobGenericDataSchema | undefined;

  /**
   * <p>Specifies whether to autogenerate forms in the code generation job.</p>
   * @public
   */
  autoGenerateForms?: boolean | undefined;

  /**
   * <p>The feature flags for a code generation job.</p>
   * @public
   */
  features?: CodegenFeatureFlags | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the code generation job data.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCodegenJobRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The idempotency token used to ensure that the code generation job request completes only once.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The code generation job resource configuration.</p>
   * @public
   */
  codegenJobToCreate: StartCodegenJobData | undefined;
}

/**
 * @public
 */
export interface StartCodegenJobResponse {
  /**
   * <p>The code generation job for a UI component that is associated with an Amplify app.</p>
   * @public
   */
  entity?: CodegenJob | undefined;
}

/**
 * <p>Describes how to sort the data that you bind to a component.</p>
 * @public
 */
export interface SortProperty {
  /**
   * <p>The field to perform the sort on.</p>
   * @public
   */
  field: string | undefined;

  /**
   * <p>The direction of the sort, either ascending or descending.</p>
   * @public
   */
  direction: SortDirection | undefined;
}

/**
 * <p>Describes the style configuration of a unique variation of a main component.</p>
 * @public
 */
export interface ComponentVariant {
  /**
   * <p>The combination of variants that comprise this variant. You can't specify
   *         <code>tags</code> as a valid property for <code>variantValues</code>.</p>
   * @public
   */
  variantValues?: Record<string, string> | undefined;

  /**
   * <p>The properties of the component variant that can be overriden when customizing an instance
   *       of the component. You can't specify <code>tags</code> as a valid property for
   *         <code>overrides</code>.</p>
   * @public
   */
  overrides?: Record<string, Record<string, string>> | undefined;
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the component to
   *       delete.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportComponentsRequest {
  /**
   * <p>The unique ID of the Amplify app to export components to.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of components to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a component. This is a read-only data type that is returned by
 *         <code>ListComponents</code>.</p>
 * @public
 */
export interface ComponentSummary {
  /**
   * <p>The unique ID of the Amplify app associated with the component.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The component type.</p>
   * @public
   */
  componentType: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * <p>The list of components for the Amplify app.</p>
   * @public
   */
  entities: ComponentSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes the configuration of a request to exchange an access code for a token.</p>
 * @public
 */
export interface ExchangeCodeForTokenRequestBody {
  /**
   * <p>The access code to send in the request.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The location of the application that will receive the access code.</p>
   * @public
   */
  redirectUri: string | undefined;

  /**
   * <p>The ID of the client to request the token from.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * @public
 */
export interface ExchangeCodeForTokenRequest {
  /**
   * <p>The third-party provider for the token. The only valid value is <code>figma</code>.</p>
   * @public
   */
  provider: TokenProviders | undefined;

  /**
   * <p>Describes the configuration of the request.</p>
   * @public
   */
  request: ExchangeCodeForTokenRequestBody | undefined;
}

/**
 * @public
 */
export interface ExchangeCodeForTokenResponse {
  /**
   * <p>The access token.</p>
   * @public
   */
  accessToken: string | undefined;

  /**
   * <p>The date and time when the new access token expires.</p>
   * @public
   */
  expiresIn: number | undefined;

  /**
   * <p>The token to use to refresh a previously issued access token that might have
   *       expired.</p>
   * @public
   */
  refreshToken: string | undefined;
}

/**
 * <p>Describes the field position.</p>
 * @public
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
   * <p>The field position is fixed and doesn't change in relation to other fields.</p>
   * @public
   */
  export interface FixedMember {
    fixed: FixedPosition;
    rightOf?: never;
    below?: never;
    $unknown?: never;
  }

  /**
   * <p>The field position is to the right of the field specified by the string.</p>
   * @public
   */
  export interface RightOfMember {
    fixed?: never;
    rightOf: string;
    below?: never;
    $unknown?: never;
  }

  /**
   * <p>The field position is below the field specified by the string.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fixed: (value: FixedPosition) => T;
    rightOf: (value: string) => T;
    below: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the configuration for a button UI element that is a part of a form.</p>
 * @public
 */
export interface FormButton {
  /**
   * <p>Specifies whether the button is visible on the form.</p>
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * <p>Describes the button's properties.</p>
   * @public
   */
  children?: string | undefined;

  /**
   * <p>The position of the button.</p>
   * @public
   */
  position?: FieldPosition | undefined;
}

/**
 * <p>Describes the call to action button configuration for the form.</p>
 * @public
 */
export interface FormCTA {
  /**
   * <p>The position of the button.</p>
   * @public
   */
  position?: FormButtonsPosition | undefined;

  /**
   * <p>Displays a clear button.</p>
   * @public
   */
  clear?: FormButton | undefined;

  /**
   * <p>Displays a cancel button.</p>
   * @public
   */
  cancel?: FormButton | undefined;

  /**
   * <p>Displays a submit button.</p>
   * @public
   */
  submit?: FormButton | undefined;
}

/**
 * <p>Describes the data type configuration for the data source associated with a form.</p>
 * @public
 */
export interface FormDataTypeConfig {
  /**
   * <p>The data source type, either an Amplify DataStore model or a custom data type.</p>
   * @public
   */
  dataSourceType: FormDataSourceType | undefined;

  /**
   * <p>The unique name of the data type you are using as the data source for the form.</p>
   * @public
   */
  dataTypeName: string | undefined;
}

/**
 * <p>Describes the configuration for the file uploader field.</p>
 * @public
 */
export interface FileUploaderFieldConfig {
  /**
   * <p>The access level to assign to the uploaded files in the Amazon S3 bucket where
   *       they are stored. The valid values for this property are <code>private</code>,
   *         <code>protected</code>, or <code>public</code>. For detailed information about the
   *       permissions associated with each access level, see <a href="https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js/">File access
   *         levels</a> in the <i>Amplify documentation</i>.</p>
   * @public
   */
  accessLevel: StorageAccessLevel | undefined;

  /**
   * <p>The file types that are allowed to be uploaded by the file uploader. Provide this
   *       information in an array of strings specifying the valid file extensions.</p>
   * @public
   */
  acceptedFileTypes: string[] | undefined;

  /**
   * <p>Specifies whether to display or hide the image preview after selecting a file for upload.
   *       The default value is <code>true</code> to display the image preview.</p>
   * @public
   */
  showThumbnails?: boolean | undefined;

  /**
   * <p>Allows the file upload operation to be paused and resumed. The default value is
   *         <code>false</code>.</p>
   *          <p>When <code>isResumable</code> is set to <code>true</code>, the file uploader uses a
   *       multipart upload to break the files into chunks before upload. The progress of the upload
   *       isn't continuous, because the file uploader uploads a chunk at a time.</p>
   * @public
   */
  isResumable?: boolean | undefined;

  /**
   * <p>Specifies the maximum number of files that can be selected to upload. The default value is
   *       an unlimited number of files.</p>
   * @public
   */
  maxFileCount?: number | undefined;

  /**
   * <p>The maximum file size in bytes that the file uploader will accept. The default value is an
   *       unlimited file size.</p>
   * @public
   */
  maxSize?: number | undefined;
}

/**
 * <p>Represents the data binding configuration for a specific property using data stored in
 *         Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to
 *       data stored in an Amplify DataStore model.</p>
 * @public
 */
export interface FormInputBindingPropertiesValueProperties {
  /**
   * <p>An Amplify DataStore model.</p>
   * @public
   */
  model?: string | undefined;
}

/**
 * <p>Represents the data binding configuration for a form's input fields at runtime.You can use
 *         <code>FormInputBindingPropertiesValue</code> to add exposed properties to a form to allow
 *       different values to be entered when a form is reused in different places in an app.</p>
 * @public
 */
export interface FormInputBindingPropertiesValue {
  /**
   * <p>The property type.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>Describes the properties to customize with data at runtime.</p>
   * @public
   */
  bindingProperties?: FormInputBindingPropertiesValueProperties | undefined;
}

/**
 * <p>Associates a form property to a binding property. This enables exposed properties on the
 *       top level form to propagate data to the form's property values.</p>
 * @public
 */
export interface FormInputValuePropertyBindingProperties {
  /**
   * <p>The form property to bind to the data field.</p>
   * @public
   */
  property: string | undefined;

  /**
   * <p>The data field to bind the property to.</p>
   * @public
   */
  field?: string | undefined;
}

/**
 * <p>Describes the validation configuration for a field.</p>
 * @public
 */
export interface FieldValidationConfiguration {
  /**
   * <p>The validation to perform on an object type.<code/>
   *          </p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The validation to perform on a string value.</p>
   * @public
   */
  strValues?: string[] | undefined;

  /**
   * <p>The validation to perform on a number value.</p>
   * @public
   */
  numValues?: number[] | undefined;

  /**
   * <p>The validation message to display.</p>
   * @public
   */
  validationMessage?: string | undefined;
}

/**
 * <p>Stores the configuration information for a visual helper element for a form. A sectional
 *       element can be a header, a text block, or a divider. These elements are static and not
 *       associated with any data.</p>
 * @public
 */
export interface SectionalElement {
  /**
   * <p>The type of sectional element. Valid values are <code>Heading</code>, <code>Text</code>,
   *       and <code>Divider</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Specifies the position of the text in a field for a <code>Text</code> sectional
   *       element.</p>
   * @public
   */
  position?: FieldPosition | undefined;

  /**
   * <p>The text for a <code>Text</code> sectional element.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Specifies the size of the font for a <code>Heading</code> sectional element. Valid values
   *       are <code>1 | 2 | 3 | 4 | 5 | 6</code>.</p>
   * @public
   */
  level?: number | undefined;

  /**
   * <p>Specifies the orientation for a <code>Divider</code> sectional element. Valid values are
   *         <code>horizontal</code> or <code>vertical</code>.</p>
   * @public
   */
  orientation?: string | undefined;

  /**
   * <p>Excludes a sectional element that was generated by default for a specified data
   *       model.</p>
   * @public
   */
  excluded?: boolean | undefined;
}

/**
 * <p>Describes the configuration settings for the form's style properties.</p>
 * @public
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
   * <p>A reference to a design token to use to bind the form's style properties to an existing
   *       theme.</p>
   * @public
   */
  export interface TokenReferenceMember {
    tokenReference: string;
    value?: never;
    $unknown?: never;
  }

  /**
   * <p>The value of the style setting.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tokenReference: (value: string) => T;
    value: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the configuration for the form's style.</p>
 * @public
 */
export interface FormStyle {
  /**
   * <p>The spacing for the horizontal gap.</p>
   * @public
   */
  horizontalGap?: FormStyleConfig | undefined;

  /**
   * <p>The spacing for the vertical gap.</p>
   * @public
   */
  verticalGap?: FormStyleConfig | undefined;

  /**
   * <p>The size of the outer padding for the form.</p>
   * @public
   */
  outerPadding?: FormStyleConfig | undefined;
}

/**
 * @public
 */
export interface DeleteFormRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the form to delete.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the form to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportFormsRequest {
  /**
   * <p>The unique ID of the Amplify app to export forms to.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFormRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the form.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListFormsRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of forms to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes the basic information about a form.</p>
 * @public
 */
export interface FormSummary {
  /**
   * <p>The unique ID for the app associated with the form summary.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The form's data source type.</p>
   * @public
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The type of operation to perform on the form.</p>
   * @public
   */
  formActionType: FormActionType | undefined;

  /**
   * <p>The ID of the form.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the form.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListFormsResponse {
  /**
   * <p>The list of forms for the Amplify app.</p>
   * @public
   */
  entities: FormSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataResponse {
  /**
   * <p>Represents the configuration settings for the features metadata.</p>
   * @public
   */
  features: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key value pairs for a specified Amazon Resource Name (ARN).</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Stores the metadata information about a feature on a form.</p>
 * @public
 */
export interface PutMetadataFlagBody {
  /**
   * <p>The new information to store.</p>
   * @public
   */
  newValue: string | undefined;
}

/**
 * @public
 */
export interface PutMetadataFlagRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the feature associated with the metadata.</p>
   * @public
   */
  featureName: string | undefined;

  /**
   * <p>The metadata information to store.</p>
   * @public
   */
  body: PutMetadataFlagBody | undefined;
}

/**
 * <p>Describes a refresh token.</p>
 * @public
 */
export interface RefreshTokenRequestBody {
  /**
   * <p>The token to use to refresh a previously issued access token that might have
   *       expired.</p>
   * @public
   */
  token: string | undefined;

  /**
   * <p>The ID of the client to request the token from.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * @public
 */
export interface RefreshTokenRequest {
  /**
   * <p>The third-party provider for the token. The only valid value is <code>figma</code>.</p>
   * @public
   */
  provider: TokenProviders | undefined;

  /**
   * <p>Information about the refresh token request.</p>
   * @public
   */
  refreshTokenBody: RefreshTokenRequestBody | undefined;
}

/**
 * @public
 */
export interface RefreshTokenResponse {
  /**
   * <p>The access token.</p>
   * @public
   */
  accessToken: string | undefined;

  /**
   * <p>The date and time when the new access token expires.</p>
   * @public
   */
  expiresIn: number | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to tag a resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag key value pairs for a specified Amazon Resource Name (ARN).</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface DeleteThemeRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the theme to
   *       delete.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the theme to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportThemesRequest {
  /**
   * <p>The unique ID of the Amplify app to export the themes to.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetThemeRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the theme.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of theme results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes the basic information about a theme.</p>
 * @public
 */
export interface ThemeSummary {
  /**
   * <p>The unique ID for the app associated with the theme summary.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The ID of the theme.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the theme.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * <p>The list of themes for the Amplify app.</p>
   * @public
   */
  entities: ThemeSummary[] | undefined;

  /**
   * <p>The pagination token that's returned if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to untag a resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to use to untag a resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Describes the configuration for an input field on a form. Use
 *         <code>FormInputValueProperty</code> to specify the values to render or bind by
 *       default.</p>
 * @public
 */
export interface FormInputValueProperty {
  /**
   * <p>The value to assign to the input field.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The information to bind fields to data at runtime.</p>
   * @public
   */
  bindingProperties?: FormInputValuePropertyBindingProperties | undefined;

  /**
   * <p>A list of form properties to concatenate to create the value to assign to this field
   *       property.</p>
   * @public
   */
  concat?: FormInputValueProperty[] | undefined;
}

/**
 * <p>Describes the configuration of a theme's properties.</p>
 * @public
 */
export interface ThemeValue {
  /**
   * <p>The value of a theme property.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>A list of key-value pairs that define the theme's properties.</p>
   * @public
   */
  children?: ThemeValues[] | undefined;
}

/**
 * <p>A key-value pair that defines a property of a theme.</p>
 * @public
 */
export interface ThemeValues {
  /**
   * <p>The name of the property.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  value?: ThemeValue | undefined;
}

/**
 * <p>Stores information for generating Amplify DataStore queries. Use a
 *         <code>Predicate</code> to retrieve a subset of the data in a collection.</p>
 * @public
 */
export interface Predicate {
  /**
   * <p>A list of predicates to combine logically.</p>
   * @public
   */
  or?: Predicate[] | undefined;

  /**
   * <p>A list of predicates to combine logically.</p>
   * @public
   */
  and?: Predicate[] | undefined;

  /**
   * <p>The field to query.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>The operator to use to perform the evaluation.</p>
   * @public
   */
  operator?: string | undefined;

  /**
   * <p>The value to use when performing the evaluation.</p>
   * @public
   */
  operand?: string | undefined;

  /**
   * <p>The type of value to use when performing the evaluation.</p>
   * @public
   */
  operandType?: string | undefined;
}

/**
 * <p>Represents the data binding configuration for a specific property using data stored in
 *         Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to
 *       data stored in an Amazon S3 bucket, an Amplify DataStore model or an
 *       authenticated user attribute.</p>
 * @public
 */
export interface ComponentBindingPropertiesValueProperties {
  /**
   * <p>An Amplify DataStore model.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The field to bind the data to.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>A list of predicates for binding a component's properties to data.</p>
   * @public
   */
  predicates?: Predicate[] | undefined;

  /**
   * <p>An authenticated user attribute.</p>
   * @public
   */
  userAttribute?: string | undefined;

  /**
   * <p>An Amazon S3 bucket.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The storage key for an Amazon S3 bucket.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The default value to assign to the property.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The name of a component slot.</p>
   * @public
   */
  slotName?: string | undefined;
}

/**
 * <p>Describes the configuration for binding a component's properties to data.</p>
 * @public
 */
export interface ComponentDataConfiguration {
  /**
   * <p>The name of the data model to use to bind data to a component.</p>
   * @public
   */
  model: string | undefined;

  /**
   * <p>Describes how to sort the component's properties.</p>
   * @public
   */
  sort?: SortProperty[] | undefined;

  /**
   * <p>Represents the conditional logic to use when binding data to a component. Use this
   *       property to retrieve only a subset of the data in a collection.</p>
   * @public
   */
  predicate?: Predicate | undefined;

  /**
   * <p>A list of IDs to use to bind data to a component. Use this property to bind specifically
   *       chosen data, rather than data retrieved from a query.</p>
   * @public
   */
  identifiers?: string[] | undefined;
}

/**
 * <p>Describes the configuration for all of a component's properties. Use
 *         <code>ComponentProperty</code> to specify the values to render or bind by default.</p>
 * @public
 */
export interface ComponentProperty {
  /**
   * <p>The value to assign to the component property.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The information to bind the component property to data at runtime.</p>
   * @public
   */
  bindingProperties?: ComponentPropertyBindingProperties | undefined;

  /**
   * <p>The information to bind the component property to data at runtime. Use this for collection
   *       components.</p>
   * @public
   */
  collectionBindingProperties?: ComponentPropertyBindingProperties | undefined;

  /**
   * <p>The default value to assign to the component property.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The data model to use to assign a value to the component property.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The information to bind the component property to form data.</p>
   * @public
   */
  bindings?: Record<string, FormBindingElement> | undefined;

  /**
   * <p>An event that occurs in your app. Use this for workflow data binding.</p>
   * @public
   */
  event?: string | undefined;

  /**
   * <p>An authenticated user attribute to use to assign a value to the component property.</p>
   * @public
   */
  userAttribute?: string | undefined;

  /**
   * <p>A list of component properties to concatenate to create the value to assign to this
   *       component property.</p>
   * @public
   */
  concat?: ComponentProperty[] | undefined;

  /**
   * <p>The conditional expression to use to assign a value to the component property.</p>
   * @public
   */
  condition?: ComponentConditionProperty | undefined;

  /**
   * <p>Specifies whether the user configured the property in Amplify Studio after
   *       importing it.</p>
   * @public
   */
  configured?: boolean | undefined;

  /**
   * <p>The component type.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The default value assigned to the property when the component is imported into an
   *       app.</p>
   * @public
   */
  importedValue?: string | undefined;

  /**
   * <p>The name of the component that is affected by an event.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>The name of the component's property that is affected by an event.</p>
   * @public
   */
  property?: string | undefined;
}

/**
 * <p>Associates a complex object with a display value. Use <code>ValueMapping</code> to store
 *       how to represent complex objects when they are displayed.</p>
 * @public
 */
export interface ValueMapping {
  /**
   * <p>The value to display for the complex object.</p>
   * @public
   */
  displayValue?: FormInputValueProperty | undefined;

  /**
   * <p>The complex object.</p>
   * @public
   */
  value: FormInputValueProperty | undefined;
}

/**
 * <p>Represents the data binding configuration for a component at runtime. You can use
 *         <code>ComponentBindingPropertiesValue</code> to add exposed properties to a component to
 *       allow different values to be entered when a component is reused in different places in an
 *       app.</p>
 * @public
 */
export interface ComponentBindingPropertiesValue {
  /**
   * <p>The property type.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>Describes the properties to customize with data at runtime.</p>
   * @public
   */
  bindingProperties?: ComponentBindingPropertiesValueProperties | undefined;

  /**
   * <p>The default value of the property.</p>
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * <p>Represents all of the information that is required to create a theme.</p>
 * @public
 */
export interface CreateThemeData {
  /**
   * <p>The name of the theme.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list of key-value pairs that deﬁnes the properties of the theme.</p>
   * @public
   */
  values: ThemeValues[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize an instance of the
   *       theme.</p>
   * @public
   */
  overrides?: ThemeValues[] | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the theme data.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A theme is a collection of style settings that apply globally to the components associated
 *       with an Amplify application.</p>
 * @public
 */
export interface Theme {
  /**
   * <p>The unique ID for the Amplify app associated with the theme.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the theme.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time that the theme was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time that the theme was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>A list of key-value pairs that defines the properties of the theme.</p>
   * @public
   */
  values: ThemeValues[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize a theme.</p>
   * @public
   */
  overrides?: ThemeValues[] | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the theme.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Saves the data binding information for a theme.</p>
 * @public
 */
export interface UpdateThemeData {
  /**
   * <p>The unique ID of the theme to update.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the theme to update.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A list of key-value pairs that define the theme's properties.</p>
   * @public
   */
  values: ThemeValues[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize the theme.</p>
   * @public
   */
  overrides?: ThemeValues[] | undefined;
}

/**
 * <p>Represents the state configuration when an action modifies a property of another element
 *       within the same component.</p>
 * @public
 */
export interface MutationActionSetStateParameter {
  /**
   * <p>The name of the component that is being modified.</p>
   * @public
   */
  componentName: string | undefined;

  /**
   * <p>The name of the component property to apply the state configuration to.</p>
   * @public
   */
  property: string | undefined;

  /**
   * <p>The state configuration to assign to the property.</p>
   * @public
   */
  set: ComponentProperty | undefined;
}

/**
 * <p>Represents a conditional expression to set a component property. Use
 *         <code>ComponentConditionProperty</code> to set a property to different values conditionally,
 *       based on the value of another property.</p>
 * @public
 */
export interface ComponentConditionProperty {
  /**
   * <p>The name of the conditional property.</p>
   * @public
   */
  property?: string | undefined;

  /**
   * <p>The name of a field. Specify this when the property is a data model.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>The operator to use to perform the evaluation, such as <code>eq</code> to represent
   *       equals.</p>
   * @public
   */
  operator?: string | undefined;

  /**
   * <p>The value of the property to evaluate.</p>
   * @public
   */
  operand?: string | undefined;

  /**
   * <p>The value to assign to the property if the condition is met.</p>
   * @public
   */
  then?: ComponentProperty | undefined;

  /**
   * <p>The value to assign to the property if the condition is not met.</p>
   * @public
   */
  else?: ComponentProperty | undefined;

  /**
   * <p>The type of the property to evaluate.</p>
   * @public
   */
  operandType?: string | undefined;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the theme.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Represents the configuration of the theme to create.</p>
   * @public
   */
  themeToCreate: CreateThemeData | undefined;
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * <p>Describes the configuration of the new theme.</p>
   * @public
   */
  entity?: Theme | undefined;
}

/**
 * @public
 */
export interface GetThemeResponse {
  /**
   * <p>Represents the configuration settings for the theme.</p>
   * @public
   */
  theme?: Theme | undefined;
}

/**
 * @public
 */
export interface UpdateThemeRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the theme.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration of the updated theme.</p>
   * @public
   */
  updatedTheme: UpdateThemeData | undefined;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * <p>Describes the configuration of the updated theme.</p>
   * @public
   */
  entity?: Theme | undefined;
}

/**
 * <p>Represents the data binding configuration for a value map.</p>
 * @public
 */
export interface ValueMappings {
  /**
   * <p>The value and display value pairs.</p>
   * @public
   */
  values: ValueMapping[] | undefined;

  /**
   * <p>The information to bind fields to data at runtime.</p>
   * @public
   */
  bindingProperties?: Record<string, FormInputBindingPropertiesValue> | undefined;
}

/**
 * @public
 */
export interface ExportThemesResponse {
  /**
   * <p>Represents the configuration of the exported themes.</p>
   * @public
   */
  entities: Theme[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes the configuration for the default input values to display for a field.</p>
 * @public
 */
export interface FieldInputConfig {
  /**
   * <p>The input type for the field. </p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Specifies a field that requires input.</p>
   * @public
   */
  required?: boolean | undefined;

  /**
   * <p>Specifies a read only field.</p>
   * @public
   */
  readOnly?: boolean | undefined;

  /**
   * <p>The text to display as a placeholder for the field.</p>
   * @public
   */
  placeholder?: string | undefined;

  /**
   * <p>The default value for the field.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The text to display to describe the field.</p>
   * @public
   */
  descriptiveText?: string | undefined;

  /**
   * <p>Specifies whether a field has a default value.</p>
   * @public
   */
  defaultChecked?: boolean | undefined;

  /**
   * <p>The default country code for a phone number.</p>
   * @public
   */
  defaultCountryCode?: string | undefined;

  /**
   * <p>The information to use to customize the input fields with data at runtime.</p>
   * @public
   */
  valueMappings?: ValueMappings | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The minimum value to display for the field.</p>
   * @public
   */
  minValue?: number | undefined;

  /**
   * <p>The maximum value to display for the field.</p>
   * @public
   */
  maxValue?: number | undefined;

  /**
   * <p>The stepping increment for a numeric value in a field.</p>
   * @public
   */
  step?: number | undefined;

  /**
   * <p>The value for the field.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>Specifies whether to render the field as an array. This property is ignored if the
   *         <code>dataSourceType</code> for the form is a Data Store.</p>
   * @public
   */
  isArray?: boolean | undefined;

  /**
   * <p>The configuration for the file uploader field.</p>
   * @public
   */
  fileUploaderConfig?: FileUploaderFieldConfig | undefined;
}

/**
 * <p>Describes the configuration information for a field in a table.</p>
 * @public
 */
export interface FieldConfig {
  /**
   * <p>The label for the field.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>Specifies the field position.</p>
   * @public
   */
  position?: FieldPosition | undefined;

  /**
   * <p>Specifies whether to hide a field.</p>
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * <p>Describes the configuration for the default input value to display for a field.</p>
   * @public
   */
  inputType?: FieldInputConfig | undefined;

  /**
   * <p>The validations to perform on the value in the field.</p>
   * @public
   */
  validations?: FieldValidationConfiguration[] | undefined;
}

/**
 * <p>Represents all of the information that is required to create a form.</p>
 * @public
 */
export interface CreateFormData {
  /**
   * <p>The name of the form.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of data source to use to create the form.</p>
   * @public
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * <p>Specifies whether to perform a create or update action on the form.</p>
   * @public
   */
  formActionType: FormActionType | undefined;

  /**
   * <p>The configuration information for the form's fields.</p>
   * @public
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * <p>The configuration for the form's style.</p>
   * @public
   */
  style: FormStyle | undefined;

  /**
   * <p>The configuration information for the visual helper elements for the form. These elements
   *       are not associated with any data.</p>
   * @public
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * <p>The schema version of the form.</p>
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * <p>The <code>FormCTA</code> object that stores the call to action configuration for the
   *       form.</p>
   * @public
   */
  cta?: FormCTA | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the form data.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies an icon or decoration to display on the form.</p>
   * @public
   */
  labelDecorator?: LabelDecorator | undefined;
}

/**
 * <p>Contains the configuration settings for a <code>Form</code> user interface (UI) element
 *       for an Amplify app. A form is a component you can add to your project by specifying a data
 *       source as the default configuration for the form.</p>
 * @public
 */
export interface Form {
  /**
   * <p>The unique ID of the Amplify app associated with the form.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the form.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the form.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The operation to perform on the specified form.</p>
   * @public
   */
  formActionType: FormActionType | undefined;

  /**
   * <p>Stores the configuration for the form's style.</p>
   * @public
   */
  style: FormStyle | undefined;

  /**
   * <p>The type of data source to use to create the form.</p>
   * @public
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * <p>Stores the information about the form's fields.</p>
   * @public
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * <p>Stores the visual helper elements for the form that are not associated with any
   *       data.</p>
   * @public
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * <p>The schema version of the form when it was imported.</p>
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the form.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Stores the call to action configuration for the form.</p>
   * @public
   */
  cta?: FormCTA | undefined;

  /**
   * <p>Specifies an icon or decoration to display on the form.</p>
   * @public
   */
  labelDecorator?: LabelDecorator | undefined;
}

/**
 * <p>Updates and saves all of the information about a form, based on form ID.</p>
 * @public
 */
export interface UpdateFormData {
  /**
   * <p>The name of the form.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of data source to use to create the form.</p>
   * @public
   */
  dataType?: FormDataTypeConfig | undefined;

  /**
   * <p>Specifies whether to perform a create or update action on the form.</p>
   * @public
   */
  formActionType?: FormActionType | undefined;

  /**
   * <p>The configuration information for the form's fields.</p>
   * @public
   */
  fields?: Record<string, FieldConfig> | undefined;

  /**
   * <p>The configuration for the form's style.</p>
   * @public
   */
  style?: FormStyle | undefined;

  /**
   * <p>The configuration information for the visual helper elements for the form. These elements
   *       are not associated with any data.</p>
   * @public
   */
  sectionalElements?: Record<string, SectionalElement> | undefined;

  /**
   * <p>The schema version of the form.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p>The <code>FormCTA</code> object that stores the call to action configuration for the
   *       form.</p>
   * @public
   */
  cta?: FormCTA | undefined;

  /**
   * <p>Specifies an icon or decoration to display on the form.</p>
   * @public
   */
  labelDecorator?: LabelDecorator | undefined;
}

/**
 * @public
 */
export interface CreateFormRequest {
  /**
   * <p>The unique ID of the Amplify app to associate with the form.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Represents the configuration of the form to create.</p>
   * @public
   */
  formToCreate: CreateFormData | undefined;
}

/**
 * @public
 */
export interface CreateFormResponse {
  /**
   * <p>Describes the configuration of the new form.</p>
   * @public
   */
  entity?: Form | undefined;
}

/**
 * @public
 */
export interface GetFormResponse {
  /**
   * <p>Represents the configuration settings for the form.</p>
   * @public
   */
  form?: Form | undefined;
}

/**
 * @public
 */
export interface UpdateFormRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the form.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The request accepts the following data in JSON format.</p>
   * @public
   */
  updatedForm: UpdateFormData | undefined;
}

/**
 * @public
 */
export interface UpdateFormResponse {
  /**
   * <p>Describes the configuration of the updated form.</p>
   * @public
   */
  entity?: Form | undefined;
}

/**
 * @public
 */
export interface ExportFormsResponse {
  /**
   * <p>Represents the configuration of the exported forms.</p>
   * @public
   */
  entities: Form[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the event action configuration for an element of a <code>Component</code> or
 *         <code>ComponentChild</code>. Use for the workflow feature in Amplify Studio
 *       that allows you to bind events and actions to components. <code>ActionParameters</code>
 *       defines the action that is performed when an event occurs on the component.</p>
 * @public
 */
export interface ActionParameters {
  /**
   * <p>The type of navigation action. Valid values are <code>url</code> and <code>anchor</code>.
   *       This value is required for a navigation action.</p>
   * @public
   */
  type?: ComponentProperty | undefined;

  /**
   * <p>The URL to the location to open. Specify this value for a navigation action.</p>
   * @public
   */
  url?: ComponentProperty | undefined;

  /**
   * <p>The HTML anchor link to the location to open. Specify this value for a navigation
   *       action.</p>
   * @public
   */
  anchor?: ComponentProperty | undefined;

  /**
   * <p>The element within the same component to modify when the action occurs.</p>
   * @public
   */
  target?: ComponentProperty | undefined;

  /**
   * <p>Specifies whether the user should be signed out globally. Specify this value for an auth
   *       sign out action.</p>
   * @public
   */
  global?: ComponentProperty | undefined;

  /**
   * <p>The name of the data model. Use when the action performs an operation on an Amplify DataStore model.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The unique ID of the component that the <code>ActionParameters</code> apply to.</p>
   * @public
   */
  id?: ComponentProperty | undefined;

  /**
   * <p>A dictionary of key-value pairs mapping Amplify Studio properties to fields
   *       in a data model. Use when the action performs an operation on an Amplify
   *       DataStore model.</p>
   * @public
   */
  fields?: Record<string, ComponentProperty> | undefined;

  /**
   * <p>A key-value pair that specifies the state property name and its initial value.</p>
   * @public
   */
  state?: MutationActionSetStateParameter | undefined;
}

/**
 * <p>Describes the configuration of an event. You can bind an event and a corresponding action
 *       to a <code>Component</code> or a <code>ComponentChild</code>. A button click is an example of
 *       an event. </p>
 * @public
 */
export interface ComponentEvent {
  /**
   * <p>The action to perform when a specific event is raised.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>Describes information about the action.</p>
   * @public
   */
  parameters?: ActionParameters | undefined;

  /**
   * <p>Binds an event to an action on a component. When you specify a <code>bindingEvent</code>,
   *       the event is called when the action is performed.</p>
   * @public
   */
  bindingEvent?: string | undefined;
}

/**
 * <p>A nested UI configuration within a parent <code>Component</code>.</p>
 * @public
 */
export interface ComponentChild {
  /**
   * <p>The type of the child component. </p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>The name of the child component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Describes the properties of the child component. You can't specify <code>tags</code> as a
   *       valid property for <code>properties</code>.</p>
   * @public
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * <p>The list of <code>ComponentChild</code> instances for this component.</p>
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * <p>Describes the events that can be raised on the child component. Use for the workflow
   *       feature in Amplify Studio that allows you to bind events and actions to
   *       components.</p>
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * <p>The unique ID of the child component in its original source system, such as Figma.</p>
   * @public
   */
  sourceId?: string | undefined;
}

/**
 * <p>Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use
 *         <code>ComponentChild</code> to configure an instance of a <code>Component</code>. A
 *         <code>ComponentChild</code> instance inherits the configuration of the main
 *         <code>Component</code>.</p>
 * @public
 */
export interface Component {
  /**
   * <p>The unique ID of the Amplify app associated with the component.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   * @public
   */
  sourceId?: string | undefined;

  /**
   * <p>The unique ID of the component.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the component. This can be an Amplify custom UI component or
   *       another custom component.</p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>Describes the component's properties. You can't specify <code>tags</code> as a valid
   *       property for <code>properties</code>.</p>
   * @public
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * <p>A list of the component's <code>ComponentChild</code> instances.</p>
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * <p>A list of the component's variants. A variant is a unique style configuration of a main
   *       component.</p>
   * @public
   */
  variants: ComponentVariant[] | undefined;

  /**
   * <p>Describes the component's properties that can be overriden in a customized instance of the
   *       component. You can't specify <code>tags</code> as a valid property for
   *       <code>overrides</code>.</p>
   * @public
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The information to connect a component's properties to data at runtime. You can't specify
   *         <code>tags</code> as a valid property for <code>bindingProperties</code>.</p>
   *          <p/>
   * @public
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * <p>The data binding configuration for the component's properties. Use this for a collection
   *       component. You can't specify <code>tags</code> as a valid property for
   *         <code>collectionProperties</code>.</p>
   * @public
   */
  collectionProperties?: Record<string, ComponentDataConfiguration> | undefined;

  /**
   * <p>The time that the component was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time that the component was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Describes the events that can be raised on the component. Use for the workflow feature in
   *         Amplify Studio that allows you to bind events and actions to
   *       components.</p>
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * <p>The schema version of the component when it was imported.</p>
   * @public
   */
  schemaVersion?: string | undefined;
}

/**
 * <p>Represents all of the information that is required to create a component.</p>
 * @public
 */
export interface CreateComponentData {
  /**
   * <p>The name of the component</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   * @public
   */
  sourceId?: string | undefined;

  /**
   * <p>The component type. This can be an Amplify custom UI component or another
   *       custom component.</p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>Describes the component's properties.</p>
   * @public
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * <p>A list of child components that are instances of the main component.</p>
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * <p>A list of the unique variants of this component.</p>
   * @public
   */
  variants: ComponentVariant[] | undefined;

  /**
   * <p>Describes the component properties that can be overriden to customize an instance of the
   *       component.</p>
   * @public
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The data binding information for the component's properties.</p>
   * @public
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * <p>The data binding configuration for customizing a component's properties. Use this for a
   *       collection component.</p>
   * @public
   */
  collectionProperties?: Record<string, ComponentDataConfiguration> | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the component data.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</p>
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * <p>The schema version of the component when it was imported.</p>
   * @public
   */
  schemaVersion?: string | undefined;
}

/**
 * <p>Updates and saves all of the information about a component, based on component ID.</p>
 * @public
 */
export interface UpdateComponentData {
  /**
   * <p>The unique ID of the component to update.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the component to update.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   * @public
   */
  sourceId?: string | undefined;

  /**
   * <p>The type of the component. This can be an Amplify custom UI component or
   *       another custom component.</p>
   * @public
   */
  componentType?: string | undefined;

  /**
   * <p>Describes the component's properties.</p>
   * @public
   */
  properties?: Record<string, ComponentProperty> | undefined;

  /**
   * <p>The components that are instances of the main component.</p>
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * <p>A list of the unique variants of the main component being updated.</p>
   * @public
   */
  variants?: ComponentVariant[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize the component.</p>
   * @public
   */
  overrides?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The data binding information for the component's properties.</p>
   * @public
   */
  bindingProperties?: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * <p>The configuration for binding a component's properties to a data model. Use this for a
   *       collection component.</p>
   * @public
   */
  collectionProperties?: Record<string, ComponentDataConfiguration> | undefined;

  /**
   * <p>The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</p>
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * <p>The schema version of the component when it was imported.</p>
   * @public
   */
  schemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * <p>The unique ID of the Amplify app to associate with the component.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Represents the configuration of the component to create.</p>
   * @public
   */
  componentToCreate: CreateComponentData | undefined;
}

/**
 * @public
 */
export interface CreateComponentResponse {
  /**
   * <p>Describes the configuration of the new component.</p>
   * @public
   */
  entity?: Component | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * <p>Represents the configuration settings for the component.</p>
   * @public
   */
  component?: Component | undefined;
}

/**
 * @public
 */
export interface UpdateComponentRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the component.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration of the updated component.</p>
   * @public
   */
  updatedComponent: UpdateComponentData | undefined;
}

/**
 * @public
 */
export interface UpdateComponentResponse {
  /**
   * <p>Describes the configuration of the updated component.</p>
   * @public
   */
  entity?: Component | undefined;
}

/**
 * @public
 */
export interface ExportComponentsResponse {
  /**
   * <p>Represents the configuration of the exported components.</p>
   * @public
   */
  entities: Component[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}
