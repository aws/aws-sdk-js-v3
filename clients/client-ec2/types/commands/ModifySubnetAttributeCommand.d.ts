import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySubnetAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifySubnetAttributeCommandInput = ModifySubnetAttributeRequest;
export declare type ModifySubnetAttributeCommandOutput = __MetadataBearer;
export declare class ModifySubnetAttributeCommand extends $Command<ModifySubnetAttributeCommandInput, ModifySubnetAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifySubnetAttributeCommandInput;
    constructor(input: ModifySubnetAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySubnetAttributeCommandInput, ModifySubnetAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
