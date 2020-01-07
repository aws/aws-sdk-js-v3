import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetNetworkInterfaceAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetNetworkInterfaceAttributeCommandInput = ResetNetworkInterfaceAttributeRequest;
export declare type ResetNetworkInterfaceAttributeCommandOutput = __MetadataBearer;
export declare class ResetNetworkInterfaceAttributeCommand extends $Command<ResetNetworkInterfaceAttributeCommandInput, ResetNetworkInterfaceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetNetworkInterfaceAttributeCommandInput;
    constructor(input: ResetNetworkInterfaceAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetNetworkInterfaceAttributeCommandInput, ResetNetworkInterfaceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
