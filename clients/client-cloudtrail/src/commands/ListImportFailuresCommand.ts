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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  ListImportFailuresRequest,
  ListImportFailuresRequestFilterSensitiveLog,
  ListImportFailuresResponse,
  ListImportFailuresResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListImportFailuresCommand,
  serializeAws_json1_1ListImportFailuresCommand,
} from "../protocols/Aws_json1_1";

export interface ListImportFailuresCommandInput extends ListImportFailuresRequest {}
export interface ListImportFailuresCommandOutput extends ListImportFailuresResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns a list of failures for the specified import.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListImportFailuresCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListImportFailuresCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListImportFailuresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImportFailuresCommandInput} for command's `input` shape.
 * @see {@link ListImportFailuresCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class ListImportFailuresCommand extends $Command<
  ListImportFailuresCommandInput,
  ListImportFailuresCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: ListImportFailuresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImportFailuresCommandInput, ListImportFailuresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImportFailuresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "ListImportFailuresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImportFailuresRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListImportFailuresResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImportFailuresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListImportFailuresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImportFailuresCommandOutput> {
    return deserializeAws_json1_1ListImportFailuresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
