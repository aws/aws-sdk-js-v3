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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import {
  UpdateApplicationComponentConfigRequest,
  UpdateApplicationComponentConfigRequestFilterSensitiveLog,
  UpdateApplicationComponentConfigResponse,
} from "../models/models_0";
import {
  de_UpdateApplicationComponentConfigCommand,
  se_UpdateApplicationComponentConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationComponentConfigCommand}.
 */
export interface UpdateApplicationComponentConfigCommandInput extends UpdateApplicationComponentConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationComponentConfigCommand}.
 */
export interface UpdateApplicationComponentConfigCommandOutput
  extends UpdateApplicationComponentConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Updates the configuration of an application component. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, UpdateApplicationComponentConfigCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, UpdateApplicationComponentConfigCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // UpdateApplicationComponentConfigRequest
 *   applicationComponentId: "STRING_VALUE", // required
 *   inclusionStatus: "STRING_VALUE",
 *   strategyOption: { // StrategyOption
 *     strategy: "STRING_VALUE",
 *     toolName: "STRING_VALUE",
 *     targetDestination: "STRING_VALUE",
 *     isPreferred: true || false,
 *   },
 *   sourceCodeList: [ // SourceCodeList
 *     { // SourceCode
 *       versionControl: "STRING_VALUE",
 *       sourceVersion: "STRING_VALUE",
 *       location: "STRING_VALUE",
 *       projectName: "STRING_VALUE",
 *     },
 *   ],
 *   secretsManagerKey: "STRING_VALUE",
 *   configureOnly: true || false,
 *   appType: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationComponentConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateApplicationComponentConfigCommandInput - {@link UpdateApplicationComponentConfigCommandInput}
 * @returns {@link UpdateApplicationComponentConfigCommandOutput}
 * @see {@link UpdateApplicationComponentConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationComponentConfigCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class UpdateApplicationComponentConfigCommand extends $Command<
  UpdateApplicationComponentConfigCommandInput,
  UpdateApplicationComponentConfigCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: UpdateApplicationComponentConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationComponentConfigCommandInput, UpdateApplicationComponentConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationComponentConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "UpdateApplicationComponentConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationComponentConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "UpdateApplicationComponentConfig",
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
    input: UpdateApplicationComponentConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateApplicationComponentConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationComponentConfigCommandOutput> {
    return de_UpdateApplicationComponentConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
