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

import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import { de_AssociateOpsItemRelatedItemCommand, se_AssociateOpsItemRelatedItemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateOpsItemRelatedItemCommand}.
 */
export interface AssociateOpsItemRelatedItemCommandInput extends AssociateOpsItemRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link AssociateOpsItemRelatedItemCommand}.
 */
export interface AssociateOpsItemRelatedItemCommandOutput
  extends AssociateOpsItemRelatedItemResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an
 *    Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of
 *    Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // AssociateOpsItemRelatedItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 *   AssociationType: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 *   ResourceUri: "STRING_VALUE", // required
 * };
 * const command = new AssociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // AssociateOpsItemRelatedItemResponse
 * //   AssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateOpsItemRelatedItemCommandInput - {@link AssociateOpsItemRelatedItemCommandInput}
 * @returns {@link AssociateOpsItemRelatedItemCommandOutput}
 * @see {@link AssociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link AssociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link OpsItemRelatedItemAlreadyExistsException} (client fault)
 *  <p>The Amazon Resource Name (ARN) is already associated with the OpsItem.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class AssociateOpsItemRelatedItemCommand extends $Command<
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: AssociateOpsItemRelatedItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateOpsItemRelatedItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "AssociateOpsItemRelatedItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "AssociateOpsItemRelatedItem",
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
  private serialize(input: AssociateOpsItemRelatedItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateOpsItemRelatedItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateOpsItemRelatedItemCommandOutput> {
    return de_AssociateOpsItemRelatedItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
