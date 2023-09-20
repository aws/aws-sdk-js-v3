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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  BatchDisassociateUserStackRequest,
  BatchDisassociateUserStackRequestFilterSensitiveLog,
  BatchDisassociateUserStackResult,
  BatchDisassociateUserStackResultFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDisassociateUserStackCommand, se_BatchDisassociateUserStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateUserStackCommand}.
 */
export interface BatchDisassociateUserStackCommandInput extends BatchDisassociateUserStackRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateUserStackCommand}.
 */
export interface BatchDisassociateUserStackCommandOutput extends BatchDisassociateUserStackResult, __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the specified users from the specified stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchDisassociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchDisassociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // BatchDisassociateUserStackRequest
 *   UserStackAssociations: [ // UserStackAssociationList // required
 *     { // UserStackAssociation
 *       StackName: "STRING_VALUE", // required
 *       UserName: "STRING_VALUE", // required
 *       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 *       SendEmailNotification: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchDisassociateUserStackCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateUserStackResult
 * //   errors: [ // UserStackAssociationErrorList
 * //     { // UserStackAssociationError
 * //       UserStackAssociation: { // UserStackAssociation
 * //         StackName: "STRING_VALUE", // required
 * //         UserName: "STRING_VALUE", // required
 * //         AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * //         SendEmailNotification: true || false,
 * //       },
 * //       ErrorCode: "STACK_NOT_FOUND" || "USER_NAME_NOT_FOUND" || "DIRECTORY_NOT_FOUND" || "INTERNAL_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateUserStackCommandInput - {@link BatchDisassociateUserStackCommandInput}
 * @returns {@link BatchDisassociateUserStackCommandOutput}
 * @see {@link BatchDisassociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class BatchDisassociateUserStackCommand extends $Command<
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: BatchDisassociateUserStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDisassociateUserStackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "BatchDisassociateUserStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateUserStackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateUserStackResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "BatchDisassociateUserStack",
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
  private serialize(input: BatchDisassociateUserStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDisassociateUserStackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateUserStackCommandOutput> {
    return de_BatchDisassociateUserStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
