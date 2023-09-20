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

import { LockRuleRequest, LockRuleResponse } from "../models/models_0";
import { de_LockRuleCommand, se_LockRuleCommand } from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link LockRuleCommand}.
 */
export interface LockRuleCommandInput extends LockRuleRequest {}
/**
 * @public
 *
 * The output of {@link LockRuleCommand}.
 */
export interface LockRuleCommandOutput extends LockRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Locks a retention rule. A locked retention rule can't be modified or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, LockRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, LockRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const input = { // LockRuleRequest
 *   Identifier: "STRING_VALUE", // required
 *   LockConfiguration: { // LockConfiguration
 *     UnlockDelay: { // UnlockDelay
 *       UnlockDelayValue: Number("int"), // required
 *       UnlockDelayUnit: "DAYS", // required
 *     },
 *   },
 * };
 * const command = new LockRuleCommand(input);
 * const response = await client.send(command);
 * // { // LockRuleResponse
 * //   Identifier: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE",
 * //   RetentionPeriod: { // RetentionPeriod
 * //     RetentionPeriodValue: Number("int"), // required
 * //     RetentionPeriodUnit: "DAYS", // required
 * //   },
 * //   ResourceTags: [ // ResourceTags
 * //     { // ResourceTag
 * //       ResourceTagKey: "STRING_VALUE", // required
 * //       ResourceTagValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Status: "pending" || "available",
 * //   LockConfiguration: { // LockConfiguration
 * //     UnlockDelay: { // UnlockDelay
 * //       UnlockDelayValue: Number("int"), // required
 * //       UnlockDelayUnit: "DAYS", // required
 * //     },
 * //   },
 * //   LockState: "locked" || "pending_unlock" || "unlocked",
 * // };
 *
 * ```
 *
 * @param LockRuleCommandInput - {@link LockRuleCommandInput}
 * @returns {@link LockRuleCommandOutput}
 * @see {@link LockRuleCommandInput} for command's `input` shape.
 * @see {@link LockRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The specified retention rule lock request can't be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the parameters in the request is not valid.</p>
 *
 * @throws {@link RbinServiceException}
 * <p>Base exception class for all service exceptions from Rbin service.</p>
 *
 */
export class LockRuleCommand extends $Command<LockRuleCommandInput, LockRuleCommandOutput, RbinClientResolvedConfig> {
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
  constructor(readonly input: LockRuleCommandInput) {
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
  ): Handler<LockRuleCommandInput, LockRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, LockRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "LockRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRecycleBin",
        operation: "LockRule",
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
  private serialize(input: LockRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_LockRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LockRuleCommandOutput> {
    return de_LockRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
