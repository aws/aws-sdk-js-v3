// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrafficPolicyInstanceRequest, DeleteTrafficPolicyInstanceResponse } from "../models/models_0";
import { DeleteTrafficPolicyInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrafficPolicyInstanceCommand}.
 */
export interface DeleteTrafficPolicyInstanceCommandInput extends DeleteTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficPolicyInstanceCommand}.
 */
export interface DeleteTrafficPolicyInstanceCommandOutput extends DeleteTrafficPolicyInstanceResponse, __MetadataBearer {}

/**
 * Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.
 *
 * > **Note:** In the Route 53 console, traffic policy instances are known as policy records.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteTrafficPolicyInstanceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrafficPolicyInstanceCommandInput - {@link DeleteTrafficPolicyInstanceCommandInput}
 * @returns {@link DeleteTrafficPolicyInstanceCommandOutput}
 * @see {@link DeleteTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *
 * No traffic policy instance exists with the specified ID.
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *
 * If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an `HTTP 400 error` (`Bad request`). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class DeleteTrafficPolicyInstanceCommand extends command<DeleteTrafficPolicyInstanceCommandInput, DeleteTrafficPolicyInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrafficPolicyInstance",
  DeleteTrafficPolicyInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficPolicyInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrafficPolicyInstanceCommandInput;
      output: DeleteTrafficPolicyInstanceCommandOutput;
    };
  };
}
