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
import { CreateRuleGroupsNamespaceRequest, CreateRuleGroupsNamespaceResponse } from "../models/models_0";
import { de_CreateRuleGroupsNamespaceCommand, se_CreateRuleGroupsNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleGroupsNamespaceCommand}.
 */
export interface CreateRuleGroupsNamespaceCommandInput extends CreateRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleGroupsNamespaceCommand}.
 */
export interface CreateRuleGroupsNamespaceCommandOutput extends CreateRuleGroupsNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * Create a rule group namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // CreateRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   data: "BLOB_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleGroupsNamespaceResponse
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
 * @param CreateRuleGroupsNamespaceCommandInput - {@link CreateRuleGroupsNamespaceCommandInput}
 * @returns {@link CreateRuleGroupsNamespaceCommandOutput}
 * @see {@link CreateRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupsNamespaceCommandOutput} for command's `response` shape.
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
export class CreateRuleGroupsNamespaceCommand extends $Command<
  CreateRuleGroupsNamespaceCommandInput,
  CreateRuleGroupsNamespaceCommandOutput,
  AmpClientResolvedConfig
> {
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
  constructor(readonly input: CreateRuleGroupsNamespaceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRuleGroupsNamespaceCommandInput, CreateRuleGroupsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRuleGroupsNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "CreateRuleGroupsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPrometheusService",
        operation: "CreateRuleGroupsNamespace",
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
  private serialize(input: CreateRuleGroupsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRuleGroupsNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRuleGroupsNamespaceCommandOutput> {
    return de_CreateRuleGroupsNamespaceCommand(output, context);
  }
}
