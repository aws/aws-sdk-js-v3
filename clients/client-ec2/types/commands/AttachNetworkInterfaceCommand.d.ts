import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachNetworkInterfaceRequest, AttachNetworkInterfaceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachNetworkInterfaceCommandInput = AttachNetworkInterfaceRequest;
export declare type AttachNetworkInterfaceCommandOutput = AttachNetworkInterfaceResult & __MetadataBearer;
export declare class AttachNetworkInterfaceCommand extends $Command<AttachNetworkInterfaceCommandInput, AttachNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachNetworkInterfaceCommandInput;
    constructor(input: AttachNetworkInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachNetworkInterfaceCommandInput, AttachNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
