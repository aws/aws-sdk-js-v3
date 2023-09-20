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

import { PutApplicationPolicyRequest, PutApplicationPolicyResponse } from "../models/models_0";
import { de_PutApplicationPolicyCommand, se_PutApplicationPolicyCommand } from "../protocols/Aws_restJson1";
import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutApplicationPolicyCommand}.
 */
export interface PutApplicationPolicyCommandInput extends PutApplicationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationPolicyCommand}.
 */
export interface PutApplicationPolicyCommandOutput extends PutApplicationPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
 *  <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
 *  Permissions</a>
 *  .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // PutApplicationPolicyRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Statements: [ // __listOfApplicationPolicyStatement // required
 *     { // ApplicationPolicyStatement
 *       Actions: [ // __listOf__string // required
 *         "STRING_VALUE",
 *       ],
 *       PrincipalOrgIDs: [
 *         "STRING_VALUE",
 *       ],
 *       Principals: [ // required
 *         "STRING_VALUE",
 *       ],
 *       StatementId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutApplicationPolicyResponse
 * //   Statements: [ // __listOfApplicationPolicyStatement
 * //     { // ApplicationPolicyStatement
 * //       Actions: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       PrincipalOrgIDs: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Principals: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       StatementId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutApplicationPolicyCommandInput - {@link PutApplicationPolicyCommandInput}
 * @returns {@link PutApplicationPolicyCommandOutput}
 * @see {@link PutApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutApplicationPolicyCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is not authenticated.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 */
export class PutApplicationPolicyCommand extends $Command<
  PutApplicationPolicyCommandInput,
  PutApplicationPolicyCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
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
  constructor(readonly input: PutApplicationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutApplicationPolicyCommandInput, PutApplicationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutApplicationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "PutApplicationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServerlessApplicationRepository",
        operation: "PutApplicationPolicy",
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
  private serialize(input: PutApplicationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutApplicationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutApplicationPolicyCommandOutput> {
    return de_PutApplicationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
