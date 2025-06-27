// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxChangesetRequest, GetKxChangesetResponse } from "../models/models_0";
import { de_GetKxChangesetCommand, se_GetKxChangesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxChangesetCommand}.
 */
export interface GetKxChangesetCommandInput extends GetKxChangesetRequest {}
/**
 * @public
 *
 * The output of {@link GetKxChangesetCommand}.
 */
export interface GetKxChangesetCommandOutput extends GetKxChangesetResponse, __MetadataBearer {}

/**
 * <p>Returns information about a kdb changeset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxChangesetCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxChangesetCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxChangesetRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   changesetId: "STRING_VALUE", // required
 * };
 * const command = new GetKxChangesetCommand(input);
 * const response = await client.send(command);
 * // { // GetKxChangesetResponse
 * //   changesetId: "STRING_VALUE",
 * //   databaseName: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   changeRequests: [ // ChangeRequests
 * //     { // ChangeRequest
 * //       changeType: "PUT" || "DELETE", // required
 * //       s3Path: "STRING_VALUE",
 * //       dbPath: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   activeFromTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   status: "PENDING" || "PROCESSING" || "FAILED" || "COMPLETED",
 * //   errorInfo: { // ErrorInfo
 * //     errorMessage: "STRING_VALUE",
 * //     errorType: "The inputs to this request are invalid." || "Service limits have been exceeded." || "Missing required permission to perform this request." || "One or more inputs to this request were not found." || "The system temporarily lacks sufficient resources to process the request." || "An internal error has occurred." || "Cancelled" || "A user recoverable error has occurred",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetKxChangesetCommandInput - {@link GetKxChangesetCommandInput}
 * @returns {@link GetKxChangesetCommandOutput}
 * @see {@link GetKxChangesetCommandInput} for command's `input` shape.
 * @see {@link GetKxChangesetCommandOutput} for command's `response` shape.
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
export class GetKxChangesetCommand extends $Command
  .classBuilder<
    GetKxChangesetCommandInput,
    GetKxChangesetCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "GetKxChangeset", {})
  .n("FinspaceClient", "GetKxChangesetCommand")
  .f(void 0, void 0)
  .ser(se_GetKxChangesetCommand)
  .de(de_GetKxChangesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKxChangesetRequest;
      output: GetKxChangesetResponse;
    };
    sdk: {
      input: GetKxChangesetCommandInput;
      output: GetKxChangesetCommandOutput;
    };
  };
}
