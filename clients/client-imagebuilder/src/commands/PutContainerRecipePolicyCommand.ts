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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { PutContainerRecipePolicyRequest, PutContainerRecipePolicyResponse } from "../models/models_0";
import { de_PutContainerRecipePolicyCommand, se_PutContainerRecipePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutContainerRecipePolicyCommand}.
 */
export interface PutContainerRecipePolicyCommandInput extends PutContainerRecipePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutContainerRecipePolicyCommand}.
 */
export interface PutContainerRecipePolicyCommandOutput extends PutContainerRecipePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Applies a policy to a container image. We recommend that you call the RAM API
 * 			CreateResourceShare
 * 			(https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share
 * 			resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also
 * 			call the RAM API PromoteResourceShareCreatedFromPolicy
 * 			(https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html)
 * 			in order for the resource to be visible to all principals with whom the resource is
 * 			shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // PutContainerRecipePolicyRequest
 *   containerRecipeArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutContainerRecipePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   containerRecipeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutContainerRecipePolicyCommandInput - {@link PutContainerRecipePolicyCommandInput}
 * @returns {@link PutContainerRecipePolicyCommandOutput}
 * @see {@link PutContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link PutContainerRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value that you provided for the specified parameter is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class PutContainerRecipePolicyCommand extends $Command<
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: PutContainerRecipePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutContainerRecipePolicyCommandInput, PutContainerRecipePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutContainerRecipePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "PutContainerRecipePolicyCommand";
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
  private serialize(input: PutContainerRecipePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutContainerRecipePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutContainerRecipePolicyCommandOutput> {
    return de_PutContainerRecipePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
