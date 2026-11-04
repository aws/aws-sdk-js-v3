// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOfferingPromotionsRequest, ListOfferingPromotionsResult } from "../models/models_0";
import { ListOfferingPromotions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOfferingPromotionsCommand}.
 */
export interface ListOfferingPromotionsCommandInput extends ListOfferingPromotionsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingPromotionsCommand}.
 */
export interface ListOfferingPromotionsCommandOutput extends ListOfferingPromotionsResult, __MetadataBearer {}

/**
 * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a `NotEligible` error if the caller is not permitted to invoke the operation. Contact [aws-devicefarm-support@amazon.com](mailto:aws-devicefarm-support@amazon.com) if you must be able to invoke this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingPromotionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingPromotionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListOfferingPromotionsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOfferingPromotionsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingPromotionsResult
 * //   offeringPromotions: [ // OfferingPromotions
 * //     { // OfferingPromotion
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOfferingPromotionsCommandInput - {@link ListOfferingPromotionsCommandInput}
 * @returns {@link ListOfferingPromotionsCommandOutput}
 * @see {@link ListOfferingPromotionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingPromotionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit was exceeded.
 *
 * @throws {@link NotEligibleException} (client fault)
 *
 * Exception gets thrown when a user is not eligible to perform the specified transaction.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @public
 */
export class ListOfferingPromotionsCommand extends command<ListOfferingPromotionsCommandInput, ListOfferingPromotionsCommandOutput>(
  _ep0,
  _mw0,
  "ListOfferingPromotions",
  ListOfferingPromotions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOfferingPromotionsRequest;
      output: ListOfferingPromotionsResult;
    };
    sdk: {
      input: ListOfferingPromotionsCommandInput;
      output: ListOfferingPromotionsCommandOutput;
    };
  };
}
