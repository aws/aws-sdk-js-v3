import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseHostsRequest, ReleaseHostsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReleaseHostsCommandInput = ReleaseHostsRequest;
export declare type ReleaseHostsCommandOutput = ReleaseHostsResult & __MetadataBearer;
export declare class ReleaseHostsCommand extends $Command<ReleaseHostsCommandInput, ReleaseHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReleaseHostsCommandInput;
    constructor(input: ReleaseHostsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReleaseHostsCommandInput, ReleaseHostsCommandOutput>;
    private serialize;
    private deserialize;
}
