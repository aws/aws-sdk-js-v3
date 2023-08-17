// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DescribeMappedResourceConfigurationInput,
  DescribeMappedResourceConfigurationOutput,
} from "../models/models_0";
import {
  de_DescribeMappedResourceConfigurationCommand,
  se_DescribeMappedResourceConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMappedResourceConfigurationCommand}.
 */
export interface DescribeMappedResourceConfigurationCommandInput extends DescribeMappedResourceConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeMappedResourceConfigurationCommand}.
 */
export interface DescribeMappedResourceConfigurationCommandOutput
  extends DescribeMappedResourceConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the most current information about the stream. The <code>streamName</code>
 *             or <code>streamARN</code> should be provided in the input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeMappedResourceConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeMappedResourceConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeMappedResourceConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMappedResourceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMappedResourceConfigurationOutput
 * //   MappedResourceConfigurationList: [ // MappedResourceConfigurationList
 * //     { // MappedResourceConfigurationListItem
 * //       Type: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMappedResourceConfigurationCommandInput - {@link DescribeMappedResourceConfigurationCommandInput}
 * @returns {@link DescribeMappedResourceConfigurationCommandOutput}
 * @see {@link DescribeMappedResourceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeMappedResourceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class DescribeMappedResourceConfigurationCommand extends $Command<
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput,
  KinesisVideoClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeMappedResourceConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMappedResourceConfigurationCommandInput, DescribeMappedResourceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMappedResourceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DescribeMappedResourceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeMappedResourceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMappedResourceConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMappedResourceConfigurationCommandOutput> {
    return de_DescribeMappedResourceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
