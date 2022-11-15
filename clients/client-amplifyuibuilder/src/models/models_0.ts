// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

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

/**
 * <p>Describes the style configuration of a unique variation of a main component.</p>
 */
export interface ComponentVariant {
  /**
   * <p>The combination of variants that comprise this variant. You can't specify
   *         <code>tags</code> as a valid property for <code>variantValues</code>.</p>
   */
  variantValues?: Record<string, string>;

  /**
   * <p>The properties of the component variant that can be overriden when customizing an instance
   *       of the component. You can't specify <code>tags</code> as a valid property for
   *         <code>overrides</code>.</p>
   */
  overrides?: Record<string, Record<string, string>>;
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
   * <p>The unique ID of the Amplify app associated with the component to
   *       delete.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the component to delete.</p>
   */
  id: string | undefined;
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
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;
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

export interface ListComponentsRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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

export enum FixedPosition {
  FIRST = "first",
}

/**
 * <p>Describes the field position.</p>
 */
export type FieldPosition =
  | FieldPosition.BelowMember
  | FieldPosition.FixedMember
  | FieldPosition.RightOfMember
  | FieldPosition.$UnknownMember;

export namespace FieldPosition {
  /**
   * <p>The field position is fixed and doesn't change in relation to other fields.</p>
   */
  export interface FixedMember {
    fixed: FixedPosition | string;
    rightOf?: never;
    below?: never;
    $unknown?: never;
  }

  /**
   * <p>The field position is to the right of the field specified by the string.</p>
   */
  export interface RightOfMember {
    fixed?: never;
    rightOf: string;
    below?: never;
    $unknown?: never;
  }

  /**
   * <p>The field position is below the field specified by the string.</p>
   */
  export interface BelowMember {
    fixed?: never;
    rightOf?: never;
    below: string;
    $unknown?: never;
  }

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
 * <p>Describes the configuration for a button UI element that is a part of a form.</p>
 */
export interface FormButton {
  /**
   * <p>Specifies whether the button is visible on the form.</p>
   */
  excluded?: boolean;

  /**
   * <p>Describes the button's properties.</p>
   */
  children?: string;

  /**
   * <p>The position of the button.</p>
   */
  position?: FieldPosition;
}

export enum FormButtonsPosition {
  BOTTOM = "bottom",
  TOP = "top",
  TOP_AND_BOTTOM = "top_and_bottom",
}

/**
 * <p>Describes the call to action button configuration for the form.</p>
 */
export interface FormCTA {
  /**
   * <p>The position of the button.</p>
   */
  position?: FormButtonsPosition | string;

  /**
   * <p>Displays a clear button.</p>
   */
  clear?: FormButton;

  /**
   * <p>Displays a cancel button.</p>
   */
  cancel?: FormButton;

  /**
   * <p>Displays a submit button.</p>
   */
  submit?: FormButton;
}

export enum FormDataSourceType {
  /**
   * Will use passed in hooks to use when creating a form from scratch
   */
  CUSTOM = "Custom",
  /**
   * Will use a provided Amplify DataStore enabled API
   */
  DATASTORE = "DataStore",
}

/**
 * <p>Describes the data type configuration for the data source associated with a form.</p>
 */
export interface FormDataTypeConfig {
  /**
   * <p>The data source type, either an Amplify DataStore model or a custom data type.</p>
   */
  dataSourceType: FormDataSourceType | string | undefined;

  /**
   * <p>The unique name of the data type you are using as the data source for the form.</p>
   */
  dataTypeName: string | undefined;
}

/**
 * <p>Describes the configuration for an input field on a form. Use
 *       <code>FormInputValueProperty</code> to specify the values to render or bind by
 *       default.</p>
 */
export interface FormInputValueProperty {
  /**
   * <p>The value to assign to the input field.</p>
   */
  value?: string;
}

/**
 * <p>Associates a complex object with a display value. Use <code>ValueMapping</code> to store
 *       how to represent complex objects when they are displayed.</p>
 */
export interface ValueMapping {
  /**
   * <p>The value to display for the complex object.</p>
   */
  displayValue?: FormInputValueProperty;

  /**
   * <p>The complex object.</p>
   */
  value: FormInputValueProperty | undefined;
}

/**
 * <p>Represents the data binding configuration for a value map.</p>
 */
export interface ValueMappings {
  /**
   * <p>The value and display value pairs.</p>
   */
  values: ValueMapping[] | undefined;
}

/**
 * <p>Describes the configuration for the default input values to display for a field.</p>
 */
export interface FieldInputConfig {
  /**
   * <p>The input type for the field. </p>
   */
  type: string | undefined;

