// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ArchiveProjectRequest, ArchiveProjectResponse } from "../models/models_1";
import { ArchiveProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ArchiveProjectCommand}.
 */
export interface ArchiveProjectCommandInput extends ArchiveProjectRequest {}
/**
 * @public
 *
 * The output of {@link ArchiveProjectCommand}.
 */
export interface ArchiveProjectCommandOutput extends ArchiveProjectResponse, __MetadataBearer {}

/**
 * <p>Archives a project. Archiving is terminal; there is no delete. Archiving an already-archived project succeeds without effect. The default project cannot be archived.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ArchiveProjectCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ArchiveProjectCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ArchiveProjectRequest
 *   projectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ArchiveProjectCommand(input);
 * const response = await client.send(command);
 * // { // ArchiveProjectResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "active" || "archived", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   archivedAt: new Date("TIMESTAMP"),
 * //   dataRetention: { // ProjectDataRetention
 * //     mode: "default" || "none" || "aws_review" || "provider_data_share" || "inherit", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ArchiveProjectCommandInput - {@link ArchiveProjectCommandInput}
 * @returns {@link ArchiveProjectCommandOutput}
 * @see {@link ArchiveProjectCommandInput} for command's `input` shape.
 * @see {@link ArchiveProjectCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class ArchiveProjectCommand extends command<ArchiveProjectCommandInput, ArchiveProjectCommandOutput>(
  _ep0,
  _mw0,
  "ArchiveProject",
  ArchiveProject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ArchiveProjectRequest;
      output: ArchiveProjectResponse;
    };
    sdk: {
      input: ArchiveProjectCommandInput;
      output: ArchiveProjectCommandOutput;
    };
  };
}
