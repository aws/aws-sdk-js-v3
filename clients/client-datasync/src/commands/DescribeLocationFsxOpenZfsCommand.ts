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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  DescribeLocationFsxOpenZfsRequest,
  DescribeLocationFsxOpenZfsRequestFilterSensitiveLog,
  DescribeLocationFsxOpenZfsResponse,
  DescribeLocationFsxOpenZfsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLocationFsxOpenZfsCommand,
  serializeAws_json1_1DescribeLocationFsxOpenZfsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeLocationFsxOpenZfsCommandInput extends DescribeLocationFsxOpenZfsRequest {}
export interface DescribeLocationFsxOpenZfsCommandOutput extends DescribeLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p>
 *          <note>
 *             <p>Response elements related to <code>SMB</code> aren't supported with the
 *         <code>DescribeLocationFsxOpenZfs</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxOpenZfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class DescribeLocationFsxOpenZfsCommand extends $Command<
  DescribeLocationFsxOpenZfsCommandInput,
  DescribeLocationFsxOpenZfsCommandOutput,
  DataSyncClientResolvedConfig
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

  constructor(readonly input: DescribeLocationFsxOpenZfsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationFsxOpenZfsCommandInput, DescribeLocationFsxOpenZfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationFsxOpenZfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxOpenZfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocationFsxOpenZfsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocationFsxOpenZfsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLocationFsxOpenZfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLocationFsxOpenZfsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocationFsxOpenZfsCommandOutput> {
    return deserializeAws_json1_1DescribeLocationFsxOpenZfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
