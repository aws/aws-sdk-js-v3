// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { CreateKxChangesetRequest, CreateKxChangesetResponse } from "../models/models_0";
import { CreateKxChangeset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKxChangesetCommand}.
 */
export interface CreateKxChangesetCommandInput extends CreateKxChangesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxChangesetCommand}.
 */
export interface CreateKxChangesetCommandOutput extends CreateKxChangesetResponse, __MetadataBearer {}

/**
 * <p>
 *    Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxChangesetCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxChangesetCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxChangesetRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   changeRequests: [ // ChangeRequests // required
 *     { // ChangeRequest
 *       changeType: "PUT" || "DELETE", // required
 *       s3Path: "STRING_VALUE",
 *       dbPath: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateKxChangesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxChangesetResponse
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
 * @param CreateKxChangesetCommandInput - {@link CreateKxChangesetCommandInput}
 * @returns {@link CreateKxChangesetCommandOutput}
 * @see {@link CreateKxChangesetCommandInput} for command's `input` shape.
 * @see {@link CreateKxChangesetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
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
export class CreateKxChangesetCommand extends $Command
  .classBuilder<
    CreateKxChangesetCommandInput,
    CreateKxChangesetCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "CreateKxChangeset", {})
  .n("FinspaceClient", "CreateKxChangesetCommand")
  .sc(CreateKxChangeset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKxChangesetRequest;
      output: CreateKxChangesetResponse;
    };
    sdk: {
      input: CreateKxChangesetCommandInput;
      output: CreateKxChangesetCommandOutput;
    };
  };
}
