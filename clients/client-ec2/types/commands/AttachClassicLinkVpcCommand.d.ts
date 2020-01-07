import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachClassicLinkVpcRequest, AttachClassicLinkVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachClassicLinkVpcCommandInput = AttachClassicLinkVpcRequest;
export declare type AttachClassicLinkVpcCommandOutput = AttachClassicLinkVpcResult & __MetadataBearer;
export declare class AttachClassicLinkVpcCommand extends $Command<AttachClassicLinkVpcCommandInput, AttachClassicLinkVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachClassicLinkVpcCommandInput;
    constructor(input: AttachClassicLinkVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachClassicLinkVpcCommandInput, AttachClassicLinkVpcCommandOutput>;
    private serialize;
    private deserialize;
}
