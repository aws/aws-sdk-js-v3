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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackRequestFilterSensitiveLog,
  BatchAssociateUserStackResult,
  BatchAssociateUserStackResultFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchAssociateUserStackCommand, se_BatchAssociateUserStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateUserStackCommand}.
 */
export interface BatchAssociateUserStackCommandInput extends BatchAssociateUserStackRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateUserStackCommand}.
 */
export interface BatchAssociateUserStackCommandOutput extends BatchAssociateUserStackResult, __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchAssociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchAssociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // BatchAssociateUserStackRequest
 *   UserStackAssociations: [ // UserStackAssociationList // required
 *     { // UserStackAssociation
 *       StackName: "STRING_VALUE", // required
 *       UserName: "STRING_VALUE", // required
 *       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 *       SendEmailNotification: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchAssociateUserStackCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateUserStackResult
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
 * @param BatchAssociateUserStackCommandInput - {@link BatchAssociateUserStackCommandInput}
 * @returns {@link BatchAssociateUserStackCommandOutput}
 * @see {@link BatchAssociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateUserStackCommandOutput} for command's `response` shape.
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
export class BatchAssociateUserStackCommand extends $Command<
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
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
  constructor(readonly input: BatchAssociateUserStackCommandInput) {
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
  ): Handler<BatchAssociateUserStackCommandInput, BatchAssociateUserStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAssociateUserStackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "BatchAssociateUserStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateUserStackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateUserStackResultFilterSensitiveLog,
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
  private serialize(input: BatchAssociateUserStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchAssociateUserStackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchAssociateUserStackCommandOutput> {
    return de_BatchAssociateUserStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
