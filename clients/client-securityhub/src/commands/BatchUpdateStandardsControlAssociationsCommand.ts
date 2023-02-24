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
  BatchUpdateStandardsControlAssociationsRequest,
  BatchUpdateStandardsControlAssociationsRequestFilterSensitiveLog,
  BatchUpdateStandardsControlAssociationsResponse,
  BatchUpdateStandardsControlAssociationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1BatchUpdateStandardsControlAssociationsCommand,
  serializeAws_restJson1BatchUpdateStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface BatchUpdateStandardsControlAssociationsCommandInput
  extends BatchUpdateStandardsControlAssociationsRequest {}
export interface BatchUpdateStandardsControlAssociationsCommandOutput
  extends BatchUpdateStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchUpdateStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateStandardsControlAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class BatchUpdateStandardsControlAssociationsCommand extends $Command<
  BatchUpdateStandardsControlAssociationsCommandInput,
  BatchUpdateStandardsControlAssociationsCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: BatchUpdateStandardsControlAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchUpdateStandardsControlAssociationsCommandInput,
    BatchUpdateStandardsControlAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchUpdateStandardsControlAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchUpdateStandardsControlAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateStandardsControlAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateStandardsControlAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchUpdateStandardsControlAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateStandardsControlAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateStandardsControlAssociationsCommandOutput> {
    return deserializeAws_restJson1BatchUpdateStandardsControlAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
