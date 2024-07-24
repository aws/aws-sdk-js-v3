// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailableSolutionStacksResultMessage } from "../models/models_0";
import { de_ListAvailableSolutionStacksCommand, se_ListAvailableSolutionStacksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableSolutionStacksCommand}.
 */
export interface ListAvailableSolutionStacksCommandInput {}
/**
 * @public
 *
 * The output of {@link ListAvailableSolutionStacksCommand}.
 */
export interface ListAvailableSolutionStacksCommandOutput
  extends ListAvailableSolutionStacksResultMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of the available solution stack names, with the public version first and
 *       then in reverse chronological order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = {};
 * const command = new ListAvailableSolutionStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableSolutionStacksResultMessage
 * //   SolutionStacks: [ // AvailableSolutionStackNamesList
 * //     "STRING_VALUE",
 * //   ],
 * //   SolutionStackDetails: [ // AvailableSolutionStackDetailsList
 * //     { // SolutionStackDescription
 * //       SolutionStackName: "STRING_VALUE",
 * //       PermittedFileTypes: [ // SolutionStackFileTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAvailableSolutionStacksCommandInput - {@link ListAvailableSolutionStacksCommandInput}
 * @returns {@link ListAvailableSolutionStacksCommandOutput}
 * @see {@link ListAvailableSolutionStacksCommandInput} for command's `input` shape.
 * @see {@link ListAvailableSolutionStacksCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 */
export class ListAvailableSolutionStacksCommand extends $Command
  .classBuilder<
    ListAvailableSolutionStacksCommandInput,
    ListAvailableSolutionStacksCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "ListAvailableSolutionStacks", {})
  .n("ElasticBeanstalkClient", "ListAvailableSolutionStacksCommand")
  .f(void 0, void 0)
  .ser(se_ListAvailableSolutionStacksCommand)
  .de(de_ListAvailableSolutionStacksCommand)
  .build() {}
