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

import { UnlockRuleRequest, UnlockRuleResponse } from "../models/models_0";
import { de_UnlockRuleCommand, se_UnlockRuleCommand } from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnlockRuleCommand}.
 */
export interface UnlockRuleCommandInput extends UnlockRuleRequest {}
/**
 * @public
 *
 * The output of {@link UnlockRuleCommand}.
 */
export interface UnlockRuleCommandOutput extends UnlockRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted
 *       only after the unlock delay period expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, UnlockRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, UnlockRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const input = { // UnlockRuleRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new UnlockRuleCommand(input);
 * const response = await client.send(command);
 * // { // UnlockRuleResponse
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
 * //   LockEndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UnlockRuleCommandInput - {@link UnlockRuleCommandInput}
 * @returns {@link UnlockRuleCommandOutput}
 * @see {@link UnlockRuleCommandInput} for command's `input` shape.
 * @see {@link UnlockRuleCommandOutput} for command's `response` shape.
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
export class UnlockRuleCommand extends $Command<
  UnlockRuleCommandInput,
  UnlockRuleCommandOutput,
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
  constructor(readonly input: UnlockRuleCommandInput) {
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
  ): Handler<UnlockRuleCommandInput, UnlockRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UnlockRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "UnlockRuleCommand";
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
  private serialize(input: UnlockRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnlockRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlockRuleCommandOutput> {
    return de_UnlockRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
