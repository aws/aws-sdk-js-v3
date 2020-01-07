import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableVpcClassicLinkDnsSupportRequest, DisableVpcClassicLinkDnsSupportResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableVpcClassicLinkDnsSupportCommandInput = DisableVpcClassicLinkDnsSupportRequest;
export declare type DisableVpcClassicLinkDnsSupportCommandOutput = DisableVpcClassicLinkDnsSupportResult & __MetadataBearer;
export declare class DisableVpcClassicLinkDnsSupportCommand extends $Command<DisableVpcClassicLinkDnsSupportCommandInput, DisableVpcClassicLinkDnsSupportCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableVpcClassicLinkDnsSupportCommandInput;
    constructor(input: DisableVpcClassicLinkDnsSupportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableVpcClassicLinkDnsSupportCommandInput, DisableVpcClassicLinkDnsSupportCommandOutput>;
    private serialize;
    private deserialize;
}
