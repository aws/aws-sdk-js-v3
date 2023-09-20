// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccountAliasRequest } from "../models/models_0";
import { de_CreateAccountAliasCommand, se_CreateAccountAliasCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandInput extends CreateAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account
 *             alias, see <a href="https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html">Creating, deleting, and
 *                 listing an Amazon Web Services account alias</a> in the <i>Amazon Web Services Sign-In User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateAccountAliasRequest
 *   AccountAlias: "STRING_VALUE", // required
 * };
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAccountAliasCommandInput - {@link CreateAccountAliasCommandInput}
 * @returns {@link CreateAccountAliasCommandOutput}
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To create an account alias
 * ```javascript
 * // The following command associates the alias examplecorp to your AWS account.
 * const input = {
 *   "AccountAlias": "examplecorp"
 * };
 * const command = new CreateAccountAliasCommand(input);
 * await client.send(command);
 * // example id: 5adaf6fb-94fc-4ca2-b825-2fbc2062add1
 * ```
 *
 */
export class CreateAccountAliasCommand extends $Command<
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateAccountAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccountAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateAccountAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "CreateAccountAlias",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateAccountAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccountAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountAliasCommandOutput> {
    return de_CreateAccountAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
