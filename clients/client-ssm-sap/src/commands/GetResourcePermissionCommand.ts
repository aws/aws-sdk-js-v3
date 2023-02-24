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
  GetResourcePermissionInput,
  GetResourcePermissionInputFilterSensitiveLog,
  GetResourcePermissionOutput,
  GetResourcePermissionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetResourcePermissionCommand,
  serializeAws_restJson1GetResourcePermissionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

export interface GetResourcePermissionCommandInput extends GetResourcePermissionInput {}
export interface GetResourcePermissionCommandOutput extends GetResourcePermissionOutput, __MetadataBearer {}

/**
 * <p>Gets permissions associated with the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetResourcePermissionCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetResourcePermissionCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const command = new GetResourcePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link GetResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 */
export class GetResourcePermissionCommand extends $Command<
  GetResourcePermissionCommandInput,
  GetResourcePermissionCommandOutput,
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

  constructor(readonly input: GetResourcePermissionCommandInput) {
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
  ): Handler<GetResourcePermissionCommandInput, GetResourcePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourcePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "GetResourcePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourcePermissionInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourcePermissionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourcePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourcePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcePermissionCommandOutput> {
    return deserializeAws_restJson1GetResourcePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
