import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyNetworkInterfaceAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyNetworkInterfaceAttributeCommandInput = ModifyNetworkInterfaceAttributeRequest;
export declare type ModifyNetworkInterfaceAttributeCommandOutput = __MetadataBearer;
export declare class ModifyNetworkInterfaceAttributeCommand extends $Command<ModifyNetworkInterfaceAttributeCommandInput, ModifyNetworkInterfaceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyNetworkInterfaceAttributeCommandInput;
    constructor(input: ModifyNetworkInterfaceAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyNetworkInterfaceAttributeCommandInput, ModifyNetworkInterfaceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
