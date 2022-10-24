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
  ListOpsMetadataRequest,
  ListOpsMetadataRequestFilterSensitiveLog,
  ListOpsMetadataResult,
  ListOpsMetadataResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ListOpsMetadataCommand,
  serializeAws_json1_1ListOpsMetadataCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ListOpsMetadataCommandInput extends ListOpsMetadataRequest {}
export interface ListOpsMetadataCommandOutput extends ListOpsMetadataResult, __MetadataBearer {}

/**
 * <p>Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or
 *    blobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link ListOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ListOpsMetadataCommand extends $Command<
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ListOpsMetadataCommandInput) {
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
  ): Handler<ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOpsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListOpsMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOpsMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOpsMetadataResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOpsMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOpsMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOpsMetadataCommandOutput> {
    return deserializeAws_json1_1ListOpsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
