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

import { AuthorizeVpcEndpointAccessRequest, AuthorizeVpcEndpointAccessResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_AuthorizeVpcEndpointAccessCommand, se_AuthorizeVpcEndpointAccessCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeVpcEndpointAccessCommand}.
 */
export interface AuthorizeVpcEndpointAccessCommandInput extends AuthorizeVpcEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeVpcEndpointAccessCommand}.
 */
export interface AuthorizeVpcEndpointAccessCommandOutput extends AuthorizeVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC
 *    endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AuthorizeVpcEndpointAccessCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AuthorizeVpcEndpointAccessCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // AuthorizeVpcEndpointAccessRequest
 *   DomainName: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
 * };
 * const command = new AuthorizeVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeVpcEndpointAccessResponse
 * //   AuthorizedPrincipal: { // AuthorizedPrincipal
 * //     PrincipalType: "AWS_ACCOUNT" || "AWS_SERVICE",
 * //     Principal: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeVpcEndpointAccessCommandInput - {@link AuthorizeVpcEndpointAccessCommandInput}
 * @returns {@link AuthorizeVpcEndpointAccessCommandOutput}
 * @see {@link AuthorizeVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class AuthorizeVpcEndpointAccessCommand extends $Command<
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: AuthorizeVpcEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeVpcEndpointAccessCommandInput, AuthorizeVpcEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeVpcEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "AuthorizeVpcEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "AuthorizeVpcEndpointAccess",
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
  private serialize(input: AuthorizeVpcEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AuthorizeVpcEndpointAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeVpcEndpointAccessCommandOutput> {
    return de_AuthorizeVpcEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
