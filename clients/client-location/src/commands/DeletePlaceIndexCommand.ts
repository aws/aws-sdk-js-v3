// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeletePlaceIndexRequest, DeletePlaceIndexResponse } from "../models/models_0";
import { DeletePlaceIndex } from "../schemas/schemas_20_DeletePlaceIndex";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlaceIndexCommand}.
 */
export interface DeletePlaceIndexCommandInput extends DeletePlaceIndexRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlaceIndexCommand}.
 */
export interface DeletePlaceIndexCommandOutput extends DeletePlaceIndexResponse, __MetadataBearer {}

/**
 * <p>Deletes a place index resource from your Amazon Web Services account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeletePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeletePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DeletePlaceIndexRequest
 *   IndexName: "STRING_VALUE", // required
 * };
 * const command = new DeletePlaceIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlaceIndexCommandInput - {@link DeletePlaceIndexCommandInput}
 * @returns {@link DeletePlaceIndexCommandOutput}
 * @see {@link DeletePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class DeletePlaceIndexCommand extends $Command
  .classBuilder<
    DeletePlaceIndexCommandInput,
    DeletePlaceIndexCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DeletePlaceIndex", {})
  .n("LocationClient", "DeletePlaceIndexCommand")
  .sc(DeletePlaceIndex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlaceIndexRequest;
      output: {};
    };
    sdk: {
      input: DeletePlaceIndexCommandInput;
      output: DeletePlaceIndexCommandOutput;
    };
  };
}
