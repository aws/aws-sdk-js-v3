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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeOfferingRequest, DescribeOfferingResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeOfferingCommand,
  serializeAws_restJson1DescribeOfferingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeOfferingCommand}.
 */
export interface DescribeOfferingCommandInput extends DescribeOfferingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOfferingCommand}.
 */
export interface DescribeOfferingCommandOutput extends DescribeOfferingResponse, __MetadataBearer {}

/**
 * @public
 * Get details for an offering.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeOfferingCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeOfferingCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeOfferingCommandInput - {@link DescribeOfferingCommandInput}
 * @returns {@link DescribeOfferingCommandOutput}
 * @see {@link DescribeOfferingCommandInput} for command's `input` shape.
 * @see {@link DescribeOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 *
 */
export class DescribeOfferingCommand extends $Command<
  DescribeOfferingCommandInput,
  DescribeOfferingCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: DescribeOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOfferingCommandInput, DescribeOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeOfferingCommand";
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
  private serialize(input: DescribeOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOfferingCommandOutput> {
    return deserializeAws_restJson1DescribeOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
