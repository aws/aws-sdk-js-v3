// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchAssociateResourceRequest, BatchAssociateResourceResponse } from "../models/models_0";
import { BatchAssociateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAssociateResourceCommand}.
 */
export interface BatchAssociateResourceCommandInput extends BatchAssociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateResourceCommand}.
 */
export interface BatchAssociateResourceCommandOutput extends BatchAssociateResourceResponse, __MetadataBearer {}

/**
 * Associate resources to a Firewall Manager resource set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, BatchAssociateResourceCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, BatchAssociateResourceCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // BatchAssociateResourceRequest
 *   ResourceSetIdentifier: "STRING_VALUE", // required
 *   Items: [ // IdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateResourceCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateResourceResponse
 * //   ResourceSetIdentifier: "STRING_VALUE", // required
 * //   FailedItems: [ // FailedItemList // required
 * //     { // FailedItem
 * //       URI: "STRING_VALUE",
 * //       Reason: "NOT_VALID_ARN" || "NOT_VALID_PARTITION" || "NOT_VALID_REGION" || "NOT_VALID_SERVICE" || "NOT_VALID_RESOURCE_TYPE" || "NOT_VALID_ACCOUNT_ID",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateResourceCommandInput - {@link BatchAssociateResourceCommandInput}
 * @returns {@link BatchAssociateResourceCommandOutput}
 * @see {@link BatchAssociateResourceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateResourceCommandOutput} for command's `response` shape.
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
export class BatchAssociateResourceCommand extends command<BatchAssociateResourceCommandInput, BatchAssociateResourceCommandOutput>(
  _ep0,
  _mw0,
  "BatchAssociateResource",
  BatchAssociateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateResourceRequest;
      output: BatchAssociateResourceResponse;
    };
    sdk: {
      input: BatchAssociateResourceCommandInput;
      output: BatchAssociateResourceCommandOutput;
    };
  };
}
