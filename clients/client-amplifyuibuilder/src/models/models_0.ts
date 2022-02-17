import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { AmplifyUIBuilderServiceException as __BaseException } from "./AmplifyUIBuilderServiceException";

/**
 * <p>Associates a component property to a binding property. This enables exposed properties on
 *       the top level component to propagate data to the component's property values.</p>
 */
export interface ComponentPropertyBindingProperties {
  /**
   * <p>The component property to bind to the data field.</p>
   */
  property: string | undefined;

  /**
   * <p>The data field to bind the property to.</p>
   */
  field?: string;
}

export namespace ComponentPropertyBindingProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentPropertyBindingProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes how to bind a component property to form data.</p>
 */
export interface FormBindingElement {
  /**
   * <p>The name of the component to retrieve a value from.</p>
   */
  element: string | undefined;

  /**
   * <p>The property to retrieve a value from.</p>
   */
  property: string | undefined;
}

export namespace FormBindingElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FormBindingElement): any => ({
    ...obj,
  });
}

export type SortDirection = "ASC" | "DESC";

/**
 * <p>Describes how to sort the data that you bind to a component.</p>
 */
export interface SortProperty {
  /**
   * <p>The field to perform the sort on.</p>
   */
  field: string | undefined;

  /**
   * <p>The direction of the sort, either ascending or descending.</p>
   */
  direction: SortDirection | string | undefined;
}

export namespace SortProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the style configuration of a unique variation of a main component.</p>
 */
export interface ComponentVariant {
  /**
   * <p>The combination of variants that comprise this variant.</p>
   */
  variantValues?: { [key: string]: string };

  /**
   * <p>The properties of the component variant that can be overriden when customizing an instance
   *       of the component.</p>
   */
  overrides?: { [key: string]: { [key: string]: string } };
}

export namespace ComponentVariant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentVariant): any => ({
    ...obj,
  });
}

/**
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

export interface DeleteComponentRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the component to delete.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component to delete.</p>
   */
  id: string | undefined;
}

export namespace DeleteComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentRequest): any => ({
    ...obj,
  });
}

/**
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

export interface ExportComponentsRequest {
  /**
   * <p>The unique ID of the Amplify app to export components to.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;
}

export namespace ExportComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportComponentsRequest): any => ({
    ...obj,
  });
}

export interface GetComponentRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component.</p>
   */
  id: string | undefined;
}

export namespace GetComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentRequest): any => ({
    ...obj,
  });
}

export interface ListComponentsRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of components to retrieve.</p>
   */
  maxResults?: number;
}

export namespace ListComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of a component. This is a read-only data type that is returned by
 *         <code>ListComponents</code>.</p>
 */
export interface ComponentSummary {
  /**
   * <p>The unique ID of the Amplify app associated with the component.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The component type.</p>
   */
  componentType: string | undefined;
}

export namespace ComponentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentSummary): any => ({
    ...obj,
  });
}

export interface ListComponentsResponse {
  /**
   * <p>The list of components for the Amplify app.</p>
   */
  entities: ComponentSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

export namespace ListComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentsResponse): any => ({
    ...obj,
  });
}

export enum TokenProviders {
  /**
   * The figma token provider.
   */
  FIGMA = "figma",
}

/**
 * <p>Describes the configuration of a request to exchange an access code for a token.</p>
 */
export interface ExchangeCodeForTokenRequestBody {
  /**
   * <p>The access code to send in the request.</p>
   */
  code: string | undefined;

  /**
   * <p>The location of the application that will receive the access code.</p>
   */
  redirectUri: string | undefined;
}

export namespace ExchangeCodeForTokenRequestBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExchangeCodeForTokenRequestBody): any => ({
    ...obj,
    ...(obj.code && { code: SENSITIVE_STRING }),
  });
}

export interface ExchangeCodeForTokenRequest {
  /**
   * <p>The third-party provider for the token. The only valid value is <code>figma</code>.</p>
   */
  provider: TokenProviders | string | undefined;

  /**
   * <p>Describes the configuration of the request.</p>
   */
  request: ExchangeCodeForTokenRequestBody | undefined;
}

export namespace ExchangeCodeForTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExchangeCodeForTokenRequest): any => ({
    ...obj,
    ...(obj.request && { request: ExchangeCodeForTokenRequestBody.filterSensitiveLog(obj.request) }),
  });
}

export interface ExchangeCodeForTokenResponse {
  /**
   * <p>The access token.</p>
   */
  accessToken: string | undefined;

  /**
   * <p>The date and time when the new access token expires.</p>
   */
  expiresIn: number | undefined;

