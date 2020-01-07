import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcPeeringConnectionRequest, DeleteVpcPeeringConnectionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcPeeringConnectionCommandInput = DeleteVpcPeeringConnectionRequest;
export declare type DeleteVpcPeeringConnectionCommandOutput = DeleteVpcPeeringConnectionResult & __MetadataBearer;
export declare class DeleteVpcPeeringConnectionCommand extends $Command<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcPeeringConnectionCommandInput;
    constructor(input: DeleteVpcPeeringConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
