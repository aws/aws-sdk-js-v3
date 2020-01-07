import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInterfaceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNetworkInterfaceCommandInput = DeleteNetworkInterfaceRequest;
export declare type DeleteNetworkInterfaceCommandOutput = __MetadataBearer;
export declare class DeleteNetworkInterfaceCommand extends $Command<DeleteNetworkInterfaceCommandInput, DeleteNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkInterfaceCommandInput;
    constructor(input: DeleteNetworkInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkInterfaceCommandInput, DeleteNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
