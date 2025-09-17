// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseConversionTaskForResourceResponse,
} from "../models/models_0";
import {
  de_CreateLicenseConversionTaskForResourceCommand,
  se_CreateLicenseConversionTaskForResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseConversionTaskForResourceCommand}.
 */
export interface CreateLicenseConversionTaskForResourceCommandInput
  extends CreateLicenseConversionTaskForResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseConversionTaskForResourceCommand}.
 */
export interface CreateLicenseConversionTaskForResourceCommandOutput
  extends CreateLicenseConversionTaskForResourceResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new license conversion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseConversionTaskForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   SourceLicenseContext: { // LicenseConversionContext
 *     UsageOperation: "STRING_VALUE",
 *     ProductCodes: [ // ProductCodeList
 *       { // ProductCodeListItem
 *         ProductCodeId: "STRING_VALUE", // required
 *         ProductCodeType: "marketplace", // required
 *       },
 *     ],
 *   },
 *   DestinationLicenseContext: {
 *     UsageOperation: "STRING_VALUE",
 *     ProductCodes: [
 *       {
 *         ProductCodeId: "STRING_VALUE", // required
 *         ProductCodeType: "marketplace", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateLicenseConversionTaskForResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseConversionTaskForResourceResponse
 * //   LicenseConversionTaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLicenseConversionTaskForResourceCommandInput - {@link CreateLicenseConversionTaskForResourceCommandInput}
 * @returns {@link CreateLicenseConversionTaskForResourceCommandOutput}
 * @see {@link CreateLicenseConversionTaskForResourceCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseConversionTaskForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class CreateLicenseConversionTaskForResourceCommand extends $Command
  .classBuilder<
    CreateLicenseConversionTaskForResourceCommandInput,
    CreateLicenseConversionTaskForResourceCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "CreateLicenseConversionTaskForResource", {})
  .n("LicenseManagerClient", "CreateLicenseConversionTaskForResourceCommand")
  .f(void 0, void 0)
  .ser(se_CreateLicenseConversionTaskForResourceCommand)
  .de(de_CreateLicenseConversionTaskForResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseConversionTaskForResourceRequest;
      output: CreateLicenseConversionTaskForResourceResponse;
    };
    sdk: {
      input: CreateLicenseConversionTaskForResourceCommandInput;
      output: CreateLicenseConversionTaskForResourceCommandOutput;
    };
  };
}
