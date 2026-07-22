// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PublishDataTransformationProfileRequest,
  PublishDataTransformationProfileResponse,
} from "../models/models_0";
import { PublishDataTransformationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishDataTransformationProfileCommand}.
 */
export interface PublishDataTransformationProfileCommandInput extends PublishDataTransformationProfileRequest {}
/**
 * @public
 *
 * The output of {@link PublishDataTransformationProfileCommand}.
 */
export interface PublishDataTransformationProfileCommandOutput extends PublishDataTransformationProfileResponse, __MetadataBearer {}

/**
 * <p>Promotes the current DRAFT version of a data transformation profile to a new immutable published version. Also supports rollback by publishing from a previously published version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, PublishDataTransformationProfileCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, PublishDataTransformationProfileCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // PublishDataTransformationProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   SourceFormat: "CCDA" || "CSV", // required
 *   FromExistingVersion: Number("int"),
 *   ChangeDescription: "STRING_VALUE",
 * };
 * const command = new PublishDataTransformationProfileCommand(input);
 * const response = await client.send(command);
 * // { // PublishDataTransformationProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * //   Version: Number("int"), // required
 * //   SourceFormat: "CCDA" || "CSV", // required
 * //   TargetFormat: "FHIR_R4", // required
 * //   ProfileName: "STRING_VALUE",
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PublishDataTransformationProfileCommandInput - {@link PublishDataTransformationProfileCommandInput}
 * @returns {@link PublishDataTransformationProfileCommandOutput}
 * @see {@link PublishDataTransformationProfileCommandInput} for command's `input` shape.
 * @see {@link PublishDataTransformationProfileCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request exceeds the service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class PublishDataTransformationProfileCommand extends command<PublishDataTransformationProfileCommandInput, PublishDataTransformationProfileCommandOutput>(
  _ep0,
  _mw0,
  "PublishDataTransformationProfile",
  PublishDataTransformationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishDataTransformationProfileRequest;
      output: PublishDataTransformationProfileResponse;
    };
    sdk: {
      input: PublishDataTransformationProfileCommandInput;
      output: PublishDataTransformationProfileCommandOutput;
    };
  };
}
