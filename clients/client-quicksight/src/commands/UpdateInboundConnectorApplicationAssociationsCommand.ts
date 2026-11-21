// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateInboundConnectorApplicationAssociationsRequest,
  UpdateInboundConnectorApplicationAssociationsResponse,
} from "../models/models_5";
import { UpdateInboundConnectorApplicationAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInboundConnectorApplicationAssociationsCommand}.
 */
export interface UpdateInboundConnectorApplicationAssociationsCommandInput extends UpdateInboundConnectorApplicationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInboundConnectorApplicationAssociationsCommand}.
 */
export interface UpdateInboundConnectorApplicationAssociationsCommandOutput extends UpdateInboundConnectorApplicationAssociationsResponse, __MetadataBearer {}

/**
 * <p>Associates access control applications with an inbound connector, disassociates them from it, or both. You can add up to 20 associations and remove up to 20 associations in each request. An inbound connector supports up to 6,000 associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateInboundConnectorApplicationAssociationsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateInboundConnectorApplicationAssociationsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateInboundConnectorApplicationAssociationsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   InboundConnectorId: "STRING_VALUE", // required
 *   AssociateAccessControlApplications: [ // InboundConnectorAssociationArnList
 *     "STRING_VALUE",
 *   ],
 *   DisassociateAccessControlApplications: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateInboundConnectorApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInboundConnectorApplicationAssociationsResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateInboundConnectorApplicationAssociationsCommandInput - {@link UpdateInboundConnectorApplicationAssociationsCommandInput}
 * @returns {@link UpdateInboundConnectorApplicationAssociationsCommandOutput}
 * @see {@link UpdateInboundConnectorApplicationAssociationsCommandInput} for command's `input` shape.
 * @see {@link UpdateInboundConnectorApplicationAssociationsCommandOutput} for command's `response` shape.
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
export class UpdateInboundConnectorApplicationAssociationsCommand extends command<UpdateInboundConnectorApplicationAssociationsCommandInput, UpdateInboundConnectorApplicationAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInboundConnectorApplicationAssociations",
  UpdateInboundConnectorApplicationAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInboundConnectorApplicationAssociationsRequest;
      output: UpdateInboundConnectorApplicationAssociationsResponse;
    };
    sdk: {
      input: UpdateInboundConnectorApplicationAssociationsCommandInput;
      output: UpdateInboundConnectorApplicationAssociationsCommandOutput;
    };
  };
}
