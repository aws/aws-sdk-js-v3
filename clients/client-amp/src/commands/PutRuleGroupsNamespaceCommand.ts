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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { PutRuleGroupsNamespaceRequest, PutRuleGroupsNamespaceResponse } from "../models/models_0";
import { de_PutRuleGroupsNamespaceCommand, se_PutRuleGroupsNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRuleGroupsNamespaceCommand}.
 */
export interface PutRuleGroupsNamespaceCommandInput extends PutRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link PutRuleGroupsNamespaceCommand}.
 */
export interface PutRuleGroupsNamespaceCommandOutput extends PutRuleGroupsNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * Update a rule groups namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, PutRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, PutRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // PutRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   data: "BLOB_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // PutRuleGroupsNamespaceResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // RuleGroupsNamespaceStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRuleGroupsNamespaceCommandInput - {@link PutRuleGroupsNamespaceCommandInput}
 * @returns {@link PutRuleGroupsNamespaceCommandOutput}
 * @see {@link PutRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link PutRuleGroupsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class PutRuleGroupsNamespaceCommand extends $Command<
  PutRuleGroupsNamespaceCommandInput,
  PutRuleGroupsNamespaceCommandOutput,
  AmpClientResolvedConfig
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
  constructor(readonly input: PutRuleGroupsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRuleGroupsNamespaceCommandInput, PutRuleGroupsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRuleGroupsNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "PutRuleGroupsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPrometheusService",
        operation: "PutRuleGroupsNamespace",
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
  private serialize(input: PutRuleGroupsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRuleGroupsNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRuleGroupsNamespaceCommandOutput> {
    return de_PutRuleGroupsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
