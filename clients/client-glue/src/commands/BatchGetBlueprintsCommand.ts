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
import { BatchGetBlueprintsRequest, BatchGetBlueprintsResponse } from "../models/models_0";
import { de_BatchGetBlueprintsCommand, se_BatchGetBlueprintsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetBlueprintsCommand}.
 */
export interface BatchGetBlueprintsCommandInput extends BatchGetBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetBlueprintsCommand}.
 */
export interface BatchGetBlueprintsCommandOutput extends BatchGetBlueprintsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a list of blueprints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetBlueprintsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetBlueprintsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetBlueprintsRequest
 *   Names: [ // BatchGetBlueprintNames // required
 *     "STRING_VALUE",
 *   ],
 *   IncludeBlueprint: true || false,
 *   IncludeParameterSpec: true || false,
 * };
 * const command = new BatchGetBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetBlueprintsResponse
 * //   Blueprints: [ // Blueprints
 * //     { // Blueprint
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       ParameterSpec: "STRING_VALUE",
 * //       BlueprintLocation: "STRING_VALUE",
 * //       BlueprintServiceLocation: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LastActiveDefinition: { // LastActiveDefinition
 * //         Description: "STRING_VALUE",
 * //         LastModifiedOn: new Date("TIMESTAMP"),
 * //         ParameterSpec: "STRING_VALUE",
 * //         BlueprintLocation: "STRING_VALUE",
 * //         BlueprintServiceLocation: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   MissingBlueprints: [ // BlueprintNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetBlueprintsCommandInput - {@link BatchGetBlueprintsCommandInput}
 * @returns {@link BatchGetBlueprintsCommandOutput}
 * @see {@link BatchGetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link BatchGetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class BatchGetBlueprintsCommand extends $Command<
  BatchGetBlueprintsCommandInput,
  BatchGetBlueprintsCommandOutput,
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
  constructor(readonly input: BatchGetBlueprintsCommandInput) {
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
  ): Handler<BatchGetBlueprintsCommandInput, BatchGetBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetBlueprintsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetBlueprintsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "BatchGetBlueprints",
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
  private serialize(input: BatchGetBlueprintsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetBlueprintsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetBlueprintsCommandOutput> {
    return de_BatchGetBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
