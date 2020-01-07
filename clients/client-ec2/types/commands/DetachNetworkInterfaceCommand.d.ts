import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachNetworkInterfaceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachNetworkInterfaceCommandInput = DetachNetworkInterfaceRequest;
export declare type DetachNetworkInterfaceCommandOutput = __MetadataBearer;
export declare class DetachNetworkInterfaceCommand extends $Command<DetachNetworkInterfaceCommandInput, DetachNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachNetworkInterfaceCommandInput;
    constructor(input: DetachNetworkInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachNetworkInterfaceCommandInput, DetachNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
