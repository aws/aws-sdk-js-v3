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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { BatchGetChannelRequest, BatchGetChannelResponse } from "../models/models_0";
import { de_BatchGetChannelCommand, se_BatchGetChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetChannelCommand}.
 */
export interface BatchGetChannelCommandInput extends BatchGetChannelRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetChannelCommand}.
 */
export interface BatchGetChannelCommandOutput extends BatchGetChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchGetChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchGetChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // BatchGetChannelRequest
 *   arns: [ // ChannelArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetChannelCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetChannelResponse
 * //   channels: [ // Channels
 * //     { // Channel
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       latencyMode: "STRING_VALUE",
 * //       type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 * //       recordingConfigurationArn: "STRING_VALUE",
 * //       ingestEndpoint: "STRING_VALUE",
 * //       playbackUrl: "STRING_VALUE",
 * //       authorized: true || false,
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       insecureIngest: true || false,
 * //       preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 * //     },
 * //   ],
 * //   errors: [ // BatchErrors
 * //     { // BatchError
 * //       arn: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetChannelCommandInput - {@link BatchGetChannelCommandInput}
 * @returns {@link BatchGetChannelCommandOutput}
 * @see {@link BatchGetChannelCommandInput} for command's `input` shape.
 * @see {@link BatchGetChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class BatchGetChannelCommand extends $Command<
  BatchGetChannelCommandInput,
  BatchGetChannelCommandOutput,
  IvsClientResolvedConfig
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
  constructor(readonly input: BatchGetChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetChannelCommandInput, BatchGetChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "BatchGetChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoService",
        operation: "BatchGetChannel",
      },
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
  private serialize(input: BatchGetChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetChannelCommandOutput> {
    return de_BatchGetChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
