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

import { CreateRuleRequest, CreateRuleResponse } from "../models/models_0";
import { de_CreateRuleCommand, se_CreateRuleCommand } from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule">
 *       Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, CreateRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, CreateRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const input = { // CreateRuleRequest
 *   RetentionPeriod: { // RetentionPeriod
 *     RetentionPeriodValue: Number("int"), // required
 *     RetentionPeriodUnit: "DAYS", // required
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE", // required
 *   ResourceTags: [ // ResourceTags
 *     { // ResourceTag
 *       ResourceTagKey: "STRING_VALUE", // required
 *       ResourceTagValue: "STRING_VALUE",
 *     },
 *   ],
 *   LockConfiguration: { // LockConfiguration
 *     UnlockDelay: { // UnlockDelay
 *       UnlockDelayValue: Number("int"), // required
 *       UnlockDelayUnit: "DAYS", // required
 *     },
 *   },
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleResponse
 * //   Identifier: "STRING_VALUE",
 * //   RetentionPeriod: { // RetentionPeriod
 * //     RetentionPeriodValue: Number("int"), // required
 * //     RetentionPeriodUnit: "DAYS", // required
 * //   },
 * //   Description: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE",
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
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota for the number of tags per resource to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the parameters in the request is not valid.</p>
 *
 * @throws {@link RbinServiceException}
 * <p>Base exception class for all service exceptions from Rbin service.</p>
 *
 */
export class CreateRuleCommand extends $Command<
  CreateRuleCommandInput,
  CreateRuleCommandOutput,
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
  constructor(readonly input: CreateRuleCommandInput) {
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
  ): Handler<CreateRuleCommandInput, CreateRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "CreateRuleCommand";
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
  private serialize(input: CreateRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRuleCommandOutput> {
    return de_CreateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
