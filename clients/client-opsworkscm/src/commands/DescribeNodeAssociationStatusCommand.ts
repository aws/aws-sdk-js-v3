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

import {
  DescribeNodeAssociationStatusRequest,
  DescribeNodeAssociationStatusRequestFilterSensitiveLog,
  DescribeNodeAssociationStatusResponse,
  DescribeNodeAssociationStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import {
  deserializeAws_json1_1DescribeNodeAssociationStatusCommand,
  serializeAws_json1_1DescribeNodeAssociationStatusCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeNodeAssociationStatusCommandInput extends DescribeNodeAssociationStatusRequest {}
export interface DescribeNodeAssociationStatusCommandOutput
  extends DescribeNodeAssociationStatusResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Returns the current status of an existing association or disassociation request.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
 *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DescribeNodeAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodeAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 */
export class DescribeNodeAssociationStatusCommand extends $Command<
  DescribeNodeAssociationStatusCommandInput,
  DescribeNodeAssociationStatusCommandOutput,
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

  constructor(readonly input: DescribeNodeAssociationStatusCommandInput) {
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
  ): Handler<DescribeNodeAssociationStatusCommandInput, DescribeNodeAssociationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNodeAssociationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DescribeNodeAssociationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNodeAssociationStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeNodeAssociationStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeNodeAssociationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeNodeAssociationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNodeAssociationStatusCommandOutput> {
    return deserializeAws_json1_1DescribeNodeAssociationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
