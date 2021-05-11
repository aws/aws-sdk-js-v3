import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand,
  serializeAws_json1_1DisassociateOpsItemRelatedItemCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DisassociateOpsItemRelatedItemCommandInput extends DisassociateOpsItemRelatedItemRequest {}
export interface DisassociateOpsItemRelatedItemCommandOutput
  extends DisassociateOpsItemRelatedItemResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the association between an OpsItem and a related resource. For example, this API
 *    action can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability
 *    of AWS Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DisassociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DisassociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link DisassociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateOpsItemRelatedItemCommand extends $Command<
  DisassociateOpsItemRelatedItemCommandInput,
  DisassociateOpsItemRelatedItemCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateOpsItemRelatedItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateOpsItemRelatedItemCommandInput, DisassociateOpsItemRelatedItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DisassociateOpsItemRelatedItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateOpsItemRelatedItemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateOpsItemRelatedItemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateOpsItemRelatedItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateOpsItemRelatedItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateOpsItemRelatedItemCommandOutput> {
    return deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