  /**
   * <p>The token to use to refresh a previously issued access token that might have
   *       expired.</p>
   */
  refreshToken: string | undefined;
}

export namespace ExchangeCodeForTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExchangeCodeForTokenResponse): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a refresh token.</p>
 */
export interface RefreshTokenRequestBody {
  /**
   * <p>The token to use to refresh a previously issued access token that might have
   *       expired.</p>
   */
  token: string | undefined;
}

export namespace RefreshTokenRequestBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RefreshTokenRequestBody): any => ({
    ...obj,
    ...(obj.token && { token: SENSITIVE_STRING }),
  });
}

export interface RefreshTokenRequest {
  /**
   * <p>The third-party provider for the token. The only valid value is <code>figma</code>.</p>
   */
  provider: TokenProviders | string | undefined;

  /**
   * <p>Information about the refresh token request.</p>
   */
  refreshTokenBody: RefreshTokenRequestBody | undefined;
}

export namespace RefreshTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RefreshTokenRequest): any => ({
    ...obj,
    ...(obj.refreshTokenBody && { refreshTokenBody: RefreshTokenRequestBody.filterSensitiveLog(obj.refreshTokenBody) }),
  });
}

export interface RefreshTokenResponse {
  /**
   * <p>The access token.</p>
   */
  accessToken: string | undefined;

  /**
   * <p>The date and time when the new access token expires.</p>
   */
  expiresIn: number | undefined;
}

export namespace RefreshTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RefreshTokenResponse): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

export interface DeleteThemeRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the theme to delete.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the theme to delete.</p>
   */
  id: string | undefined;
}

export namespace DeleteThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThemeRequest): any => ({
    ...obj,
  });
}

export interface ExportThemesRequest {
  /**
   * <p>The unique ID of the Amplify app to export the themes to.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;
}

export namespace ExportThemesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportThemesRequest): any => ({
    ...obj,
  });
}

export interface GetThemeRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the theme.</p>
   */
  id: string | undefined;
}

export namespace GetThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetThemeRequest): any => ({
    ...obj,
  });
}

export interface ListThemesRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of theme results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace ListThemesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThemesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the basic information about a theme.</p>
 */
export interface ThemeSummary {
  /**
   * <p>The unique ID for the app associated with the theme summary.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The ID of the theme.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the theme.</p>
   */
  name: string | undefined;
}

export namespace ThemeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeSummary): any => ({
    ...obj,
  });
}

export interface ListThemesResponse {
  /**
   * <p>The list of themes for the Amplify app.</p>
   */
  entities: ThemeSummary[] | undefined;

  /**
   * <p>The pagination token that's returned if more results are available.</p>
   */
  nextToken?: string;
}

export namespace ListThemesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThemesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of a theme's properties.</p>
 */
export interface ThemeValue {
  /**
   * <p>The value of a theme property.</p>
   */
  value?: string;

  /**
   * <p>A list of key-value pairs that define the theme's properties.</p>
   */
  children?: ThemeValues[];
}

export namespace ThemeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeValue): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair that defines a property of a theme.</p>
 */
export interface ThemeValues {
  /**
   * <p>The name of the property.</p>
   */
  key?: string;

  /**
   * <p>The value of the property.</p>
   */
  value?: ThemeValue;
}

export namespace ThemeValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeValues): any => ({
    ...obj,
  });
}

/**
 * <p>Stores information for generating Amplify DataStore queries. Use a <code>Predicate</code>
 *       to retrieve a subset of the data in a collection.</p>
 */
export interface Predicate {
  /**
   * <p>A list of predicates to combine logically.</p>
   */
  or?: Predicate[];

  /**
   * <p>A list of predicates to combine logically.</p>
   */
  and?: Predicate[];

  /**
   * <p>The field to query.</p>
   */
  field?: string;

  /**
   * <p>The operator to use to perform the evaluation.</p>
   */
  operator?: string;

  /**
   * <p>The value to use when performing the evaluation.</p>
   */
  operand?: string;
}

export namespace Predicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Predicate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the data binding configuration for a specific property using data stored in
 *         Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to
 *       data stored in an Amazon S3 bucket, an Amplify DataStore model or an
 *       authenticated user attribute.</p>
 */
export interface ComponentBindingPropertiesValueProperties {
  /**
   * <p>An Amplify DataStore model.</p>
   */
  model?: string;

  /**
   * <p>The field to bind the data to.</p>
   */
  field?: string;

  /**
   * <p>A list of predicates for binding a component's properties to data.</p>
   */
  predicates?: Predicate[];

  /**
   * <p>An authenticated user attribute.</p>
   */
  userAttribute?: string;

