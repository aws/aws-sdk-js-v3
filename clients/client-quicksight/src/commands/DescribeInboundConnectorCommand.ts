// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInboundConnectorRequest, DescribeInboundConnectorResponse } from "../models/models_4";
import { DescribeInboundConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInboundConnectorCommand}.
 */
export interface DescribeInboundConnectorCommandInput extends DescribeInboundConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInboundConnectorCommand}.
 */
export interface DescribeInboundConnectorCommandOutput extends DescribeInboundConnectorResponse, __MetadataBearer {}

/**
 * <p>Describes an inbound connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeInboundConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeInboundConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeInboundConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   InboundConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInboundConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInboundConnectorResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   InboundConnector: { // InboundConnector
 * //     InboundConnectorId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     TenantUrl: "STRING_VALUE", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     InboundConnectorConfiguration: { // InboundConnectorConfig
 * //       InboundConnectorType: "QUICK_DESKTOP", // required
 * //     },
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInboundConnectorCommandInput - {@link DescribeInboundConnectorCommandInput}
 * @returns {@link DescribeInboundConnectorCommandOutput}
 * @see {@link DescribeInboundConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundConnectorCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeInboundConnectorCommand extends command<DescribeInboundConnectorCommandInput, DescribeInboundConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInboundConnector",
  DescribeInboundConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInboundConnectorRequest;
      output: DescribeInboundConnectorResponse;
    };
    sdk: {
      input: DescribeInboundConnectorCommandInput;
      output: DescribeInboundConnectorCommandOutput;
    };
  };
}
