// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateInboundConnectorRequest, CreateInboundConnectorResponse } from "../models/models_3";
import { CreateInboundConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateInboundConnectorCommand}.
 */
export interface CreateInboundConnectorCommandInput extends CreateInboundConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateInboundConnectorCommand}.
 */
export interface CreateInboundConnectorCommandOutput extends CreateInboundConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates an inbound connector in a Quick Sight account. An inbound connector is the endpoint that an external client, such as the Quick Sight desktop application, uses to reach Quick Sight in your account.</p>
 *          <p>Your users authenticate through the access control applications that are associated with the connector. To manage these associations, use <code>UpdateInboundConnectorApplicationAssociations</code>.</p>
 *          <p>An account can have one <code>QUICK_DESKTOP</code> inbound connector in each Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateInboundConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateInboundConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateInboundConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   InboundConnectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InboundConnectorConfiguration: { // InboundConnectorConfig
 *     InboundConnectorType: "QUICK_DESKTOP", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInboundConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateInboundConnectorResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   InboundConnectorId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   TenantUrl: "STRING_VALUE", // required
 * //   InboundConnectorStatus: "ENABLED" || "DISABLED", // required
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateInboundConnectorCommandInput - {@link CreateInboundConnectorCommandInput}
 * @returns {@link CreateInboundConnectorCommandOutput}
 * @see {@link CreateInboundConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateInboundConnectorCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class CreateInboundConnectorCommand extends command<CreateInboundConnectorCommandInput, CreateInboundConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateInboundConnector",
  CreateInboundConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInboundConnectorRequest;
      output: CreateInboundConnectorResponse;
    };
    sdk: {
      input: CreateInboundConnectorCommandInput;
      output: CreateInboundConnectorCommandOutput;
    };
  };
}
