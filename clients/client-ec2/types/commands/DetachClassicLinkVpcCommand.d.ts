import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachClassicLinkVpcRequest, DetachClassicLinkVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachClassicLinkVpcCommandInput = DetachClassicLinkVpcRequest;
export declare type DetachClassicLinkVpcCommandOutput = DetachClassicLinkVpcResult & __MetadataBearer;
export declare class DetachClassicLinkVpcCommand extends $Command<DetachClassicLinkVpcCommandInput, DetachClassicLinkVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachClassicLinkVpcCommandInput;
    constructor(input: DetachClassicLinkVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachClassicLinkVpcCommandInput, DetachClassicLinkVpcCommandOutput>;
    private serialize;
    private deserialize;
}
