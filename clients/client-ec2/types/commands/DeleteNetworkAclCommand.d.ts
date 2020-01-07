import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkAclRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNetworkAclCommandInput = DeleteNetworkAclRequest;
export declare type DeleteNetworkAclCommandOutput = __MetadataBearer;
export declare class DeleteNetworkAclCommand extends $Command<DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkAclCommandInput;
    constructor(input: DeleteNetworkAclCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput>;
    private serialize;
    private deserialize;
}
