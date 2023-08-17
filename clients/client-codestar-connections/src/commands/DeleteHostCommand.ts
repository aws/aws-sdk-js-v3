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
} from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { DeleteHostInput, DeleteHostOutput } from "../models/models_0";
import { de_DeleteHostCommand, se_DeleteHostCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteHostCommand}.
 */
export interface DeleteHostCommandInput extends DeleteHostInput {}
/**
 * @public
 *
 * The output of {@link DeleteHostCommand}.
 */
export interface DeleteHostCommandOutput extends DeleteHostOutput, __MetadataBearer {}

/**
 * @public
 * <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p>
 *          <note>
 *             <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // DeleteHostInput
 *   HostArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteHostCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHostCommandInput - {@link DeleteHostCommandInput}
 * @returns {@link DeleteHostCommandOutput}
 * @see {@link DeleteHostCommandInput} for command's `input` shape.
 * @see {@link DeleteHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 */
export class DeleteHostCommand extends $Command<
  DeleteHostCommandInput,
  DeleteHostCommandOutput,
  CodeStarConnectionsClientResolvedConfig
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
  constructor(readonly input: DeleteHostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHostCommandInput, DeleteHostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteHostCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "DeleteHostCommand";
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
  private serialize(input: DeleteHostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteHostCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHostCommandOutput> {
    return de_DeleteHostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
