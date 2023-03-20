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

import { CreateClusterRequest, CreateClusterResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateClusterCommand,
  serializeAws_json1_1CreateClusterCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The
 *       cluster does not ship until these five node jobs have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link Ec2RequestFailedException} (client fault)
 *  <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *  <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *  <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 *
 *
 * @example To create a cluster
 * ```javascript
 * // Creates an empty cluster. Each cluster supports five nodes. You use the CreateJob action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
 * const input = {
 *   "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *   "Description": "MyCluster",
 *   "JobType": "LOCAL_USE",
 *   "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
 *   "Notification": {
 *     "JobStatesToNotify": [],
 *     "NotifyAll": false
 *   },
 *   "Resources": {
 *     "S3Resources": [
 *       {
 *         "BucketArn": "arn:aws:s3:::MyBucket",
 *         "KeyRange": {}
 *       }
 *     ]
 *   },
 *   "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
 *   "ShippingOption": "SECOND_DAY",
 *   "SnowballType": "EDGE"
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
 * }
 * *\/
 * // example id: to-create-a-cluster-1482864724077
 * ```
 *
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: CreateClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateClusterCommand";
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
  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return deserializeAws_json1_1CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
