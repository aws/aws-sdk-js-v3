// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import { OutputFormat } from "./enums";

/**
 * @public
 */
export interface ScanSbomRequest {
  /**
   * <p>The JSON file for the SBOM you want to scan. The SBOM must be in CycloneDX 1.5 format.</p>
   * @public
   */
  sbom: __DocumentType | undefined;

  /**
   * <p>The output format for the vulnerability report.</p>
   * @public
   */
  outputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface ScanSbomResponse {
  /**
   * <p>The vulnerability report for the scanned SBOM.</p>
   * @public
   */
  sbom?: __DocumentType | undefined;
}

/**
 * <p>The request has failed validation due to missing required fields or having invalid inputs.
 *    </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.
   *
   *   </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The validation exception message.
   *   </p>
   * @public
   */
  message: string | undefined;
}
