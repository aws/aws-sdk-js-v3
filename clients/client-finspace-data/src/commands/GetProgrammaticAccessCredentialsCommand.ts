// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import type {
  GetProgrammaticAccessCredentialsRequest,
  GetProgrammaticAccessCredentialsResponse,
} from "../models/models_0";
import { GetProgrammaticAccessCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProgrammaticAccessCredentialsCommand}.
 */
export interface GetProgrammaticAccessCredentialsCommandInput extends GetProgrammaticAccessCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetProgrammaticAccessCredentialsCommand}.
 */
export interface GetProgrammaticAccessCredentialsCommandOutput
  extends GetProgrammaticAccessCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Request programmatic credentials to use with FinSpace SDK. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#accessing-credentials">Step 2. Access credentials programmatically using IAM access key id and secret access key</a>.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // GetProgrammaticAccessCredentialsRequest
 *   durationInMinutes: Number("long"),
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new GetProgrammaticAccessCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetProgrammaticAccessCredentialsResponse
 * //   credentials: { // Credentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //   },
 * //   durationInMinutes: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetProgrammaticAccessCredentialsCommandInput - {@link GetProgrammaticAccessCredentialsCommandInput}
 * @returns {@link GetProgrammaticAccessCredentialsCommandOutput}
 * @see {@link GetProgrammaticAccessCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetProgrammaticAccessCredentialsCommandOutput} for command's `response` shape.
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
export class GetProgrammaticAccessCredentialsCommand extends $Command
  .classBuilder<
    GetProgrammaticAccessCredentialsCommandInput,
    GetProgrammaticAccessCredentialsCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "GetProgrammaticAccessCredentials", {})
  .n("FinspaceDataClient", "GetProgrammaticAccessCredentialsCommand")
  .sc(GetProgrammaticAccessCredentials$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProgrammaticAccessCredentialsRequest;
      output: GetProgrammaticAccessCredentialsResponse;
    };
    sdk: {
      input: GetProgrammaticAccessCredentialsCommandInput;
      output: GetProgrammaticAccessCredentialsCommandOutput;
    };
  };
}
