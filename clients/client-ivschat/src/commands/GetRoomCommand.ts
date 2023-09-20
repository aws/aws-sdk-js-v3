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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { GetRoomRequest, GetRoomResponse } from "../models/models_0";
import { de_GetRoomCommand, se_GetRoomCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRoomCommand}.
 */
export interface GetRoomCommandInput extends GetRoomRequest {}
/**
 * @public
 *
 * The output of {@link GetRoomCommand}.
 */
export interface GetRoomCommandOutput extends GetRoomResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, GetRoomCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, GetRoomCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // GetRoomRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetRoomCommand(input);
 * const response = await client.send(command);
 * // { // GetRoomResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * //   updateTime: new Date("TIMESTAMP"),
 * //   maximumMessageRatePerSecond: Number("int"),
 * //   maximumMessageLength: Number("int"),
 * //   messageReviewHandler: { // MessageReviewHandler
 * //     uri: "STRING_VALUE",
 * //     fallbackResult: "STRING_VALUE",
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   loggingConfigurationIdentifiers: [ // LoggingConfigurationIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRoomCommandInput - {@link GetRoomCommandInput}
 * @returns {@link GetRoomCommandOutput}
 * @see {@link GetRoomCommandInput} for command's `input` shape.
 * @see {@link GetRoomCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 */
export class GetRoomCommand extends $Command<GetRoomCommandInput, GetRoomCommandOutput, IvschatClientResolvedConfig> {
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
  constructor(readonly input: GetRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoomCommandInput, GetRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRoomCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "GetRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceChat",
        operation: "GetRoom",
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
  private serialize(input: GetRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRoomCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoomCommandOutput> {
    return de_GetRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
