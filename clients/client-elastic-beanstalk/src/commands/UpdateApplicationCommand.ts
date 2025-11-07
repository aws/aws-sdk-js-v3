// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplicationDescriptionMessage, UpdateApplicationMessage } from "../models/models_0";
import { de_UpdateApplicationCommand, se_UpdateApplicationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationMessage {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends ApplicationDescriptionMessage, __MetadataBearer {}

/**
 * <p>Updates the specified application to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear these properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateApplicationMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationDescriptionMessage
 * //   Application: { // ApplicationDescription
 * //     ApplicationArn: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     Versions: [ // VersionLabelsList
 * //       "STRING_VALUE",
 * //     ],
 * //     ConfigurationTemplates: [ // ConfigurationTemplateNamesList
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //       ServiceRole: "STRING_VALUE",
 * //       VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //         MaxCountRule: { // MaxCountRule
 * //           Enabled: true || false, // required
 * //           MaxCount: Number("int"),
 * //           DeleteSourceFromS3: true || false,
 * //         },
 * //         MaxAgeRule: { // MaxAgeRule
 * //           Enabled: true || false, // required
 * //           MaxAgeInDays: Number("int"),
 * //           DeleteSourceFromS3: true || false,
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To change an application's description
 * ```javascript
 * // The following operation updates the description of an application named my-app:
 * const input = {
 *   ApplicationName: "my-app",
 *   Description: "my Elastic Beanstalk application"
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Application: {
 *     ApplicationName: "my-app",
 *     ConfigurationTemplates:     [],
 *     DateCreated: "2015-08-13T19:15:50.449Z",
 *     DateUpdated: "2015-08-20T22:34:56.195Z",
 *     Description: "my Elastic Beanstalk application",
 *     Versions: [
 *       "2fba-stage-150819_234450",
 *       "bf07-stage-150820_214945",
 *       "93f8",
 *       "fd7c-stage-150820_000431",
 *       "22a0-stage-150819_185942"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "UpdateApplication", {})
  .n("ElasticBeanstalkClient", "UpdateApplicationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApplicationCommand)
  .de(de_UpdateApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationMessage;
      output: ApplicationDescriptionMessage;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
