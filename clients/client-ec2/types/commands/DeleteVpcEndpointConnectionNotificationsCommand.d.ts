import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcEndpointConnectionNotificationsRequest, DeleteVpcEndpointConnectionNotificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcEndpointConnectionNotificationsCommandInput = DeleteVpcEndpointConnectionNotificationsRequest;
export declare type DeleteVpcEndpointConnectionNotificationsCommandOutput = DeleteVpcEndpointConnectionNotificationsResult & __MetadataBearer;
export declare class DeleteVpcEndpointConnectionNotificationsCommand extends $Command<DeleteVpcEndpointConnectionNotificationsCommandInput, DeleteVpcEndpointConnectionNotificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcEndpointConnectionNotificationsCommandInput;
    constructor(input: DeleteVpcEndpointConnectionNotificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcEndpointConnectionNotificationsCommandInput, DeleteVpcEndpointConnectionNotificationsCommandOutput>;
    private serialize;
    private deserialize;
}
