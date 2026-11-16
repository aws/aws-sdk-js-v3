// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContextStoreAssociationRequest, GetContextStoreAssociationResponse } from "../models/models_0";
import { GetContextStoreAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContextStoreAssociationCommand}.
 */
export interface GetContextStoreAssociationCommandInput extends GetContextStoreAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetContextStoreAssociationCommand}.
 */
export interface GetContextStoreAssociationCommandOutput extends GetContextStoreAssociationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the association between a context store and a transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetContextStoreAssociationCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetContextStoreAssociationCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetContextStoreAssociationRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   TransitGatewayArn: "STRING_VALUE", // required
 * };
 * const command = new GetContextStoreAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetContextStoreAssociationResponse
 * //   ContextStoreAssociation: { // ContextStoreAssociation
 * //     ContextStoreId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "ASSOCIATING" || "ASSOCIATED" || "DISASSOCIATING" || "FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContextStoreAssociationCommandInput - {@link GetContextStoreAssociationCommandInput}
 * @returns {@link GetContextStoreAssociationCommandOutput}
 * @see {@link GetContextStoreAssociationCommandInput} for command's `input` shape.
 * @see {@link GetContextStoreAssociationCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class GetContextStoreAssociationCommand extends command<GetContextStoreAssociationCommandInput, GetContextStoreAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetContextStoreAssociation",
  GetContextStoreAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContextStoreAssociationRequest;
      output: GetContextStoreAssociationResponse;
    };
    sdk: {
      input: GetContextStoreAssociationCommandInput;
      output: GetContextStoreAssociationCommandOutput;
    };
  };
}
