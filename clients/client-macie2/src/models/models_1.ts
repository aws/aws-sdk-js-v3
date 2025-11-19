// smithy-typescript generated code
import {
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
   * <p>The KMS key to use to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.</p>
   * @public
   */
  configuration: RevealConfiguration | undefined;

  /**
   * <p>The access method and settings to use when retrieving the sensitive data.</p>
   * @public
   */
  retrievalConfiguration?: UpdateRetrievalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRevealConfigurationResponse {
  /**
   * <p>The KMS key to use to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.</p>
   * @public
   */
  configuration?: RevealConfiguration | undefined;

  /**
   * <p>The access method and settings to use when retrieving the sensitive data.</p>
   * @public
   */
  retrievalConfiguration?: RetrievalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSensitivityInspectionTemplateRequest {
  /**
   * <p>A custom description of the template. The description can contain as many as 200 characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The managed data identifiers to explicitly exclude (not use) when performing automated sensitive data discovery.</p> <p>To exclude an allow list or custom data identifier that's currently included by the template, update the values for the SensitivityInspectionTemplateIncludes.allowListIds and SensitivityInspectionTemplateIncludes.customDataIdentifierIds properties, respectively.</p>
   * @public
   */
  excludes?: SensitivityInspectionTemplateExcludes | undefined;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The allow lists, custom data identifiers, and managed data identifiers to explicitly include (use) when performing automated sensitive data discovery.</p>
   * @public
   */
  includes?: SensitivityInspectionTemplateIncludes | undefined;
}

/**
 * @public
 */
export interface UpdateSensitivityInspectionTemplateResponse {}
