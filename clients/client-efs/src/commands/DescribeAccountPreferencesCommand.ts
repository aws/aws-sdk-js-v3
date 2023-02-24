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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  DescribeAccountPreferencesRequest,
  DescribeAccountPreferencesRequestFilterSensitiveLog,
  DescribeAccountPreferencesResponse,
  DescribeAccountPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAccountPreferencesCommand,
  serializeAws_restJson1DescribeAccountPreferencesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAccountPreferencesCommandInput extends DescribeAccountPreferencesRequest {}
export interface DescribeAccountPreferencesCommandOutput extends DescribeAccountPreferencesResponse, __MetadataBearer {}

/**
 * <p>Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.
 *       For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccountPreferencesCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccountPreferencesCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DescribeAccountPreferencesCommand extends $Command<
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: DescribeAccountPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountPreferencesCommandInput, DescribeAccountPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeAccountPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountPreferencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountPreferencesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountPreferencesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountPreferencesCommandOutput> {
    return deserializeAws_restJson1DescribeAccountPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
