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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetUnfilteredPartitionsMetadataRequest,
  GetUnfilteredPartitionsMetadataRequestFilterSensitiveLog,
  GetUnfilteredPartitionsMetadataResponse,
  GetUnfilteredPartitionsMetadataResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand,
  serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetUnfilteredPartitionsMetadataCommand}.
 */
export interface GetUnfilteredPartitionsMetadataCommandInput extends GetUnfilteredPartitionsMetadataRequest {}
/**
 * The output of {@link GetUnfilteredPartitionsMetadataCommand}.
 */
export interface GetUnfilteredPartitionsMetadataCommandOutput
  extends GetUnfilteredPartitionsMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered
 *           metadata.</p>
 *          <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUnfilteredPartitionsMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUnfilteredPartitionsMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUnfilteredPartitionsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUnfilteredPartitionsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetUnfilteredPartitionsMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetUnfilteredPartitionsMetadataCommand extends $Command<
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetUnfilteredPartitionsMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUnfilteredPartitionsMetadataCommandInput, GetUnfilteredPartitionsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUnfilteredPartitionsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredPartitionsMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUnfilteredPartitionsMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUnfilteredPartitionsMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetUnfilteredPartitionsMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput> {
    return deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
