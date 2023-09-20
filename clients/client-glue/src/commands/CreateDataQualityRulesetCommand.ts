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
import { CreateDataQualityRulesetRequest, CreateDataQualityRulesetResponse } from "../models/models_0";
import { de_CreateDataQualityRulesetCommand, se_CreateDataQualityRulesetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataQualityRulesetCommand}.
 */
export interface CreateDataQualityRulesetCommandInput extends CreateDataQualityRulesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataQualityRulesetCommand}.
 */
export interface CreateDataQualityRulesetCommandOutput extends CreateDataQualityRulesetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p>
 *          <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDataQualityRulesetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDataQualityRulesetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateDataQualityRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Ruleset: "STRING_VALUE", // required
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TargetTable: { // DataQualityTargetTable
 *     TableName: "STRING_VALUE", // required
 *     DatabaseName: "STRING_VALUE", // required
 *     CatalogId: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataQualityRulesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataQualityRulesetResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataQualityRulesetCommandInput - {@link CreateDataQualityRulesetCommandInput}
 * @returns {@link CreateDataQualityRulesetCommandOutput}
 * @see {@link CreateDataQualityRulesetCommandInput} for command's `input` shape.
 * @see {@link CreateDataQualityRulesetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateDataQualityRulesetCommand extends $Command<
  CreateDataQualityRulesetCommandInput,
  CreateDataQualityRulesetCommandOutput,
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
  constructor(readonly input: CreateDataQualityRulesetCommandInput) {
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
  ): Handler<CreateDataQualityRulesetCommandInput, CreateDataQualityRulesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataQualityRulesetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateDataQualityRulesetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CreateDataQualityRuleset",
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
  private serialize(input: CreateDataQualityRulesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataQualityRulesetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataQualityRulesetCommandOutput> {
    return de_CreateDataQualityRulesetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
