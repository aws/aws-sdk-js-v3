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
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { GetTemplateStepRequest, GetTemplateStepResponse } from "../models/models_0";
import { de_GetTemplateStepCommand, se_GetTemplateStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateStepCommand}.
 */
export interface GetTemplateStepCommandInput extends GetTemplateStepRequest {}
/**
 * @public
 *
 * The output of {@link GetTemplateStepCommand}.
 */
export interface GetTemplateStepCommandOutput extends GetTemplateStepResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get a specific step in a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetTemplateStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetTemplateStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetTemplateStepRequest
 *   id: "STRING_VALUE", // required
 *   templateId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateStepCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateStepResponse
 * //   id: "STRING_VALUE",
 * //   stepGroupId: "STRING_VALUE",
 * //   templateId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   stepActionType: "STRING_VALUE",
 * //   creationTime: "STRING_VALUE",
 * //   previous: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   next: [
 * //     "STRING_VALUE",
 * //   ],
 * //   outputs: [ // StepOutputList
 * //     { // StepOutput
 * //       name: "STRING_VALUE",
 * //       dataType: "STRING_VALUE",
 * //       required: true || false,
 * //     },
 * //   ],
 * //   stepAutomationConfiguration: { // StepAutomationConfiguration
 * //     scriptLocationS3Bucket: "STRING_VALUE",
 * //     scriptLocationS3Key: { // PlatformScriptKey
 * //       linux: "STRING_VALUE",
 * //       windows: "STRING_VALUE",
 * //     },
 * //     command: { // PlatformCommand
 * //       linux: "STRING_VALUE",
 * //       windows: "STRING_VALUE",
 * //     },
 * //     runEnvironment: "STRING_VALUE",
 * //     targetType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateStepCommandInput - {@link GetTemplateStepCommandInput}
 * @returns {@link GetTemplateStepCommandOutput}
 * @see {@link GetTemplateStepCommandInput} for command's `input` shape.
 * @see {@link GetTemplateStepCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 */
export class GetTemplateStepCommand extends $Command<
  GetTemplateStepCommandInput,
  GetTemplateStepCommandOutput,
  MigrationHubOrchestratorClientResolvedConfig
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
  constructor(readonly input: GetTemplateStepCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubOrchestratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateStepCommandInput, GetTemplateStepCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemplateStepCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "GetTemplateStepCommand";
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
  private serialize(input: GetTemplateStepCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTemplateStepCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateStepCommandOutput> {
    return de_GetTemplateStepCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
