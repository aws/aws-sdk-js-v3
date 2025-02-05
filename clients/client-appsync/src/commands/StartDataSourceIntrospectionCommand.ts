// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDataSourceIntrospectionRequest, StartDataSourceIntrospectionResponse } from "../models/models_0";
import {
  de_StartDataSourceIntrospectionCommand,
  se_StartDataSourceIntrospectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDataSourceIntrospectionCommand}.
 */
export interface StartDataSourceIntrospectionCommandInput extends StartDataSourceIntrospectionRequest {}
/**
 * @public
 *
 * The output of {@link StartDataSourceIntrospectionCommand}.
 */
export interface StartDataSourceIntrospectionCommandOutput
  extends StartDataSourceIntrospectionResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new introspection. Returns the <code>introspectionId</code> of the new
 *          introspection after its creation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartDataSourceIntrospectionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartDataSourceIntrospectionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppSyncClient(config);
 * const input = { // StartDataSourceIntrospectionRequest
 *   rdsDataApiConfig: { // RdsDataApiConfig
 *     resourceArn: "STRING_VALUE", // required
 *     secretArn: "STRING_VALUE", // required
 *     databaseName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartDataSourceIntrospectionCommand(input);
 * const response = await client.send(command);
 * // { // StartDataSourceIntrospectionResponse
 * //   introspectionId: "STRING_VALUE",
 * //   introspectionStatus: "PROCESSING" || "FAILED" || "SUCCESS",
 * //   introspectionStatusDetail: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataSourceIntrospectionCommandInput - {@link StartDataSourceIntrospectionCommandInput}
 * @returns {@link StartDataSourceIntrospectionCommandOutput}
 * @see {@link StartDataSourceIntrospectionCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceIntrospectionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class StartDataSourceIntrospectionCommand extends $Command
  .classBuilder<
    StartDataSourceIntrospectionCommandInput,
    StartDataSourceIntrospectionCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "StartDataSourceIntrospection", {})
  .n("AppSyncClient", "StartDataSourceIntrospectionCommand")
  .f(void 0, void 0)
  .ser(se_StartDataSourceIntrospectionCommand)
  .de(de_StartDataSourceIntrospectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataSourceIntrospectionRequest;
      output: StartDataSourceIntrospectionResponse;
    };
    sdk: {
      input: StartDataSourceIntrospectionCommandInput;
      output: StartDataSourceIntrospectionCommandOutput;
    };
  };
}
