import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVpcClassicLinkRequest, EnableVpcClassicLinkResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableVpcClassicLinkCommandInput = EnableVpcClassicLinkRequest;
export declare type EnableVpcClassicLinkCommandOutput = EnableVpcClassicLinkResult & __MetadataBearer;
export declare class EnableVpcClassicLinkCommand extends $Command<EnableVpcClassicLinkCommandInput, EnableVpcClassicLinkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableVpcClassicLinkCommandInput;
    constructor(input: EnableVpcClassicLinkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableVpcClassicLinkCommandInput, EnableVpcClassicLinkCommandOutput>;
    private serialize;
    private deserialize;
}
