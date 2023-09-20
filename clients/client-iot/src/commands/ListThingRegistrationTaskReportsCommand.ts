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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingRegistrationTaskReportsRequest, ListThingRegistrationTaskReportsResponse } from "../models/models_2";
import {
  de_ListThingRegistrationTaskReportsCommand,
  se_ListThingRegistrationTaskReportsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListThingRegistrationTaskReportsCommand}.
 */
export interface ListThingRegistrationTaskReportsCommandInput extends ListThingRegistrationTaskReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingRegistrationTaskReportsCommand}.
 */
export interface ListThingRegistrationTaskReportsCommandOutput
  extends ListThingRegistrationTaskReportsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Information about the thing registration tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTaskReportsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTaskReportsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListThingRegistrationTaskReportsRequest
 *   taskId: "STRING_VALUE", // required
 *   reportType: "ERRORS" || "RESULTS", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThingRegistrationTaskReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingRegistrationTaskReportsResponse
 * //   resourceLinks: [ // S3FileUrlList
 * //     "STRING_VALUE",
 * //   ],
 * //   reportType: "ERRORS" || "RESULTS",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingRegistrationTaskReportsCommandInput - {@link ListThingRegistrationTaskReportsCommandInput}
 * @returns {@link ListThingRegistrationTaskReportsCommandOutput}
 * @see {@link ListThingRegistrationTaskReportsCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTaskReportsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListThingRegistrationTaskReportsCommand extends $Command<
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: ListThingRegistrationTaskReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListThingRegistrationTaskReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingRegistrationTaskReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListThingRegistrationTaskReports",
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
  private serialize(
    input: ListThingRegistrationTaskReportsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListThingRegistrationTaskReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListThingRegistrationTaskReportsCommandOutput> {
    return de_ListThingRegistrationTaskReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
