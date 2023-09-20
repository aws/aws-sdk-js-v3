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

import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
import { de_ListRulesCommand, se_ListRulesCommand } from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRulesCommand}.
 */
export interface ListRulesCommandInput extends ListRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesCommand}.
 */
export interface ListRulesCommandOutput extends ListRulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Recycle Bin retention rules in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, ListRulesCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, ListRulesCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const input = { // ListRulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE", // required
 *   ResourceTags: [ // ResourceTags
 *     { // ResourceTag
 *       ResourceTagKey: "STRING_VALUE", // required
 *       ResourceTagValue: "STRING_VALUE",
 *     },
 *   ],
 *   LockState: "locked" || "pending_unlock" || "unlocked",
 * };
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesResponse
 * //   Rules: [ // RuleSummaryList
 * //     { // RuleSummary
 * //       Identifier: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RetentionPeriod: { // RetentionPeriod
 * //         RetentionPeriodValue: Number("int"), // required
 * //         RetentionPeriodUnit: "DAYS", // required
 * //       },
 * //       LockState: "locked" || "pending_unlock" || "unlocked",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesCommandInput - {@link ListRulesCommandInput}
 * @returns {@link ListRulesCommandOutput}
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the parameters in the request is not valid.</p>
 *
 * @throws {@link RbinServiceException}
 * <p>Base exception class for all service exceptions from Rbin service.</p>
 *
 */
export class ListRulesCommand extends $Command<
  ListRulesCommandInput,
  ListRulesCommandOutput,
  RbinClientResolvedConfig
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
  constructor(readonly input: ListRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RbinClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRulesCommandInput, ListRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRulesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "ListRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRecycleBin",
        operation: "ListRules",
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
  private serialize(input: ListRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesCommandOutput> {
    return de_ListRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
