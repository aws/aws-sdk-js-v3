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
import { ListOutgoingCertificatesRequest, ListOutgoingCertificatesResponse } from "../models/models_1";
import { de_ListOutgoingCertificatesCommand, se_ListOutgoingCertificatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOutgoingCertificatesCommand}.
 */
export interface ListOutgoingCertificatesCommandInput extends ListOutgoingCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListOutgoingCertificatesCommand}.
 */
export interface ListOutgoingCertificatesCommandOutput extends ListOutgoingCertificatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists certificates that are being transferred but not yet accepted.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOutgoingCertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOutgoingCertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListOutgoingCertificatesRequest
 *   pageSize: Number("int"),
 *   marker: "STRING_VALUE",
 *   ascendingOrder: true || false,
 * };
 * const command = new ListOutgoingCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListOutgoingCertificatesResponse
 * //   outgoingCertificates: [ // OutgoingCertificates
 * //     { // OutgoingCertificate
 * //       certificateArn: "STRING_VALUE",
 * //       certificateId: "STRING_VALUE",
 * //       transferredTo: "STRING_VALUE",
 * //       transferDate: new Date("TIMESTAMP"),
 * //       transferMessage: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutgoingCertificatesCommandInput - {@link ListOutgoingCertificatesCommandInput}
 * @returns {@link ListOutgoingCertificatesCommandOutput}
 * @see {@link ListOutgoingCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
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
export class ListOutgoingCertificatesCommand extends $Command<
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
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
  constructor(readonly input: ListOutgoingCertificatesCommandInput) {
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
  ): Handler<ListOutgoingCertificatesCommandInput, ListOutgoingCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOutgoingCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListOutgoingCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListOutgoingCertificates",
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
  private serialize(input: ListOutgoingCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOutgoingCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOutgoingCertificatesCommandOutput> {
    return de_ListOutgoingCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
