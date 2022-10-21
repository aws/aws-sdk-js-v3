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

import { DataShare, DataShareFilterSensitiveLog } from "../models/models_0";
import {
  DisassociateDataShareConsumerMessage,
  DisassociateDataShareConsumerMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDisassociateDataShareConsumerCommand,
  serializeAws_queryDisassociateDataShareConsumerCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DisassociateDataShareConsumerCommandInput extends DisassociateDataShareConsumerMessage {}
export interface DisassociateDataShareConsumerCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a datashare consumer account, remove association for the specified datashare.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisassociateDataShareConsumerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisassociateDataShareConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisassociateDataShareConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDataShareConsumerCommandInput} for command's `input` shape.
 * @see {@link DisassociateDataShareConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DisassociateDataShareConsumerCommand extends $Command<
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DisassociateDataShareConsumerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDataShareConsumerCommandInput, DisassociateDataShareConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateDataShareConsumerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DisassociateDataShareConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDataShareConsumerMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DataShareFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDataShareConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisassociateDataShareConsumerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDataShareConsumerCommandOutput> {
    return deserializeAws_queryDisassociateDataShareConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
