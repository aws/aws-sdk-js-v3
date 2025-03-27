// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetApplicationVersionRequest, GetApplicationVersionResponse } from "../models/models_0";
import { de_GetApplicationVersionCommand, se_GetApplicationVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationVersionCommand}.
 */
export interface GetApplicationVersionCommandInput extends GetApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationVersionCommand}.
 */
export interface GetApplicationVersionCommandOutput extends GetApplicationVersionResponse, __MetadataBearer {}

/**
 * <p>Returns details about a specific version of a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetApplicationVersionCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetApplicationVersionCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetApplicationVersionRequest
 *   applicationId: "STRING_VALUE", // required
 *   applicationVersion: Number("int"), // required
 * };
 * const command = new GetApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationVersionResponse
 * //   name: "STRING_VALUE", // required
 * //   applicationVersion: Number("int"), // required
 * //   description: "STRING_VALUE",
 * //   definitionContent: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApplicationVersionCommandInput - {@link GetApplicationVersionCommandInput}
 * @returns {@link GetApplicationVersionCommandOutput}
 * @see {@link GetApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class GetApplicationVersionCommand extends $Command
  .classBuilder<
    GetApplicationVersionCommandInput,
    GetApplicationVersionCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "GetApplicationVersion", {})
  .n("M2Client", "GetApplicationVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationVersionCommand)
  .de(de_GetApplicationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationVersionRequest;
      output: GetApplicationVersionResponse;
    };
    sdk: {
      input: GetApplicationVersionCommandInput;
      output: GetApplicationVersionCommandOutput;
    };
  };
}
