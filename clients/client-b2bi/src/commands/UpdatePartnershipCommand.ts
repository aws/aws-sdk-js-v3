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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import {
  UpdatePartnershipRequest,
  UpdatePartnershipResponse,
  UpdatePartnershipResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePartnershipCommand, se_UpdatePartnershipCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePartnershipCommand}.
 */
export interface UpdatePartnershipCommandInput extends UpdatePartnershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePartnershipCommand}.
 */
export interface UpdatePartnershipCommandOutput extends UpdatePartnershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates some of the parameters for a partnership between a customer and trading partner. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, UpdatePartnershipCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, UpdatePartnershipCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // UpdatePartnershipRequest
 *   partnershipId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   capabilities: [ // PartnershipCapabilities
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdatePartnershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePartnershipResponse
 * //   profileId: "STRING_VALUE", // required
 * //   partnershipId: "STRING_VALUE", // required
 * //   partnershipArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   email: "STRING_VALUE",
 * //   phone: "STRING_VALUE",
 * //   capabilities: [ // PartnershipCapabilities
 * //     "STRING_VALUE",
 * //   ],
 * //   tradingPartnerId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdatePartnershipCommandInput - {@link UpdatePartnershipCommandInput}
 * @returns {@link UpdatePartnershipCommandOutput}
 * @see {@link UpdatePartnershipCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnershipCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 */
export class UpdatePartnershipCommand extends $Command<
  UpdatePartnershipCommandInput,
  UpdatePartnershipCommandOutput,
  B2biClientResolvedConfig
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
  constructor(readonly input: UpdatePartnershipCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePartnershipCommandInput, UpdatePartnershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePartnershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "UpdatePartnershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdatePartnershipResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "UpdatePartnership",
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
  private serialize(input: UpdatePartnershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePartnershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePartnershipCommandOutput> {
    return de_UpdatePartnershipCommand(output, context);
  }
}
