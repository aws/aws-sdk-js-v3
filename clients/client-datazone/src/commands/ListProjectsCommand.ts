// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProjectsInput,
  ListProjectsInputFilterSensitiveLog,
  ListProjectsOutput,
  ListProjectsOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_ListProjectsCommand, se_ListProjectsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandInput extends ListProjectsInput {}
/**
 * @public
 *
 * The output of {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandOutput extends ListProjectsOutput, __MetadataBearer {}

/**
 * <p>Lists Amazon DataZone projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListProjectsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListProjectsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListProjectsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   userIdentifier: "STRING_VALUE",
 *   groupIdentifier: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectsOutput
 * //   items: [ // ProjectSummaries
 * //     { // ProjectSummary
 * //       domainId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       projectStatus: "ACTIVE" || "DELETING" || "DELETE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "MOVING",
 * //       failureReasons: [ // FailureReasons
 * //         { // ProjectDeletionError
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       domainUnitId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectsCommandInput - {@link ListProjectsCommandInput}
 * @returns {@link ListProjectsCommandOutput}
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListProjectsCommand extends $Command
  .classBuilder<
    ListProjectsCommandInput,
    ListProjectsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListProjects", {})
  .n("DataZoneClient", "ListProjectsCommand")
  .f(ListProjectsInputFilterSensitiveLog, ListProjectsOutputFilterSensitiveLog)
  .ser(se_ListProjectsCommand)
  .de(de_ListProjectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProjectsInput;
      output: ListProjectsOutput;
    };
    sdk: {
      input: ListProjectsCommandInput;
      output: ListProjectsCommandOutput;
    };
  };
}
