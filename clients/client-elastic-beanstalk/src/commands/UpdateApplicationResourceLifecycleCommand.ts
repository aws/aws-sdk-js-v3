// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ApplicationResourceLifecycleDescriptionMessage,
  UpdateApplicationResourceLifecycleMessage,
} from "../models/models_0";
import { UpdateApplicationResourceLifecycle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApplicationResourceLifecycleCommand}.
 */
export interface UpdateApplicationResourceLifecycleCommandInput extends UpdateApplicationResourceLifecycleMessage {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationResourceLifecycleCommand}.
 */
export interface UpdateApplicationResourceLifecycleCommandOutput extends ApplicationResourceLifecycleDescriptionMessage, __MetadataBearer {}

/**
 * <p>Modifies lifecycle settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateApplicationResourceLifecycleMessage
 *   ApplicationName: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateApplicationResourceLifecycleCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationResourceLifecycleDescriptionMessage
 * //   ApplicationName: "STRING_VALUE",
 * //   ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //     ServiceRole: "STRING_VALUE",
 * //     VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //       MaxCountRule: { // MaxCountRule
 * //         Enabled: true || false, // required
 * //         MaxCount: Number("int"),
 * //         DeleteSourceFromS3: true || false,
 * //       },
 * //       MaxAgeRule: { // MaxAgeRule
 * //         Enabled: true || false, // required
 * //         MaxAgeInDays: Number("int"),
 * //         DeleteSourceFromS3: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationResourceLifecycleCommandInput - {@link UpdateApplicationResourceLifecycleCommandInput}
 * @returns {@link UpdateApplicationResourceLifecycleCommandOutput}
 * @see {@link UpdateApplicationResourceLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationResourceLifecycleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationResourceLifecycleCommand extends command<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApplicationResourceLifecycle",
  UpdateApplicationResourceLifecycle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationResourceLifecycleMessage;
      output: ApplicationResourceLifecycleDescriptionMessage;
    };
    sdk: {
      input: UpdateApplicationResourceLifecycleCommandInput;
      output: UpdateApplicationResourceLifecycleCommandOutput;
    };
  };
}
