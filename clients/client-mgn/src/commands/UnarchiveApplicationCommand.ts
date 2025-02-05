// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { Application, ApplicationFilterSensitiveLog, UnarchiveApplicationRequest } from "../models/models_0";
import { de_UnarchiveApplicationCommand, se_UnarchiveApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnarchiveApplicationCommand}.
 */
export interface UnarchiveApplicationCommandInput extends UnarchiveApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UnarchiveApplicationCommand}.
 */
export interface UnarchiveApplicationCommandOutput extends Application, __MetadataBearer {}

/**
 * <p>Unarchive application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UnarchiveApplicationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UnarchiveApplicationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MgnClient(config);
 * const input = { // UnarchiveApplicationRequest
 *   applicationID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new UnarchiveApplicationCommand(input);
 * const response = await client.send(command);
 * // { // Application
 * //   applicationID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   isArchived: true || false,
 * //   applicationAggregatedStatus: { // ApplicationAggregatedStatus
 * //     lastUpdateDateTime: "STRING_VALUE",
 * //     healthStatus: "STRING_VALUE",
 * //     progressStatus: "STRING_VALUE",
 * //     totalSourceServers: Number("long"),
 * //   },
 * //   creationDateTime: "STRING_VALUE",
 * //   lastModifiedDateTime: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   waveID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UnarchiveApplicationCommandInput - {@link UnarchiveApplicationCommandInput}
 * @returns {@link UnarchiveApplicationCommandOutput}
 * @see {@link UnarchiveApplicationCommandInput} for command's `input` shape.
 * @see {@link UnarchiveApplicationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class UnarchiveApplicationCommand extends $Command
  .classBuilder<
    UnarchiveApplicationCommandInput,
    UnarchiveApplicationCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "UnarchiveApplication", {})
  .n("MgnClient", "UnarchiveApplicationCommand")
  .f(void 0, ApplicationFilterSensitiveLog)
  .ser(se_UnarchiveApplicationCommand)
  .de(de_UnarchiveApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnarchiveApplicationRequest;
      output: Application;
    };
    sdk: {
      input: UnarchiveApplicationCommandInput;
      output: UnarchiveApplicationCommandOutput;
    };
  };
}
