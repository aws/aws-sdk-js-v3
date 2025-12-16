// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ChangeCidrCollectionRequest, ChangeCidrCollectionResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ChangeCidrCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ChangeCidrCollectionCommand}.
 */
export interface ChangeCidrCollectionCommandInput extends ChangeCidrCollectionRequest {}
/**
 * @public
 *
 * The output of {@link ChangeCidrCollectionCommand}.
 */
export interface ChangeCidrCollectionCommandOutput extends ChangeCidrCollectionResponse, __MetadataBearer {}

/**
 * <p>Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative
 * 			IP information mapping blocks to one or multiple locations.</p>
 *          <p>A change request can update multiple locations in a collection at a time, which is
 * 			helpful if you want to move one or more CIDR blocks from one location to another in one
 * 			transaction, without downtime. </p>
 *          <p>
 *             <b>Limits</b>
 *          </p>
 *          <p>The max number of CIDR blocks included in the request is 1000. As a result, big updates
 * 			require multiple API calls.</p>
 *          <p>
 *             <b> PUT and DELETE_IF_EXISTS</b>
 *          </p>
 *          <p>Use <code>ChangeCidrCollection</code> to perform the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PUT</code>: Create a CIDR block within the specified collection.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code> DELETE_IF_EXISTS</code>: Delete an existing CIDR block from the
 * 					collection.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeCidrCollectionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeCidrCollectionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ChangeCidrCollectionRequest
 *   Id: "STRING_VALUE", // required
 *   CollectionVersion: Number("long"),
 *   Changes: [ // CidrCollectionChanges // required
 *     { // CidrCollectionChange
 *       LocationName: "STRING_VALUE", // required
 *       Action: "PUT" || "DELETE_IF_EXISTS", // required
 *       CidrList: [ // CidrList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ChangeCidrCollectionCommand(input);
 * const response = await client.send(command);
 * // { // ChangeCidrCollectionResponse
 * //   Id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ChangeCidrCollectionCommandInput - {@link ChangeCidrCollectionCommandInput}
 * @returns {@link ChangeCidrCollectionCommandOutput}
 * @see {@link ChangeCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link ChangeCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link CidrBlockInUseException} (client fault)
 *  <p>This CIDR block is already in use.</p>
 *
 * @throws {@link CidrCollectionVersionMismatchException} (client fault)
 *  <p>The CIDR collection version you provided, doesn't match the one in the
 * 				<code>ListCidrCollections</code> operation.</p>
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *  <p>The CIDR collection you specified, doesn't exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ChangeCidrCollectionCommand extends $Command
  .classBuilder<
    ChangeCidrCollectionCommandInput,
    ChangeCidrCollectionCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "ChangeCidrCollection", {})
  .n("Route53Client", "ChangeCidrCollectionCommand")
  .sc(ChangeCidrCollection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangeCidrCollectionRequest;
      output: ChangeCidrCollectionResponse;
    };
    sdk: {
      input: ChangeCidrCollectionCommandInput;
      output: ChangeCidrCollectionCommandOutput;
    };
  };
}
