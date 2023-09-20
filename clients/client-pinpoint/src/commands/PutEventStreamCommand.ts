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

import { PutEventStreamRequest, PutEventStreamResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_PutEventStreamCommand, se_PutEventStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutEventStreamCommand}.
 */
export interface PutEventStreamCommandInput extends PutEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link PutEventStreamCommand}.
 */
export interface PutEventStreamCommandOutput extends PutEventStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new event stream for an application or updates the settings of an existing event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // PutEventStreamRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   WriteEventStream: { // WriteEventStream
 *     DestinationStreamArn: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutEventStreamCommand(input);
 * const response = await client.send(command);
 * // { // PutEventStreamResponse
 * //   EventStream: { // EventStream
 * //     ApplicationId: "STRING_VALUE", // required
 * //     DestinationStreamArn: "STRING_VALUE", // required
 * //     ExternalId: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     LastUpdatedBy: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutEventStreamCommandInput - {@link PutEventStreamCommandInput}
 * @returns {@link PutEventStreamCommandOutput}
 * @see {@link PutEventStreamCommandInput} for command's `input` shape.
 * @see {@link PutEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class PutEventStreamCommand extends $Command<
  PutEventStreamCommandInput,
  PutEventStreamCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: PutEventStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventStreamCommandInput, PutEventStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEventStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "PutEventStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "PutEventStream",
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
  private serialize(input: PutEventStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutEventStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventStreamCommandOutput> {
    return de_PutEventStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
