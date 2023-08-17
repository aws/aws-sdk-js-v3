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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunPropertiesRequest, GetWorkflowRunPropertiesResponse } from "../models/models_2";
import { de_GetWorkflowRunPropertiesCommand, se_GetWorkflowRunPropertiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowRunPropertiesCommand}.
 */
export interface GetWorkflowRunPropertiesCommandInput extends GetWorkflowRunPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowRunPropertiesCommand}.
 */
export interface GetWorkflowRunPropertiesCommandOutput extends GetWorkflowRunPropertiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the workflow run properties which were set during the run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetWorkflowRunPropertiesRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowRunPropertiesResponse
 * //   RunProperties: { // WorkflowRunProperties
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkflowRunPropertiesCommandInput - {@link GetWorkflowRunPropertiesCommandInput}
 * @returns {@link GetWorkflowRunPropertiesCommandOutput}
 * @see {@link GetWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunPropertiesCommandOutput} for command's `response` shape.
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
export class GetWorkflowRunPropertiesCommand extends $Command<
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
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
  constructor(readonly input: GetWorkflowRunPropertiesCommandInput) {
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
  ): Handler<GetWorkflowRunPropertiesCommandInput, GetWorkflowRunPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkflowRunPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetWorkflowRunPropertiesCommand";
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
  private serialize(input: GetWorkflowRunPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkflowRunPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowRunPropertiesCommandOutput> {
    return de_GetWorkflowRunPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
