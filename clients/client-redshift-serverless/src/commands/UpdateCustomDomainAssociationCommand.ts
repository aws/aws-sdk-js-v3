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

import { UpdateCustomDomainAssociationRequest, UpdateCustomDomainAssociationResponse } from "../models/models_0";
import {
  de_UpdateCustomDomainAssociationCommand,
  se_UpdateCustomDomainAssociationCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomDomainAssociationCommand}.
 */
export interface UpdateCustomDomainAssociationCommandInput extends UpdateCustomDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomDomainAssociationCommand}.
 */
export interface UpdateCustomDomainAssociationCommandOutput
  extends UpdateCustomDomainAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an Amazon Redshift Serverless certificate associated with a custom domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateCustomDomainAssociationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateCustomDomainAssociationRequest
 *   workgroupName: "STRING_VALUE", // required
 *   customDomainName: "STRING_VALUE", // required
 *   customDomainCertificateArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomDomainAssociationResponse
 * //   customDomainName: "STRING_VALUE",
 * //   workgroupName: "STRING_VALUE",
 * //   customDomainCertificateArn: "STRING_VALUE",
 * //   customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateCustomDomainAssociationCommandInput - {@link UpdateCustomDomainAssociationCommandInput}
 * @returns {@link UpdateCustomDomainAssociationCommandOutput}
 * @see {@link UpdateCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class UpdateCustomDomainAssociationCommand extends $Command<
  UpdateCustomDomainAssociationCommandInput,
  UpdateCustomDomainAssociationCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: UpdateCustomDomainAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCustomDomainAssociationCommandInput, UpdateCustomDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomDomainAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "UpdateCustomDomainAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "UpdateCustomDomainAssociation",
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
  private serialize(input: UpdateCustomDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCustomDomainAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomDomainAssociationCommandOutput> {
    return de_UpdateCustomDomainAssociationCommand(output, context);
  }
}
