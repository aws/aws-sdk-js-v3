import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkAclRequest, CreateNetworkAclResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNetworkAclCommandInput = CreateNetworkAclRequest;
export declare type CreateNetworkAclCommandOutput = CreateNetworkAclResult & __MetadataBearer;
export declare class CreateNetworkAclCommand extends $Command<CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkAclCommandInput;
    constructor(input: CreateNetworkAclCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput>;
    private serialize;
    private deserialize;
}
