import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcEndpointServiceConfigurationsRequest, DeleteVpcEndpointServiceConfigurationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcEndpointServiceConfigurationsCommandInput = DeleteVpcEndpointServiceConfigurationsRequest;
export declare type DeleteVpcEndpointServiceConfigurationsCommandOutput = DeleteVpcEndpointServiceConfigurationsResult & __MetadataBearer;
export declare class DeleteVpcEndpointServiceConfigurationsCommand extends $Command<DeleteVpcEndpointServiceConfigurationsCommandInput, DeleteVpcEndpointServiceConfigurationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcEndpointServiceConfigurationsCommandInput;
    constructor(input: DeleteVpcEndpointServiceConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcEndpointServiceConfigurationsCommandInput, DeleteVpcEndpointServiceConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
