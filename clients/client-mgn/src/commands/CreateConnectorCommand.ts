// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  Connector,
  ConnectorFilterSensitiveLog,
  CreateConnectorRequest,
  CreateConnectorRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateConnectorCommand, se_CreateConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends Connector, __MetadataBearer {}

/**
 * <p>Create Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateConnectorCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateConnectorCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // CreateConnectorRequest
 *   name: "STRING_VALUE", // required
 *   ssmInstanceID: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ssmCommandConfig: { // ConnectorSsmCommandConfig
 *     s3OutputEnabled: true || false, // required
 *     outputS3BucketName: "STRING_VALUE",
 *     cloudWatchOutputEnabled: true || false, // required
 *     cloudWatchLogGroupName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConnectorCommand(input);
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
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
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
export class CreateConnectorCommand extends $Command
  .classBuilder<
    CreateConnectorCommandInput,
    CreateConnectorCommandOutput,
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
  .s("ApplicationMigrationService", "CreateConnector", {})
  .n("MgnClient", "CreateConnectorCommand")
  .f(CreateConnectorRequestFilterSensitiveLog, ConnectorFilterSensitiveLog)
  .ser(se_CreateConnectorCommand)
  .de(de_CreateConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorRequest;
      output: Connector;
    };
    sdk: {
      input: CreateConnectorCommandInput;
      output: CreateConnectorCommandOutput;
    };
  };
}
