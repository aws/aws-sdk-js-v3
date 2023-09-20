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
  GetApplicationComponentStrategiesRequest,
  GetApplicationComponentStrategiesResponse,
} from "../models/models_0";
import {
  de_GetApplicationComponentStrategiesCommand,
  se_GetApplicationComponentStrategiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationComponentStrategiesCommand}.
 */
export interface GetApplicationComponentStrategiesCommandInput extends GetApplicationComponentStrategiesRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationComponentStrategiesCommand}.
 */
export interface GetApplicationComponentStrategiesCommandOutput
  extends GetApplicationComponentStrategiesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Retrieves a list of all the recommended strategies and tools for an application component
 *       running on a server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetApplicationComponentStrategiesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetApplicationComponentStrategiesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetApplicationComponentStrategiesRequest
 *   applicationComponentId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationComponentStrategiesCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationComponentStrategiesResponse
 * //   applicationComponentStrategies: [ // ApplicationComponentStrategies
 * //     { // ApplicationComponentStrategy
 * //       recommendation: { // RecommendationSet
 * //         transformationTool: { // TransformationTool
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           tranformationToolInstallationLink: "STRING_VALUE",
 * //         },
 * //         targetDestination: "STRING_VALUE",
 * //         strategy: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE",
 * //       isPreferred: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationComponentStrategiesCommandInput - {@link GetApplicationComponentStrategiesCommandInput}
 * @returns {@link GetApplicationComponentStrategiesCommandOutput}
 * @see {@link GetApplicationComponentStrategiesCommandInput} for command's `input` shape.
 * @see {@link GetApplicationComponentStrategiesCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetApplicationComponentStrategiesCommand extends $Command<
  GetApplicationComponentStrategiesCommandInput,
  GetApplicationComponentStrategiesCommandOutput,
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
  constructor(readonly input: GetApplicationComponentStrategiesCommandInput) {
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
  ): Handler<GetApplicationComponentStrategiesCommandInput, GetApplicationComponentStrategiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationComponentStrategiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetApplicationComponentStrategiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "GetApplicationComponentStrategies",
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
    input: GetApplicationComponentStrategiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetApplicationComponentStrategiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApplicationComponentStrategiesCommandOutput> {
    return de_GetApplicationComponentStrategiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
