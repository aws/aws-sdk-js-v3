// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationRequest } from "../models/models_0";
import { DeleteApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandInput extends DeleteApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, DeleteApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, DeleteApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // DeleteApplicationRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationCommandInput - {@link DeleteApplicationCommandInput}
 * @returns {@link DeleteApplicationCommandOutput}
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * One of the parameters in the request is invalid.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is not authenticated.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The AWS Serverless Application Repository service encountered an internal error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource (for example, an access policy statement) specified in the request doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The client is sending more than the allowed number of requests per unit of time.
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 *
 * Base exception class for all service exceptions from ServerlessApplicationRepository service.
 *
 * @public
 */
export class DeleteApplicationCommand extends command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplication",
  DeleteApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationCommandInput;
      output: DeleteApplicationCommandOutput;
    };
  };
}
