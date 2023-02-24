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
  CopyOptionGroupMessage,
  CopyOptionGroupMessageFilterSensitiveLog,
  CopyOptionGroupResult,
  CopyOptionGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCopyOptionGroupCommand,
  serializeAws_queryCopyOptionGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CopyOptionGroupCommandInput extends CopyOptionGroupMessage {}
export interface CopyOptionGroupCommandOutput extends CopyOptionGroupResult, __MetadataBearer {}

/**
 * <p>Copies the specified option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CopyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CopyOptionGroupCommand extends $Command<
  CopyOptionGroupCommandInput,
  CopyOptionGroupCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: CopyOptionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyOptionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CopyOptionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyOptionGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CopyOptionGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyOptionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyOptionGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyOptionGroupCommandOutput> {
    return deserializeAws_queryCopyOptionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
