// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDevEnvironmentsRequest, ListDevEnvironmentsResponse } from "../models/models_0";
import { ListDevEnvironments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevEnvironmentsCommand}.
 */
export interface ListDevEnvironmentsCommandInput extends ListDevEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevEnvironmentsCommand}.
 */
export interface ListDevEnvironmentsCommandOutput extends ListDevEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of Dev Environments in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListDevEnvironmentsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListDevEnvironmentsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // ListDevEnvironmentsRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE",
 *   filters: [ // Filters
 *     { // Filter
 *       key: "STRING_VALUE", // required
 *       values: [ // StringList // required
 *         "STRING_VALUE",
 *       ],
 *       comparisonOperator: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDevEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevEnvironmentsResponse
 * //   items: [ // DevEnvironmentSummaryList // required
 * //     { // DevEnvironmentSummary
 * //       spaceName: "STRING_VALUE",
 * //       projectName: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       creatorId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       repositories: [ // DevEnvironmentRepositorySummaries // required
 * //         { // DevEnvironmentRepositorySummary
 * //           repositoryName: "STRING_VALUE", // required
 * //           branchName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       alias: "STRING_VALUE",
 * //       ides: [ // Ides
 * //         { // Ide
 * //           runtime: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       instanceType: "STRING_VALUE", // required
 * //       inactivityTimeoutMinutes: Number("int"), // required
 * //       persistentStorage: { // PersistentStorage
 * //         sizeInGiB: Number("int"), // required
 * //       },
 * //       vpcConnectionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevEnvironmentsCommandInput - {@link ListDevEnvironmentsCommandInput}
 * @returns {@link ListDevEnvironmentsCommandOutput}
 * @see {@link ListDevEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListDevEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 *
 * @public
 */
export class ListDevEnvironmentsCommand extends $Command
  .classBuilder<
    ListDevEnvironmentsCommandInput,
    ListDevEnvironmentsCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "ListDevEnvironments", {})
  .n("CodeCatalystClient", "ListDevEnvironmentsCommand")
  .sc(ListDevEnvironments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevEnvironmentsRequest;
      output: ListDevEnvironmentsResponse;
    };
    sdk: {
      input: ListDevEnvironmentsCommandInput;
      output: ListDevEnvironmentsCommandOutput;
    };
  };
}
