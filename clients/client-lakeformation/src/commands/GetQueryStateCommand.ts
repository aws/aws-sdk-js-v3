// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetQueryStateRequest, GetQueryStateResponse } from "../models/models_0";
import { GetQueryState } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryStateCommand}.
 */
export interface GetQueryStateCommandInput extends GetQueryStateRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryStateCommand}.
 */
export interface GetQueryStateCommandOutput extends GetQueryStateResponse, __MetadataBearer {}

/**
 * <p>Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetQueryStateCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetQueryStateCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetQueryStateRequest
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStateCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStateResponse
 * //   Error: "STRING_VALUE",
 * //   State: "PENDING" || "WORKUNITS_AVAILABLE" || "ERROR" || "FINISHED" || "EXPIRED", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStateCommandInput - {@link GetQueryStateCommandInput}
 * @returns {@link GetQueryStateCommandOutput}
 * @see {@link GetQueryStateCommandInput} for command's `input` shape.
 * @see {@link GetQueryStateCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetQueryStateCommand extends $Command
  .classBuilder<
    GetQueryStateCommandInput,
    GetQueryStateCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetQueryState", {})
  .n("LakeFormationClient", "GetQueryStateCommand")
  .sc(GetQueryState)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStateRequest;
      output: GetQueryStateResponse;
    };
    sdk: {
      input: GetQueryStateCommandInput;
      output: GetQueryStateCommandOutput;
    };
  };
}
