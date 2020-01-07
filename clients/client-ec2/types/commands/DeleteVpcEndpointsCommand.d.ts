import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcEndpointsRequest, DeleteVpcEndpointsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcEndpointsCommandInput = DeleteVpcEndpointsRequest;
export declare type DeleteVpcEndpointsCommandOutput = DeleteVpcEndpointsResult & __MetadataBearer;
export declare class DeleteVpcEndpointsCommand extends $Command<DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcEndpointsCommandInput;
    constructor(input: DeleteVpcEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
