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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { PutProfileObjectRequest, PutProfileObjectResponse } from "../models/models_0";
import { de_PutProfileObjectCommand, se_PutProfileObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutProfileObjectCommand}.
 */
export interface PutProfileObjectCommandInput extends PutProfileObjectRequest {}
/**
 * @public
 *
 * The output of {@link PutProfileObjectCommand}.
 */
export interface PutProfileObjectCommandOutput extends PutProfileObjectResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds additional objects to customer profiles of a given ObjectType.</p>
 *          <p>When adding a specific profile object, like a Contact Record, an inferred profile can
 *          get created if it is not mapped to an existing profile. The resulting profile will only
 *          have a phone number populated in the standard ProfileObject. Any additional Contact Records
 *          with the same phone number will be mapped to the same inferred profile.</p>
 *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
 *          ProfileObject, it will provide data to a standard profile depending on the
 *          ProfileObjectType definition.</p>
 *          <p>PutProfileObject needs an ObjectType, which can be created using
 *          PutProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // PutProfileObjectRequest
 *   ObjectTypeName: "STRING_VALUE", // required
 *   Object: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new PutProfileObjectCommand(input);
 * const response = await client.send(command);
 * // { // PutProfileObjectResponse
 * //   ProfileObjectUniqueKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutProfileObjectCommandInput - {@link PutProfileObjectCommandInput}
 * @returns {@link PutProfileObjectCommandOutput}
 * @see {@link PutProfileObjectCommandInput} for command's `input` shape.
 * @see {@link PutProfileObjectCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class PutProfileObjectCommand extends $Command<
  PutProfileObjectCommandInput,
  PutProfileObjectCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: PutProfileObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutProfileObjectCommandInput, PutProfileObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutProfileObjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "PutProfileObjectCommand";
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
  private serialize(input: PutProfileObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutProfileObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProfileObjectCommandOutput> {
    return de_PutProfileObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
