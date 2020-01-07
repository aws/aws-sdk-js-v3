import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkAclEntryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNetworkAclEntryCommandInput = DeleteNetworkAclEntryRequest;
export declare type DeleteNetworkAclEntryCommandOutput = __MetadataBearer;
export declare class DeleteNetworkAclEntryCommand extends $Command<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkAclEntryCommandInput;
    constructor(input: DeleteNetworkAclEntryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput>;
    private serialize;
    private deserialize;
}