  /**
   * <p>Specifies a field that requires input.</p>
   */
  required?: boolean;

  /**
   * <p>Specifies a read only field.</p>
   */
  readOnly?: boolean;

  /**
   * <p>The text to display as a placeholder for the field.</p>
   */
  placeholder?: string;

  /**
   * <p>The default value for the field.</p>
   */
  defaultValue?: string;

  /**
   * <p>The text to display to describe the field.</p>
   */
  descriptiveText?: string;

  /**
   * <p>Specifies whether a field has a default value.</p>
   */
  defaultChecked?: boolean;

  /**
   * <p>The default country code for a phone number.</p>
   */
  defaultCountryCode?: string;

  /**
   * <p>The information to use to customize the input fields with data at runtime.</p>
   */
  valueMappings?: ValueMappings;

  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The minimum value to display for the field.</p>
   */
  minValue?: number;

  /**
   * <p>The maximum value to display for the field.</p>
   */
  maxValue?: number;

  /**
   * <p>The stepping increment for a numeric value in a field.</p>
   */
  step?: number;

  /**
   * <p>The value for the field.</p>
   */
  value?: string;

  /**
   * <p>Specifies whether to render the field as an array. This property is ignored if the <code>dataSourceType</code> for the form is a Data Store.</p>
   */
  isArray?: boolean;
}

/**
 * <p>Describes the validation configuration for a field.</p>
 */
export interface FieldValidationConfiguration {
  /**
   * <p>The validation to perform on an object type.<code/>
   *          </p>
   */
  type: string | undefined;

  /**
   * <p>The validation to perform on a string value.</p>
   */
  strValues?: string[];

  /**
   * <p>The validation to perform on a number value.</p>
   */
  numValues?: number[];

  /**
   * <p>The validation message to display.</p>
   */
  validationMessage?: string;
}

/**
 * <p>Describes the configuration information for a field in a table.</p>
 */
export interface FieldConfig {
  /**
   * <p>The label for the field.</p>
   */
  label?: string;

  /**
   * <p>Specifies the field position.</p>
   */
  position?: FieldPosition;

  /**
   * <p>Specifies whether to hide a field.</p>
   */
  excluded?: boolean;

  /**
   * <p>Describes the configuration for the default input value to display for a field.</p>
   */
  inputType?: FieldInputConfig;

  /**
   * <p>The validations to perform on the value in the field.</p>
   */
  validations?: FieldValidationConfiguration[];
}

export enum FormActionType {
  CREATE = "create",
  UPDATE = "update",
}

/**
 * <p>Stores the configuration information for a visual helper element for a form. A sectional
 *       element can be a header, a text block, or a divider. These elements are static and not
 *       associated with any data.</p>
 */
export interface SectionalElement {
  /**
   * <p>The type of sectional element. Valid values are <code>Heading</code>, <code>Text</code>,
   *       and <code>Divider</code>.</p>
   */
  type: string | undefined;

  /**
   * <p>Specifies the position of the text in a field for a <code>Text</code> sectional
   *       element.</p>
   */
  position?: FieldPosition;

  /**
   * <p>The text for a <code>Text</code> sectional element.</p>
   */
  text?: string;

  /**
   * <p>Specifies the size of the font for a <code>Heading</code> sectional element. Valid values
   *       are <code>1 | 2 | 3 | 4 | 5 | 6</code>.</p>
   */
  level?: number;

  /**
   * <p>Specifies the orientation for a <code>Divider</code> sectional element. Valid values are
   *       <code>horizontal</code> or <code>vertical</code>.</p>
   */
  orientation?: string;
}

/**
 * <p>Describes the configuration settings for the form's style properties.</p>
 */
export type FormStyleConfig =
  | FormStyleConfig.TokenReferenceMember
  | FormStyleConfig.ValueMember
  | FormStyleConfig.$UnknownMember;

export namespace FormStyleConfig {
  /**
   * <p>A reference to a design token to use to bind the form's style properties to an existing
   *       theme.</p>
   */
  export interface TokenReferenceMember {
    tokenReference: string;
    value?: never;
    $unknown?: never;
  }

  /**
   * <p>The value of the style setting.</p>
   */
  export interface ValueMember {
    tokenReference?: never;
    value: string;
    $unknown?: never;
  }

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
 * <p>Describes the configuration for the form's style.</p>
 */
export interface FormStyle {
  /**
   * <p>The spacing for the horizontal gap.</p>
   */
  horizontalGap?: FormStyleConfig;

