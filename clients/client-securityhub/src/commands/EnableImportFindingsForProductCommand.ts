// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EnableImportFindingsForProductRequest, EnableImportFindingsForProductResponse } from "../models/models_2";
import {
  deserializeAws_restJson1EnableImportFindingsForProductCommand,
  serializeAws_restJson1EnableImportFindingsForProductCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 *
 * The input for {@link EnableImportFindingsForProductCommand}.
 */
export interface EnableImportFindingsForProductCommandInput extends EnableImportFindingsForProductRequest {}
/**
 * @public
 *
 * The output of {@link EnableImportFindingsForProductCommand}.
 */
export interface EnableImportFindingsForProductCommandOutput
  extends EnableImportFindingsForProductResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables the integration of a partner product with Security Hub. Integrated products send
 *          findings to Security Hub.</p>
 *          <p>When you enable a product integration, a permissions policy that grants permission for
 *          the product to send findings to Security Hub is applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // EnableImportFindingsForProductRequest
 *   ProductArn: "STRING_VALUE", // required
 * };
 * const command = new EnableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param EnableImportFindingsForProductCommandInput - {@link EnableImportFindingsForProductCommandInput}
 * @returns {@link EnableImportFindingsForProductCommandOutput}
 * @see {@link EnableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link EnableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 *
 */
export class EnableImportFindingsForProductCommand extends $Command<
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: EnableImportFindingsForProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableImportFindingsForProductCommandInput, EnableImportFindingsForProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableImportFindingsForProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "EnableImportFindingsForProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: EnableImportFindingsForProductCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableImportFindingsForProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableImportFindingsForProductCommandOutput> {
    return deserializeAws_restJson1EnableImportFindingsForProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
