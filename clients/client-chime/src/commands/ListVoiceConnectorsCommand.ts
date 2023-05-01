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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListVoiceConnectorsRequest, ListVoiceConnectorsResponse } from "../models/models_1";
import { de_ListVoiceConnectorsCommand, se_ListVoiceConnectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListVoiceConnectorsCommand}.
 */
export interface ListVoiceConnectorsCommandInput extends ListVoiceConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListVoiceConnectorsCommand}.
 */
export interface ListVoiceConnectorsCommandOutput extends ListVoiceConnectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListVoiceConnectorsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListVoiceConnectorsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListVoiceConnectorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVoiceConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListVoiceConnectorsResponse
 * //   VoiceConnectors: [ // VoiceConnectorList
 * //     { // VoiceConnector
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       AwsRegion: "us-east-1" || "us-west-2",
 * //       Name: "STRING_VALUE",
 * //       OutboundHostName: "STRING_VALUE",
 * //       RequireEncryption: true || false,
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       VoiceConnectorArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVoiceConnectorsCommandInput - {@link ListVoiceConnectorsCommandInput}
 * @returns {@link ListVoiceConnectorsCommandOutput}
 * @see {@link ListVoiceConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class ListVoiceConnectorsCommand extends $Command<
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: ListVoiceConnectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVoiceConnectorsCommandInput, ListVoiceConnectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVoiceConnectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListVoiceConnectorsCommand";
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
  private serialize(input: ListVoiceConnectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVoiceConnectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVoiceConnectorsCommandOutput> {
    return de_ListVoiceConnectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