  /**
   * <p>An Amazon S3 bucket.</p>
   */
  bucket?: string;

  /**
   * <p>The storage key for an Amazon S3 bucket.</p>
   */
  key?: string;

  /**
   * <p>The default value to assign to the property.</p>
   */
  defaultValue?: string;
}

export namespace ComponentBindingPropertiesValueProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentBindingPropertiesValueProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for binding a component's properties to data.</p>
 */
export interface ComponentDataConfiguration {
  /**
   * <p>The name of the data model to use to bind data to a component.</p>
   */
  model: string | undefined;

  /**
   * <p>Describes how to sort the component's properties.</p>
   */
  sort?: SortProperty[];

  /**
   * <p>Represents the conditional logic to use when binding data to a component. Use this
   *       property to retrieve only a subset of the data in a collection.</p>
   */
  predicate?: Predicate;

  /**
   * <p>A list of IDs to use to bind data to a component. Use this property to bind specifically
   *       chosen data, rather than data retrieved from a query.</p>
   */
  identifiers?: string[];
}

export namespace ComponentDataConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentDataConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for all of a component's properties. Use
 *         <code>ComponentProperty</code> to specify the values to render or bind by
 *       default.</p>
 */
export interface ComponentProperty {
  /**
   * <p>The value to assign to the component property.</p>
   */
  value?: string;

  /**
   * <p>The information to bind the component property to data at runtime.</p>
   */
  bindingProperties?: ComponentPropertyBindingProperties;

  /**
   * <p>The information to bind the component property to data at runtime. Use this for collection components.</p>
   */
  collectionBindingProperties?: ComponentPropertyBindingProperties;

  /**
   * <p>The default value to assign to the component property.</p>
   */
  defaultValue?: string;

  /**
   * <p>The data model to use to assign a value to the component property.</p>
   */
  model?: string;

  /**
   * <p>The information to bind the component property to form data.</p>
   */
  bindings?: { [key: string]: FormBindingElement };

  /**
   * <p>An event that occurs in your app. Use this for workflow data binding.</p>
   */
  event?: string;

  /**
   * <p>An authenticated user attribute to use to assign a value to the component property.</p>
   */
  userAttribute?: string;

  /**
   * <p>A list of component properties to concatenate to create the value to assign to this component property.</p>
   */
  concat?: ComponentProperty[];

  /**
   * <p>The conditional expression to use to assign a value to the component property..</p>
   */
  condition?: ComponentConditionProperty;

  /**
   * <p>Specifies whether the user configured the property in Amplify Studio after importing it.</p>
   */
  configured?: boolean;

  /**
   * <p>The component type.</p>
   */
  type?: string;

  /**
   * <p>The default value assigned to property when the component is imported into an app.</p>
   */
  importedValue?: string;
}

export namespace ComponentProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the data binding configuration for a component at runtime. You can use
 *         <code>ComponentBindingPropertiesValue</code> to add exposed properties to a component to
 *       allow different values to be entered when a component is reused in different places in an
 *       app.</p>
 */
export interface ComponentBindingPropertiesValue {
  /**
   * <p>The property type.</p>
   */
  type?: string;

  /**
   * <p>Describes the properties to customize with data at runtime.</p>
   */
  bindingProperties?: ComponentBindingPropertiesValueProperties;

  /**
   * <p>The default value of the property.</p>
   */
  defaultValue?: string;
}

export namespace ComponentBindingPropertiesValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentBindingPropertiesValue): any => ({
    ...obj,
  });
}

/**
 * <p>Represents all of the information that is required to create a theme.</p>
 */
