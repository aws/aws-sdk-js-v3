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
  DisassociateNodeRequest,
  DisassociateNodeRequestFilterSensitiveLog,
  DisassociateNodeResponse,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_DisassociateNodeCommand, se_DisassociateNodeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateNodeCommand}.
 */
export interface DisassociateNodeCommandInput extends DisassociateNodeRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNodeCommand}.
 */
export interface DisassociateNodeCommandOutput extends DisassociateNodeResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated,
 *       the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>.
 *     </p>
 *          <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DisassociateNodeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DisassociateNodeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DisassociateNodeRequest
 *   ServerName: "STRING_VALUE", // required
 *   NodeName: "STRING_VALUE", // required
 *   EngineAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DisassociateNodeCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateNodeResponse
 * //   NodeAssociationStatusToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateNodeCommandInput - {@link DisassociateNodeCommandInput}
 * @returns {@link DisassociateNodeCommandOutput}
 * @see {@link DisassociateNodeCommandInput} for command's `input` shape.
 * @see {@link DisassociateNodeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 */
export class DisassociateNodeCommand extends $Command<
  DisassociateNodeCommandInput,
  DisassociateNodeCommandOutput,
  OpsWorksCMClientResolvedConfig
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
  constructor(readonly input: DisassociateNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateNodeCommandInput, DisassociateNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateNodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DisassociateNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateNodeRequestFilterSensitiveLog,
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
  private serialize(input: DisassociateNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateNodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateNodeCommandOutput> {
    return de_DisassociateNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