  /**
   * <p>The spacing for the vertical gap.</p>
   */
  verticalGap?: FormStyleConfig;

  /**
   * <p>The size of the outer padding for the form.</p>
   */
  outerPadding?: FormStyleConfig;
}

/**
 * <p>Represents all of the information that is required to create a form.</p>
 */
export interface CreateFormData {
  /**
   * <p>The name of the form.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of data source to use to create the form.</p>
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * <p>Specifies whether to perform a create or update action on the form.</p>
   */
  formActionType: FormActionType | string | undefined;

  /**
   * <p>The configuration information for the form's fields.</p>
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * <p>The configuration for the form's style.</p>
   */
  style: FormStyle | undefined;

  /**
   * <p>The configuration information for the visual helper elements for the form. These elements
   *       are not associated with any data.</p>
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * <p>The schema version of the form.</p>
   */
  schemaVersion: string | undefined;

  /**
   * <p>The <code>FormCTA</code> object that stores the call to action configuration for the
   *       form.</p>
   */
  cta?: FormCTA;

  /**
   * <p>One or more key-value pairs to use when tagging the form data.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateFormRequest {
  /**
   * <p>The unique ID of the Amplify app to associate with the form.</p>
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
   * <p>Represents the configuration of the form to create.</p>
   */
  formToCreate: CreateFormData | undefined;
}

/**
 * <p>Contains the configuration settings for a <code>Form</code> user interface (UI) element
 *       for an Amplify app. A form is a component you can add to your project by specifying a data
 *       source as the default configuration for the form.</p>
 */
export interface Form {
  /**
   * <p>The unique ID of the Amplify app associated with the form.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the form.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the form.</p>
   */
  name: string | undefined;

  /**
   * <p>The operation to perform on the specified form.</p>
   */
  formActionType: FormActionType | string | undefined;

  /**
   * <p>Stores the configuration for the form's style.</p>
   */
  style: FormStyle | undefined;

  /**
   * <p>The type of data source to use to create the form.</p>
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * <p>Stores the information about the form's fields.</p>
   */
  fields: Record<string, FieldConfig> | undefined;

  /**
   * <p>Stores the visual helper elements for the form that are not associated with any
   *       data.</p>
   */
  sectionalElements: Record<string, SectionalElement> | undefined;

  /**
   * <p>The schema version of the form when it was imported.</p>
   */
  schemaVersion: string | undefined;

  /**
   * <p>One or more key-value pairs to use when tagging the form.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Stores the call to action configuration for the form.</p>
   */
  cta?: FormCTA;
}

export interface CreateFormResponse {
  /**
   * <p>Describes the configuration of the new form.</p>
   */
  entity?: Form;
}

export interface DeleteFormRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the form to delete.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the form to delete.</p>
   */
  id: string | undefined;
}

export interface ExportFormsRequest {
  /**
   * <p>The unique ID of the Amplify app to export forms to.</p>
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
}

export interface ExportFormsResponse {
  /**
   * <p>Represents the configuration of the exported forms.</p>
   */
  entities: Form[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

export interface GetFormRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the form.</p>
   */
  id: string | undefined;
}

export interface GetFormResponse {
  /**
   * <p>Represents the configuration settings for the form.</p>
   */
  form?: Form;
}

export interface ListFormsRequest {
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
   * <p>The maximum number of forms to retrieve.</p>
   */
  maxResults?: number;
}

/**
 * <p>Describes the basic information about a form.</p>
 */
export interface FormSummary {
  /**
   * <p>The unique ID for the app associated with the form summary.</p>
   */
  appId: string | undefined;

  /**
   * <p>The form's data source type.</p>
   */
  dataType: FormDataTypeConfig | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The type of operation to perform on the form.</p>
   */
  formActionType: FormActionType | string | undefined;

  /**
   * <p>The ID of the form.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the form.</p>
   */
  name: string | undefined;
}

export interface ListFormsResponse {
  /**
   * <p>The list of forms for the Amplify app.</p>
   */
  entities: FormSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * <p>Updates and saves all of the information about a form, based on form ID.</p>
 */
export interface UpdateFormData {
  /**
   * <p>The name of the form.</p>
   */
  name?: string;

  /**
   * <p>The type of data source to use to create the form.</p>
   */
  dataType?: FormDataTypeConfig;

  /**
   * <p>Specifies whether to perform a create or update action on the form.</p>
   */
  formActionType?: FormActionType | string;

