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
import { GetBlueprintRunsRequest, GetBlueprintRunsResponse } from "../models/models_1";
import { de_GetBlueprintRunsCommand, se_GetBlueprintRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintRunsCommand}.
 */
export interface GetBlueprintRunsCommandInput extends GetBlueprintRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintRunsCommand}.
 */
export interface GetBlueprintRunsCommandOutput extends GetBlueprintRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of blueprint runs for a specified blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetBlueprintRunsRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetBlueprintRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintRunsResponse
 * //   BlueprintRuns: [ // BlueprintRuns
 * //     { // BlueprintRun
 * //       BlueprintName: "STRING_VALUE",
 * //       RunId: "STRING_VALUE",
 * //       WorkflowName: "STRING_VALUE",
 * //       State: "RUNNING" || "SUCCEEDED" || "FAILED" || "ROLLING_BACK",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       ErrorMessage: "STRING_VALUE",
 * //       RollbackErrorMessage: "STRING_VALUE",
 * //       Parameters: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBlueprintRunsCommandInput - {@link GetBlueprintRunsCommandInput}
 * @returns {@link GetBlueprintRunsCommandOutput}
 * @see {@link GetBlueprintRunsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetBlueprintRunsCommand extends $Command<
  GetBlueprintRunsCommandInput,
  GetBlueprintRunsCommandOutput,
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
  constructor(readonly input: GetBlueprintRunsCommandInput) {
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
  ): Handler<GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBlueprintRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetBlueprintRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetBlueprintRuns",
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
  private serialize(input: GetBlueprintRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBlueprintRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintRunsCommandOutput> {
    return de_GetBlueprintRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
