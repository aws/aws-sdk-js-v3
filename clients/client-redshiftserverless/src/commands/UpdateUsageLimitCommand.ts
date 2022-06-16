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

import { UpdateUsageLimitRequest, UpdateUsageLimitResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateUsageLimitCommand,
  serializeAws_json1_1UpdateUsageLimitCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface UpdateUsageLimitCommandInput extends UpdateUsageLimitRequest {}
export interface UpdateUsageLimitCommandOutput extends UpdateUsageLimitResponse, __MetadataBearer {}

/**
 * <p>Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateUsageLimitCommand } from "@aws-sdk/client-redshiftserverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateUsageLimitCommand } = require("@aws-sdk/client-redshiftserverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new UpdateUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class UpdateUsageLimitCommand extends $Command<
  UpdateUsageLimitCommandInput,
  UpdateUsageLimitCommandOutput,
  RedshiftServerlessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUsageLimitCommandInput) {
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
  ): Handler<UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "UpdateUsageLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUsageLimitRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateUsageLimitResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUsageLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUsageLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUsageLimitCommandOutput> {
    return deserializeAws_json1_1UpdateUsageLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
