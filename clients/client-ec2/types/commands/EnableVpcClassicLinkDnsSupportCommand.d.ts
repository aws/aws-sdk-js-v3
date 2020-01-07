import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVpcClassicLinkDnsSupportRequest, EnableVpcClassicLinkDnsSupportResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableVpcClassicLinkDnsSupportCommandInput = EnableVpcClassicLinkDnsSupportRequest;
export declare type EnableVpcClassicLinkDnsSupportCommandOutput = EnableVpcClassicLinkDnsSupportResult & __MetadataBearer;
export declare class EnableVpcClassicLinkDnsSupportCommand extends $Command<EnableVpcClassicLinkDnsSupportCommandInput, EnableVpcClassicLinkDnsSupportCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableVpcClassicLinkDnsSupportCommandInput;
    constructor(input: EnableVpcClassicLinkDnsSupportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableVpcClassicLinkDnsSupportCommandInput, EnableVpcClassicLinkDnsSupportCommandOutput>;
    private serialize;
    private deserialize;
}
