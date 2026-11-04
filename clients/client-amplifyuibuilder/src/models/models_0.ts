// smithy-typescript generated code
import type {
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
 * Associates a component property to a binding property. This enables exposed properties on the top level component to propagate data to the component's property values.
 *
 * @public
 */
export interface ComponentPropertyBindingProperties {
  /**
   * The component property to bind to the data field.
   *
   * @public
   */
  property: string | undefined;

  /**
   * The data field to bind the property to.
   *
   * @public
   */
  field?: string | undefined;
}

/**
 * Describes how to bind a component property to form data.
 *
 * @public
 */
export interface FormBindingElement {
  /**
   * The name of the component to retrieve a value from.
   *
   * @public
   */
  element: string | undefined;

  /**
   * The property to retrieve a value from.
   *
   * @public
   */
  property: string | undefined;
}

/**
 * @public
 */
export interface GetCodegenJobRequest {
  /**
   * The unique ID of the Amplify app associated with the code generation job.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app associated with the code generation job.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the code generation job.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Describes an asset for a code generation job.
 *
 * @public
 */
export interface CodegenJobAsset {
  /**
   * The URL to use to access the asset.
   *
   * @public
   */
  downloadUrl?: string | undefined;
}

/**
 * Dependency package that may be required for the project code to run.
 *
 * @public
 */
export interface CodegenDependency {
  /**
   * Name of the dependency package.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates the version of the supported dependency package.
   *
   * @public
   */
  supportedVersion?: string | undefined;

  /**
   * Determines if the dependency package is using Semantic versioning. If set to true, it indicates that the dependency package uses Semantic versioning.
   *
   * @public
   */
  isSemVer?: boolean | undefined;

  /**
   * Indicates the reason to include the dependency package in your project code.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Describes the feature flags that you can specify for a code generation job.
 *
 * @public
 */
export interface CodegenFeatureFlags {
  /**
   * Specifes whether a code generation job supports data relationships.
   *
   * @public
   */
  isRelationshipSupported?: boolean | undefined;

  /**
   * Specifies whether a code generation job supports non models.
   *
   * @public
   */
  isNonModelSupported?: boolean | undefined;
}

/**
 * Describes the enums in a generic data schema.
 *
 * @public
 */
export interface CodegenGenericDataEnum {
  /**
   * The list of enum values in the generic data schema.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Describes the relationship between generic data models.
 *
 * @public
 */
export interface CodegenGenericDataRelationshipType {
  /**
   * The data relationship type.
   *
   * @public
   */
  type: GenericDataRelationshipType | undefined;

  /**
   * The name of the related model in the data relationship.
   *
   * @public
   */
  relatedModelName: string | undefined;

  /**
   * The related model fields in the data relationship.
   *
   * @public
   */
  relatedModelFields?: string[] | undefined;

  /**
   * Specifies whether the relationship can unlink the associated model.
   *
   * @public
   */
  canUnlinkAssociatedModel?: boolean | undefined;

  /**
   * The name of the related join field in the data relationship.
   *
   * @public
   */
  relatedJoinFieldName?: string | undefined;

  /**
   * The name of the related join table in the data relationship.
   *
   * @public
   */
  relatedJoinTableName?: string | undefined;

  /**
   * The value of the `belongsTo` field on the related data model.
   *
   * @public
   */
  belongsToFieldOnRelatedModel?: string | undefined;

  /**
   * The associated fields of the data relationship.
   *
   * @public
   */
  associatedFields?: string[] | undefined;

  /**
   * Specifies whether the `@index` directive is supported for a `hasMany` data relationship.
   *
   * @public
   */
  isHasManyIndex?: boolean | undefined;
}

/**
 * Describes a field in a generic data schema.
 *
 * @public
 */
export interface CodegenGenericDataField {
  /**
   * The data type for the generic data field.
   *
   * @public
   */
  dataType: CodegenGenericDataFieldDataType | undefined;

  /**
   * The value of the data type for the generic data field.
   *
   * @public
   */
  dataTypeValue: string | undefined;

  /**
   * Specifies whether the generic data field is required.
   *
   * @public
   */
  required: boolean | undefined;

  /**
   * Specifies whether the generic data field is read-only.
   *
   * @public
   */
  readOnly: boolean | undefined;

  /**
   * Specifies whether the generic data field is an array.
   *
   * @public
   */
  isArray: boolean | undefined;

  /**
   * The relationship of the generic data schema.
   *
   * @public
   */
  relationship?: CodegenGenericDataRelationshipType | undefined;
}

/**
 * Describes a model in a generic data schema.
 *
 * @public
 */
export interface CodegenGenericDataModel {
  /**
   * The fields in the generic data model.
   *
   * @public
   */
  fields: Record<string, CodegenGenericDataField> | undefined;

  /**
   * Specifies whether the generic data model is a join table.
   *
   * @public
   */
  isJoinTable?: boolean | undefined;

  /**
   * The primary keys of the generic data model.
   *
   * @public
   */
  primaryKeys: string[] | undefined;
}

/**
 * Describes a non-model in a generic data schema.
 *
 * @public
 */
export interface CodegenGenericDataNonModel {
  /**
   * The fields in a generic data schema non model.
   *
   * @public
   */
  fields: Record<string, CodegenGenericDataField> | undefined;
}

/**
 * Describes the data schema for a code generation job.
 *
 * @public
 */
export interface CodegenJobGenericDataSchema {
  /**
   * The type of the data source for the schema. Currently, the only valid value is an Amplify `DataStore`.
   *
   * @public
   */
  dataSourceType: CodegenJobGenericDataSourceType | undefined;

  /**
   * The name of a `CodegenGenericDataModel`.
   *
   * @public
   */
  models: Record<string, CodegenGenericDataModel> | undefined;

  /**
   * The name of a `CodegenGenericDataEnum`.
   *
   * @public
   */
  enums: Record<string, CodegenGenericDataEnum> | undefined;

  /**
   * The name of a `CodegenGenericDataNonModel`.
   *
   * @public
   */
  nonModels: Record<string, CodegenGenericDataNonModel> | undefined;
}

/**
 * Describes the DataStore configuration for an API for a code generation job.
 *
 * @public
 */
export interface DataStoreRenderConfig {}

/**
 * Describes the GraphQL configuration for an API for a code generation job.
 *
 * @public
 */
export interface GraphQLRenderConfig {
  /**
   * The path to the GraphQL types file, relative to the component output directory.
   *
   * @public
   */
  typesFilePath: string | undefined;

  /**
   * The path to the GraphQL queries file, relative to the component output directory.
   *
   * @public
   */
  queriesFilePath: string | undefined;

  /**
   * The path to the GraphQL mutations file, relative to the component output directory.
   *
   * @public
   */
  mutationsFilePath: string | undefined;

  /**
   * The path to the GraphQL subscriptions file, relative to the component output directory.
   *
   * @public
   */
  subscriptionsFilePath: string | undefined;

  /**
   * The path to the GraphQL fragments file, relative to the component output directory.
   *
   * @public
   */
  fragmentsFilePath: string | undefined;
}

/**
 * Describes the configuration for an application with no API being used.
 *
 * @public
 */
export interface NoApiRenderConfig {}

/**
 * Describes the API configuration for a code generation job.
 *
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
   * The configuration for an application using GraphQL APIs.
   *
   * @public
   */
  export interface GraphQLConfigMember {
    graphQLConfig: GraphQLRenderConfig;
    dataStoreConfig?: never;
    noApiConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an application using DataStore APIs.
   *
   * @public
   */
  export interface DataStoreConfigMember {
    graphQLConfig?: never;
    dataStoreConfig: DataStoreRenderConfig;
    noApiConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an application with no API being used.
   *
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
 * Describes the code generation job configuration for a React project.
 *
 * @public
 */
export interface ReactStartCodegenJobData {
  /**
   * The JavaScript module type.
   *
   * @public
   */
  module?: JSModule | undefined;

  /**
   * The ECMAScript specification to use.
   *
   * @public
   */
  target?: JSTarget | undefined;

  /**
   * The file type to use for a JavaScript project.
   *
   * @public
   */
  script?: JSScript | undefined;

  /**
   * Specifies whether the code generation job should render type declaration files.
   *
   * @public
   */
  renderTypeDeclarations?: boolean | undefined;

  /**
   * Specifies whether the code generation job should render inline source maps.
   *
   * @public
   */
  inlineSourceMap?: boolean | undefined;

  /**
   * The API configuration for the code generation job.
   *
   * @public
   */
  apiConfiguration?: ApiConfiguration | undefined;

  /**
   * Lists the dependency packages that may be required for the project code to run.
   *
   * @public
   */
  dependencies?: Record<string, string> | undefined;
}

/**
 * Describes the configuration information for rendering the UI component associated with the code generation job.
 *
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
   * The name of the `ReactStartCodegenJobData` object.
   *
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
 * Describes the configuration for a code generation job that is associated with an Amplify app.
 *
 * @public
 */
export interface CodegenJob {
  /**
   * The unique ID for the code generation job.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the Amplify app associated with the code generation job.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment associated with the code generation job.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * Describes the configuration information for rendering the UI component associated with the code generation job.
   *
   * @public
   */
  renderConfig?: CodegenJobRenderConfig | undefined;

  /**
   * Describes the data schema for a code generation job.
   *
   * @public
   */
  genericDataSchema?: CodegenJobGenericDataSchema | undefined;

  /**
   * Specifies whether to autogenerate forms in the code generation job.
   *
   * @public
   */
  autoGenerateForms?: boolean | undefined;

  /**
   * Describes the feature flags that you can specify for a code generation job.
   *
   * @public
   */
  features?: CodegenFeatureFlags | undefined;

  /**
   * The status of the code generation job.
   *
   * @public
   */
  status?: CodegenJobStatus | undefined;

  /**
   * The customized status message for the code generation job.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The `CodegenJobAsset` to use for the code generation job.
   *
   * @public
   */
  asset?: CodegenJobAsset | undefined;

  /**
   * One or more key-value pairs to use when tagging the code generation job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The time that the code generation job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time that the code generation job was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * Lists the dependency packages that may be required for the project code to run.
   *
   * @public
   */
  dependencies?: CodegenDependency[] | undefined;
}

/**
 * @public
 */
export interface GetCodegenJobResponse {
  /**
   * The configuration settings for the code generation job.
   *
   * @public
   */
  job?: CodegenJob | undefined;
}

/**
 * @public
 */
export interface ListCodegenJobsRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of jobs to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the basic information about the code generation job.
 *
 * @public
 */
export interface CodegenJobSummary {
  /**
   * The unique ID of the Amplify app associated with the code generation job.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment associated with the code generation job.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID for the code generation job summary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The time that the code generation job summary was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time that the code generation job summary was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCodegenJobsResponse {
  /**
   * The list of code generation jobs for the Amplify app.
   *
   * @public
   */
  entities: CodegenJobSummary[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The code generation job resource configuration.
 *
 * @public
 */
export interface StartCodegenJobData {
  /**
   * The code generation configuration for the codegen job.
   *
   * @public
   */
  renderConfig: CodegenJobRenderConfig | undefined;

  /**
   * The data schema to use for a code generation job.
   *
   * @public
   */
  genericDataSchema?: CodegenJobGenericDataSchema | undefined;

  /**
   * Specifies whether to autogenerate forms in the code generation job.
   *
   * @public
   */
  autoGenerateForms?: boolean | undefined;

  /**
   * The feature flags for a code generation job.
   *
   * @public
   */
  features?: CodegenFeatureFlags | undefined;

  /**
   * One or more key-value pairs to use when tagging the code generation job data.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCodegenJobRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The idempotency token used to ensure that the code generation job request completes only once.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The code generation job resource configuration.
   *
   * @public
   */
  codegenJobToCreate: StartCodegenJobData | undefined;
}

/**
 * @public
 */
export interface StartCodegenJobResponse {
  /**
   * The code generation job for a UI component that is associated with an Amplify app.
   *
   * @public
   */
  entity?: CodegenJob | undefined;
}

/**
 * Describes how to sort the data that you bind to a component.
 *
 * @public
 */
export interface SortProperty {
  /**
   * The field to perform the sort on.
   *
   * @public
   */
  field: string | undefined;

  /**
   * The direction of the sort, either ascending or descending.
   *
   * @public
   */
  direction: SortDirection | undefined;
}

/**
 * Describes the style configuration of a unique variation of a main component.
 *
 * @public
 */
export interface ComponentVariant {
  /**
   * The combination of variants that comprise this variant. You can't specify `tags` as a valid property for `variantValues`.
   *
   * @public
   */
  variantValues?: Record<string, string> | undefined;

  /**
   * The properties of the component variant that can be overriden when customizing an instance of the component. You can't specify `tags` as a valid property for `overrides`.
   *
   * @public
   */
  overrides?: Record<string, Record<string, string>> | undefined;
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * The unique ID of the Amplify app associated with the component to delete.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the component to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportComponentsRequest {
  /**
   * The unique ID of the Amplify app to export components to.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * The unique ID of the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the component.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of components to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a component. This is a read-only data type that is returned by `ListComponents`.
 *
 * @public
 */
export interface ComponentSummary {
  /**
   * The unique ID of the Amplify app associated with the component.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the component.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The component type.
   *
   * @public
   */
  componentType: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * The list of components for the Amplify app.
   *
   * @public
   */
  entities: ComponentSummary[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes the configuration of a request to exchange an access code for a token.
 *
 * @public
 */
export interface ExchangeCodeForTokenRequestBody {
  /**
   * The access code to send in the request.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The location of the application that will receive the access code.
   *
   * @public
   */
  redirectUri: string | undefined;

  /**
   * The ID of the client to request the token from.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * @public
 */
export interface ExchangeCodeForTokenRequest {
  /**
   * The third-party provider for the token. The only valid value is `figma`.
   *
   * @public
   */
  provider: TokenProviders | undefined;

  /**
   * Describes the configuration of the request.
   *
   * @public
   */
  request: ExchangeCodeForTokenRequestBody | undefined;
}

/**
 * @public
 */
export interface ExchangeCodeForTokenResponse {
  /**
   * The access token.
   *
   * @public
   */
  accessToken: string | undefined;

  /**
   * The date and time when the new access token expires.
   *
   * @public
   */
  expiresIn: number | undefined;

  /**
   * The token to use to refresh a previously issued access token that might have expired.
   *
   * @public
   */
  refreshToken: string | undefined;
}

/**
 * Describes the field position.
 *
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
   * The field position is fixed and doesn't change in relation to other fields.
   *
   * @public
   */
  export interface FixedMember {
    fixed: FixedPosition;
    rightOf?: never;
    below?: never;
    $unknown?: never;
  }

  /**
   * The field position is to the right of the field specified by the string.
   *
   * @public
   */
  export interface RightOfMember {
    fixed?: never;
    rightOf: string;
    below?: never;
    $unknown?: never;
  }

  /**
   * The field position is below the field specified by the string.
   *
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
 * Describes the configuration for a button UI element that is a part of a form.
 *
 * @public
 */
export interface FormButton {
  /**
   * Specifies whether the button is visible on the form.
   *
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * Describes the button's properties.
   *
   * @public
   */
  children?: string | undefined;

  /**
   * The position of the button.
   *
   * @public
   */
  position?: FieldPosition | undefined;
}

/**
 * Describes the call to action button configuration for the form.
 *
 * @public
 */
export interface FormCTA {
  /**
   * The position of the button.
   *
   * @public
   */
  position?: FormButtonsPosition | undefined;

  /**
   * Displays a clear button.
   *
   * @public
   */
  clear?: FormButton | undefined;

  /**
   * Displays a cancel button.
   *
   * @public
   */
  cancel?: FormButton | undefined;

  /**
   * Displays a submit button.
   *
   * @public
   */
  submit?: FormButton | undefined;
}

/**
 * Describes the data type configuration for the data source associated with a form.
 *
 * @public
 */
export interface FormDataTypeConfig {
  /**
   * The data source type, either an Amplify DataStore model or a custom data type.
   *
   * @public
   */
  dataSourceType: FormDataSourceType | undefined;

  /**
   * The unique name of the data type you are using as the data source for the form.
   *
   * @public
   */
  dataTypeName: string | undefined;
}

/**
 * Describes the configuration for the file uploader field.
 *
 * @public
 */
export interface FileUploaderFieldConfig {
  /**
   * The access level to assign to the uploaded files in the Amazon S3 bucket where they are stored. The valid values for this property are `private`, `protected`, or `public`. For detailed information about the permissions associated with each access level, see [File access levels](https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js/) in the *Amplify documentation*.
   *
   * @public
   */
  accessLevel: StorageAccessLevel | undefined;

  /**
   * The file types that are allowed to be uploaded by the file uploader. Provide this information in an array of strings specifying the valid file extensions.
   *
   * @public
   */
  acceptedFileTypes: string[] | undefined;

  /**
   * Specifies whether to display or hide the image preview after selecting a file for upload. The default value is `true` to display the image preview.
   *
   * @public
   */
  showThumbnails?: boolean | undefined;

  /**
   * Allows the file upload operation to be paused and resumed. The default value is `false`.
   *
   * When `isResumable` is set to `true`, the file uploader uses a multipart upload to break the files into chunks before upload. The progress of the upload isn't continuous, because the file uploader uploads a chunk at a time.
   *
   * @public
   */
  isResumable?: boolean | undefined;

  /**
   * Specifies the maximum number of files that can be selected to upload. The default value is an unlimited number of files.
   *
   * @public
   */
  maxFileCount?: number | undefined;

  /**
   * The maximum file size in bytes that the file uploader will accept. The default value is an unlimited file size.
   *
   * @public
   */
  maxSize?: number | undefined;
}

/**
 * Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amplify DataStore model.
 *
 * @public
 */
export interface FormInputBindingPropertiesValueProperties {
  /**
   * An Amplify DataStore model.
   *
   * @public
   */
  model?: string | undefined;
}

/**
 * Represents the data binding configuration for a form's input fields at runtime.You can use `FormInputBindingPropertiesValue` to add exposed properties to a form to allow different values to be entered when a form is reused in different places in an app.
 *
 * @public
 */
export interface FormInputBindingPropertiesValue {
  /**
   * The property type.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * Describes the properties to customize with data at runtime.
   *
   * @public
   */
  bindingProperties?: FormInputBindingPropertiesValueProperties | undefined;
}

/**
 * Associates a form property to a binding property. This enables exposed properties on the top level form to propagate data to the form's property values.
 *
 * @public
 */
export interface FormInputValuePropertyBindingProperties {
  /**
   * The form property to bind to the data field.
   *
   * @public
   */
  property: string | undefined;

  /**
   * The data field to bind the property to.
   *
   * @public
   */
  field?: string | undefined;
}

/**
 * Describes the validation configuration for a field.
 *
 * @public
 */
export interface FieldValidationConfiguration {
  /**
   * The validation to perform on an object type.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The validation to perform on a string value.
   *
   * @public
   */
  strValues?: string[] | undefined;

  /**
   * The validation to perform on a number value.
   *
   * @public
   */
  numValues?: number[] | undefined;

  /**
   * The validation message to display.
   *
   * @public
   */
  validationMessage?: string | undefined;
}

/**
 * Stores the configuration information for a visual helper element for a form. A sectional element can be a header, a text block, or a divider. These elements are static and not associated with any data.
 *
 * @public
 */
export interface SectionalElement {
  /**
   * The type of sectional element. Valid values are `Heading`, `Text`, and `Divider`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * Specifies the position of the text in a field for a `Text` sectional element.
   *
   * @public
   */
  position?: FieldPosition | undefined;

  /**
   * The text for a `Text` sectional element.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Specifies the size of the font for a `Heading` sectional element. Valid values are `1 | 2 | 3 | 4 | 5 | 6`.
   *
   * @public
   */
  level?: number | undefined;

  /**
   * Specifies the orientation for a `Divider` sectional element. Valid values are `horizontal` or `vertical`.
   *
   * @public
   */
  orientation?: string | undefined;

  /**
   * Excludes a sectional element that was generated by default for a specified data model.
   *
   * @public
   */
  excluded?: boolean | undefined;
}

/**
 * Describes the configuration settings for the form's style properties.
 *
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
   * A reference to a design token to use to bind the form's style properties to an existing theme.
   *
   * @public
   */
  export interface TokenReferenceMember {
    tokenReference: string;
    value?: never;
    $unknown?: never;
  }

  /**
   * The value of the style setting.
   *
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
 * Describes the configuration for the form's style.
 *
 * @public
 */
export interface FormStyle {
  /**
   * The spacing for the horizontal gap.
   *
   * @public
   */
  horizontalGap?: FormStyleConfig | undefined;

  /**
   * The spacing for the vertical gap.
   *
   * @public
   */
  verticalGap?: FormStyleConfig | undefined;

  /**
   * The size of the outer padding for the form.
   *
   * @public
   */
  outerPadding?: FormStyleConfig | undefined;
}

/**
 * @public
 */
export interface DeleteFormRequest {
  /**
   * The unique ID of the Amplify app associated with the form to delete.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the form to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportFormsRequest {
  /**
   * The unique ID of the Amplify app to export forms to.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFormRequest {
  /**
   * The unique ID of the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the form.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListFormsRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of forms to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes the basic information about a form.
 *
 * @public
 */
export interface FormSummary {
  /**
   * The unique ID for the app associated with the form summary.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The form's data source type.
   *
   * @public
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The type of operation to perform on the form.
   *
   * @public
   */
  formActionType: FormActionType | undefined;

  /**
   * The ID of the form.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the form.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListFormsResponse {
  /**
   * The list of forms for the Amplify app.
   *
   * @public
   */
  entities: FormSummary[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataRequest {
  /**
   * The unique ID of the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataResponse {
  /**
   * Represents the configuration settings for the features metadata.
   *
   * @public
   */
  features: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to list tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tag key value pairs for a specified Amazon Resource Name (ARN).
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Stores the metadata information about a feature on a form.
 *
 * @public
 */
export interface PutMetadataFlagBody {
  /**
   * The new information to store.
   *
   * @public
   */
  newValue: string | undefined;
}

/**
 * @public
 */
export interface PutMetadataFlagRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the feature associated with the metadata.
   *
   * @public
   */
  featureName: string | undefined;

  /**
   * The metadata information to store.
   *
   * @public
   */
  body: PutMetadataFlagBody | undefined;
}

/**
 * Describes a refresh token.
 *
 * @public
 */
export interface RefreshTokenRequestBody {
  /**
   * The token to use to refresh a previously issued access token that might have expired.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The ID of the client to request the token from.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * @public
 */
export interface RefreshTokenRequest {
  /**
   * The third-party provider for the token. The only valid value is `figma`.
   *
   * @public
   */
  provider: TokenProviders | undefined;

  /**
   * Information about the refresh token request.
   *
   * @public
   */
  refreshTokenBody: RefreshTokenRequestBody | undefined;
}

/**
 * @public
 */
export interface RefreshTokenResponse {
  /**
   * The access token.
   *
   * @public
   */
  accessToken: string | undefined;

  /**
   * The date and time when the new access token expires.
   *
   * @public
   */
  expiresIn: number | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to tag a resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag key value pairs for a specified Amazon Resource Name (ARN).
   *
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
   * The unique ID of the Amplify app associated with the theme to delete.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the theme to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportThemesRequest {
  /**
   * The unique ID of the Amplify app to export the themes to.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetThemeRequest {
  /**
   * The unique ID of the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID for the theme.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of theme results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes the basic information about a theme.
 *
 * @public
 */
export interface ThemeSummary {
  /**
   * The unique ID for the app associated with the theme summary.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The ID of the theme.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the theme.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * The list of themes for the Amplify app.
   *
   * @public
   */
  entities: ThemeSummary[] | undefined;

  /**
   * The pagination token that's returned if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to untag a resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to use to untag a resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Describes the configuration for an input field on a form. Use `FormInputValueProperty` to specify the values to render or bind by default.
 *
 * @public
 */
export interface FormInputValueProperty {
  /**
   * The value to assign to the input field.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The information to bind fields to data at runtime.
   *
   * @public
   */
  bindingProperties?: FormInputValuePropertyBindingProperties | undefined;

  /**
   * A list of form properties to concatenate to create the value to assign to this field property.
   *
   * @public
   */
  concat?: FormInputValueProperty[] | undefined;
}

/**
 * Describes the configuration of a theme's properties.
 *
 * @public
 */
export interface ThemeValue {
  /**
   * The value of a theme property.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * A list of key-value pairs that define the theme's properties.
   *
   * @public
   */
  children?: ThemeValues[] | undefined;
}

/**
 * A key-value pair that defines a property of a theme.
 *
 * @public
 */
export interface ThemeValues {
  /**
   * The name of the property.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value of the property.
   *
   * @public
   */
  value?: ThemeValue | undefined;
}

/**
 * Stores information for generating Amplify DataStore queries. Use a `Predicate` to retrieve a subset of the data in a collection.
 *
 * @public
 */
export interface Predicate {
  /**
   * A list of predicates to combine logically.
   *
   * @public
   */
  or?: Predicate[] | undefined;

  /**
   * A list of predicates to combine logically.
   *
   * @public
   */
  and?: Predicate[] | undefined;

  /**
   * The field to query.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * The operator to use to perform the evaluation.
   *
   * @public
   */
  operator?: string | undefined;

  /**
   * The value to use when performing the evaluation.
   *
   * @public
   */
  operand?: string | undefined;

  /**
   * The type of value to use when performing the evaluation.
   *
   * @public
   */
  operandType?: string | undefined;
}

/**
 * Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amazon S3 bucket, an Amplify DataStore model or an authenticated user attribute.
 *
 * @public
 */
export interface ComponentBindingPropertiesValueProperties {
  /**
   * An Amplify DataStore model.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The field to bind the data to.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * A list of predicates for binding a component's properties to data.
   *
   * @public
   */
  predicates?: Predicate[] | undefined;

  /**
   * An authenticated user attribute.
   *
   * @public
   */
  userAttribute?: string | undefined;

  /**
   * An Amazon S3 bucket.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The storage key for an Amazon S3 bucket.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The default value to assign to the property.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The name of a component slot.
   *
   * @public
   */
  slotName?: string | undefined;
}

/**
 * Describes the configuration for binding a component's properties to data.
 *
 * @public
 */
export interface ComponentDataConfiguration {
  /**
   * The name of the data model to use to bind data to a component.
   *
   * @public
   */
  model: string | undefined;

  /**
   * Describes how to sort the component's properties.
   *
   * @public
   */
  sort?: SortProperty[] | undefined;

  /**
   * Represents the conditional logic to use when binding data to a component. Use this property to retrieve only a subset of the data in a collection.
   *
   * @public
   */
  predicate?: Predicate | undefined;

  /**
   * A list of IDs to use to bind data to a component. Use this property to bind specifically chosen data, rather than data retrieved from a query.
   *
   * @public
   */
  identifiers?: string[] | undefined;
}

/**
 * Describes the configuration for all of a component's properties. Use `ComponentProperty` to specify the values to render or bind by default.
 *
 * @public
 */
export interface ComponentProperty {
  /**
   * The value to assign to the component property.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The information to bind the component property to data at runtime.
   *
   * @public
   */
  bindingProperties?: ComponentPropertyBindingProperties | undefined;

  /**
   * The information to bind the component property to data at runtime. Use this for collection components.
   *
   * @public
   */
  collectionBindingProperties?: ComponentPropertyBindingProperties | undefined;

  /**
   * The default value to assign to the component property.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The data model to use to assign a value to the component property.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The information to bind the component property to form data.
   *
   * @public
   */
  bindings?: Record<string, FormBindingElement> | undefined;

  /**
   * An event that occurs in your app. Use this for workflow data binding.
   *
   * @public
   */
  event?: string | undefined;

  /**
   * An authenticated user attribute to use to assign a value to the component property.
   *
   * @public
   */
  userAttribute?: string | undefined;

  /**
   * A list of component properties to concatenate to create the value to assign to this component property.
   *
   * @public
   */
  concat?: ComponentProperty[] | undefined;

  /**
   * The conditional expression to use to assign a value to the component property.
   *
   * @public
   */
  condition?: ComponentConditionProperty | undefined;

  /**
   * Specifies whether the user configured the property in Amplify Studio after importing it.
   *
   * @public
   */
  configured?: boolean | undefined;

  /**
   * The component type.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The default value assigned to the property when the component is imported into an app.
   *
   * @public
   */
  importedValue?: string | undefined;

  /**
   * The name of the component that is affected by an event.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The name of the component's property that is affected by an event.
   *
   * @public
   */
  property?: string | undefined;
}

/**
 * Associates a complex object with a display value. Use `ValueMapping` to store how to represent complex objects when they are displayed.
 *
 * @public
 */
export interface ValueMapping {
  /**
   * The value to display for the complex object.
   *
   * @public
   */
  displayValue?: FormInputValueProperty | undefined;

  /**
   * The complex object.
   *
   * @public
   */
  value: FormInputValueProperty | undefined;
}

/**
 * Represents the data binding configuration for a component at runtime. You can use `ComponentBindingPropertiesValue` to add exposed properties to a component to allow different values to be entered when a component is reused in different places in an app.
 *
 * @public
 */
export interface ComponentBindingPropertiesValue {
  /**
   * The property type.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * Describes the properties to customize with data at runtime.
   *
   * @public
   */
  bindingProperties?: ComponentBindingPropertiesValueProperties | undefined;

  /**
   * The default value of the property.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * Represents all of the information that is required to create a theme.
 *
 * @public
 */
export interface CreateThemeData {
  /**
   * The name of the theme.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A list of key-value pairs that deﬁnes the properties of the theme.
   *
   * @public
   */
  values: ThemeValues[] | undefined;

  /**
   * Describes the properties that can be overriden to customize an instance of the theme.
   *
   * @public
   */
  overrides?: ThemeValues[] | undefined;

  /**
   * One or more key-value pairs to use when tagging the theme data.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A theme is a collection of style settings that apply globally to the components associated with an Amplify application.
 *
 * @public
 */
export interface Theme {
  /**
   * The unique ID for the Amplify app associated with the theme.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The ID for the theme.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the theme.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time that the theme was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time that the theme was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * A list of key-value pairs that defines the properties of the theme.
   *
   * @public
   */
  values: ThemeValues[] | undefined;

  /**
   * Describes the properties that can be overriden to customize a theme.
   *
   * @public
   */
  overrides?: ThemeValues[] | undefined;

  /**
   * One or more key-value pairs to use when tagging the theme.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Saves the data binding information for a theme.
 *
 * @public
 */
export interface UpdateThemeData {
  /**
   * The unique ID of the theme to update.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the theme to update.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A list of key-value pairs that define the theme's properties.
   *
   * @public
   */
  values: ThemeValues[] | undefined;

  /**
   * Describes the properties that can be overriden to customize the theme.
   *
   * @public
   */
  overrides?: ThemeValues[] | undefined;
}

/**
 * Represents the state configuration when an action modifies a property of another element within the same component.
 *
 * @public
 */
export interface MutationActionSetStateParameter {
  /**
   * The name of the component that is being modified.
   *
   * @public
   */
  componentName: string | undefined;

  /**
   * The name of the component property to apply the state configuration to.
   *
   * @public
   */
  property: string | undefined;

  /**
   * The state configuration to assign to the property.
   *
   * @public
   */
  set: ComponentProperty | undefined;
}

/**
 * Represents a conditional expression to set a component property. Use `ComponentConditionProperty` to set a property to different values conditionally, based on the value of another property.
 *
 * @public
 */
export interface ComponentConditionProperty {
  /**
   * The name of the conditional property.
   *
   * @public
   */
  property?: string | undefined;

  /**
   * The name of a field. Specify this when the property is a data model.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * The operator to use to perform the evaluation, such as `eq` to represent equals.
   *
   * @public
   */
  operator?: string | undefined;

  /**
   * The value of the property to evaluate.
   *
   * @public
   */
  operand?: string | undefined;

  /**
   * The value to assign to the property if the condition is met.
   *
   * @public
   */
  then?: ComponentProperty | undefined;

  /**
   * The value to assign to the property if the condition is not met.
   *
   * @public
   */
  else?: ComponentProperty | undefined;

  /**
   * The type of the property to evaluate.
   *
   * @public
   */
  operandType?: string | undefined;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * The unique ID of the Amplify app associated with the theme.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Represents the configuration of the theme to create.
   *
   * @public
   */
  themeToCreate: CreateThemeData | undefined;
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * Describes the configuration of the new theme.
   *
   * @public
   */
  entity?: Theme | undefined;
}

/**
 * @public
 */
export interface GetThemeResponse {
  /**
   * Represents the configuration settings for the theme.
   *
   * @public
   */
  theme?: Theme | undefined;
}

/**
 * @public
 */
export interface UpdateThemeRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID for the theme.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration of the updated theme.
   *
   * @public
   */
  updatedTheme: UpdateThemeData | undefined;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * Describes the configuration of the updated theme.
   *
   * @public
   */
  entity?: Theme | undefined;
}

/**
 * Represents the data binding configuration for a value map.
 *
 * @public
 */
export interface ValueMappings {
  /**
   * The value and display value pairs.
   *
   * @public
   */
  values: ValueMapping[] | undefined;

  /**
   * The information to bind fields to data at runtime.
   *
   * @public
   */
  bindingProperties?: Record<string, FormInputBindingPropertiesValue> | undefined;
}

/**
 * @public
 */
export interface ExportThemesResponse {
  /**
   * Represents the configuration of the exported themes.
   *
   * @public
   */
  entities: Theme[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes the configuration for the default input values to display for a field.
 *
 * @public
 */
export interface FieldInputConfig {
  /**
   * The input type for the field.
   *
   * @public
   */
  type: string | undefined;

  /**
   * Specifies a field that requires input.
   *
   * @public
   */
  required?: boolean | undefined;

  /**
   * Specifies a read only field.
   *
   * @public
   */
  readOnly?: boolean | undefined;

  /**
   * The text to display as a placeholder for the field.
   *
   * @public
   */
  placeholder?: string | undefined;

  /**
   * The default value for the field.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The text to display to describe the field.
   *
   * @public
   */
  descriptiveText?: string | undefined;

  /**
   * Specifies whether a field has a default value.
   *
   * @public
   */
  defaultChecked?: boolean | undefined;

  /**
   * The default country code for a phone number.
   *
   * @public
   */
  defaultCountryCode?: string | undefined;

  /**
   * The information to use to customize the input fields with data at runtime.
   *
   * @public
   */
  valueMappings?: ValueMappings | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The minimum value to display for the field.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * The maximum value to display for the field.
   *
   * @public
   */
  maxValue?: number | undefined;

  /**
   * The stepping increment for a numeric value in a field.
   *
   * @public
   */
  step?: number | undefined;

  /**
   * The value for the field.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * Specifies whether to render the field as an array. This property is ignored if the `dataSourceType` for the form is a Data Store.
   *
   * @public
   */
  isArray?: boolean | undefined;

  /**
   * The configuration for the file uploader field.
   *
   * @public
   */
  fileUploaderConfig?: FileUploaderFieldConfig | undefined;
}

/**
 * Describes the configuration information for a field in a table.
 *
 * @public
 */
export interface FieldConfig {
  /**
   * The label for the field.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * Specifies the field position.
   *
   * @public
   */
  position?: FieldPosition | undefined;

  /**
   * Specifies whether to hide a field.
   *
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * Describes the configuration for the default input value to display for a field.
   *
   * @public
   */
  inputType?: FieldInputConfig | undefined;

  /**
   * The validations to perform on the value in the field.
   *
   * @public
   */
  validations?: FieldValidationConfiguration[] | undefined;
}

/**
 * Represents all of the information that is required to create a form.
 *
 * @public
 */
export interface CreateFormData {
  /**
   * The name of the form.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of data source to use to create the form.
   *
   * @public
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * Specifies whether to perform a create or update action on the form.
   *
   * @public
   */
  formActionType: FormActionType | undefined;

  /**
   * The configuration information for the form's fields.
   *
   * @public
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * The configuration for the form's style.
   *
   * @public
   */
  style: FormStyle | undefined;

  /**
   * The configuration information for the visual helper elements for the form. These elements are not associated with any data.
   *
   * @public
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * The schema version of the form.
   *
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * The `FormCTA` object that stores the call to action configuration for the form.
   *
   * @public
   */
  cta?: FormCTA | undefined;

  /**
   * One or more key-value pairs to use when tagging the form data.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies an icon or decoration to display on the form.
   *
   * @public
   */
  labelDecorator?: LabelDecorator | undefined;
}

/**
 * Contains the configuration settings for a `Form` user interface (UI) element for an Amplify app. A form is a component you can add to your project by specifying a data source as the default configuration for the form.
 *
 * @public
 */
export interface Form {
  /**
   * The unique ID of the Amplify app associated with the form.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the form.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the form.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The operation to perform on the specified form.
   *
   * @public
   */
  formActionType: FormActionType | undefined;

  /**
   * Stores the configuration for the form's style.
   *
   * @public
   */
  style: FormStyle | undefined;

  /**
   * The type of data source to use to create the form.
   *
   * @public
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * Stores the information about the form's fields.
   *
   * @public
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * Stores the visual helper elements for the form that are not associated with any data.
   *
   * @public
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * The schema version of the form when it was imported.
   *
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * One or more key-value pairs to use when tagging the form.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Stores the call to action configuration for the form.
   *
   * @public
   */
  cta?: FormCTA | undefined;

  /**
   * Specifies an icon or decoration to display on the form.
   *
   * @public
   */
  labelDecorator?: LabelDecorator | undefined;
}

/**
 * Updates and saves all of the information about a form, based on form ID.
 *
 * @public
 */
export interface UpdateFormData {
  /**
   * The name of the form.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of data source to use to create the form.
   *
   * @public
   */
  dataType?: FormDataTypeConfig | undefined;

  /**
   * Specifies whether to perform a create or update action on the form.
   *
   * @public
   */
  formActionType?: FormActionType | undefined;

  /**
   * The configuration information for the form's fields.
   *
   * @public
   */
  fields?: Record<string, FieldConfig> | undefined;

  /**
   * The configuration for the form's style.
   *
   * @public
   */
  style?: FormStyle | undefined;

  /**
   * The configuration information for the visual helper elements for the form. These elements are not associated with any data.
   *
   * @public
   */
  sectionalElements?: Record<string, SectionalElement> | undefined;

  /**
   * The schema version of the form.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The `FormCTA` object that stores the call to action configuration for the form.
   *
   * @public
   */
  cta?: FormCTA | undefined;

  /**
   * Specifies an icon or decoration to display on the form.
   *
   * @public
   */
  labelDecorator?: LabelDecorator | undefined;
}

/**
 * @public
 */
export interface CreateFormRequest {
  /**
   * The unique ID of the Amplify app to associate with the form.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Represents the configuration of the form to create.
   *
   * @public
   */
  formToCreate: CreateFormData | undefined;
}

/**
 * @public
 */
export interface CreateFormResponse {
  /**
   * Describes the configuration of the new form.
   *
   * @public
   */
  entity?: Form | undefined;
}

/**
 * @public
 */
export interface GetFormResponse {
  /**
   * Represents the configuration settings for the form.
   *
   * @public
   */
  form?: Form | undefined;
}

/**
 * @public
 */
export interface UpdateFormRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID for the form.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The request accepts the following data in JSON format.
   *
   * @public
   */
  updatedForm: UpdateFormData | undefined;
}

/**
 * @public
 */
export interface UpdateFormResponse {
  /**
   * Describes the configuration of the updated form.
   *
   * @public
   */
  entity?: Form | undefined;
}

/**
 * @public
 */
export interface ExportFormsResponse {
  /**
   * Represents the configuration of the exported forms.
   *
   * @public
   */
  entities: Form[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the event action configuration for an element of a `Component` or `ComponentChild`. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components. `ActionParameters` defines the action that is performed when an event occurs on the component.
 *
 * @public
 */
export interface ActionParameters {
  /**
   * The type of navigation action. Valid values are `url` and `anchor`. This value is required for a navigation action.
   *
   * @public
   */
  type?: ComponentProperty | undefined;

  /**
   * The URL to the location to open. Specify this value for a navigation action.
   *
   * @public
   */
  url?: ComponentProperty | undefined;

  /**
   * The HTML anchor link to the location to open. Specify this value for a navigation action.
   *
   * @public
   */
  anchor?: ComponentProperty | undefined;

  /**
   * The element within the same component to modify when the action occurs.
   *
   * @public
   */
  target?: ComponentProperty | undefined;

  /**
   * Specifies whether the user should be signed out globally. Specify this value for an auth sign out action.
   *
   * @public
   */
  global?: ComponentProperty | undefined;

  /**
   * The name of the data model. Use when the action performs an operation on an Amplify DataStore model.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The unique ID of the component that the `ActionParameters` apply to.
   *
   * @public
   */
  id?: ComponentProperty | undefined;

  /**
   * A dictionary of key-value pairs mapping Amplify Studio properties to fields in a data model. Use when the action performs an operation on an Amplify DataStore model.
   *
   * @public
   */
  fields?: Record<string, ComponentProperty> | undefined;

  /**
   * A key-value pair that specifies the state property name and its initial value.
   *
   * @public
   */
  state?: MutationActionSetStateParameter | undefined;
}

/**
 * Describes the configuration of an event. You can bind an event and a corresponding action to a `Component` or a `ComponentChild`. A button click is an example of an event.
 *
 * @public
 */
export interface ComponentEvent {
  /**
   * The action to perform when a specific event is raised.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * Describes information about the action.
   *
   * @public
   */
  parameters?: ActionParameters | undefined;

  /**
   * Binds an event to an action on a component. When you specify a `bindingEvent`, the event is called when the action is performed.
   *
   * @public
   */
  bindingEvent?: string | undefined;
}

/**
 * A nested UI configuration within a parent `Component`.
 *
 * @public
 */
export interface ComponentChild {
  /**
   * The type of the child component.
   *
   * @public
   */
  componentType: string | undefined;

  /**
   * The name of the child component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Describes the properties of the child component. You can't specify `tags` as a valid property for `properties`.
   *
   * @public
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * The list of `ComponentChild` instances for this component.
   *
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * Describes the events that can be raised on the child component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
   *
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * The unique ID of the child component in its original source system, such as Figma.
   *
   * @public
   */
  sourceId?: string | undefined;
}

/**
 * Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use `ComponentChild` to configure an instance of a `Component`. A `ComponentChild` instance inherits the configuration of the main `Component`.
 *
 * @public
 */
export interface Component {
  /**
   * The unique ID of the Amplify app associated with the component.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID of the component in its original source system, such as Figma.
   *
   * @public
   */
  sourceId?: string | undefined;

  /**
   * The unique ID of the component.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the component. This can be an Amplify custom UI component or another custom component.
   *
   * @public
   */
  componentType: string | undefined;

  /**
   * Describes the component's properties. You can't specify `tags` as a valid property for `properties`.
   *
   * @public
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * A list of the component's `ComponentChild` instances.
   *
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * A list of the component's variants. A variant is a unique style configuration of a main component.
   *
   * @public
   */
  variants: ComponentVariant[] | undefined;

  /**
   * Describes the component's properties that can be overriden in a customized instance of the component. You can't specify `tags` as a valid property for `overrides`.
   *
   * @public
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * The information to connect a component's properties to data at runtime. You can't specify `tags` as a valid property for `bindingProperties`.
   *
   * @public
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * The data binding configuration for the component's properties. Use this for a collection component. You can't specify `tags` as a valid property for `collectionProperties`.
   *
   * @public
   */
  collectionProperties?: Record<string, ComponentDataConfiguration> | undefined;

  /**
   * The time that the component was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time that the component was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * One or more key-value pairs to use when tagging the component.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Describes the events that can be raised on the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
   *
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * The schema version of the component when it was imported.
   *
   * @public
   */
  schemaVersion?: string | undefined;
}

/**
 * Represents all of the information that is required to create a component.
 *
 * @public
 */
export interface CreateComponentData {
  /**
   * The name of the component
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique ID of the component in its original source system, such as Figma.
   *
   * @public
   */
  sourceId?: string | undefined;

  /**
   * The component type. This can be an Amplify custom UI component or another custom component.
   *
   * @public
   */
  componentType: string | undefined;

  /**
   * Describes the component's properties.
   *
   * @public
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * A list of child components that are instances of the main component.
   *
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * A list of the unique variants of this component.
   *
   * @public
   */
  variants: ComponentVariant[] | undefined;

  /**
   * Describes the component properties that can be overriden to customize an instance of the component.
   *
   * @public
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * The data binding information for the component's properties.
   *
   * @public
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * The data binding configuration for customizing a component's properties. Use this for a collection component.
   *
   * @public
   */
  collectionProperties?: Record<string, ComponentDataConfiguration> | undefined;

  /**
   * One or more key-value pairs to use when tagging the component data.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
   *
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * The schema version of the component when it was imported.
   *
   * @public
   */
  schemaVersion?: string | undefined;
}

/**
 * Updates and saves all of the information about a component, based on component ID.
 *
 * @public
 */
export interface UpdateComponentData {
  /**
   * The unique ID of the component to update.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the component to update.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique ID of the component in its original source system, such as Figma.
   *
   * @public
   */
  sourceId?: string | undefined;

  /**
   * The type of the component. This can be an Amplify custom UI component or another custom component.
   *
   * @public
   */
  componentType?: string | undefined;

  /**
   * Describes the component's properties.
   *
   * @public
   */
  properties?: Record<string, ComponentProperty> | undefined;

  /**
   * The components that are instances of the main component.
   *
   * @public
   */
  children?: ComponentChild[] | undefined;

  /**
   * A list of the unique variants of the main component being updated.
   *
   * @public
   */
  variants?: ComponentVariant[] | undefined;

  /**
   * Describes the properties that can be overriden to customize the component.
   *
   * @public
   */
  overrides?: Record<string, Record<string, string>> | undefined;

  /**
   * The data binding information for the component's properties.
   *
   * @public
   */
  bindingProperties?: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * The configuration for binding a component's properties to a data model. Use this for a collection component.
   *
   * @public
   */
  collectionProperties?: Record<string, ComponentDataConfiguration> | undefined;

  /**
   * The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
   *
   * @public
   */
  events?: Record<string, ComponentEvent> | undefined;

  /**
   * The schema version of the component when it was imported.
   *
   * @public
   */
  schemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * The unique ID of the Amplify app to associate with the component.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Represents the configuration of the component to create.
   *
   * @public
   */
  componentToCreate: CreateComponentData | undefined;
}

/**
 * @public
 */
export interface CreateComponentResponse {
  /**
   * Describes the configuration of the new component.
   *
   * @public
   */
  entity?: Component | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * Represents the configuration settings for the component.
   *
   * @public
   */
  component?: Component | undefined;
}

/**
 * @public
 */
export interface UpdateComponentRequest {
  /**
   * The unique ID for the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment that is part of the Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The unique ID for the component.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration of the updated component.
   *
   * @public
   */
  updatedComponent: UpdateComponentData | undefined;
}

/**
 * @public
 */
export interface UpdateComponentResponse {
  /**
   * Describes the configuration of the updated component.
   *
   * @public
   */
  entity?: Component | undefined;
}

/**
 * @public
 */
export interface ExportComponentsResponse {
  /**
   * Represents the configuration of the exported components.
   *
   * @public
   */
  entities: Component[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}
