// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxConnectionStringRequest, GetKxConnectionStringResponse } from "../models/models_0";
import { GetKxConnectionString } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxConnectionStringCommand}.
 */
export interface GetKxConnectionStringCommandInput extends GetKxConnectionStringRequest {}
/**
 * @public
 *
 * The output of {@link GetKxConnectionStringCommand}.
 */
export interface GetKxConnectionStringCommandOutput extends GetKxConnectionStringResponse, __MetadataBearer {}

/**
 * <p>Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxConnectionStringCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxConnectionStringCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // GetKxConnectionStringRequest
 *   userArn: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 * };
 * const command = new GetKxConnectionStringCommand(input);
 * const response = await client.send(command);
 * // { // GetKxConnectionStringResponse
 * //   signedConnectionString: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKxConnectionStringCommandInput - {@link GetKxConnectionStringCommandInput}
 * @returns {@link GetKxConnectionStringCommandOutput}
 * @see {@link GetKxConnectionStringCommandInput} for command's `input` shape.
 * @see {@link GetKxConnectionStringCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class GetKxConnectionStringCommand extends $Command
  .classBuilder<
    GetKxConnectionStringCommandInput,
    GetKxConnectionStringCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "GetKxConnectionString", {})
  .n("FinspaceClient", "GetKxConnectionStringCommand")
  .sc(GetKxConnectionString)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKxConnectionStringRequest;
      output: GetKxConnectionStringResponse;
    };
    sdk: {
      input: GetKxConnectionStringCommandInput;
      output: GetKxConnectionStringCommandOutput;
    };
  };
}
