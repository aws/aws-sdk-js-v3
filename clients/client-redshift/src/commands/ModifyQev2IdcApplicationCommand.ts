// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyQev2IdcApplicationMessage, ModifyQev2IdcApplicationResult } from "../models/models_1";
import { ModifyQev2IdcApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyQev2IdcApplicationCommand}.
 */
export interface ModifyQev2IdcApplicationCommandInput extends ModifyQev2IdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyQev2IdcApplicationCommand}.
 */
export interface ModifyQev2IdcApplicationCommandOutput extends ModifyQev2IdcApplicationResult, __MetadataBearer {}

/**
 * <p>Modifies an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyQev2IdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyQev2IdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyQev2IdcApplicationMessage
 *   Qev2IdcApplicationArn: "STRING_VALUE", // required
 *   IdcDisplayName: "STRING_VALUE",
 * };
 * const command = new ModifyQev2IdcApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyQev2IdcApplicationResult
 * //   Qev2IdcApplication: { // Qev2IdcApplication
 * //     IdcInstanceArn: "STRING_VALUE",
 * //     Qev2IdcApplicationName: "STRING_VALUE",
 * //     Qev2IdcApplicationArn: "STRING_VALUE",
 * //     IdcManagedApplicationArn: "STRING_VALUE",
 * //     IdcOnboardStatus: "STRING_VALUE",
 * //     IdcDisplayName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyQev2IdcApplicationCommandInput - {@link ModifyQev2IdcApplicationCommandInput}
 * @returns {@link ModifyQev2IdcApplicationCommandOutput}
 * @see {@link ModifyQev2IdcApplicationCommandInput} for command's `input` shape.
 * @see {@link ModifyQev2IdcApplicationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link Qev2IdcApplicationNotExistsFault} (client fault)
 *  <p>The specified Amazon Redshift Query Editor (QEV2) IAM Identity Center application doesn't exist. Verify that the application ARN is correct and that the application exists in this Region.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyQev2IdcApplicationCommand extends command<ModifyQev2IdcApplicationCommandInput, ModifyQev2IdcApplicationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyQev2IdcApplication",
  ModifyQev2IdcApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyQev2IdcApplicationMessage;
      output: ModifyQev2IdcApplicationResult;
    };
    sdk: {
      input: ModifyQev2IdcApplicationCommandInput;
      output: ModifyQev2IdcApplicationCommandOutput;
    };
  };
}
