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

import { CreateCustomDomainAssociationMessage, CreateCustomDomainAssociationResult } from "../models/models_0";
import {
  de_CreateCustomDomainAssociationCommand,
  se_CreateCustomDomainAssociationCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandInput extends CreateCustomDomainAssociationMessage {}
/**
 * @public
 *
 * The output of {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandOutput
  extends CreateCustomDomainAssociationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Used to create a custom domain name for a cluster. Properties include the custom domain name, the
 *             cluster the custom domain is associated with, and the certificate Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateCustomDomainAssociationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateCustomDomainAssociationMessage
 *   CustomDomainName: "STRING_VALUE", // required
 *   CustomDomainCertificateArn: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomDomainAssociationResult
 * //   CustomDomainName: "STRING_VALUE",
 * //   CustomDomainCertificateArn: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   CustomDomainCertExpiryTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomDomainAssociationCommandInput - {@link CreateCustomDomainAssociationCommandInput}
 * @returns {@link CreateCustomDomainAssociationCommandOutput}
 * @see {@link CreateCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link CustomCnameAssociationFault} (client fault)
 *  <p>An error occurred when an attempt was made to change the custom domain association.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class CreateCustomDomainAssociationCommand extends $Command<
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: CreateCustomDomainAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomDomainAssociationCommandInput, CreateCustomDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomDomainAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateCustomDomainAssociationCommand";
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
  private serialize(input: CreateCustomDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCustomDomainAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomDomainAssociationCommandOutput> {
    return de_CreateCustomDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
