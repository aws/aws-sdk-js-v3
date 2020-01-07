import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AllocateHostsRequest, AllocateHostsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocateHostsCommandInput = AllocateHostsRequest;
export declare type AllocateHostsCommandOutput = AllocateHostsResult & __MetadataBearer;
export declare class AllocateHostsCommand extends $Command<AllocateHostsCommandInput, AllocateHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AllocateHostsCommandInput;
    constructor(input: AllocateHostsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateHostsCommandInput, AllocateHostsCommandOutput>;
    private serialize;
    private deserialize;
}