export interface CreateThemeData {
  /**
   * <p>The name of the theme.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of key-value pairs that deﬁnes the properties of the theme.</p>
   */
  values: ThemeValues[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize an instance of the
   *       theme.</p>
   */
  overrides?: ThemeValues[];

  /**
   * <p>One or more key-value pairs to use when tagging the theme data.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateThemeData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeData): any => ({
    ...obj,
  });
}

/**
 * <p>A theme is a collection of style settings that apply globally to the components associated
 *       with an Amplify application.</p>
 */
export interface Theme {
  /**
   * <p>The unique ID for the Amplify app associated with the theme.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the theme.</p>
   */
  name: string | undefined;

  /**
   * <p>The time that the theme was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time that the theme was modified.</p>
   */
  modifiedAt?: Date;

  /**
   * <p>A list of key-value pairs that defines the properties of the theme.</p>
   */
  values: ThemeValues[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize a theme.</p>
   */
  overrides?: ThemeValues[];

  /**
   * <p>One or more key-value pairs to use when tagging the theme.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Theme {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Theme): any => ({
    ...obj,
  });
}

/**
 * <p>Saves the data binding information for a theme.</p>
 */
export interface UpdateThemeData {
  /**
   * <p>The unique ID of the theme to update.</p>
   */
  id?: string;

  /**
   * <p>The name of the theme to update.</p>
   */
  name?: string;

  /**
   * <p>A list of key-value pairs that define the theme's properties.</p>
   */
  values: ThemeValues[] | undefined;

  /**
   * <p>Describes the properties that can be overriden to customize the theme.</p>
   */
  overrides?: ThemeValues[];
}

export namespace UpdateThemeData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThemeData): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a conditional expression to set a component property. Use
 *         <code>ComponentConditionProperty</code> to set a property to different values conditionally,
 *       based on the value of another property.</p>
 */
export interface ComponentConditionProperty {
  /**
   * <p>The name of the conditional property.</p>
   */
  property?: string;

  /**
   * <p>The name of a field. Specify this when the property is a data model.</p>
   */
  field?: string;

  /**
   * <p>The operator to use to perform the evaluation, such as <code>eq</code> to represent
   *       equals.</p>
   */
  operator?: string;

  /**
   * <p>The value of the property to evaluate.</p>
   */
  operand?: string;

  /**
   * <p>The value to assign to the property if the condition is met.</p>
   */
  then?: ComponentProperty;

  /**
   * <p>The value to assign to the property if the condition is not met.</p>
   */
  else?: ComponentProperty;
}

export namespace ComponentConditionProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentConditionProperty): any => ({
    ...obj,
  });
}

export interface CreateThemeRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the theme.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * <p>Represents the configuration of the theme to create.</p>
   */
  themeToCreate: CreateThemeData | undefined;
}

export namespace CreateThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeRequest): any => ({
    ...obj,
  });
}

export interface CreateThemeResponse {
  /**
   * <p>Describes the configuration of the new theme.</p>
   */
  entity?: Theme;
}

export namespace CreateThemeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeResponse): any => ({
    ...obj,
  });
}

export interface GetThemeResponse {
  /**
   * <p>Represents the configuration settings for the theme.</p>
   */
  theme?: Theme;
}

export namespace GetThemeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetThemeResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the theme.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The configuration of the updated theme.</p>
   */
  updatedTheme: UpdateThemeData | undefined;
}

export namespace UpdateThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThemeRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeResponse {
  /**
   * <p>Describes the configuration of the updated theme.</p>
   */
  entity?: Theme;
}

export namespace UpdateThemeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThemeResponse): any => ({
    ...obj,
  });
}

export interface ExportThemesResponse {
  /**
   * <p>Represents the configuration of the exported themes.</p>
   */
  entities: Theme[] | undefined;
}

export namespace ExportThemesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportThemesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A nested UI configuration within a parent <code>Component</code>.</p>
 */
export interface ComponentChild {
  /**
   * <p>The type of the child component. </p>
   */
  componentType: string | undefined;

  /**
   * <p>The name of the child component.</p>
   */
  name: string | undefined;

  /**
   * <p>Describes the properties of the child component.</p>
   */
  properties: { [key: string]: ComponentProperty } | undefined;

  /**
   * <p>The list of <code>ComponentChild</code> instances for this component.</p>
   */
  children?: ComponentChild[];
}

export namespace ComponentChild {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentChild): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration settings for a user interface (UI) element for an Amplify app. A
 *       component is configured as a primary, stand-alone UI element. Use <code>ComponentChild</code>
 *       to configure an instance of a <code>Component</code>. A <code>ComponentChild</code> instance
 *       inherits the configuration of the main <code>Component</code>.</p>
 */
export interface Component {
  /**
   * <p>The unique ID of the Amplify app associated with the component.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   */
  sourceId?: string;

  /**
   * <p>The unique ID of the component.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of the component. This can be an Amplify custom UI component or another custom
   *       component.</p>
   */
  componentType: string | undefined;

  /**
   * <p>Describes the component's properties.</p>
   */
  properties: { [key: string]: ComponentProperty } | undefined;

  /**
   * <p>A list of the component's <code>ComponentChild</code> instances.</p>
   */
  children?: ComponentChild[];

  /**
   * <p>A list of the component's variants. A variant is a unique style configuration of a
   *       main component.</p>
   */
  variants: ComponentVariant[] | undefined;

  /**
   * <p>Describes the component's properties that can be overriden in a customized instance of the
   *       component.</p>
   */
  overrides: { [key: string]: { [key: string]: string } } | undefined;

  /**
   * <p>The information to connect a component's properties to data at runtime.</p>
   */
  bindingProperties: { [key: string]: ComponentBindingPropertiesValue } | undefined;