  /**
   * <p>The configuration information for the form's fields.</p>
   */
  fields?: Record<string, FieldConfig>;

  /**
   * <p>The configuration for the form's style.</p>
   */
  style?: FormStyle;

  /**
   * <p>The configuration information for the visual helper elements for the form. These elements
   *       are not associated with any data.</p>
   */
  sectionalElements?: Record<string, SectionalElement>;

  /**
   * <p>The schema version of the form.</p>
   */
  schemaVersion?: string;

  /**
   * <p>The <code>FormCTA</code> object that stores the call to action configuration for the
   *       form.</p>
   */
  cta?: FormCTA;
}

export interface UpdateFormRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID for the form.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The request accepts the following data in JSON format.</p>
   */
  updatedForm: UpdateFormData | undefined;
}

export interface UpdateFormResponse {
  /**
   * <p>Describes the configuration of the updated form.</p>
   */
  entity?: Form;
}

export interface GetMetadataRequest {
  /**
   * <p>The unique ID of the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;
}

export interface GetMetadataResponse {
  /**
   * <p>Represents the configuration settings for the features metadata.</p>
   */
  features: Record<string, string> | undefined;
}

/**
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
 * <p>Stores the metadata information about a feature on a form or view.</p>
 */
export interface PutMetadataFlagBody {
  /**
   * <p>The new information to store.</p>
   */
  newValue: string | undefined;
}

export interface PutMetadataFlagRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is part of the Amplify app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the feature associated with the metadata.</p>
   */
  featureName: string | undefined;

  /**
   * <p>The metadata information to store.</p>
   */
  body: PutMetadataFlagBody | undefined;
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

export interface DeleteThemeRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the theme to
   *       delete.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The unique ID of the theme to delete.</p>
   */
  id: string | undefined;
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

  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;
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

export interface ListThemesRequest {
  /**
   * <p>The unique ID for the Amplify app.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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

/**
 * <p>Stores information for generating Amplify DataStore queries. Use a
 *         <code>Predicate</code> to retrieve a subset of the data in a collection.</p>
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

  /**
   * <p>The name of a component slot.</p>
   */
  slotName?: string;
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

/**
 * <p>Describes the configuration for all of a component's properties. Use
 *         <code>ComponentProperty</code> to specify the values to render or bind by default.</p>
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
   * <p>The information to bind the component property to data at runtime. Use this for collection
   *       components.</p>
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
  bindings?: Record<string, FormBindingElement>;

  /**
   * <p>An event that occurs in your app. Use this for workflow data binding.</p>
   */
  event?: string;

  /**
   * <p>An authenticated user attribute to use to assign a value to the component property.</p>
   */
  userAttribute?: string;

  /**
   * <p>A list of component properties to concatenate to create the value to assign to this
   *       component property.</p>
   */
  concat?: ComponentProperty[];

  /**
   * <p>The conditional expression to use to assign a value to the component property.</p>
   */
  condition?: ComponentConditionProperty;

  /**
   * <p>Specifies whether the user configured the property in Amplify Studio after
   *       importing it.</p>
   */
  configured?: boolean;

  /**
   * <p>The component type.</p>
   */
  type?: string;

  /**
   * <p>The default value assigned to the property when the component is imported into an
   *       app.</p>
   */
  importedValue?: string;

  /**
   * <p>The name of the component that is affected by an event.</p>
   */
  componentName?: string;

  /**
   * <p>The name of the component's property that is affected by an event.</p>
   */
  property?: string;
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
  tags?: Record<string, string>;
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
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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
  tags?: Record<string, string>;
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

/**
 * <p>Represents the state configuration when an action modifies a property of another
 *       element within the same component.</p>
 */
export interface MutationActionSetStateParameter {
  /**
   * <p>The name of the component that is being modified.</p>
   */
  componentName: string | undefined;

  /**
   * <p>The name of the component property to apply the state configuration to.</p>
   */
  property: string | undefined;

  /**
   * <p>The state configuration to assign to the property.</p>
   */
  set: ComponentProperty | undefined;
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

