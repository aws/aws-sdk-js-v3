// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplicationVersionDescriptionMessage, UpdateApplicationVersionMessage } from "../models/models_0";
import { de_UpdateApplicationVersionCommand, se_UpdateApplicationVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationVersionCommand}.
 */
export interface UpdateApplicationVersionCommandInput extends UpdateApplicationVersionMessage {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationVersionCommand}.
 */
export interface UpdateApplicationVersionCommandOutput extends ApplicationVersionDescriptionMessage, __MetadataBearer {}

/**
 * <p>Updates the specified application version to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateApplicationVersionMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   VersionLabel: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationVersionDescriptionMessage
 * //   ApplicationVersion: { // ApplicationVersionDescription
 * //     ApplicationVersionArn: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VersionLabel: "STRING_VALUE",
 * //     SourceBuildInformation: { // SourceBuildInformation
 * //       SourceType: "Git" || "Zip", // required
 * //       SourceRepository: "CodeCommit" || "S3", // required
 * //       SourceLocation: "STRING_VALUE", // required
 * //     },
 * //     BuildArn: "STRING_VALUE",
 * //     SourceBundle: { // S3Location
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     Status: "Processed" || "Unprocessed" || "Failed" || "Processing" || "Building",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationVersionCommandInput - {@link UpdateApplicationVersionCommandInput}
 * @returns {@link UpdateApplicationVersionCommandOutput}
 * @see {@link UpdateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To change an application version's description
 * ```javascript
 * // The following operation updates the description of an application version named 22a0-stage-150819_185942:
 * const input = {
 *   ApplicationName: "my-app",
 *   Description: "new description",
 *   VersionLabel: "22a0-stage-150819_185942"
 * };
 * const command = new UpdateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationVersion: {
 *     ApplicationName: "my-app",
 *     DateCreated: "2015-08-19T18:59:17.646Z",
 *     DateUpdated: "2015-08-20T22:53:28.871Z",
 *     Description: "new description",
 *     SourceBundle: {
 *       S3Bucket: "elasticbeanstalk-us-west-2-0123456789012",
 *       S3Key: "my-app/22a0-stage-150819_185942.war"
 *     },
 *     VersionLabel: "22a0-stage-150819_185942"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateApplicationVersionCommand extends $Command
  .classBuilder<
    UpdateApplicationVersionCommandInput,
    UpdateApplicationVersionCommandOutput,
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
  .s("AWSElasticBeanstalkService", "UpdateApplicationVersion", {})
  .n("ElasticBeanstalkClient", "UpdateApplicationVersionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApplicationVersionCommand)
  .de(de_UpdateApplicationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationVersionMessage;
      output: ApplicationVersionDescriptionMessage;
    };
    sdk: {
      input: UpdateApplicationVersionCommandInput;
      output: UpdateApplicationVersionCommandOutput;
    };
  };
}
