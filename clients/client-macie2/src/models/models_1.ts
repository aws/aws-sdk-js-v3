// smithy-typescript generated code
import type {
  RetrievalConfiguration,
  RevealConfiguration,
  SensitivityInspectionTemplateExcludes,
  SensitivityInspectionTemplateIncludes,
  UpdateRetrievalConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface UpdateRevealConfigurationRequest {
  /**
   * The KMS key to use to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.
   *
   * @public
   */
  configuration: RevealConfiguration | undefined;

  /**
   * The access method and settings to use when retrieving the sensitive data.
   *
   * @public
   */
  retrievalConfiguration?: UpdateRetrievalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRevealConfigurationResponse {
  /**
   * The KMS key to use to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.
   *
   * @public
   */
  configuration?: RevealConfiguration | undefined;

  /**
   * The access method and settings to use when retrieving the sensitive data.
   *
   * @public
   */
  retrievalConfiguration?: RetrievalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSensitivityInspectionTemplateRequest {
  /**
   * A custom description of the template. The description can contain as many as 200 characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The managed data identifiers to explicitly exclude (not use) when performing automated sensitive data discovery.
   *
   * To exclude an allow list or custom data identifier that's currently included by the template, update the values for the SensitivityInspectionTemplateIncludes.allowListIds and SensitivityInspectionTemplateIncludes.customDataIdentifierIds properties, respectively.
   *
   * @public
   */
  excludes?: SensitivityInspectionTemplateExcludes | undefined;

  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The allow lists, custom data identifiers, and managed data identifiers to explicitly include (use) when performing automated sensitive data discovery.
   *
   * @public
   */
  includes?: SensitivityInspectionTemplateIncludes | undefined;
}

/**
 * @public
 */
export interface UpdateSensitivityInspectionTemplateResponse {}
