// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateStreamingSessionStreamRequest,
  CreateStreamingSessionStreamResponse,
  CreateStreamingSessionStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  de_CreateStreamingSessionStreamCommand,
  se_CreateStreamingSessionStreamCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamingSessionStreamCommand}.
 */
export interface CreateStreamingSessionStreamCommandInput extends CreateStreamingSessionStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamingSessionStreamCommand}.
 */
export interface CreateStreamingSessionStreamCommandOutput
  extends CreateStreamingSessionStreamResponse,
    __MetadataBearer {}

/**
 * <p>Creates a streaming session stream for a streaming session.</p>
 *         <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId
 *             to poll the resource until it is in the <code>READY</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // CreateStreamingSessionStreamRequest
 *   clientToken: "STRING_VALUE",
 *   expirationInSeconds: Number("int"),
 *   sessionId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new CreateStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamingSessionStreamResponse
 * //   stream: { // StreamingSessionStream
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     expiresAt: new Date("TIMESTAMP"),
 * //     ownedBy: "STRING_VALUE",
 * //     state: "READY" || "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     statusCode: "STREAM_CREATE_IN_PROGRESS" || "STREAM_READY" || "STREAM_DELETE_IN_PROGRESS" || "STREAM_DELETED" || "INTERNAL_ERROR" || "NETWORK_CONNECTION_ERROR",
 * //     streamId: "STRING_VALUE",
 * //     url: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStreamingSessionStreamCommandInput - {@link CreateStreamingSessionStreamCommandInput}
 * @returns {@link CreateStreamingSessionStreamCommandOutput}
 * @see {@link CreateStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class CreateStreamingSessionStreamCommand extends $Command
  .classBuilder<
    CreateStreamingSessionStreamCommandInput,
    CreateStreamingSessionStreamCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "CreateStreamingSessionStream", {})
  .n("NimbleClient", "CreateStreamingSessionStreamCommand")
  .f(void 0, CreateStreamingSessionStreamResponseFilterSensitiveLog)
  .ser(se_CreateStreamingSessionStreamCommand)
  .de(de_CreateStreamingSessionStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamingSessionStreamRequest;
      output: CreateStreamingSessionStreamResponse;
    };
    sdk: {
      input: CreateStreamingSessionStreamCommandInput;
      output: CreateStreamingSessionStreamCommandOutput;
    };
  };
}
