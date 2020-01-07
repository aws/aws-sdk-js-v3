import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyHostsRequest, ModifyHostsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyHostsCommandInput = ModifyHostsRequest;
export declare type ModifyHostsCommandOutput = ModifyHostsResult & __MetadataBearer;
export declare class ModifyHostsCommand extends $Command<ModifyHostsCommandInput, ModifyHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyHostsCommandInput;
    constructor(input: ModifyHostsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyHostsCommandInput, ModifyHostsCommandOutput>;
    private serialize;
    private deserialize;
}
