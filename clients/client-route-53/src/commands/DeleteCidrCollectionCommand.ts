// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCidrCollectionRequest, DeleteCidrCollectionResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteCidrCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCidrCollectionCommand}.
 */
export interface DeleteCidrCollectionCommandInput extends DeleteCidrCollectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCidrCollectionCommand}.
 */
export interface DeleteCidrCollectionCommandOutput extends DeleteCidrCollectionResponse, __MetadataBearer {}

/**
 * <p>Deletes a CIDR collection in the current Amazon Web Services account. The collection
 * 			must be empty before it can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteCidrCollectionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteCidrCollectionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteCidrCollectionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteCidrCollectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCidrCollectionCommandInput - {@link DeleteCidrCollectionCommandInput}
 * @returns {@link DeleteCidrCollectionCommandOutput}
 * @see {@link DeleteCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link CidrCollectionInUseException} (client fault)
 *  <p>This CIDR collection is in use, and isn't empty.</p>
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
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
export class DeleteCidrCollectionCommand extends $Command
  .classBuilder<
    DeleteCidrCollectionCommandInput,
    DeleteCidrCollectionCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "DeleteCidrCollection", {})
  .n("Route53Client", "DeleteCidrCollectionCommand")
  .sc(DeleteCidrCollection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCidrCollectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteCidrCollectionCommandInput;
      output: DeleteCidrCollectionCommandOutput;
    };
  };
}
