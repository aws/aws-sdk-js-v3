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
  DescribeUserStackAssociationsRequest,
  DescribeUserStackAssociationsRequestFilterSensitiveLog,
  DescribeUserStackAssociationsResult,
  DescribeUserStackAssociationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeUserStackAssociationsCommand,
  se_DescribeUserStackAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserStackAssociationsCommand}.
 */
export interface DescribeUserStackAssociationsCommandInput extends DescribeUserStackAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserStackAssociationsCommand}.
 */
export interface DescribeUserStackAssociationsCommandOutput
  extends DescribeUserStackAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The stack name</p>
 *             </li>
 *             <li>
 *                <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeUserStackAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeUserStackAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeUserStackAssociationsRequest
 *   StackName: "STRING_VALUE",
 *   UserName: "STRING_VALUE",
 *   AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeUserStackAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserStackAssociationsResult
 * //   UserStackAssociations: [ // UserStackAssociationList
 * //     { // UserStackAssociation
 * //       StackName: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE", // required
 * //       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * //       SendEmailNotification: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUserStackAssociationsCommandInput - {@link DescribeUserStackAssociationsCommandInput}
 * @returns {@link DescribeUserStackAssociationsCommandOutput}
 * @see {@link DescribeUserStackAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeUserStackAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeUserStackAssociationsCommand extends $Command<
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
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
  constructor(readonly input: DescribeUserStackAssociationsCommandInput) {
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
  ): Handler<DescribeUserStackAssociationsCommandInput, DescribeUserStackAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUserStackAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeUserStackAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserStackAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserStackAssociationsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DescribeUserStackAssociations",
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
  private serialize(input: DescribeUserStackAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUserStackAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeUserStackAssociationsCommandOutput> {
    return de_DescribeUserStackAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
