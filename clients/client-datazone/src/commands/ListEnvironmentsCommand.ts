// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEnvironmentsInput, ListEnvironmentsOutput } from "../models/models_1";
import { ListEnvironments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsOutput, __MetadataBearer {}

/**
 * <p>Lists Amazon DataZone environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   awsAccountId: "STRING_VALUE",
 *   status: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED" || "VALIDATION_FAILED" || "SUSPENDED" || "DISABLED" || "EXPIRED" || "DELETED" || "INACCESSIBLE",
 *   awsAccountRegion: "STRING_VALUE",
 *   projectIdentifier: "STRING_VALUE", // required
 *   environmentProfileIdentifier: "STRING_VALUE",
 *   environmentBlueprintIdentifier: "STRING_VALUE",
 *   provider: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsOutput
 * //   items: [ // EnvironmentSummaries // required
 * //     { // EnvironmentSummary
 * //       projectId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE",
 * //       domainId: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       environmentProfileId: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       awsAccountRegion: "STRING_VALUE",
 * //       provider: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED" || "VALIDATION_FAILED" || "SUSPENDED" || "DISABLED" || "EXPIRED" || "DELETED" || "INACCESSIBLE",
 * //       environmentConfigurationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
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
export class ListEnvironmentsCommand extends $Command
  .classBuilder<
    ListEnvironmentsCommandInput,
    ListEnvironmentsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListEnvironments", {})
  .n("DataZoneClient", "ListEnvironmentsCommand")
  .sc(ListEnvironments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsInput;
      output: ListEnvironmentsOutput;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}
