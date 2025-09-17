// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { Connector, ConnectorFilterSensitiveLog, UpdateConnectorRequest } from "../models/models_0";
import { de_UpdateConnectorCommand, se_UpdateConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandOutput extends Connector, __MetadataBearer {}

/**
 * <p>Update Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateConnectorCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateConnectorCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // UpdateConnectorRequest
 *   connectorID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   ssmCommandConfig: { // ConnectorSsmCommandConfig
 *     s3OutputEnabled: true || false, // required
 *     outputS3BucketName: "STRING_VALUE",
 *     cloudWatchOutputEnabled: true || false, // required
 *     cloudWatchLogGroupName: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // Connector
 * //   connectorID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   ssmInstanceID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ssmCommandConfig: { // ConnectorSsmCommandConfig
 * //     s3OutputEnabled: true || false, // required
 * //     outputS3BucketName: "STRING_VALUE",
 * //     cloudWatchOutputEnabled: true || false, // required
 * //     cloudWatchLogGroupName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateConnectorCommandInput - {@link UpdateConnectorCommandInput}
 * @returns {@link UpdateConnectorCommandOutput}
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class UpdateConnectorCommand extends $Command
  .classBuilder<
    UpdateConnectorCommandInput,
    UpdateConnectorCommandOutput,
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
  .s("ApplicationMigrationService", "UpdateConnector", {})
  .n("MgnClient", "UpdateConnectorCommand")
  .f(void 0, ConnectorFilterSensitiveLog)
  .ser(se_UpdateConnectorCommand)
  .de(de_UpdateConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorRequest;
      output: Connector;
    };
    sdk: {
      input: UpdateConnectorCommandInput;
      output: UpdateConnectorCommandOutput;
    };
  };
}
