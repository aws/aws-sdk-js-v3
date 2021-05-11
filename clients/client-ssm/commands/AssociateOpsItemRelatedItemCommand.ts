import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateOpsItemRelatedItemCommand,
  serializeAws_json1_1AssociateOpsItemRelatedItemCommand,
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

export interface AssociateOpsItemRelatedItemCommandInput extends AssociateOpsItemRelatedItemRequest {}
export interface AssociateOpsItemRelatedItemCommandOutput
  extends AssociateOpsItemRelatedItemResponse,
    __MetadataBearer {}

/**
 * <p>Associates a related resource to a Systems Manager OpsCenter OpsItem. For example, you can
 *    associate an Incident Manager incident or analysis with an OpsItem. Incident Manager is a
 *    capability of AWS Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AssociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link AssociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateOpsItemRelatedItemCommand extends $Command<
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateOpsItemRelatedItemCommandInput) {
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
  ): Handler<AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "AssociateOpsItemRelatedItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateOpsItemRelatedItemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateOpsItemRelatedItemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateOpsItemRelatedItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateOpsItemRelatedItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateOpsItemRelatedItemCommandOutput> {
    return deserializeAws_json1_1AssociateOpsItemRelatedItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
