// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentsRequest, ListEnvironmentsResult } from "../models/models_0";
import { ListEnvironments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResult, __MetadataBearer {}

/**
 * Gets a list of Cloud9 development environment identifiers.
 *
 * > **Important:** Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. [Learn more"](http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/)
 *
 * > **Important:** Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. [Learn more"](http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, ListEnvironmentsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, ListEnvironmentsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * // import type { Cloud9ClientConfig } from "@aws-sdk/client-cloud9";
 * const config = {}; // type is Cloud9ClientConfig
 * const client = new Cloud9Client(config);
 * const input = { // ListEnvironmentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsResult
 * //   nextToken: "STRING_VALUE",
 * //   environmentIds: [ // EnvironmentIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
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
 * @example ListEnvironments
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   environmentIds: [
 *     "349c86d4579e4e7298d500ff57a6b2EX",
 *     "45a3da47af0840f2b0c0824f5ee232EX"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListEnvironmentsCommand extends command<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironments",
  ListEnvironments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsRequest;
      output: ListEnvironmentsResult;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}
