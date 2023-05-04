// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeMitigationActionRequest, DescribeMitigationActionResponse } from "../models/models_1";
import { de_DescribeMitigationActionCommand, se_DescribeMitigationActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeMitigationActionCommand}.
 */
export interface DescribeMitigationActionCommandInput extends DescribeMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMitigationActionCommand}.
 */
export interface DescribeMitigationActionCommandOutput extends DescribeMitigationActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a mitigation action.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeMitigationActionRequest
 *   actionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMitigationActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMitigationActionResponse
 * //   actionName: "STRING_VALUE",
 * //   actionType: "UPDATE_DEVICE_CERTIFICATE" || "UPDATE_CA_CERTIFICATE" || "ADD_THINGS_TO_THING_GROUP" || "REPLACE_DEFAULT_POLICY_VERSION" || "ENABLE_IOT_LOGGING" || "PUBLISH_FINDING_TO_SNS",
 * //   actionArn: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   actionParams: { // MitigationActionParams
 * //     updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //       action: "DEACTIVATE", // required
 * //     },
 * //     updateCACertificateParams: { // UpdateCACertificateParams
 * //       action: "DEACTIVATE", // required
 * //     },
 * //     addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //       thingGroupNames: [ // ThingGroupNames // required
 * //         "STRING_VALUE",
 * //       ],
 * //       overrideDynamicGroups: true || false,
 * //     },
 * //     replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //       templateName: "BLANK_POLICY", // required
 * //     },
 * //     enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //       roleArnForLogging: "STRING_VALUE", // required
 * //       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //     },
 * //     publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //       topicArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeMitigationActionCommandInput - {@link DescribeMitigationActionCommandInput}
 * @returns {@link DescribeMitigationActionCommandOutput}
 * @see {@link DescribeMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DescribeMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeMitigationActionCommand extends $Command<
  DescribeMitigationActionCommandInput,
  DescribeMitigationActionCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeMitigationActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMitigationActionCommandInput, DescribeMitigationActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMitigationActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeMitigationActionCommand";
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
  private serialize(input: DescribeMitigationActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMitigationActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMitigationActionCommandOutput> {
    return de_DescribeMitigationActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
