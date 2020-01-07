import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableVpcClassicLinkRequest, DisableVpcClassicLinkResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableVpcClassicLinkCommandInput = DisableVpcClassicLinkRequest;
export declare type DisableVpcClassicLinkCommandOutput = DisableVpcClassicLinkResult & __MetadataBearer;
export declare class DisableVpcClassicLinkCommand extends $Command<DisableVpcClassicLinkCommandInput, DisableVpcClassicLinkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableVpcClassicLinkCommandInput;
    constructor(input: DisableVpcClassicLinkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableVpcClassicLinkCommandInput, DisableVpcClassicLinkCommandOutput>;
    private serialize;
    private deserialize;
}
