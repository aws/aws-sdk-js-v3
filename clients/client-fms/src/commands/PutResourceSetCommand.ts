// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutResourceSetRequest, PutResourceSetResponse } from "../models/models_0";
import { PutResourceSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourceSetCommand}.
 */
export interface PutResourceSetCommandInput extends PutResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link PutResourceSetCommand}.
 */
export interface PutResourceSetCommandOutput extends PutResourceSetResponse, __MetadataBearer {}

/**
 * Creates the resource set.
 *
 * An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutResourceSetCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutResourceSetCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // PutResourceSetRequest
 *   ResourceSet: { // ResourceSet
 *     Id: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     UpdateToken: "STRING_VALUE",
 *     ResourceTypeList: [ // ResourceTypeList // required
 *       "STRING_VALUE",
 *     ],
 *     LastUpdateTime: new Date("TIMESTAMP"),
 *     ResourceSetStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // PutResourceSetResponse
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
 * @param PutResourceSetCommandInput - {@link PutResourceSetCommandInput}
 * @returns {@link PutResourceSetCommandOutput}
 * @see {@link PutResourceSetCommandInput} for command's `input` shape.
 * @see {@link PutResourceSetCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `policy` objects that you can create for an Amazon Web Services account. For more information, see [Firewall Manager Limits](https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html) in the *WAF Developer Guide*.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class PutResourceSetCommand extends command<PutResourceSetCommandInput, PutResourceSetCommandOutput>(
  _ep0,
  _mw0,
  "PutResourceSet",
  PutResourceSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourceSetRequest;
      output: PutResourceSetResponse;
    };
    sdk: {
      input: PutResourceSetCommandInput;
      output: PutResourceSetCommandOutput;
    };
  };
}
