import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcAttributeCommandInput = ModifyVpcAttributeRequest;
export declare type ModifyVpcAttributeCommandOutput = __MetadataBearer;
export declare class ModifyVpcAttributeCommand extends $Command<ModifyVpcAttributeCommandInput, ModifyVpcAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcAttributeCommandInput;
    constructor(input: ModifyVpcAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcAttributeCommandInput, ModifyVpcAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
