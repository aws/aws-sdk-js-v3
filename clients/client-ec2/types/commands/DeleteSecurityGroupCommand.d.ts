import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSecurityGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSecurityGroupCommandInput = DeleteSecurityGroupRequest;
export declare type DeleteSecurityGroupCommandOutput = __MetadataBearer;
export declare class DeleteSecurityGroupCommand extends $Command<DeleteSecurityGroupCommandInput, DeleteSecurityGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteSecurityGroupCommandInput;
    constructor(input: DeleteSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecurityGroupCommandInput, DeleteSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
