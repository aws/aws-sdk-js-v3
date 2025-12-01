// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSoftwareSetsRequest, ListSoftwareSetsResponse } from "../models/models_0";
import { ListSoftwareSets } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesThinClientClientResolvedConfig,
} from "../WorkSpacesThinClientClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSoftwareSetsCommand}.
 */
export interface ListSoftwareSetsCommandInput extends ListSoftwareSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListSoftwareSetsCommand}.
 */
export interface ListSoftwareSetsCommandOutput extends ListSoftwareSetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of software sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, ListSoftwareSetsCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, ListSoftwareSetsCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // ListSoftwareSetsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSoftwareSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListSoftwareSetsResponse
 * //   softwareSets: [ // SoftwareSetList
 * //     { // SoftwareSetSummary
 * //       id: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       releasedAt: new Date("TIMESTAMP"),
 * //       supportedUntil: new Date("TIMESTAMP"),
 * //       validationStatus: "VALIDATED" || "NOT_VALIDATED",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSoftwareSetsCommandInput - {@link ListSoftwareSetsCommandInput}
 * @returns {@link ListSoftwareSetsCommandOutput}
 * @see {@link ListSoftwareSetsCommandInput} for command's `input` shape.
 * @see {@link ListSoftwareSetsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesThinClient service.</p>
 *
 *
 * @public
 */
export class ListSoftwareSetsCommand extends $Command
  .classBuilder<
    ListSoftwareSetsCommandInput,
    ListSoftwareSetsCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ThinClient", "ListSoftwareSets", {})
  .n("WorkSpacesThinClientClient", "ListSoftwareSetsCommand")
  .sc(ListSoftwareSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSoftwareSetsRequest;
      output: ListSoftwareSetsResponse;
    };
    sdk: {
      input: ListSoftwareSetsCommandInput;
      output: ListSoftwareSetsCommandOutput;
    };
  };
}
