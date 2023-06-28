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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { PutTemplateActionRequest, TemplateActionDocument } from "../models/models_0";
import { de_PutTemplateActionCommand, se_PutTemplateActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutTemplateActionCommand}.
 */
export interface PutTemplateActionCommandInput extends PutTemplateActionRequest {}
/**
 * @public
 *
 * The output of {@link PutTemplateActionCommand}.
 */
export interface PutTemplateActionCommandOutput extends TemplateActionDocument, __MetadataBearer {}

/**
 * @public
 * <p>Put template post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, PutTemplateActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, PutTemplateActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // PutTemplateActionRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   documentIdentifier: "STRING_VALUE", // required
 *   order: Number("int"), // required
 *   actionID: "STRING_VALUE", // required
 *   documentVersion: "STRING_VALUE",
 *   active: true || false,
 *   timeoutSeconds: Number("int"),
 *   mustSucceedForCutover: true || false,
 *   parameters: { // SsmDocumentParameters
 *     "<keys>": [ // SsmParameterStoreParameters
 *       { // SsmParameterStoreParameter
 *         parameterType: "STRING_VALUE", // required
 *         parameterName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   operatingSystem: "STRING_VALUE",
 *   externalParameters: { // SsmDocumentExternalParameters
 *     "<keys>": { // SsmExternalParameter Union: only one key present
 *       dynamicPath: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   category: "STRING_VALUE",
 * };
 * const command = new PutTemplateActionCommand(input);
 * const response = await client.send(command);
 * // { // TemplateActionDocument
 * //   actionID: "STRING_VALUE",
 * //   actionName: "STRING_VALUE",
 * //   documentIdentifier: "STRING_VALUE",
 * //   order: Number("int"),
 * //   documentVersion: "STRING_VALUE",
 * //   active: true || false,
 * //   timeoutSeconds: Number("int"),
 * //   mustSucceedForCutover: true || false,
 * //   parameters: { // SsmDocumentParameters
 * //     "<keys>": [ // SsmParameterStoreParameters
 * //       { // SsmParameterStoreParameter
 * //         parameterType: "STRING_VALUE", // required
 * //         parameterName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   operatingSystem: "STRING_VALUE",
 * //   externalParameters: { // SsmDocumentExternalParameters
 * //     "<keys>": { // SsmExternalParameter Union: only one key present
 * //       dynamicPath: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutTemplateActionCommandInput - {@link PutTemplateActionCommandInput}
 * @returns {@link PutTemplateActionCommandOutput}
 * @see {@link PutTemplateActionCommandInput} for command's `input` shape.
 * @see {@link PutTemplateActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class PutTemplateActionCommand extends $Command<
  PutTemplateActionCommandInput,
  PutTemplateActionCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: PutTemplateActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutTemplateActionCommandInput, PutTemplateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutTemplateActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "PutTemplateActionCommand";
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
  private serialize(input: PutTemplateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutTemplateActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutTemplateActionCommandOutput> {
    return de_PutTemplateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
