// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientPropertiesRequest, DescribeClientPropertiesResult } from "../models/models_0";
import { de_DescribeClientPropertiesCommand, se_DescribeClientPropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientPropertiesCommand}.
 */
export interface DescribeClientPropertiesCommandInput extends DescribeClientPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientPropertiesCommand}.
 */
export interface DescribeClientPropertiesCommandOutput extends DescribeClientPropertiesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeClientPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeClientPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeClientPropertiesRequest
 *   ResourceIds: [ // ResourceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeClientPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientPropertiesResult
 * //   ClientPropertiesList: [ // ClientPropertiesList
 * //     { // ClientPropertiesResult
 * //       ResourceId: "STRING_VALUE",
 * //       ClientProperties: { // ClientProperties
 * //         ReconnectEnabled: "ENABLED" || "DISABLED",
 * //         LogUploadEnabled: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClientPropertiesCommandInput - {@link DescribeClientPropertiesCommandInput}
 * @returns {@link DescribeClientPropertiesCommandOutput}
 * @see {@link DescribeClientPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class DescribeClientPropertiesCommand extends $Command
  .classBuilder<
    DescribeClientPropertiesCommandInput,
    DescribeClientPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeClientProperties", {})
  .n("WorkSpacesClient", "DescribeClientPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClientPropertiesCommand)
  .de(de_DescribeClientPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientPropertiesRequest;
      output: DescribeClientPropertiesResult;
    };
    sdk: {
      input: DescribeClientPropertiesCommandInput;
      output: DescribeClientPropertiesCommandOutput;
    };
  };
}
