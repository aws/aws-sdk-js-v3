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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetBlueprintRunRequest, GetBlueprintRunResponse } from "../models/models_1";
import { de_GetBlueprintRunCommand, se_GetBlueprintRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintRunCommand}.
 */
export interface GetBlueprintRunCommandInput extends GetBlueprintRunRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintRunCommand}.
 */
export interface GetBlueprintRunCommandOutput extends GetBlueprintRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of a blueprint run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetBlueprintRunRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetBlueprintRunCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintRunResponse
 * //   BlueprintRun: { // BlueprintRun
 * //     BlueprintName: "STRING_VALUE",
 * //     RunId: "STRING_VALUE",
 * //     WorkflowName: "STRING_VALUE",
 * //     State: "RUNNING" || "SUCCEEDED" || "FAILED" || "ROLLING_BACK",
 * //     StartedOn: new Date("TIMESTAMP"),
 * //     CompletedOn: new Date("TIMESTAMP"),
 * //     ErrorMessage: "STRING_VALUE",
 * //     RollbackErrorMessage: "STRING_VALUE",
 * //     Parameters: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlueprintRunCommandInput - {@link GetBlueprintRunCommandInput}
 * @returns {@link GetBlueprintRunCommandOutput}
 * @see {@link GetBlueprintRunCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetBlueprintRunCommand extends $Command<
  GetBlueprintRunCommandInput,
  GetBlueprintRunCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetBlueprintRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBlueprintRunCommandInput, GetBlueprintRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBlueprintRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetBlueprintRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetBlueprintRun",
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
  private serialize(input: GetBlueprintRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBlueprintRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintRunCommandOutput> {
    return de_GetBlueprintRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
