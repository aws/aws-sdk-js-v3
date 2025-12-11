// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProjectRequest, DescribeProjectResponse } from "../models/models_0";
import { DescribeProject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandInput extends DescribeProjectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandOutput extends DescribeProjectResponse, __MetadataBearer {}

/**
 * <p>Returns the definition of a specific DataBrew project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeProjectCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeProjectCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DescribeProjectRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectResponse
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   DatasetName: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   LastModifiedBy: "STRING_VALUE",
 * //   Name: "STRING_VALUE", // required
 * //   RecipeName: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   Sample: { // Sample
 * //     Size: Number("int"),
 * //     Type: "FIRST_N" || "LAST_N" || "RANDOM", // required
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   SessionStatus: "ASSIGNED" || "FAILED" || "INITIALIZING" || "PROVISIONING" || "READY" || "RECYCLING" || "ROTATING" || "TERMINATED" || "TERMINATING" || "UPDATING",
 * //   OpenedBy: "STRING_VALUE",
 * //   OpenDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeProjectCommandInput - {@link DescribeProjectCommandInput}
 * @returns {@link DescribeProjectCommandOutput}
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DescribeProjectCommand extends $Command
  .classBuilder<
    DescribeProjectCommandInput,
    DescribeProjectCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DescribeProject", {})
  .n("DataBrewClient", "DescribeProjectCommand")
  .sc(DescribeProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProjectRequest;
      output: DescribeProjectResponse;
    };
    sdk: {
      input: DescribeProjectCommandInput;
      output: DescribeProjectCommandOutput;
    };
  };
}
