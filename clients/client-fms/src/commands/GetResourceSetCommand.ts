// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceSetRequest, GetResourceSetResponse } from "../models/models_0";
import { GetResourceSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourceSetCommand}.
 */
export interface GetResourceSetCommandInput extends GetResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSetCommand}.
 */
export interface GetResourceSetCommandOutput extends GetResourceSetResponse, __MetadataBearer {}

/**
 * Gets information about a specific resource set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetResourceSetCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetResourceSetCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // GetResourceSetRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSetResponse
 * //   ResourceSet: { // ResourceSet
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     UpdateToken: "STRING_VALUE",
 * //     ResourceTypeList: [ // ResourceTypeList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     ResourceSetStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //   },
 * //   ResourceSetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetResourceSetCommandInput - {@link GetResourceSetCommandInput}
 * @returns {@link GetResourceSetCommandOutput}
 * @see {@link GetResourceSetCommandInput} for command's `input` shape.
 * @see {@link GetResourceSetCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The parameters of the request were invalid.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have submitted an `AssociateAdminAccount` request for an account ID that was already set as the Firewall Manager administrator. Or you might have tried to access a Region that's disabled by default, and that you need to enable for the Firewall Manager administrator account and for Organizations before you can access it.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class GetResourceSetCommand extends command<GetResourceSetCommandInput, GetResourceSetCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceSet",
  GetResourceSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceSetRequest;
      output: GetResourceSetResponse;
    };
    sdk: {
      input: GetResourceSetCommandInput;
      output: GetResourceSetCommandOutput;
    };
  };
}
