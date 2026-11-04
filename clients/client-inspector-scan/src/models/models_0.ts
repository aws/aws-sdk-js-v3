// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { OutputFormat } from "./enums";

/**
 * @public
 */
export interface ScanSbomRequest {
  /**
   * The JSON file for the SBOM you want to scan. The SBOM must be in CycloneDX 1.5 format. This format limits you to passing 2000 components before throwing a `ValidException` error.
   *
   * @public
   */
  sbom: __DocumentType | undefined;

  /**
   * The output format for the vulnerability report.
   *
   * @public
   */
  outputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface ScanSbomResponse {
  /**
   * The vulnerability report for the scanned SBOM.
   *
   * @public
   */
  sbom?: __DocumentType | undefined;
}

/**
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the validation exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The validation exception message.
   *
   * @public
   */
  message: string | undefined;
}
