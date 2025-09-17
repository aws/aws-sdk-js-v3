// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplicationDescriptionMessage, CreateApplicationMessage } from "../models/models_0";
import { de_CreateApplicationCommand, se_CreateApplicationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationMessage {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends ApplicationDescriptionMessage, __MetadataBearer {}

/**
 * <p>Creates an application that has one configuration template named <code>default</code>
 *       and no application versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CreateApplicationMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 *     ServiceRole: "STRING_VALUE",
 *     VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 *       MaxCountRule: { // MaxCountRule
 *         Enabled: true || false, // required
 *         MaxCount: Number("int"),
 *         DeleteSourceFromS3: true || false,
 *       },
 *       MaxAgeRule: { // MaxAgeRule
 *         Enabled: true || false, // required
 *         MaxAgeInDays: Number("int"),
 *         DeleteSourceFromS3: true || false,
 *       },
 *     },
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateApplicationCommand(input);
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
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link TooManyApplicationsException} (client fault)
 *  <p>The specified account has reached its limit of applications.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To create a new application
 * ```javascript
 * // The following operation creates a new application named my-app:
 * const input = {
 *   ApplicationName: "my-app",
 *   Description: "my application"
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Application: {
 *     ApplicationName: "my-app",
 *     ConfigurationTemplates:     [],
 *     DateCreated: "2015-02-12T18:32:21.181Z",
 *     DateUpdated: "2015-02-12T18:32:21.181Z",
 *     Description: "my application"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
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
  .s("AWSElasticBeanstalkService", "CreateApplication", {})
  .n("ElasticBeanstalkClient", "CreateApplicationCommand")
  .f(void 0, void 0)
  .ser(se_CreateApplicationCommand)
  .de(de_CreateApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationMessage;
      output: ApplicationDescriptionMessage;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
