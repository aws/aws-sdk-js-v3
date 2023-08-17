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
import { GetBotAliasesRequest, GetBotAliasesResponse } from "../models/models_0";
import { de_GetBotAliasesCommand, se_GetBotAliasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBotAliasesCommand}.
 */
export interface GetBotAliasesCommandInput extends GetBotAliasesRequest {}
/**
 * @public
 *
 * The output of {@link GetBotAliasesCommand}.
 */
export interface GetBotAliasesCommandOutput extends GetBotAliasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of aliases for a specified Amazon Lex bot.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAliases</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotAliasesRequest
 *   botName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetBotAliasesCommand(input);
 * const response = await client.send(command);
 * // { // GetBotAliasesResponse
 * //   BotAliases: [ // BotAliasMetadataList
 * //     { // BotAliasMetadata
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       botName: "STRING_VALUE",
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       createdDate: new Date("TIMESTAMP"),
 * //       checksum: "STRING_VALUE",
 * //       conversationLogs: { // ConversationLogsResponse
 * //         logSettings: [ // LogSettingsResponseList
 * //           { // LogSettingsResponse
 * //             logType: "STRING_VALUE",
 * //             destination: "STRING_VALUE",
 * //             kmsKeyArn: "STRING_VALUE",
 * //             resourceArn: "STRING_VALUE",
 * //             resourcePrefix: "STRING_VALUE",
 * //           },
 * //         ],
 * //         iamRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBotAliasesCommandInput - {@link GetBotAliasesCommandInput}
 * @returns {@link GetBotAliasesCommandOutput}
 * @see {@link GetBotAliasesCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasesCommandOutput} for command's `response` shape.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class GetBotAliasesCommand extends $Command<
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput,
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
  constructor(readonly input: GetBotAliasesCommandInput) {
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
  ): Handler<GetBotAliasesCommandInput, GetBotAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBotAliasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotAliasesCommand";
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
  private serialize(input: GetBotAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBotAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotAliasesCommandOutput> {
    return de_GetBotAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
