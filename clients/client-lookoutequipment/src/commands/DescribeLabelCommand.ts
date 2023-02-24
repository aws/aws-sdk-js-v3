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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import {
  DescribeLabelRequest,
  DescribeLabelRequestFilterSensitiveLog,
  DescribeLabelResponse,
  DescribeLabelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeLabelCommand,
  serializeAws_json1_0DescribeLabelCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeLabelCommandInput extends DescribeLabelRequest {}
export interface DescribeLabelCommandOutput extends DescribeLabelResponse, __MetadataBearer {}

/**
 * <p>
 * Returns the name of the label.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeLabelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeLabelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeLabelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 */
export class DescribeLabelCommand extends $Command<
  DescribeLabelCommandInput,
  DescribeLabelCommandOutput,
  LookoutEquipmentClientResolvedConfig
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

  constructor(readonly input: DescribeLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLabelCommandInput, DescribeLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeLabelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLabelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLabelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeLabelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLabelCommandOutput> {
    return deserializeAws_json1_0DescribeLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