  /**
   * <p>The data binding configuration for the component's properties. Use this for a collection component.</p>
   */
  collectionProperties?: { [key: string]: ComponentDataConfiguration };

  /**
   * <p>The time that the component was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time that the component was modified.</p>
   */
  modifiedAt?: Date;

  /**
   * <p>One or more key-value pairs to use when tagging the component.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Component {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Component): any => ({
    ...obj,
  });
}

/**
 * <p>Represents all of the information that is required to create a component.</p>
 */
export interface CreateComponentData {
  /**
   * <p>The name of the component</p>
   */
  name: string | undefined;

  /**
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   */
  sourceId?: string;

  /**
   * <p>The component type. This can be an Amplify custom UI component or another custom
   *       component.</p>
   */
  componentType: string | undefined;

  /**
   * <p>Describes the component's properties.</p>
   */
  properties: { [key: string]: ComponentProperty } | undefined;

  /**
   * <p>A list of child components that are instances of the main component.</p>
   */
  children?: ComponentChild[];

  /**
   * <p>A list of the unique variants of this component.</p>
   */
  variants: ComponentVariant[] | undefined;

  /**
   * <p>Describes the component properties that can be overriden to customize an instance of the
   *       component.</p>
   */
  overrides: { [key: string]: { [key: string]: string } } | undefined;

  /**
   * <p>The data binding information for the component's properties.</p>
   */
  bindingProperties: { [key: string]: ComponentBindingPropertiesValue } | undefined;

  /**
   * <p>The data binding configuration for customizing a component's properties. Use this for a collection component.</p>
   */
  collectionProperties?: { [key: string]: ComponentDataConfiguration };

  /**
   * <p>One or more key-value pairs to use when tagging the component data.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateComponentData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentData): any => ({
    ...obj,
  });
}

/**
 * <p>Updates and saves all of the information about a component, based on component ID.</p>
 */
export interface UpdateComponentData {
  /**
   * <p>The unique ID of the component to update.</p>
   */
  id?: string;

  /**
   * <p>The name of the component to update.</p>
   */
  name?: string;

  /**
   * <p>The unique ID of the component in its original source system, such as Figma.</p>
   */
  sourceId?: string;

  /**
   * <p>The type of the component. This can be an Amplify custom UI component or another custom
   *       component.</p>
   */
  componentType?: string;

  /**
   * <p>Describes the component's properties.</p>
   */
  properties?: { [key: string]: ComponentProperty };

  /**
   * <p>The components that are instances of the main component.</p>
   */
  children?: ComponentChild[];

  /**
   * <p>A list of the unique variants of the main component being updated.</p>
   */
  variants?: ComponentVariant[];

  /**
   * <p>Describes the properties that can be overriden to customize the component.</p>
   */
  overrides?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The data binding information for the component's properties.</p>
   */
  bindingProperties?: { [key: string]: ComponentBindingPropertiesValue };

  /**
   * <p>The configuration for binding a component's properties to a data model. Use this for a collection component.</p>
   */
  collectionProperties?: { [key: string]: ComponentDataConfiguration };
}

export namespace UpdateComponentData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentData): any => ({
    ...obj,
  });
}

export interface CreateComponentRequest {
  /**
   * <p>The unique ID of the Amplify app to associate with the component.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * <p>Represents the configuration of the component to create.</p>
   */
  componentToCreate: CreateComponentData | undefined;
}

export namespace CreateComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentRequest): any => ({
    ...obj,
  });
}

export interface CreateComponentResponse {
  /**
   * <p>Describes the configuration of the new component.</p>
   */
  entity?: Component;
}

export namespace CreateComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentResponse): any => ({
    ...obj,
  });
}

export interface GetComponentResponse {
  /**
   * <p>Represents the configuration settings for the component.</p>
   */
  component?: Component;
}

export namespace GetComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentResponse): any => ({
    ...obj,
  });
}

export interface UpdateComponentRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the component.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The configuration of the updated component.</p>
   */
  updatedComponent: UpdateComponentData | undefined;
}

export namespace UpdateComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentRequest): any => ({
    ...obj,
  });
}

export interface UpdateComponentResponse {
  /**
   * <p>Describes the configuration of the updated component.</p>
   */
  entity?: Component;
}

export namespace UpdateComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentResponse): any => ({
    ...obj,
  });
}

export interface ExportComponentsResponse {
  /**
   * <p>Represents the configuration of the exported components.</p>
   */
  entities: Component[] | undefined;
}

export namespace ExportComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportComponentsResponse): any => ({
    ...obj,
  });
}
