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
import { GetBlueprintRequest, GetBlueprintResponse } from "../models/models_1";
import { de_GetBlueprintCommand, se_GetBlueprintCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandInput extends GetBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandOutput extends GetBlueprintResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of a blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetBlueprintRequest
 *   Name: "STRING_VALUE", // required
 *   IncludeBlueprint: true || false,
 *   IncludeParameterSpec: true || false,
 * };
 * const command = new GetBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintResponse
 * //   Blueprint: { // Blueprint
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedOn: new Date("TIMESTAMP"),
 * //     LastModifiedOn: new Date("TIMESTAMP"),
 * //     ParameterSpec: "STRING_VALUE",
 * //     BlueprintLocation: "STRING_VALUE",
 * //     BlueprintServiceLocation: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED",
 * //     ErrorMessage: "STRING_VALUE",
 * //     LastActiveDefinition: { // LastActiveDefinition
 * //       Description: "STRING_VALUE",
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       ParameterSpec: "STRING_VALUE",
 * //       BlueprintLocation: "STRING_VALUE",
 * //       BlueprintServiceLocation: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlueprintCommandInput - {@link GetBlueprintCommandInput}
 * @returns {@link GetBlueprintCommandOutput}
 * @see {@link GetBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintCommandOutput} for command's `response` shape.
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
export class GetBlueprintCommand extends $Command<
  GetBlueprintCommandInput,
  GetBlueprintCommandOutput,
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
  constructor(readonly input: GetBlueprintCommandInput) {
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
  ): Handler<GetBlueprintCommandInput, GetBlueprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBlueprintCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetBlueprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetBlueprint",
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
  private serialize(input: GetBlueprintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBlueprintCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintCommandOutput> {
    return de_GetBlueprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
