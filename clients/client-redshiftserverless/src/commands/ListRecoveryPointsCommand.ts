// smithy-typescript generated code
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

import { ListRecoveryPointsRequest, ListRecoveryPointsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListRecoveryPointsCommand,
  serializeAws_json1_1ListRecoveryPointsCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface ListRecoveryPointsCommandInput extends ListRecoveryPointsRequest {}
export interface ListRecoveryPointsCommandOutput extends ListRecoveryPointsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of recovery points.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListRecoveryPointsCommand } from "@aws-sdk/client-redshiftserverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListRecoveryPointsCommand } = require("@aws-sdk/client-redshiftserverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new ListRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class ListRecoveryPointsCommand extends $Command<
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput,
  RedshiftServerlessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecoveryPointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecoveryPointsCommandInput, ListRecoveryPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "ListRecoveryPointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecoveryPointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecoveryPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRecoveryPointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecoveryPointsCommandOutput> {
    return deserializeAws_json1_1ListRecoveryPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
