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

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { PutBotAliasRequest, PutBotAliasResponse } from "../models/models_0";
import { de_PutBotAliasCommand, se_PutBotAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBotAliasCommand}.
 */
export interface PutBotAliasCommandInput extends PutBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link PutBotAliasCommand}.
 */
export interface PutBotAliasCommandOutput extends PutBotAliasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an alias for the specified version of the bot or replaces
 *       an alias for the specified bot. To change the version of the bot that the
 *       alias points to, replace the alias. For more information about aliases,
 *       see <a>versioning-aliases</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:PutBotAlias</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // PutBotAliasRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   botVersion: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 *   conversationLogs: { // ConversationLogsRequest
 *     logSettings: [ // LogSettingsRequestList // required
 *       { // LogSettingsRequest
 *         logType: "AUDIO" || "TEXT", // required
 *         destination: "CLOUDWATCH_LOGS" || "S3", // required
 *         kmsKeyArn: "STRING_VALUE",
 *         resourceArn: "STRING_VALUE", // required
 *       },
 *     ],
 *     iamRoleArn: "STRING_VALUE", // required
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutBotAliasCommand(input);
 * const response = await client.send(command);
 * // { // PutBotAliasResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   checksum: "STRING_VALUE",
 * //   conversationLogs: { // ConversationLogsResponse
 * //     logSettings: [ // LogSettingsResponseList
 * //       { // LogSettingsResponse
 * //         logType: "AUDIO" || "TEXT",
 * //         destination: "CLOUDWATCH_LOGS" || "S3",
 * //         kmsKeyArn: "STRING_VALUE",
 * //         resourceArn: "STRING_VALUE",
 * //         resourcePrefix: "STRING_VALUE",
 * //       },
 * //     ],
 * //     iamRoleArn: "STRING_VALUE",
 * //   },
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutBotAliasCommandInput - {@link PutBotAliasCommandInput}
 * @returns {@link PutBotAliasCommandOutput}
 * @see {@link PutBotAliasCommandInput} for command's `input` shape.
 * @see {@link PutBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class PutBotAliasCommand extends $Command<
  PutBotAliasCommandInput,
  PutBotAliasCommandOutput,
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
  constructor(readonly input: PutBotAliasCommandInput) {
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
  ): Handler<PutBotAliasCommandInput, PutBotAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutBotAliasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "PutBotAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseModelBuildingService",
        operation: "PutBotAlias",
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
  private serialize(input: PutBotAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBotAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBotAliasCommandOutput> {
    return de_PutBotAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
