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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  BatchGetMembershipDatasourcesRequest,
  BatchGetMembershipDatasourcesRequestFilterSensitiveLog,
  BatchGetMembershipDatasourcesResponse,
  BatchGetMembershipDatasourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetMembershipDatasourcesCommand,
  serializeAws_restJson1BatchGetMembershipDatasourcesCommand,
} from "../protocols/Aws_restJson1";

export interface BatchGetMembershipDatasourcesCommandInput extends BatchGetMembershipDatasourcesRequest {}
export interface BatchGetMembershipDatasourcesCommandOutput
  extends BatchGetMembershipDatasourcesResponse,
    __MetadataBearer {}

/**
 * <p>Gets information on the data source package history for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, BatchGetMembershipDatasourcesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, BatchGetMembershipDatasourcesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new BatchGetMembershipDatasourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetMembershipDatasourcesCommandInput} for command's `input` shape.
 * @see {@link BatchGetMembershipDatasourcesCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class BatchGetMembershipDatasourcesCommand extends $Command<
  BatchGetMembershipDatasourcesCommandInput,
  BatchGetMembershipDatasourcesCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: BatchGetMembershipDatasourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetMembershipDatasourcesCommandInput, BatchGetMembershipDatasourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetMembershipDatasourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "BatchGetMembershipDatasourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetMembershipDatasourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetMembershipDatasourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetMembershipDatasourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetMembershipDatasourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetMembershipDatasourcesCommandOutput> {
    return deserializeAws_restJson1BatchGetMembershipDatasourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
