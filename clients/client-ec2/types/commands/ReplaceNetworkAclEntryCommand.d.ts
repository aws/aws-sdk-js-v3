import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceNetworkAclEntryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReplaceNetworkAclEntryCommandInput = ReplaceNetworkAclEntryRequest;
export declare type ReplaceNetworkAclEntryCommandOutput = __MetadataBearer;
export declare class ReplaceNetworkAclEntryCommand extends $Command<ReplaceNetworkAclEntryCommandInput, ReplaceNetworkAclEntryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceNetworkAclEntryCommandInput;
    constructor(input: ReplaceNetworkAclEntryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceNetworkAclEntryCommandInput, ReplaceNetworkAclEntryCommandOutput>;
    private serialize;
    private deserialize;
}
