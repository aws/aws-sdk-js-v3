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

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetBotChannelAssociationRequest,
  GetBotChannelAssociationResponse,
  GetBotChannelAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBotChannelAssociationCommand, se_GetBotChannelAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBotChannelAssociationCommand}.
 */
export interface GetBotChannelAssociationCommandInput extends GetBotChannelAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetBotChannelAssociationCommand}.
 */
export interface GetBotChannelAssociationCommandOutput extends GetBotChannelAssociationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the association between an Amazon Lex bot and
 *       a messaging platform.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotChannelAssociationRequest
 *   name: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 * };
 * const command = new GetBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetBotChannelAssociationResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botAlias: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   type: "STRING_VALUE",
 * //   botConfiguration: { // ChannelConfigurationMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBotChannelAssociationCommandInput - {@link GetBotChannelAssociationCommandInput}
 * @returns {@link GetBotChannelAssociationCommandOutput}
 * @see {@link GetBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class GetBotChannelAssociationCommand extends $Command<
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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
  constructor(readonly input: GetBotChannelAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotChannelAssociationCommandInput, GetBotChannelAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBotChannelAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotChannelAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBotChannelAssociationResponseFilterSensitiveLog,
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
  private serialize(input: GetBotChannelAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBotChannelAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotChannelAssociationCommandOutput> {
    return de_GetBotChannelAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
