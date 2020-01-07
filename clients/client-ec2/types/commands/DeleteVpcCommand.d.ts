import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcCommandInput = DeleteVpcRequest;
export declare type DeleteVpcCommandOutput = __MetadataBearer;
export declare class DeleteVpcCommand extends $Command<DeleteVpcCommandInput, DeleteVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcCommandInput;
    constructor(input: DeleteVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcCommandInput, DeleteVpcCommandOutput>;
    private serialize;
    private deserialize;
}
