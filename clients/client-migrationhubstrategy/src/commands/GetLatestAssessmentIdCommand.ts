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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetLatestAssessmentIdRequest, GetLatestAssessmentIdResponse } from "../models/models_0";
import { de_GetLatestAssessmentIdCommand, se_GetLatestAssessmentIdCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLatestAssessmentIdCommand}.
 */
export interface GetLatestAssessmentIdCommandInput extends GetLatestAssessmentIdRequest {}
/**
 * @public
 *
 * The output of {@link GetLatestAssessmentIdCommand}.
 */
export interface GetLatestAssessmentIdCommandOutput extends GetLatestAssessmentIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the latest ID of a specific assessment task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetLatestAssessmentIdCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetLatestAssessmentIdCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = {};
 * const command = new GetLatestAssessmentIdCommand(input);
 * const response = await client.send(command);
 * // { // GetLatestAssessmentIdResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLatestAssessmentIdCommandInput - {@link GetLatestAssessmentIdCommandInput}
 * @returns {@link GetLatestAssessmentIdCommandOutput}
 * @see {@link GetLatestAssessmentIdCommandInput} for command's `input` shape.
 * @see {@link GetLatestAssessmentIdCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetLatestAssessmentIdCommand extends $Command<
  GetLatestAssessmentIdCommandInput,
  GetLatestAssessmentIdCommandOutput,
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
  constructor(readonly input: GetLatestAssessmentIdCommandInput) {
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
  ): Handler<GetLatestAssessmentIdCommandInput, GetLatestAssessmentIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLatestAssessmentIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetLatestAssessmentIdCommand";
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
  private serialize(input: GetLatestAssessmentIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLatestAssessmentIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLatestAssessmentIdCommandOutput> {
    return de_GetLatestAssessmentIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
