import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkAclEntryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNetworkAclEntryCommandInput = CreateNetworkAclEntryRequest;
export declare type CreateNetworkAclEntryCommandOutput = __MetadataBearer;
export declare class CreateNetworkAclEntryCommand extends $Command<CreateNetworkAclEntryCommandInput, CreateNetworkAclEntryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkAclEntryCommandInput;
    constructor(input: CreateNetworkAclEntryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkAclEntryCommandInput, CreateNetworkAclEntryCommandOutput>;
    private serialize;
    private deserialize;
}
