// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetMapStyleDescriptorRequest,
  GetMapStyleDescriptorRequestFilterSensitiveLog,
  GetMapStyleDescriptorResponse,
} from "../models/models_0";
import { de_GetMapStyleDescriptorCommand, se_GetMapStyleDescriptorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMapStyleDescriptorCommand}.
 */
export interface GetMapStyleDescriptorCommandInput extends GetMapStyleDescriptorRequest {}
/**
 * @public
 */
export type GetMapStyleDescriptorCommandOutputType = Omit<GetMapStyleDescriptorResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapStyleDescriptorCommand}.
 */
export interface GetMapStyleDescriptorCommandOutput extends GetMapStyleDescriptorCommandOutputType, __MetadataBearer {}

/**
 * <p>Retrieves the map style descriptor from a map resource. </p>
 *          <p>The style descriptor contains speciﬁcations on how features render on a map. For
 *             example, what data to display, what order to display the data in, and the style for the
 *             data. Style descriptors follow the Mapbox Style Specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapStyleDescriptorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapStyleDescriptorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetMapStyleDescriptorRequest
 *   MapName: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetMapStyleDescriptorResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapStyleDescriptorCommandInput - {@link GetMapStyleDescriptorCommandInput}
 * @returns {@link GetMapStyleDescriptorCommandOutput}
 * @see {@link GetMapStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetMapStyleDescriptorCommandOutput} for command's `response` shape.
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
export class GetMapStyleDescriptorCommand extends $Command
  .classBuilder<
    GetMapStyleDescriptorCommandInput,
    GetMapStyleDescriptorCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "GetMapStyleDescriptor", {})
  .n("LocationClient", "GetMapStyleDescriptorCommand")
  .f(GetMapStyleDescriptorRequestFilterSensitiveLog, void 0)
  .ser(se_GetMapStyleDescriptorCommand)
  .de(de_GetMapStyleDescriptorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMapStyleDescriptorRequest;
      output: GetMapStyleDescriptorResponse;
    };
    sdk: {
      input: GetMapStyleDescriptorCommandInput;
      output: GetMapStyleDescriptorCommandOutput;
    };
  };
}
