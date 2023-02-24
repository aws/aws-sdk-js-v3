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
  PutResourcePermissionInput,
  PutResourcePermissionInputFilterSensitiveLog,
  PutResourcePermissionOutput,
  PutResourcePermissionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutResourcePermissionCommand,
  serializeAws_restJson1PutResourcePermissionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

export interface PutResourcePermissionCommandInput extends PutResourcePermissionInput {}
export interface PutResourcePermissionCommandOutput extends PutResourcePermissionOutput, __MetadataBearer {}

/**
 * <p>Adds permissions to the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, PutResourcePermissionCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, PutResourcePermissionCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const command = new PutResourcePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link PutResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 */
export class PutResourcePermissionCommand extends $Command<
  PutResourcePermissionCommandInput,
  PutResourcePermissionCommandOutput,
  SsmSapClientResolvedConfig
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

  constructor(readonly input: PutResourcePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourcePermissionCommandInput, PutResourcePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutResourcePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "PutResourcePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutResourcePermissionInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutResourcePermissionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutResourcePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutResourcePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourcePermissionCommandOutput> {
    return deserializeAws_restJson1PutResourcePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
