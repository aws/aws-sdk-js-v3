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
  CreateIngestionRequest,
  CreateIngestionRequestFilterSensitiveLog,
  CreateIngestionResponse,
  CreateIngestionResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1CreateIngestionCommand,
  serializeAws_restJson1CreateIngestionCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface CreateIngestionCommandInput extends CreateIngestionRequest {}
export interface CreateIngestionCommandOutput extends CreateIngestionResponse, __MetadataBearer {}

/**
 * <p>Creates and starts a new SPICE ingestion for a dataset. You can manually refresh datasets in
 * 			an Enterprise edition account 32 times in a 24-hour period. You can manually refresh
 * 			datasets in a Standard edition account 8 times in a 24-hour period. Each 24-hour period
 * 			is measured starting 24 hours before the current date and time.</p>
 *          <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in
 * 			access control. For an example, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using
 * 				tags?</a> in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIngestionCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class CreateIngestionCommand extends $Command<
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput,
  QuickSightClientResolvedConfig
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

  constructor(readonly input: CreateIngestionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIngestionCommandInput, CreateIngestionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIngestionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateIngestionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIngestionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateIngestionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIngestionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIngestionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIngestionCommandOutput> {
    return deserializeAws_restJson1CreateIngestionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
