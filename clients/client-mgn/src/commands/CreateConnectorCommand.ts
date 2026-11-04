// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { Connector, CreateConnectorRequest } from "../models/models_0";
import { CreateConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Create Connector.
 *
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
 *
 * Uninitialized account exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validate exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @public
 */
export class CreateConnectorCommand extends command<CreateConnectorCommandInput, CreateConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnector",
  CreateConnector$
) {
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
