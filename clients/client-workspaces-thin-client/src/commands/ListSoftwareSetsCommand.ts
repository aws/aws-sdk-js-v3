// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSoftwareSetsRequest, ListSoftwareSetsResponse } from "../models/models_0";
import { de_ListSoftwareSetsCommand, se_ListSoftwareSetsCommand } from "../protocols/Aws_restJson1";
import {
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ThinClient", "ListSoftwareSets", {})
  .n("WorkSpacesThinClientClient", "ListSoftwareSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListSoftwareSetsCommand)
  .de(de_ListSoftwareSetsCommand)
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