  /**
   * <p>The type of the property to evaluate.</p>
   */
  operandType?: string;
}

export interface CreateThemeRequest {
  /**
   * <p>The unique ID of the Amplify app associated with the theme.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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

export interface CreateThemeResponse {
  /**
   * <p>Describes the configuration of the new theme.</p>
   */
  entity?: Theme;
}

export interface GetThemeResponse {
  /**
   * <p>Represents the configuration settings for the theme.</p>
   */
  theme?: Theme;
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

export interface UpdateThemeResponse {
  /**
   * <p>Describes the configuration of the updated theme.</p>
   */
  entity?: Theme;
}

export interface ExportThemesResponse {
  /**
   * <p>Represents the configuration of the exported themes.</p>
   */
  entities: Theme[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * <p>Represents the event action configuration for an element of a <code>Component</code>
 *       or <code>ComponentChild</code>. Use for the workflow feature in Amplify Studio
 *       that allows you to bind events and actions to components. <code>ActionParameters</code>
 *       defines the action that is performed when an event occurs on the component.</p>
 */
export interface ActionParameters {
  /**
   * <p>The type of navigation action. Valid values are <code>url</code> and <code>anchor</code>. This value is required for a navigation action.</p>
   */
  type?: ComponentProperty;

  /**
   * <p>The URL to the location to open. Specify this value for a navigation action.</p>
   */
  url?: ComponentProperty;

  /**
   * <p>The HTML anchor link to the location to open. Specify this value for a navigation action.</p>
   */
  anchor?: ComponentProperty;

  /**
   * <p>The element within the same component to modify when the action occurs.</p>
   */
  target?: ComponentProperty;

  /**
   * <p>Specifies whether the user should be signed out globally. Specify this value for an auth sign out action.</p>
   */
  global?: ComponentProperty;

  /**
   * <p>The name of the data model. Use when the action performs an operation on an Amplify DataStore
   *       model.</p>
   */
  model?: string;

  /**
   * <p>The unique ID of the component that the <code>ActionParameters</code> apply to.</p>
   */
  id?: ComponentProperty;

  /**
   * <p>A dictionary of key-value pairs mapping Amplify Studio properties to fields in a data model. Use when the action
   *       performs an operation on an Amplify DataStore model.</p>
   */
  fields?: Record<string, ComponentProperty>;

  /**
   * <p>A key-value pair that specifies the state property name and its initial value.</p>
   */
  state?: MutationActionSetStateParameter;
}

/**
 * <p>Describes the configuration of an event. You can bind an event and a corresponding
 *       action to a <code>Component</code> or a <code>ComponentChild</code>. A button click
 *       is an example of an event. </p>
 */
export interface ComponentEvent {
  /**
   * <p>The action to perform when a specific event is raised.</p>
   */
  action?: string;

  /**
   * <p>Describes information about the action.</p>
   */
  parameters?: ActionParameters;

  /**
   * <p>Binds an event to an action on a component. When you specify a <code>bindingEvent</code>,
   *       the event is called when the action is performed.</p>
   */
  bindingEvent?: string;
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
   * <p>Describes the properties of the child component. You can't specify <code>tags</code> as a
   *       valid property for <code>properties</code>.</p>
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * <p>The list of <code>ComponentChild</code> instances for this component.</p>
   */
  children?: ComponentChild[];

  /**
   * <p>Describes the events that can be raised on the child component. Use for the workflow feature in Amplify Studio that allows you to
   *       bind events and actions to components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * <p>The unique ID of the child component in its original source system, such as Figma.</p>
   */
  sourceId?: string;
}

/**
 * <p>Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use
 *         <code>ComponentChild</code> to configure an instance of a <code>Component</code>. A
 *         <code>ComponentChild</code> instance inherits the configuration of the main
 *         <code>Component</code>.</p>
 */
export interface Component {
  /**
   * <p>The unique ID of the Amplify app associated with the component.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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
   * <p>The type of the component. This can be an Amplify custom UI component or
   *       another custom component.</p>
   */
  componentType: string | undefined;

  /**
   * <p>Describes the component's properties. You can't specify <code>tags</code> as a valid
   *       property for <code>properties</code>.</p>
   */
  properties: Record<string, ComponentProperty> | undefined;

  /**
   * <p>A list of the component's <code>ComponentChild</code> instances.</p>
   */
  children?: ComponentChild[];

  /**
   * <p>A list of the component's variants. A variant is a unique style configuration of a main
   *       component.</p>
   */
  variants: ComponentVariant[] | undefined;

  /**
   * <p>Describes the component's properties that can be overriden in a customized instance of the
   *       component. You can't specify <code>tags</code> as a valid property for
   *       <code>overrides</code>.</p>
   */
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The information to connect a component's properties to data at runtime. You can't specify
   *         <code>tags</code> as a valid property for <code>bindingProperties</code>.</p>
   *          <p/>
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * <p>The data binding configuration for the component's properties. Use this for a collection
   *       component. You can't specify <code>tags</code> as a valid property for
   *         <code>collectionProperties</code>.</p>
   */
  collectionProperties?: Record<string, ComponentDataConfiguration>;

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
  tags?: Record<string, string>;

  /**
   * <p>Describes the events that can be raised on the component. Use for the workflow feature in Amplify Studio that allows you to
   *       bind events and actions to components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * <p>The schema version of the component when it was imported.</p>
   */
  schemaVersion?: string;
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
   * <p>The component type. This can be an Amplify custom UI component or another
   *       custom component.</p>
   */
  componentType: string | undefined;

  /**
   * <p>Describes the component's properties.</p>
   */
  properties: Record<string, ComponentProperty> | undefined;

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
  overrides: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The data binding information for the component's properties.</p>
   */
  bindingProperties: Record<string, ComponentBindingPropertiesValue> | undefined;

  /**
   * <p>The data binding configuration for customizing a component's properties. Use this for a
   *       collection component.</p>
   */
  collectionProperties?: Record<string, ComponentDataConfiguration>;

  /**
   * <p>One or more key-value pairs to use when tagging the component data.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * <p>The schema version of the component when it was imported.</p>
   */
  schemaVersion?: string;
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
   * <p>The type of the component. This can be an Amplify custom UI component or
   *       another custom component.</p>
   */
  componentType?: string;

  /**
   * <p>Describes the component's properties.</p>
   */
  properties?: Record<string, ComponentProperty>;

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
  overrides?: Record<string, Record<string, string>>;

  /**
   * <p>The data binding information for the component's properties.</p>
   */
  bindingProperties?: Record<string, ComponentBindingPropertiesValue>;

  /**
   * <p>The configuration for binding a component's properties to a data model. Use this for a
   *       collection component.</p>
   */
  collectionProperties?: Record<string, ComponentDataConfiguration>;

  /**
   * <p>The event configuration for the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</p>
   */
  events?: Record<string, ComponentEvent>;

  /**
   * <p>The schema version of the component when it was imported.</p>
   */
  schemaVersion?: string;
}

export interface CreateComponentRequest {
  /**
   * <p>The unique ID of the Amplify app to associate with the component.</p>
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment that is a part of the Amplify
   *       app.</p>
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

export interface CreateComponentResponse {
  /**
   * <p>Describes the configuration of the new component.</p>
   */
  entity?: Component;
}

export interface GetComponentResponse {
  /**
   * <p>Represents the configuration settings for the component.</p>
   */
  component?: Component;
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

export interface UpdateComponentResponse {
  /**
   * <p>Describes the configuration of the updated component.</p>
   */
  entity?: Component;
}

export interface ExportComponentsResponse {
  /**
   * <p>Represents the configuration of the exported components.</p>
   */
  entities: Component[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const ComponentPropertyBindingPropertiesFilterSensitiveLog = (obj: ComponentPropertyBindingProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FormBindingElementFilterSensitiveLog = (obj: FormBindingElement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SortPropertyFilterSensitiveLog = (obj: SortProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentVariantFilterSensitiveLog = (obj: ComponentVariant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteComponentRequestFilterSensitiveLog = (obj: DeleteComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportComponentsRequestFilterSensitiveLog = (obj: ExportComponentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentRequestFilterSensitiveLog = (obj: GetComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentsRequestFilterSensitiveLog = (obj: ListComponentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentSummaryFilterSensitiveLog = (obj: ComponentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentsResponseFilterSensitiveLog = (obj: ListComponentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExchangeCodeForTokenRequestBodyFilterSensitiveLog = (obj: ExchangeCodeForTokenRequestBody): any => ({
  ...obj,
  ...(obj.code && { code: SENSITIVE_STRING }),
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
export const FieldPositionFilterSensitiveLog = (obj: FieldPosition): any => {
  if (obj.fixed !== undefined) return { fixed: obj.fixed };
  if (obj.rightOf !== undefined) return { rightOf: obj.rightOf };
  if (obj.below !== undefined) return { below: obj.below };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FormButtonFilterSensitiveLog = (obj: FormButton): any => ({
  ...obj,
  ...(obj.position && { position: FieldPositionFilterSensitiveLog(obj.position) }),
});

/**
 * @internal
 */
export const FormCTAFilterSensitiveLog = (obj: FormCTA): any => ({
  ...obj,
  ...(obj.clear && { clear: FormButtonFilterSensitiveLog(obj.clear) }),
  ...(obj.cancel && { cancel: FormButtonFilterSensitiveLog(obj.cancel) }),
  ...(obj.submit && { submit: FormButtonFilterSensitiveLog(obj.submit) }),
});

/**
 * @internal
 */
export const FormDataTypeConfigFilterSensitiveLog = (obj: FormDataTypeConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FormInputValuePropertyFilterSensitiveLog = (obj: FormInputValueProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValueMappingFilterSensitiveLog = (obj: ValueMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValueMappingsFilterSensitiveLog = (obj: ValueMappings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldInputConfigFilterSensitiveLog = (obj: FieldInputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldValidationConfigurationFilterSensitiveLog = (obj: FieldValidationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldConfigFilterSensitiveLog = (obj: FieldConfig): any => ({
  ...obj,
  ...(obj.position && { position: FieldPositionFilterSensitiveLog(obj.position) }),
});

/**
 * @internal
 */
export const SectionalElementFilterSensitiveLog = (obj: SectionalElement): any => ({
  ...obj,
  ...(obj.position && { position: FieldPositionFilterSensitiveLog(obj.position) }),
});

/**
 * @internal
 */
export const FormStyleConfigFilterSensitiveLog = (obj: FormStyleConfig): any => {
  if (obj.tokenReference !== undefined) return { tokenReference: obj.tokenReference };
  if (obj.value !== undefined) return { value: obj.value };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FormStyleFilterSensitiveLog = (obj: FormStyle): any => ({
  ...obj,
  ...(obj.horizontalGap && { horizontalGap: FormStyleConfigFilterSensitiveLog(obj.horizontalGap) }),
  ...(obj.verticalGap && { verticalGap: FormStyleConfigFilterSensitiveLog(obj.verticalGap) }),
  ...(obj.outerPadding && { outerPadding: FormStyleConfigFilterSensitiveLog(obj.outerPadding) }),
});

/**
 * @internal
 */
export const CreateFormDataFilterSensitiveLog = (obj: CreateFormData): any => ({
  ...obj,
  ...(obj.fields && {
    fields: Object.entries(obj.fields).reduce(
      (acc: any, [key, value]: [string, FieldConfig]) => ((acc[key] = FieldConfigFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.style && { style: FormStyleFilterSensitiveLog(obj.style) }),
  ...(obj.sectionalElements && {
    sectionalElements: Object.entries(obj.sectionalElements).reduce(
      (acc: any, [key, value]: [string, SectionalElement]) => (
        (acc[key] = SectionalElementFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
  ...(obj.cta && { cta: FormCTAFilterSensitiveLog(obj.cta) }),
});

/**
 * @internal
 */
export const CreateFormRequestFilterSensitiveLog = (obj: CreateFormRequest): any => ({
  ...obj,
  ...(obj.formToCreate && { formToCreate: CreateFormDataFilterSensitiveLog(obj.formToCreate) }),
});

/**
 * @internal
 */
export const FormFilterSensitiveLog = (obj: Form): any => ({
  ...obj,
  ...(obj.style && { style: FormStyleFilterSensitiveLog(obj.style) }),
  ...(obj.fields && {
    fields: Object.entries(obj.fields).reduce(
      (acc: any, [key, value]: [string, FieldConfig]) => ((acc[key] = FieldConfigFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.sectionalElements && {
    sectionalElements: Object.entries(obj.sectionalElements).reduce(
      (acc: any, [key, value]: [string, SectionalElement]) => (
        (acc[key] = SectionalElementFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
  ...(obj.cta && { cta: FormCTAFilterSensitiveLog(obj.cta) }),
});

/**
 * @internal
 */
export const CreateFormResponseFilterSensitiveLog = (obj: CreateFormResponse): any => ({
  ...obj,
  ...(obj.entity && { entity: FormFilterSensitiveLog(obj.entity) }),
});

/**
 * @internal
 */
export const DeleteFormRequestFilterSensitiveLog = (obj: DeleteFormRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportFormsRequestFilterSensitiveLog = (obj: ExportFormsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportFormsResponseFilterSensitiveLog = (obj: ExportFormsResponse): any => ({
  ...obj,
  ...(obj.entities && { entities: obj.entities.map((item) => FormFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetFormRequestFilterSensitiveLog = (obj: GetFormRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFormResponseFilterSensitiveLog = (obj: GetFormResponse): any => ({
  ...obj,
  ...(obj.form && { form: FormFilterSensitiveLog(obj.form) }),
});

/**
 * @internal
 */
export const ListFormsRequestFilterSensitiveLog = (obj: ListFormsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FormSummaryFilterSensitiveLog = (obj: FormSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFormsResponseFilterSensitiveLog = (obj: ListFormsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFormDataFilterSensitiveLog = (obj: UpdateFormData): any => ({
  ...obj,
  ...(obj.fields && {
    fields: Object.entries(obj.fields).reduce(
      (acc: any, [key, value]: [string, FieldConfig]) => ((acc[key] = FieldConfigFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.style && { style: FormStyleFilterSensitiveLog(obj.style) }),
  ...(obj.sectionalElements && {
    sectionalElements: Object.entries(obj.sectionalElements).reduce(
      (acc: any, [key, value]: [string, SectionalElement]) => (
        (acc[key] = SectionalElementFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
  ...(obj.cta && { cta: FormCTAFilterSensitiveLog(obj.cta) }),
});

/**
 * @internal
 */
export const UpdateFormRequestFilterSensitiveLog = (obj: UpdateFormRequest): any => ({
  ...obj,
  ...(obj.updatedForm && { updatedForm: UpdateFormDataFilterSensitiveLog(obj.updatedForm) }),
});

/**
 * @internal
 */
export const UpdateFormResponseFilterSensitiveLog = (obj: UpdateFormResponse): any => ({
  ...obj,
  ...(obj.entity && { entity: FormFilterSensitiveLog(obj.entity) }),
});

/**
 * @internal
 */
export const GetMetadataRequestFilterSensitiveLog = (obj: GetMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMetadataResponseFilterSensitiveLog = (obj: GetMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMetadataFlagBodyFilterSensitiveLog = (obj: PutMetadataFlagBody): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMetadataFlagRequestFilterSensitiveLog = (obj: PutMetadataFlagRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RefreshTokenRequestBodyFilterSensitiveLog = (obj: RefreshTokenRequestBody): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
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

/**
 * @internal
 */
export const DeleteThemeRequestFilterSensitiveLog = (obj: DeleteThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportThemesRequestFilterSensitiveLog = (obj: ExportThemesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThemeRequestFilterSensitiveLog = (obj: GetThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThemesRequestFilterSensitiveLog = (obj: ListThemesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeSummaryFilterSensitiveLog = (obj: ThemeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThemesResponseFilterSensitiveLog = (obj: ListThemesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeValueFilterSensitiveLog = (obj: ThemeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeValuesFilterSensitiveLog = (obj: ThemeValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredicateFilterSensitiveLog = (obj: Predicate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentBindingPropertiesValuePropertiesFilterSensitiveLog = (
  obj: ComponentBindingPropertiesValueProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentDataConfigurationFilterSensitiveLog = (obj: ComponentDataConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentPropertyFilterSensitiveLog = (obj: ComponentProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentBindingPropertiesValueFilterSensitiveLog = (obj: ComponentBindingPropertiesValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeDataFilterSensitiveLog = (obj: CreateThemeData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeFilterSensitiveLog = (obj: Theme): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThemeDataFilterSensitiveLog = (obj: UpdateThemeData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MutationActionSetStateParameterFilterSensitiveLog = (obj: MutationActionSetStateParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentConditionPropertyFilterSensitiveLog = (obj: ComponentConditionProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeRequestFilterSensitiveLog = (obj: CreateThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeResponseFilterSensitiveLog = (obj: CreateThemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThemeResponseFilterSensitiveLog = (obj: GetThemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThemeRequestFilterSensitiveLog = (obj: UpdateThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThemeResponseFilterSensitiveLog = (obj: UpdateThemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportThemesResponseFilterSensitiveLog = (obj: ExportThemesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionParametersFilterSensitiveLog = (obj: ActionParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentEventFilterSensitiveLog = (obj: ComponentEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentChildFilterSensitiveLog = (obj: ComponentChild): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentFilterSensitiveLog = (obj: Component): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComponentDataFilterSensitiveLog = (obj: CreateComponentData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateComponentDataFilterSensitiveLog = (obj: UpdateComponentData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComponentRequestFilterSensitiveLog = (obj: CreateComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComponentResponseFilterSensitiveLog = (obj: CreateComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentResponseFilterSensitiveLog = (obj: GetComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateComponentRequestFilterSensitiveLog = (obj: UpdateComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateComponentResponseFilterSensitiveLog = (obj: UpdateComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportComponentsResponseFilterSensitiveLog = (obj: ExportComponentsResponse): any => ({
  ...obj,
});
