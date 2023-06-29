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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateVoiceConnectorGroupRequest, CreateVoiceConnectorGroupResponse } from "../models/models_0";
import { de_CreateVoiceConnectorGroupCommand, se_CreateVoiceConnectorGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVoiceConnectorGroupCommand}.
 */
export interface CreateVoiceConnectorGroupCommandInput extends CreateVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceConnectorGroupCommand}.
 */
export interface CreateVoiceConnectorGroupCommandOutput extends CreateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
 *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
 *             including <code>VoiceConnectorItems</code> in the request.</p>
 *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
 *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceConnectorGroup.html">CreateVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateVoiceConnectorGroupRequest
 *   Name: "STRING_VALUE", // required
 *   VoiceConnectorItems: [ // VoiceConnectorItemList
 *     { // VoiceConnectorItem
 *       VoiceConnectorId: "STRING_VALUE", // required
 *       Priority: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new CreateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceConnectorGroupResponse
 * //   VoiceConnectorGroup: { // VoiceConnectorGroup
 * //     VoiceConnectorGroupId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VoiceConnectorItems: [ // VoiceConnectorItemList
 * //       { // VoiceConnectorItem
 * //         VoiceConnectorId: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     VoiceConnectorGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVoiceConnectorGroupCommandInput - {@link CreateVoiceConnectorGroupCommandInput}
 * @returns {@link CreateVoiceConnectorGroupCommandOutput}
 * @see {@link CreateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class CreateVoiceConnectorGroupCommand extends $Command<
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
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
  constructor(readonly input: CreateVoiceConnectorGroupCommandInput) {
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
  ): Handler<CreateVoiceConnectorGroupCommandInput, CreateVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVoiceConnectorGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateVoiceConnectorGroupCommand";
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
  private serialize(input: CreateVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVoiceConnectorGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVoiceConnectorGroupCommandOutput> {
    return de_CreateVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
