// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult } from "../models/models_0";
import { DescribeEnvironmentStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentStatusCommand}.
 */
export interface DescribeEnvironmentStatusCommandInput extends DescribeEnvironmentStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentStatusCommand}.
 */
export interface DescribeEnvironmentStatusCommandOutput extends DescribeEnvironmentStatusResult, __MetadataBearer {}

/**
 * Gets status information for an Cloud9 development environment.
 *
 * > **Important:** Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. [Learn more"](http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentStatusCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentStatusCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * // import type { Cloud9ClientConfig } from "@aws-sdk/client-cloud9";
 * const config = {}; // type is Cloud9ClientConfig
 * const client = new Cloud9Client(config);
 * const input = { // DescribeEnvironmentStatusRequest
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEnvironmentStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentStatusResult
 * //   status: "error" || "creating" || "connecting" || "ready" || "stopping" || "stopped" || "deleting", // required
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentStatusCommandInput - {@link DescribeEnvironmentStatusCommandInput}
 * @returns {@link DescribeEnvironmentStatusCommandOutput}
 * @see {@link DescribeEnvironmentStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentStatusCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The target request is invalid.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * An access permissions issue occurred.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A service limit was exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The target resource cannot be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many service requests were made over the given time period.
 *
 * @throws {@link Cloud9ServiceException}
 *
 * Base exception class for all service exceptions from Cloud9 service.
 *
 * @example DescribeEnvironmentStatus
 * ```javascript
 * //
 * const input = {
 *   environmentId: "8d9967e2f0624182b74e7690ad69ebEX"
 * };
 * const command = new DescribeEnvironmentStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "Environment is ready to use",
 *   status: "ready"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEnvironmentStatusCommand extends command<DescribeEnvironmentStatusCommandInput, DescribeEnvironmentStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEnvironmentStatus",
  DescribeEnvironmentStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentStatusRequest;
      output: DescribeEnvironmentStatusResult;
    };
    sdk: {
      input: DescribeEnvironmentStatusCommandInput;
      output: DescribeEnvironmentStatusCommandOutput;
    };
  };
}
