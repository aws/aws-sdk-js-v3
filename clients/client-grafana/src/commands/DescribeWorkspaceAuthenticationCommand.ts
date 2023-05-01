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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { DescribeWorkspaceAuthenticationRequest, DescribeWorkspaceAuthenticationResponse } from "../models/models_0";
import {
  de_DescribeWorkspaceAuthenticationCommand,
  se_DescribeWorkspaceAuthenticationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeWorkspaceAuthenticationCommand}.
 */
export interface DescribeWorkspaceAuthenticationCommandInput extends DescribeWorkspaceAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceAuthenticationCommand}.
 */
export interface DescribeWorkspaceAuthenticationCommandOutput
  extends DescribeWorkspaceAuthenticationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Displays information about the authentication methods used in one Amazon Managed Grafana
 *             workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceAuthenticationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceAuthenticationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // DescribeWorkspaceAuthenticationRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeWorkspaceAuthenticationCommandInput - {@link DescribeWorkspaceAuthenticationCommandInput}
 * @returns {@link DescribeWorkspaceAuthenticationCommandOutput}
 * @see {@link DescribeWorkspaceAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 *
 */
export class DescribeWorkspaceAuthenticationCommand extends $Command<
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
  GrafanaClientResolvedConfig
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
  constructor(readonly input: DescribeWorkspaceAuthenticationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceAuthenticationCommandInput, DescribeWorkspaceAuthenticationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceAuthenticationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "DescribeWorkspaceAuthenticationCommand";
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
    input: DescribeWorkspaceAuthenticationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeWorkspaceAuthenticationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput> {
    return de_DescribeWorkspaceAuthenticationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
