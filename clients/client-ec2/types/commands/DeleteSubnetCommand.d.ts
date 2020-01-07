import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSubnetRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSubnetCommandInput = DeleteSubnetRequest;
export declare type DeleteSubnetCommandOutput = __MetadataBearer;
export declare class DeleteSubnetCommand extends $Command<DeleteSubnetCommandInput, DeleteSubnetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteSubnetCommandInput;
    constructor(input: DeleteSubnetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubnetCommandInput, DeleteSubnetCommandOutput>;
    private serialize;
    private deserialize;
}
