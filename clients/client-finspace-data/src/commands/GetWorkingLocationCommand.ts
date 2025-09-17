// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetWorkingLocationRequest, GetWorkingLocationResponse } from "../models/models_0";
import { de_GetWorkingLocationCommand, se_GetWorkingLocationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkingLocationCommand}.
 */
export interface GetWorkingLocationCommandInput extends GetWorkingLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkingLocationCommand}.
 */
export interface GetWorkingLocationCommandOutput extends GetWorkingLocationResponse, __MetadataBearer {}

/**
 * <p>A temporary Amazon S3 location, where you can copy your files from a source location to stage or use
 *       as a scratch space in FinSpace notebook.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetWorkingLocationCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetWorkingLocationCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // GetWorkingLocationRequest
 *   locationType: "INGESTION" || "SAGEMAKER",
 * };
 * const command = new GetWorkingLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkingLocationResponse
 * //   s3Uri: "STRING_VALUE",
 * //   s3Path: "STRING_VALUE",
 * //   s3Bucket: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkingLocationCommandInput - {@link GetWorkingLocationCommandInput}
 * @returns {@link GetWorkingLocationCommandOutput}
 * @see {@link GetWorkingLocationCommandInput} for command's `input` shape.
 * @see {@link GetWorkingLocationCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class GetWorkingLocationCommand extends $Command
  .classBuilder<
    GetWorkingLocationCommandInput,
    GetWorkingLocationCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "GetWorkingLocation", {})
  .n("FinspaceDataClient", "GetWorkingLocationCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkingLocationCommand)
  .de(de_GetWorkingLocationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkingLocationRequest;
      output: GetWorkingLocationResponse;
    };
    sdk: {
      input: GetWorkingLocationCommandInput;
      output: GetWorkingLocationCommandOutput;
    };
  };
}
