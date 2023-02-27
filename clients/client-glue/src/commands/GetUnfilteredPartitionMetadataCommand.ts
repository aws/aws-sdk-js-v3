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
  GetUnfilteredPartitionMetadataRequest,
  GetUnfilteredPartitionMetadataRequestFilterSensitiveLog,
  GetUnfilteredPartitionMetadataResponse,
  GetUnfilteredPartitionMetadataResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetUnfilteredPartitionMetadataCommand,
  serializeAws_json1_1GetUnfilteredPartitionMetadataCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetUnfilteredPartitionMetadataCommand}.
 */
export interface GetUnfilteredPartitionMetadataCommandInput extends GetUnfilteredPartitionMetadataRequest {}
/**
 * The output of {@link GetUnfilteredPartitionMetadataCommand}.
 */
export interface GetUnfilteredPartitionMetadataCommandOutput
  extends GetUnfilteredPartitionMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered
 *           metadata.</p>
 *          <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUnfilteredPartitionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUnfilteredPartitionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUnfilteredPartitionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUnfilteredPartitionMetadataCommandInput} for command's `input` shape.
 * @see {@link GetUnfilteredPartitionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetUnfilteredPartitionMetadataCommand extends $Command<
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
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

  constructor(readonly input: GetUnfilteredPartitionMetadataCommandInput) {
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
  ): Handler<GetUnfilteredPartitionMetadataCommandInput, GetUnfilteredPartitionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUnfilteredPartitionMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredPartitionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUnfilteredPartitionMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUnfilteredPartitionMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetUnfilteredPartitionMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUnfilteredPartitionMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredPartitionMetadataCommandOutput> {
    return deserializeAws_json1_1GetUnfilteredPartitionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
