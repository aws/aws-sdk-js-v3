// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckDNSAvailabilityMessage, CheckDNSAvailabilityResultMessage } from "../models/models_0";
import { CheckDNSAvailability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckDNSAvailabilityCommand}.
 */
export interface CheckDNSAvailabilityCommandInput extends CheckDNSAvailabilityMessage {}
/**
 * @public
 *
 * The output of {@link CheckDNSAvailabilityCommand}.
 */
export interface CheckDNSAvailabilityCommandOutput extends CheckDNSAvailabilityResultMessage, __MetadataBearer {}

/**
 * <p>Checks if the specified CNAME is available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CheckDNSAvailabilityCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CheckDNSAvailabilityCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CheckDNSAvailabilityMessage
 *   CNAMEPrefix: "STRING_VALUE", // required
 * };
 * const command = new CheckDNSAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // CheckDNSAvailabilityResultMessage
 * //   Available: true || false,
 * //   FullyQualifiedCNAME: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CheckDNSAvailabilityCommandInput - {@link CheckDNSAvailabilityCommandInput}
 * @returns {@link CheckDNSAvailabilityCommandOutput}
 * @see {@link CheckDNSAvailabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDNSAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To check the availability of a CNAME
 * ```javascript
 * // The following operation checks the availability of the subdomain my-cname:
 * const input = {
 *   CNAMEPrefix: "my-cname"
 * };
 * const command = new CheckDNSAvailabilityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Available: true,
 *   FullyQualifiedCNAME: "my-cname.us-west-2.elasticbeanstalk.com"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CheckDNSAvailabilityCommand extends command<CheckDNSAvailabilityCommandInput, CheckDNSAvailabilityCommandOutput>(
  _ep0,
  _mw0,
  "CheckDNSAvailability",
  CheckDNSAvailability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckDNSAvailabilityMessage;
      output: CheckDNSAvailabilityResultMessage;
    };
    sdk: {
      input: CheckDNSAvailabilityCommandInput;
      output: CheckDNSAvailabilityCommandOutput;
    };
  };
}
