// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateStorageLocationResultMessage } from "../models/models_0";
import { CreateStorageLocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStorageLocationCommand}.
 */
export interface CreateStorageLocationCommandInput {}
/**
 * @public
 *
 * The output of {@link CreateStorageLocationCommand}.
 */
export interface CreateStorageLocationCommandOutput extends CreateStorageLocationResultMessage, __MetadataBearer {}

/**
 * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 *       first time you create an environment in a region. If the storage location already exists,
 *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
 *       bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateStorageLocationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateStorageLocationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = {};
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorageLocationResultMessage
 * //   S3Bucket: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStorageLocationCommandInput - {@link CreateStorageLocationCommandInput}
 * @returns {@link CreateStorageLocationCommandOutput}
 * @see {@link CreateStorageLocationCommandInput} for command's `input` shape.
 * @see {@link CreateStorageLocationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link S3SubscriptionRequiredException} (client fault)
 *  <p>The specified account does not have a subscription to Amazon S3.</p>
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To create a new environment for an application
 * ```javascript
 * // The following operation creates a new environment for version v1 of a java application named my-app:
 * const input = { /* empty *\/ };
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   S3Bucket: "elasticbeanstalk-us-west-2-0123456789012"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateStorageLocationCommand extends $Command
  .classBuilder<
    CreateStorageLocationCommandInput,
    CreateStorageLocationCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "CreateStorageLocation", {})
  .n("ElasticBeanstalkClient", "CreateStorageLocationCommand")
  .sc(CreateStorageLocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: CreateStorageLocationResultMessage;
    };
    sdk: {
      input: CreateStorageLocationCommandInput;
      output: CreateStorageLocationCommandOutput;
    };
  };
}
